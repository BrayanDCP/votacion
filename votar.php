<?php
/**
 * VOTO PERÚ 2026 - Sistema de Votación en Vivo
 * Backend PHP - votar.php
 * 
 * © 2026 Voto Perú Live. Todos los derechos reservados.
 * Prohibida su reproducción, copia o distribución sin autorización expresa.
 * Sistema desarrollado como plataforma innovadora de participación ciudadana.
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Manejar solicitudes OPTIONS (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Archivo donde se almacenan los votos
define('VOTOS_FILE', __DIR__ . '/votos.json');

/**
 * Leer datos del archivo JSON
 */
function leerDatos() {
    if (!file_exists(VOTOS_FILE)) {
        $datos = ['votos' => [], 'dnisRegistrados' => []];
        guardarDatos($datos);
        return $datos;
    }
    $contenido = file_get_contents(VOTOS_FILE);
    return json_decode($contenido, true) ?? ['votos' => [], 'dnisRegistrados' => []];
}

/**
 * Guardar datos en el archivo JSON
 */
function guardarDatos($datos) {
    file_put_contents(VOTOS_FILE, json_encode($datos, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), LOCK_EX);
}

/**
 * Validar formato de DNI peruano (8 dígitos)
 */
function validarDNI($dni) {
    return preg_match('/^\d{8}$/', $dni);
}

/**
 * Obtener resultados actuales
 */
function obtenerResultados() {
    $datos = leerDatos();
    $totalVotos = array_sum($datos['votos']);
    $totalDNIs = count($datos['dnisRegistrados']);
    
    arsort($datos['votos']); // Ordenar de mayor a menor
    
    return [
        'success' => true,
        'votos' => $datos['votos'],
        'totalVotos' => $totalVotos,
        'totalParticipantes' => $totalDNIs
    ];
}

/**
 * Registrar un voto
 */
function registrarVoto($dni, $partido) {
    if (!validarDNI($dni)) {
        return ['success' => false, 'mensaje' => 'DNI inválido. Debe tener exactamente 8 dígitos.'];
    }
    
    if (empty($partido)) {
        return ['success' => false, 'mensaje' => 'Debes seleccionar un partido político.'];
    }
    
    $datos = leerDatos();
    
    // Verificar si el DNI ya votó
    if (in_array($dni, $datos['dnisRegistrados'])) {
        return ['success' => false, 'mensaje' => 'Este DNI ya emitió su voto. Solo se permite un voto por persona.'];
    }
    
    // Registrar voto
    $datos['dnisRegistrados'][] = $dni;
    
    if (!isset($datos['votos'][$partido])) {
        $datos['votos'][$partido] = 0;
    }
    $datos['votos'][$partido]++;
    
    guardarDatos($datos);
    
    return [
        'success' => true,
        'mensaje' => '¡Voto registrado exitosamente! Gracias por participar.',
        'partido' => $partido,
        'totalVotos' => array_sum($datos['votos'])
    ];
}

// ==========================================
// ROUTER DE ACCIONES
// ==========================================

$action = $_GET['action'] ?? $_POST['action'] ?? 'resultados';

switch ($action) {
    case 'votar':
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            echo json_encode(['success' => false, 'mensaje' => 'Método no permitido.']);
            break;
        }
        $input = json_decode(file_get_contents('php://input'), true);
        $dni = trim($input['dni'] ?? $_POST['dni'] ?? '');
        $partido = trim($input['partido'] ?? $_POST['partido'] ?? '');
        echo json_encode(registrarVoto($dni, $partido));
        break;
        
    case 'resultados':
    default:
        echo json_encode(obtenerResultados());
        break;
}
?>
