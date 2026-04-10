/**
 * VOTO PERÚ 2026 — Sistema de Votación en Vivo
 * index.js — Lógica del Frontend
 *
 * © 2026 Voto Perú Live. Todos los derechos reservados.
 * Innovación en participación ciudadana digital.
 */

'use strict';

// ============================================================
// DATOS DE PARTIDOS POLÍTICOS — ELECCIONES PERÚ 12/04/2026
// Fuente: ONPE / JNE — Información pública oficial
// ============================================================
const PARTIDOS = [
    { id: 'fuerza_popular',      nombre: 'Fuerza Popular',             siglas: 'FP',   simbolo: '⚡',  candidato: 'Keiko Fujimori' },
    { id: 'alianza_progreso',    nombre: 'Alianza para el Progreso',   siglas: 'APP',  simbolo: '🚀',  candidato: 'Carlos Álvarez' },
    { id: 'renovacion_popular',  nombre: 'Renovación Popular',         siglas: 'RP',   simbolo: '🔄',  candidato: 'Rafael López Aliaga' },
    { id: 'accion_popular',      nombre: 'Acción Popular',             siglas: 'AP',   simbolo: '🌟',  candidato: 'Jorge Nieto Montesinos' },
    { id: 'partido_morado',      nombre: 'Partido Morado',             siglas: 'PM',   simbolo: '🟣',  candidato: 'Ricardo Belmont' },
    { id: 'somos_peru',          nombre: 'Democrático Somos Perú',     siglas: 'DSP',  simbolo: '🤝',  candidato: 'Kandidato Somos Perú' },
    { id: 'peru_libre',          nombre: 'Perú Libre',                 siglas: 'PL',   simbolo: '✊',  candidato: 'Candidato Perú Libre' },
    { id: 'juntos_peru',         nombre: 'Juntos por el Perú',         siglas: 'JP',   simbolo: '🌿',  candidato: 'Candidato JP' },
    { id: 'avanza_pais',         nombre: 'Avanza País',                siglas: 'AVP',  simbolo: '🏃',  candidato: 'Óscar Ugarte' },
    { id: 'aprista',             nombre: 'Partido Aprista Peruano',    siglas: 'APRA', simbolo: '⭐',  candidato: 'Candidato APRA' },
    { id: 'fuerza_libertad',     nombre: 'Fuerza y Libertad',          siglas: 'FYL',  simbolo: '🦅',  candidato: 'Candidato FyL' },
    { id: 'fe_peru',             nombre: 'Fe en el Perú',              siglas: 'FEP',  simbolo: '✝️',  candidato: 'Candidato Fe en el Perú' },
    { id: 'obras',               nombre: 'Partido Cívico Obras',       siglas: 'OBRAS',simbolo: '🏗️',  candidato: 'Candidato Obras' },
    { id: 'buen_gobierno',       nombre: 'Partido del Buen Gobierno',  siglas: 'PBG',  simbolo: '⚖️',  candidato: 'Candidato PBG' },
    { id: 'democrata_verde',     nombre: 'Partido Demócrata Verde',    siglas: 'PDV',  simbolo: '🌱',  candidato: 'Candidato PDV' },
    { id: 'esperanza_2021',      nombre: 'Frente de la Esperanza',     siglas: 'FE',   simbolo: '🌄',  candidato: 'Candidato FE2021' },
    { id: 'alianza_venceremos',  nombre: 'Alianza Venceremos',         siglas: 'AV',   simbolo: '👊',  candidato: 'Ronald Atencio' },
    { id: 'patriotico',          nombre: 'Partido Patriótico del Perú',siglas: 'PPP',  simbolo: '🇵🇪',  candidato: 'Herbert Caller' },
    { id: 'ahora_nacion',        nombre: 'Ahora Nación',               siglas: 'AN',   simbolo: '🌅',  candidato: 'Candidato AN' },
    { id: 'libertad_popular',    nombre: 'Libertad Popular',           siglas: 'LP',   simbolo: '🗽',  candidato: 'Candidato LP' },
    { id: 'peru_primero',        nombre: 'Perú Primero',               siglas: 'PP',   simbolo: '🏆',  candidato: 'Candidato PP' },
    { id: 'cooperacion_popular', nombre: 'Cooperación Popular',        siglas: 'CP',   simbolo: '🤜',  candidato: 'Candidato CP' },
    { id: 'democratico_federal', nombre: 'Democrático Federal',        siglas: 'PDF',  simbolo: '🏛️',  candidato: 'Candidato PDF' },
    { id: 'pais_todos',          nombre: 'País para Todos',            siglas: 'PPT',  simbolo: '🌎',  candidato: 'Candidato PPT' },
    { id: 'prin',                nombre: 'Partido PRIN',               siglas: 'PRIN', simbolo: '⚙️',  candidato: 'Candidato PRIN' },
    { id: 'sicreo',              nombre: 'Partido SÍCREO',             siglas: 'SÍCREO',simbolo:'🔑',  candidato: 'Candidato SÍCREO' },
    { id: 'democratico_unido',   nombre: 'Demócrata Unido Perú',       siglas: 'DUP',  simbolo: '🤲',  candidato: 'Candidato DUP' },
    { id: 'integridad',          nombre: 'Integridad Democrática',     siglas: 'IDe',  simbolo: '🛡️',  candidato: 'Candidato IDe' },
    { id: 'ciudadanos',          nombre: 'Ciudadanos por el Perú',     siglas: 'CPP',  simbolo: '🏠',  candidato: 'Candidato CPP' },
    { id: 'frepap',              nombre: 'Frente Popular Agrícola',    siglas: 'FREPAP',simbolo:'🌾',  candidato: 'Candidato FREPAP' },
    { id: 'peru_accion',         nombre: 'Perú Acción',                siglas: 'PA',   simbolo: '💪',  candidato: 'Candidato Perú Acción' },
    { id: 'dem_unido_peru',      nombre: 'Unión Democrática',          siglas: 'UDP',  simbolo: '🤝',  candidato: 'Candidato UDP' },
    { id: 'nuevo_peru',          nombre: 'Nuevo Perú',                 siglas: 'NP',   simbolo: '🌺',  candidato: 'Candidato NP' },
    { id: 'pe_libre',            nombre: 'Peruanos Libres',            siglas: 'PELLIB',simbolo:'🦁',  candidato: 'Candidato Peruanos Libres' },
    { id: 'frente_agr',          nombre: 'Frente Agrícola FIA',        siglas: 'FIA',  simbolo: '🌽',  candidato: 'Candidato FIA' },
];

// ============================================================
// ESTADO DE LA APLICACIÓN
// ============================================================
const estado = {
    dniIngresado: '',
    partidoSeleccionado: null,
    votando: false,
    votado: false,
    intervalActualizacion: null,
    ultimaActualizacion: null,
};

// ============================================================
// REFERENCIAS A ELEMENTOS DEL DOM
// ============================================================
const $ = id => document.getElementById(id);
const domRefs = {
    inputDNI: () => $('input-dni'),
    partidos: () => $('partidos-container'),
    btnVotar: () => $('btn-votar'),
    mensaje: () => $('mensaje-respuesta'),
    resultados: () => $('resultados-lista'),
    totalVotos: () => $('total-votos'),
    totalParticipantes: () => $('total-participantes'),
    ultimaActualizacion: () => $('ultima-actualizacion'),
};

// ============================================================
// INICIALIZACIÓN
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    renderizarPartidos();
    iniciarActualizacionAutomatica();
    configurarInputDNI();
    cargarResultados();
});

// ============================================================
// RENDERIZAR TARJETAS DE PARTIDOS
// ============================================================
function renderizarPartidos() {
    const contenedor = domRefs.partidos();
    if (!contenedor) return;

    contenedor.innerHTML = PARTIDOS.map(partido => `
        <div class="partido-card" 
             id="partido-${partido.id}" 
             data-id="${partido.id}"
             onclick="seleccionarPartido('${partido.id}')"
             title="${partido.nombre} — ${partido.candidato}">
            <div class="partido-simbolo">${partido.simbolo}</div>
            <div class="partido-nombre">${partido.nombre}</div>
            <div class="partido-siglas">${partido.siglas}</div>
        </div>
    `).join('');
}

// ============================================================
// SELECCIONAR PARTIDO
// ============================================================
function seleccionarPartido(id) {
    if (estado.votado) return;

    // Desmarcar anterior
    if (estado.partidoSeleccionado) {
        const prevCard = document.getElementById(`partido-${estado.partidoSeleccionado}`);
        if (prevCard) prevCard.classList.remove('selected');
    }

    // Marcar nuevo
    estado.partidoSeleccionado = id;
    const card = document.getElementById(`partido-${id}`);
    if (card) {
        card.classList.add('selected');
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    actualizarBotonVotar();
}

// ============================================================
// CONFIGURAR INPUT DNI
// ============================================================
function configurarInputDNI() {
    const input = domRefs.inputDNI();
    if (!input) return;

    input.addEventListener('input', e => {
        // Solo números, máximo 8 dígitos
        let valor = e.target.value.replace(/\D/g, '').slice(0, 8);
        e.target.value = valor;
        estado.dniIngresado = valor;
        
        // Feedback visual
        input.classList.remove('error', 'success');
        if (valor.length === 8) {
            input.classList.add('success');
        } else if (valor.length > 0) {
            // neutral while typing
        }

        actualizarBotonVotar();
    });

    input.addEventListener('keydown', e => {
        if (e.key === 'Enter' && estado.dniIngresado.length === 8 && estado.partidoSeleccionado) {
            enviarVoto();
        }
    });
}

// ============================================================
// ACTUALIZAR ESTADO DEL BOTÓN
// ============================================================
function actualizarBotonVotar() {
    const btn = domRefs.btnVotar();
    if (!btn) return;
    const listo = estado.dniIngresado.length === 8 && estado.partidoSeleccionado && !estado.votando && !estado.votado;
    btn.disabled = !listo;
}

// ============================================================
// ENVIAR VOTO
// ============================================================
async function enviarVoto() {
    if (estado.votando || estado.votado) return;

    const dni = estado.dniIngresado.trim();
    const partido = estado.partidoSeleccionado;

    if (dni.length !== 8) {
        mostrarMensaje('Ingresa tu DNI completo (8 dígitos).', 'error');
        return;
    }

    if (!partido) {
        mostrarMensaje('Debes seleccionar un partido político antes de votar.', 'error');
        return;
    }

    estado.votando = true;
    const btn = domRefs.btnVotar();
    btn.disabled = true;
    btn.innerHTML = '<div class="spinner"></div> Registrando voto...';

    try {
        const response = await fetch('votar.php?action=votar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ dni, partido })
        });

        const data = await response.json();

        if (data.success) {
            estado.votado = true;
            mostrarMensaje(`✅ ${data.mensaje}`, 'success');
            bloquearFormulario();
            await cargarResultados();
        } else {
            mostrarMensaje(`⚠️ ${data.mensaje}`, 'error');
            btn.disabled = false;
            btn.innerHTML = '🗳️ Emitir mi Voto';
        }
    } catch (err) {
        mostrarMensaje('❌ Error de conexión. Verifica tu internet e intenta de nuevo.', 'error');
        btn.disabled = false;
        btn.innerHTML = '🗳️ Emitir mi Voto';
    } finally {
        estado.votando = false;
    }
}

// ============================================================
// BLOQUEAR FORMULARIO DESPUÉS DE VOTAR
// ============================================================
function bloquearFormulario() {
    const input = domRefs.inputDNI();
    const btn = domRefs.btnVotar();

    if (input) {
        input.disabled = true;
        input.classList.add('success');
    }

    if (btn) {
        btn.disabled = true;
        btn.innerHTML = '✅ Voto Emitido — Gracias por participar';
        btn.style.background = 'linear-gradient(135deg, #065f46, #059669)';
    }

    // Desmarcar partidos visualmente (ya no se puede cambiar)
    document.querySelectorAll('.partido-card').forEach(c => {
        if (!c.classList.contains('selected')) c.style.opacity = '0.4';
        c.style.cursor = 'default';
    });
}

// ============================================================
// MOSTRAR MENSAJE DE RESPUESTA
// ============================================================
function mostrarMensaje(texto, tipo) {
    const div = domRefs.mensaje();
    if (!div) return;

    div.innerHTML = `<div class="alerta ${tipo}">${texto}</div>`;
    div.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Auto-ocultar errores después de 6 segundos
    if (tipo === 'error') {
        setTimeout(() => { div.innerHTML = ''; }, 6000);
    }
}

// ============================================================
// CARGAR Y RENDERIZAR RESULTADOS EN VIVO
// ============================================================
async function cargarResultados() {
    try {
        const response = await fetch('votar.php?action=resultados&t=' + Date.now());
        const data = await response.json();

        if (data.success) {
            renderizarResultados(data);
        }
    } catch (err) {
        console.error('Error al cargar resultados:', err);
    }
}

function renderizarResultados(data) {
    const lista = domRefs.resultados();
    const totalEl = domRefs.totalVotos();
    const participEl = domRefs.totalParticipantes();
    const actualizEl = domRefs.ultimaActualizacion();

    if (totalEl) {
        totalEl.textContent = (data.totalVotos || 0).toLocaleString('es-PE');
        animarNumero(totalEl);
    }
    if (participEl) {
        participEl.textContent = (data.totalParticipantes || 0).toLocaleString('es-PE');
    }
    if (actualizEl) {
        const ahora = new Date();
        actualizEl.textContent = ahora.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }

    if (!lista) return;

    const votos = data.votos || {};
    const totalVotos = data.totalVotos || 0;
    const partidos_con_votos = Object.entries(votos)
        .sort(([, a], [, b]) => b - a)
        .filter(([, v]) => v > 0);

    if (partidos_con_votos.length === 0) {
        lista.innerHTML = '<div class="sin-votos">🗳️ Aún no hay votos registrados.<br>¡Sé el primero en participar!</div>';
        return;
    }

    lista.innerHTML = partidos_con_votos.map(([idPartido, numVotos], index) => {
        const info = PARTIDOS.find(p => p.id === idPartido) || { nombre: idPartido, simbolo: '🗳️', siglas: '' };
        const porcentaje = totalVotos > 0 ? ((numVotos / totalVotos) * 100).toFixed(1) : 0;
        const posClase = index === 0 ? 'pos-1' : index === 1 ? 'pos-2' : index === 2 ? 'pos-3' : 'pos-n';

        return `
            <div class="resultado-item">
                <div class="resultado-top">
                    <div class="resultado-posicion ${posClase}">${index + 1}</div>
                    <div class="resultado-simbolo">${info.simbolo}</div>
                    <div class="resultado-info">
                        <div class="resultado-nombre">${info.nombre}</div>
                    </div>
                    <div class="resultado-votos-num">${numVotos.toLocaleString('es-PE')}</div>
                </div>
                <div class="resultado-barra-wrap">
                    <div class="resultado-barra" style="width: ${porcentaje}%"></div>
                </div>
                <div class="resultado-porcentaje">${porcentaje}% del total</div>
            </div>
        `;
    }).join('');
}

// ============================================================
// ANIMACIÓN DE NÚMERO (flash breve)
// ============================================================
function animarNumero(el) {
    el.style.transform = 'scale(1.12)';
    el.style.color = '#C8102E';
    setTimeout(() => {
        el.style.transform = 'scale(1)';
        el.style.transition = 'transform 0.3s ease, color 0.3s ease';
    }, 150);
}

// ============================================================
// ACTUALIZACIÓN AUTOMÁTICA CADA 4 SEGUNDOS
// ============================================================
function iniciarActualizacionAutomatica() {
    if (estado.intervalActualizacion) clearInterval(estado.intervalActualizacion);
    estado.intervalActualizacion = setInterval(cargarResultados, 4000);
}

// ============================================================
// EXPONER FUNCIONES GLOBALES PARA HTML
// ============================================================
window.seleccionarPartido = seleccionarPartido;
window.enviarVoto = enviarVoto;
