<?php
/**
 * VOTO PERÚ 2026 — API Backend
 * © 2026 Brayan Delfor Choque Peregrino — Todos los derechos reservados.
 */

// ── Cabeceras ─────────────────────────────────────────────────
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200); exit;
}

// ── Archivo DB ────────────────────────────────────────────────
define('DB', __DIR__ . '/votos.json');
define('LOCK', __DIR__ . '/votos.lock');

// ── Leer con retry ────────────────────────────────────────────
function leer() {
    for ($i = 0; $i < 5; $i++) {
        if (file_exists(DB)) {
            $raw = @file_get_contents(DB);
            if ($raw !== false) {
                $d = @json_decode($raw, true);
                if (is_array($d)) return $d;
            }
        }
        usleep(50000);
    }
    return ['votos' => [], 'dnis' => []];
}

// ── Guardar con bloqueo ───────────────────────────────────────
function guardar($d) {
    $lk = fopen(LOCK, 'c');
    if ($lk && flock($lk, LOCK_EX)) {
        file_put_contents(DB, json_encode($d, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), LOCK_EX);
        flock($lk, LOCK_UN);
        fclose($lk);
        return true;
    }
    if ($lk) fclose($lk);
    // fallback sin lock
    return file_put_contents(DB, json_encode($d, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), LOCK_EX) !== false;
}

// ── Responder ─────────────────────────────────────────────────
function ok($extra = []) {
    echo json_encode(array_merge(['ok' => true], $extra), JSON_UNESCAPED_UNICODE);
    exit;
}
function fail($msg) {
    echo json_encode(['ok' => false, 'msg' => $msg], JSON_UNESCAPED_UNICODE);
    exit;
}

// ── Validar DNI ───────────────────────────────────────────────
function validDNI($v) {
    return preg_match('/^\d{8}$/', trim($v ?? ''));
}

// ══════════════════════════════════════════════════════════════
// ACCIONES
// ══════════════════════════════════════════════════════════════
$action = $_GET['a'] ?? 'res';

// ── PING (detección rápida) ───────────────────────────────────
if ($action === 'ping') {
    ok(['pong' => 1]);
}

// ── RESULTADOS ────────────────────────────────────────────────
if ($action === 'res') {
    $d = leer();
    $votos = (array)($d['votos'] ?? []);
    $dnis  = (array)($d['dnis']  ?? []);
    arsort($votos);
    ok([
        'votos'  => $votos,
        'total'  => array_sum($votos),
        'partic' => count($dnis),
    ]);
}

// ── VERIFICAR DNI ─────────────────────────────────────────────
if ($action === 'check') {
    $dni = trim($_GET['dni'] ?? '');
    if (!validDNI($dni)) fail('dni_invalido');
    $d = leer();
    $usado = in_array($dni, (array)($d['dnis'] ?? []), true);
    ok(['usado' => $usado]);
}

// ── VOTAR ─────────────────────────────────────────────────────
if ($action === 'votar' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $raw  = file_get_contents('php://input');
    $body = json_decode($raw, true) ?? [];

    $dni     = trim($body['dni']     ?? $_POST['dni']     ?? '');
    $partido = trim($body['partido'] ?? $_POST['partido'] ?? '');

    if (!validDNI($dni))  fail('DNI inválido. Ingresa 8 dígitos numéricos.');
    if (empty($partido))  fail('Debes seleccionar un partido.');

    // Lock exclusivo para escritura atómica
    $lk = fopen(LOCK, 'c');
    if (!$lk) fail('Error interno. Intenta de nuevo.');
    
    if (!flock($lk, LOCK_EX)) {
        fclose($lk);
        fail('Sistema ocupado. Intenta de nuevo.');
    }

    // Leer datos frescos dentro del lock
    $d = leer();
    $dnis  = (array)($d['dnis']  ?? []);
    $votos = (array)($d['votos'] ?? []);

    // Verificar duplicado
    if (in_array($dni, $dnis, true)) {
        flock($lk, LOCK_UN);
        fclose($lk);
        fail('Este DNI ya registró su voto. Solo se permite un voto por persona.');
    }

    // Registrar
    $dnis[]          = $dni;
    $votos[$partido] = ($votos[$partido] ?? 0) + 1;
    $d['dnis']  = $dnis;
    $d['votos'] = $votos;

    file_put_contents(DB, json_encode($d, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), LOCK_EX);
    flock($lk, LOCK_UN);
    fclose($lk);

    arsort($votos);
    ok([
        'msg'    => '¡Voto registrado exitosamente!',
        'votos'  => $votos,
        'total'  => array_sum($votos),
        'partic' => count($dnis),
    ]);
}

fail('Acción no reconocida.');
