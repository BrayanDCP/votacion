-- ============================================================
-- VOTO PERÚ 2026 — Estructura de Base de Datos MySQL
-- © 2026 Voto Perú Live. Todos los derechos reservados.
-- 
-- INSTRUCCIONES:
-- Si en el futuro deseas migrar a MySQL/MariaDB:
-- 1. Crea una base de datos: CREATE DATABASE votacion2026;
-- 2. Ejecuta este archivo: mysql -u usuario -p votacion2026 < votos.sql
-- 3. Actualiza votar.php reemplazando el manejo de JSON
--    con consultas PDO a esta base de datos.
-- ============================================================

-- Crear base de datos (si no existe)
CREATE DATABASE IF NOT EXISTS votacion2026
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE votacion2026;

-- ============================================================
-- TABLA: votantes
-- Registra cada DNI que ha emitido un voto (para control unicidad)
-- ============================================================
CREATE TABLE IF NOT EXISTS votantes (
    id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    dni         CHAR(8) NOT NULL UNIQUE,
    partido_id  VARCHAR(60) NOT NULL,
    fecha_voto  DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_dni (dni),
    INDEX idx_partido (partido_id),
    INDEX idx_fecha (fecha_voto)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ============================================================
-- TABLA: partidos
-- Catálogo de partidos políticos habilitados
-- ============================================================
CREATE TABLE IF NOT EXISTS partidos (
    id          VARCHAR(60) PRIMARY KEY,
    nombre      VARCHAR(120) NOT NULL,
    siglas      VARCHAR(20)  NOT NULL,
    simbolo     VARCHAR(10)  NOT NULL,
    candidato   VARCHAR(120) NOT NULL,
    activo      TINYINT(1)   DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ============================================================
-- DATOS INICIALES: Partidos Elecciones Perú 2026
-- Fuente: ONPE / JNE — Información pública oficial
-- ============================================================
INSERT IGNORE INTO partidos (id, nombre, siglas, simbolo, candidato) VALUES
('fuerza_popular',      'Fuerza Popular',               'FP',     '⚡',  'Keiko Fujimori'),
('alianza_progreso',    'Alianza para el Progreso',     'APP',    '🚀',  'Carlos Álvarez'),
('renovacion_popular',  'Renovación Popular',           'RP',     '🔄',  'Rafael López Aliaga'),
('accion_popular',      'Acción Popular',               'AP',     '🌟',  'Jorge Nieto Montesinos'),
('partido_morado',      'Partido Morado',               'PM',     '🟣',  'Ricardo Belmont'),
('somos_peru',          'Democrático Somos Perú',       'DSP',    '🤝',  'Candidato Somos Perú'),
('peru_libre',          'Perú Libre',                   'PL',     '✊',  'Candidato Perú Libre'),
('juntos_peru',         'Juntos por el Perú',           'JP',     '🌿',  'Candidato JP'),
('avanza_pais',         'Avanza País',                  'AVP',    '🏃',  'Óscar Ugarte'),
('aprista',             'Partido Aprista Peruano',      'APRA',   '⭐',  'Candidato APRA'),
('fuerza_libertad',     'Fuerza y Libertad',            'FYL',    '🦅',  'Candidato FyL'),
('fe_peru',             'Fe en el Perú',                'FEP',    '✝️',  'Candidato Fe en el Perú'),
('obras',               'Partido Cívico Obras',         'OBRAS',  '🏗️',  'Candidato Obras'),
('buen_gobierno',       'Partido del Buen Gobierno',    'PBG',    '⚖️',  'Candidato PBG'),
('democrata_verde',     'Partido Demócrata Verde',      'PDV',    '🌱',  'Candidato PDV'),
('esperanza_2021',      'Frente de la Esperanza',       'FE',     '🌄',  'Candidato FE2021'),
('alianza_venceremos',  'Alianza Venceremos',           'AV',     '👊',  'Ronald Atencio'),
('patriotico',          'Partido Patriótico del Perú',  'PPP',    '🇵🇪',  'Herbert Caller'),
('ahora_nacion',        'Ahora Nación',                 'AN',     '🌅',  'Candidato AN'),
('libertad_popular',    'Libertad Popular',             'LP',     '🗽',  'Candidato LP'),
('peru_primero',        'Perú Primero',                 'PP',     '🏆',  'Candidato PP'),
('cooperacion_popular', 'Cooperación Popular',          'CP',     '🤜',  'Candidato CP'),
('democratico_federal', 'Democrático Federal',          'PDF',    '🏛️',  'Candidato PDF'),
('pais_todos',          'País para Todos',              'PPT',    '🌎',  'Candidato PPT'),
('prin',                'Partido PRIN',                 'PRIN',   '⚙️',  'Candidato PRIN'),
('sicreo',              'Partido SÍCREO',               'SÍCREO', '🔑',  'Candidato SÍCREO'),
('democratico_unido',   'Demócrata Unido Perú',         'DUP',    '🤲',  'Candidato DUP'),
('integridad',          'Integridad Democrática',       'IDe',    '🛡️',  'Candidato IDe'),
('ciudadanos',          'Ciudadanos por el Perú',       'CPP',    '🏠',  'Candidato CPP'),
('frepap',              'Frente Popular Agrícola',      'FREPAP', '🌾',  'Candidato FREPAP'),
('peru_accion',         'Perú Acción',                  'PA',     '💪',  'Candidato Perú Acción'),
('dem_unido_peru',      'Unión Democrática',            'UDP',    '🤝',  'Candidato UDP'),
('nuevo_peru',          'Nuevo Perú',                   'NP',     '🌺',  'Candidato NP'),
('pe_libre',            'Peruanos Libres',              'PELLIB', '🦁',  'Candidato Peruanos Libres'),
('frente_agr',          'Frente Agrícola FIA',          'FIA',    '🌽',  'Candidato FIA');

-- ============================================================
-- VISTA: resultados en tiempo real (ordena por votos DESC)
-- ============================================================
CREATE OR REPLACE VIEW vista_resultados AS
SELECT 
    p.id,
    p.nombre,
    p.siglas,
    p.simbolo,
    p.candidato,
    COUNT(v.id)             AS total_votos,
    ROUND(COUNT(v.id) * 100.0 / NULLIF((SELECT COUNT(*) FROM votantes), 0), 2) AS porcentaje
FROM partidos p
LEFT JOIN votantes v ON v.partido_id = p.id
WHERE p.activo = 1
GROUP BY p.id, p.nombre, p.siglas, p.simbolo, p.candidato
ORDER BY total_votos DESC;

-- ============================================================
-- PROCEDIMIENTO: registrar_voto
-- Uso: CALL registrar_voto('12345678', 'fuerza_popular', @resultado, @msg);
-- ============================================================
DELIMITER $$
CREATE PROCEDURE IF NOT EXISTS registrar_voto(
    IN p_dni       CHAR(8),
    IN p_partido   VARCHAR(60),
    OUT p_success  TINYINT,
    OUT p_mensaje  VARCHAR(200)
)
BEGIN
    DECLARE ya_voto INT DEFAULT 0;
    DECLARE partido_existe INT DEFAULT 0;

    -- Validar DNI
    IF p_dni NOT REGEXP '^[0-9]{8}$' THEN
        SET p_success = 0;
        SET p_mensaje = 'DNI inválido. Debe tener exactamente 8 dígitos.';
        LEAVE sp;
    END IF;

    -- Verificar que el partido existe
    SELECT COUNT(*) INTO partido_existe FROM partidos WHERE id = p_partido AND activo = 1;
    IF partido_existe = 0 THEN
        SET p_success = 0;
        SET p_mensaje = 'Partido político no encontrado.';
        LEAVE sp;
    END IF;

    -- Verificar si el DNI ya votó
    SELECT COUNT(*) INTO ya_voto FROM votantes WHERE dni = p_dni;
    IF ya_voto > 0 THEN
        SET p_success = 0;
        SET p_mensaje = 'Este DNI ya emitió su voto. Solo se permite un voto por persona.';
        LEAVE sp;
    END IF;

    -- Registrar voto
    INSERT INTO votantes (dni, partido_id) VALUES (p_dni, p_partido);
    SET p_success = 1;
    SET p_mensaje = '¡Voto registrado exitosamente! Gracias por participar.';

END$$
DELIMITER ;

-- ============================================================
-- CONSULTAS DE EJEMPLO PARA ADMINISTRACIÓN
-- ============================================================
-- Ver resultados en tiempo real:
--   SELECT * FROM vista_resultados;

-- Ver total de votos emitidos:
--   SELECT COUNT(*) AS total_participantes FROM votantes;

-- Ver últimos 10 votos (sin mostrar DNI completo por privacidad):
--   SELECT CONCAT(LEFT(dni,3),'*****') AS dni_oculto, partido_id, fecha_voto
--   FROM votantes ORDER BY fecha_voto DESC LIMIT 10;

-- Resetear votos (solo para pruebas):
--   TRUNCATE TABLE votantes;
