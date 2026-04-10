-- ============================================================
-- VOTO PERÚ 2026 — Base de Datos MySQL
-- © 2026 Voto Perú Live. Todos los derechos reservados.
-- ============================================================
CREATE DATABASE IF NOT EXISTS votacion2026 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE votacion2026;

CREATE TABLE IF NOT EXISTS votantes (
    id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    dni        CHAR(8) NOT NULL UNIQUE,
    partido_id VARCHAR(60) NOT NULL,
    fecha_voto DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_partido (partido_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS partidos (
    id        VARCHAR(60) PRIMARY KEY,
    nombre    VARCHAR(120) NOT NULL,
    siglas    VARCHAR(20) NOT NULL,
    candidato VARCHAR(120) NOT NULL,
    img_url   VARCHAR(255) DEFAULT '',
    activo    TINYINT(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT IGNORE INTO partidos VALUES
('fuerza_popular','Fuerza Popular','FP','Keiko Fujimori','',1),
('alianza_progreso','Alianza para el Progreso','APP','César Acuña','',1),
('renovacion_popular','Renovación Popular','RP','Rafael López Aliaga','',1),
('accion_popular','Acción Popular','AP','Yonhy Lescano','',1),
('partido_morado','Partido Morado','PM','Mesías Guevara','',1),
('somos_peru','Somos Perú','SP','George Forsyth','',1),
('peru_libre','Perú Libre','PL','Candidato PL','',1),
('avanza_pais','Avanza País','AVP','José Williams','',1),
('aprista','Partido Aprista Peruano','APRA','Enrique Valderrama','',1),
('fuerza_libertad','Fuerza y Libertad','FYL','Fiorella Molinelli','',1),
('unidad_nacional','Unidad Nacional','UN','Roberto Chiabra','',1);

CREATE OR REPLACE VIEW vista_resultados AS
SELECT p.id, p.nombre, p.siglas, p.candidato, p.img_url,
       COUNT(v.id) AS votos,
       ROUND(COUNT(v.id)*100.0/NULLIF((SELECT COUNT(*) FROM votantes),0),2) AS porcentaje
FROM partidos p
LEFT JOIN votantes v ON v.partido_id = p.id
WHERE p.activo = 1
GROUP BY p.id ORDER BY votos DESC;
