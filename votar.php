<?php
/**
 * VOTO PERÚ 2026 — Backend PHP
 * © 2026 Voto Perú Live. Todos los derechos reservados.
 */

// Cabeceras obligatorias CORS y JSON
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Cache-Control: no-store, no-cache, must-revalidate');

// Responder al preflight OPTIONS inmediatamente
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    echo json_encode(['ok' => true]);
    exit;
}

// Archivo de base de datos JSON
define('DB_FILE', __DIR__ . '/votos.json');

// ── Leer datos ─────────────────────────────────────────────
function leerDatos() {
    if (!file_exists(DB_FILE)) {
        return iniciarDB();
    }
    $raw = file_get_contents(DB_FILE);
    if ($raw === false) return iniciarDB();
    $data = json_decode($raw, true);
    return is_array($data) ? $data : iniciarDB();
}

function iniciarDB() {
    $data = ['votos' => (object)[], 'dnis' => []];
    guardarDatos($data);
    return $data;
}

// ── Guardar datos ───────────────────────────────────────────
function guardarDatos($data) {
    $json = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    return file_put_contents(DB_FILE, $json, LOCK_EX) !== false;
}

// ── Validar DNI ─────────────────────────────────────────────
function esDNIValido($dni) {
    return is_string($dni) && preg_match('/^\d{8}$/', trim($dni));
}

// ── Acción: VOTAR ───────────────────────────────────────────
function accionVotar() {
    // Leer body JSON o POST clásico
    $raw  = file_get_contents('php://input');
    $body = json_decode($raw, true);

    $dni     = trim($body['dni']     ?? $_POST['dni']     ?? '');
    $partido = trim($body['partido'] ?? $_POST['partido'] ?? '');

    if (!esDNIValido($dni)) {
        salir(false, 'DNI inválido. Debe tener exactamente 8 dígitos numéricos.');
    }
    if (empty($partido)) {
        salir(false, 'Debes seleccionar un partido político.');
    }

    $data = leerDatos();

    // ¿Ya votó?
    if (in_array($dni, (array)$data['dnis'], true)) {
        salir(false, 'Este DNI ya registró su voto. Solo se permite un voto por persona.');
    }

    // Registrar
    $data['dnis'][] = $dni;
    $votos = (array)$data['votos'];
    $votos[$partido] = ($votos[$partido] ?? 0) + 1;
    $data['votos'] = $votos;

    if (!guardarDatos($data)) {
        salir(false, 'Error al guardar el voto. Contacta al administrador.');
    }

    salir(true, '¡Voto registrado! Gracias por participar.', [
        'totalVotos' => array_sum($votos)
    ]);
}

// ── Acción: RESULTADOS ──────────────────────────────────────
function accionResultados() {
    $data  = leerDatos();
    $votos = (array)$data['votos'];
    $dnis  = (array)$data['dnis'];

    arsort($votos);

    echo json_encode([
        'success'           => true,
        'votos'             => $votos,
        'totalVotos'        => array_sum($votos),
        'totalParticipantes'=> count($dnis),
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// ── Respuesta rápida ────────────────────────────────────────
function salir($ok, $msg, $extra = []) {
    echo json_encode(array_merge(
        ['success' => $ok, 'mensaje' => $msg],
        $extra
    ), JSON_UNESCAPED_UNICODE);
    exit;
}

// ── Router ──────────────────────────────────────────────────
$action = $_GET['action'] ?? $_POST['action'] ?? 'resultados';

if ($action === 'votar' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    accionVotar();
} else {
    accionResultados();
}
