/**
 * VOTO PERÚ 2026 — index.js
 * Sistema de votación en vivo para TikTok Live
 * © 2026 Voto Perú Live. Todos los derechos reservados.
 *
 * DOBLE MODO:
 *  · Con servidor PHP  → guarda en votos.json (producción)
 *  · Sin servidor PHP  → guarda en memoria del navegador (demo/prueba)
 */

'use strict';

// ════════════════════════════════════════════════════════════════
// PARTIDOS POLÍTICOS — ELECCIONES PERÚ 12/04/2026
// Fuente: ONPE / JNE — Información pública oficial
// Imágenes: Wikipedia Commons / JNE (dominio público)
// ════════════════════════════════════════════════════════════════
const PARTIDOS = [
    {
        id: 'fuerza_popular',
        nombre: 'Fuerza Popular',
        siglas: 'FP',
        candidato: 'Keiko Fujimori',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Keiko_Fujimori_2021_%28cropped%29.jpg/200px-Keiko_Fujimori_2021_%28cropped%29.jpg',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Fuerza_Popular_logo.svg/200px-Fuerza_Popular_logo.svg.png',
        emoji: '⚡'
    },
    {
        id: 'alianza_progreso',
        nombre: 'Alianza para el Progreso',
        siglas: 'APP',
        candidato: 'César Acuña',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/C%C3%A9sar_Acu%C3%B1a_Peralta.jpg/200px-C%C3%A9sar_Acu%C3%B1a_Peralta.jpg',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Alianza_para_el_Progreso_logo.svg/200px-Alianza_para_el_Progreso_logo.svg.png',
        emoji: '🚀'
    },
    {
        id: 'renovacion_popular',
        nombre: 'Renovación Popular',
        siglas: 'RP',
        candidato: 'Rafael López Aliaga',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Rafael_Lopez_Aliaga_%28cropped%29.jpg/200px-Rafael_Lopez_Aliaga_%28cropped%29.jpg',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Renovaci%C3%B3n_Popular_logo.svg/200px-Renovaci%C3%B3n_Popular_logo.svg.png',
        emoji: '🔄'
    },
    {
        id: 'accion_popular',
        nombre: 'Acción Popular',
        siglas: 'AP',
        candidato: 'Yonhy Lescano',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Yonhy_Lescano_2020.jpg/200px-Yonhy_Lescano_2020.jpg',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Acci%C3%B3n_Popular_%28Per%C3%BA%29_Logo.svg/200px-Acci%C3%B3n_Popular_%28Per%C3%BA%29_Logo.svg.png',
        emoji: '🌟'
    },
    {
        id: 'partido_morado',
        nombre: 'Partido Morado',
        siglas: 'PM',
        candidato: 'Mesías Guevara',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Francisco_Sagasti_in_2020_%28cropped%29.jpg/200px-Francisco_Sagasti_in_2020_%28cropped%29.jpg',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Partido_Morado_logo.svg/200px-Partido_Morado_logo.svg.png',
        emoji: '🟣'
    },
    {
        id: 'somos_peru',
        nombre: 'Somos Perú',
        siglas: 'SP',
        candidato: 'George Forsyth',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/George_Forsyth_2019_%28cropped%29.jpg/200px-George_Forsyth_2019_%28cropped%29.jpg',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Somos_Per%C3%BA_logo.svg/200px-Somos_Per%C3%BA_logo.svg.png',
        emoji: '🤝'
    },
    {
        id: 'peru_libre',
        nombre: 'Perú Libre',
        siglas: 'PL',
        candidato: 'Candidato PL',
        img: '',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Per%C3%BA_Libre_logo.svg/200px-Per%C3%BA_Libre_logo.svg.png',
        emoji: '✊'
    },
    {
        id: 'juntos_peru',
        nombre: 'Juntos por el Perú',
        siglas: 'JP',
        candidato: 'Candidato JP',
        img: '',
        logo: '',
        emoji: '🌿'
    },
    {
        id: 'avanza_pais',
        nombre: 'Avanza País',
        siglas: 'AVP',
        candidato: 'José Williams',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Jos%C3%A9_Williams_Zapata_%28cropped%29.jpg/200px-Jos%C3%A9_Williams_Zapata_%28cropped%29.jpg',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Avanza_Pa%C3%ADs_logo.svg/200px-Avanza_Pa%C3%ADs_logo.svg.png',
        emoji: '🏃'
    },
    {
        id: 'aprista',
        nombre: 'Partido Aprista Peruano',
        siglas: 'APRA',
        candidato: 'Enrique Valderrama',
        img: '',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Logo_Partido_Aprista_Peruano.svg/200px-Logo_Partido_Aprista_Peruano.svg.png',
        emoji: '⭐'
    },
    {
        id: 'fuerza_libertad',
        nombre: 'Fuerza y Libertad',
        siglas: 'FYL',
        candidato: 'Fiorella Molinelli',
        img: '',
        logo: '',
        emoji: '🦅'
    },
    {
        id: 'fe_peru',
        nombre: 'Fe en el Perú',
        siglas: 'FEP',
        candidato: 'Candidato FEP',
        img: '',
        logo: '',
        emoji: '✝️'
    },
    {
        id: 'obras',
        nombre: 'Partido Cívico Obras',
        siglas: 'OBRAS',
        candidato: 'Candidato Obras',
        img: '',
        logo: '',
        emoji: '🏗️'
    },
    {
        id: 'buen_gobierno',
        nombre: 'Partido del Buen Gobierno',
        siglas: 'PBG',
        candidato: 'Candidato PBG',
        img: '',
        logo: '',
        emoji: '⚖️'
    },
    {
        id: 'democrata_verde',
        nombre: 'Partido Demócrata Verde',
        siglas: 'PDV',
        candidato: 'Candidato PDV',
        img: '',
        logo: '',
        emoji: '🌱'
    },
    {
        id: 'esperanza_2021',
        nombre: 'Frente de la Esperanza',
        siglas: 'FE',
        candidato: 'Candidato FE',
        img: '',
        logo: '',
        emoji: '🌄'
    },
    {
        id: 'alianza_venceremos',
        nombre: 'Alianza Venceremos',
        siglas: 'AV',
        candidato: 'Ronald Atencio',
        img: '',
        logo: '',
        emoji: '👊'
    },
    {
        id: 'patriotico',
        nombre: 'Partido Patriótico del Perú',
        siglas: 'PPP',
        candidato: 'Herbert Caller',
        img: '',
        logo: '',
        emoji: '🇵🇪'
    },
    {
        id: 'ahora_nacion',
        nombre: 'Ahora Nación',
        siglas: 'AN',
        candidato: 'Alfonso López Chau',
        img: '',
        logo: '',
        emoji: '🌅'
    },
    {
        id: 'libertad_popular',
        nombre: 'Libertad Popular',
        siglas: 'LP',
        candidato: 'Rafael Belaunde',
        img: '',
        logo: '',
        emoji: '🗽'
    },
    {
        id: 'peru_primero',
        nombre: 'Perú Primero',
        siglas: 'PP',
        candidato: 'Mario Vizcarra',
        img: '',
        logo: '',
        emoji: '🏆'
    },
    {
        id: 'cooperacion_popular',
        nombre: 'Cooperación Popular',
        siglas: 'CP',
        candidato: 'Yonhy Lescano',
        img: '',
        logo: '',
        emoji: '🤜'
    },
    {
        id: 'democratico_federal',
        nombre: 'Democrático Federal',
        siglas: 'PDF',
        candidato: 'Candidato PDF',
        img: '',
        logo: '',
        emoji: '🏛️'
    },
    {
        id: 'pais_todos',
        nombre: 'País para Todos',
        siglas: 'PPT',
        candidato: 'Candidato PPT',
        img: '',
        logo: '',
        emoji: '🌎'
    },
    {
        id: 'unidad_nacional',
        nombre: 'Unidad Nacional',
        siglas: 'UN',
        candidato: 'Roberto Chiabra',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Roberto_Chiabra_Le%C3%B3n.jpg/200px-Roberto_Chiabra_Le%C3%B3n.jpg',
        logo: '',
        emoji: '🛡️'
    },
    {
        id: 'peru_moderno',
        nombre: 'Perú Moderno',
        siglas: 'PERMOD',
        candidato: 'Carlos Jaico',
        img: '',
        logo: '',
        emoji: '🔵'
    },
    {
        id: 'salvemos_peru',
        nombre: 'Salvemos al Perú',
        siglas: 'SP2',
        candidato: 'Antonio Ortiz',
        img: '',
        logo: '',
        emoji: '🆘'
    },
    {
        id: 'camino_diferente',
        nombre: 'Un Camino Diferente',
        siglas: 'UCD',
        candidato: 'Rosario Fernández',
        img: '',
        logo: '',
        emoji: '🛤️'
    },
    {
        id: 'dem_unido',
        nombre: 'Demócrata Unido Perú',
        siglas: 'DUP',
        candidato: 'Charlie Carrasco',
        img: '',
        logo: '',
        emoji: '🤲'
    },
    {
        id: 'frepap',
        nombre: 'Frente Popular Agrícola',
        siglas: 'FREPAP',
        candidato: 'Candidato FREPAP',
        img: '',
        logo: '',
        emoji: '🌾'
    },
    {
        id: 'integridad',
        nombre: 'Integridad Democrática',
        siglas: 'IDe',
        candidato: 'Wolfgang Grozo',
        img: '',
        logo: '',
        emoji: '🔒'
    },
    {
        id: 'ahora_nacion2',
        nombre: 'Nuevo Perú',
        siglas: 'NP',
        candidato: 'Candidato NP',
        img: '',
        logo: '',
        emoji: '🌺'
    },
    {
        id: 'prin',
        nombre: 'Partido PRIN',
        siglas: 'PRIN',
        candidato: 'Candidato PRIN',
        img: '',
        logo: '',
        emoji: '⚙️'
    },
    {
        id: 'peruanos_libres',
        nombre: 'Peruanos Libres',
        siglas: 'PELLIB',
        candidato: 'Candidato PeLib',
        img: '',
        logo: '',
        emoji: '🦁'
    },
    {
        id: 'frente_agr',
        nombre: 'Frente Agrícola FIA',
        siglas: 'FIA',
        candidato: 'Candidato FIA',
        img: '',
        logo: '',
        emoji: '🌽'
    },
];

// ════════════════════════════════════════════════════════════════
// BASE DE DATOS EN MEMORIA (fallback cuando no hay PHP)
// ════════════════════════════════════════════════════════════════
const DB = {
    votos: {},
    dnis: new Set(),
};

// ════════════════════════════════════════════════════════════════
// ESTADO
// ════════════════════════════════════════════════════════════════
const E = {
    partidoSeleccionado: null,
    votando: false,
    votado: false,
    modoLocal: false,   // true si PHP no responde
    intervalo: null,
};

// ════════════════════════════════════════════════════════════════
// INICIO
// ════════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    renderPartidos();
    configurarDNI();
    // Detectar si hay PHP disponible
    detectarModo().then(() => {
        cargarResultados();
        E.intervalo = setInterval(cargarResultados, 4000);
    });
});

// ════════════════════════════════════════════════════════════════
// DETECTAR MODO (PHP o local)
// ════════════════════════════════════════════════════════════════
async function detectarModo() {
    try {
        const r = await fetch('votar.php?action=resultados', { method: 'GET' });
        if (!r.ok) throw new Error('No PHP');
        const d = await r.json();
        if (d && typeof d.success !== 'undefined') {
            E.modoLocal = false;
            return;
        }
        throw new Error('Bad response');
    } catch {
        E.modoLocal = true;
        const banner = document.getElementById('modo-demo');
        if (banner) banner.classList.add('visible');
    }
}

// ════════════════════════════════════════════════════════════════
// RENDERIZAR PARTIDOS
// ════════════════════════════════════════════════════════════════
function renderPartidos() {
    const grid = document.getElementById('partidos-container');
    if (!grid) return;

    grid.innerHTML = PARTIDOS.map(p => {
        // Preferir foto del candidato; si no, logo del partido; si no, emoji
        const imgSrc = p.img || p.logo;
        const imgHTML = imgSrc
            ? `<img src="${imgSrc}" alt="${p.candidato}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">`
              + `<span class="fallback-txt" style="display:none">${p.emoji}</span>`
            : `<span class="fallback-txt">${p.emoji}</span>`;

        return `
        <div class="partido-card"
             id="pc-${p.id}"
             onclick="seleccionarPartido('${p.id}')"
             title="${p.nombre} — ${p.candidato}">
            <div class="partido-img-wrap">${imgHTML}</div>
            <div class="partido-nombre">${p.nombre}</div>
            <div class="partido-siglas">${p.siglas}</div>
        </div>`;
    }).join('');
}

// ════════════════════════════════════════════════════════════════
// SELECCIONAR PARTIDO
// ════════════════════════════════════════════════════════════════
function seleccionarPartido(id) {
    if (E.votado) return;

    if (E.partidoSeleccionado) {
        const prev = document.getElementById(`pc-${E.partidoSeleccionado}`);
        if (prev) prev.classList.remove('selected');
    }
    E.partidoSeleccionado = id;
    const card = document.getElementById(`pc-${id}`);
    if (card) {
        card.classList.add('selected');
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    actualizarBoton();
}

// ════════════════════════════════════════════════════════════════
// INPUT DNI
// ════════════════════════════════════════════════════════════════
function configurarDNI() {
    const inp = document.getElementById('input-dni');
    if (!inp) return;
    inp.addEventListener('input', e => {
        let v = e.target.value.replace(/\D/g, '').slice(0, 8);
        e.target.value = v;
        inp.classList.remove('ok', 'err');
        if (v.length === 8) inp.classList.add('ok');
        actualizarBoton();
    });
    inp.addEventListener('keydown', e => {
        if (e.key === 'Enter') enviarVoto();
    });
}

function getDNI() {
    return (document.getElementById('input-dni')?.value || '').replace(/\D/g, '');
}

// ════════════════════════════════════════════════════════════════
// BOTÓN
// ════════════════════════════════════════════════════════════════
function actualizarBoton() {
    const btn = document.getElementById('btn-votar');
    if (!btn) return;
    btn.disabled = !(getDNI().length === 8 && E.partidoSeleccionado && !E.votando && !E.votado);
}

// ════════════════════════════════════════════════════════════════
// ENVIAR VOTO — con fallback automático
// ════════════════════════════════════════════════════════════════
async function enviarVoto() {
    if (E.votando || E.votado) return;

    const dni     = getDNI();
    const partido = E.partidoSeleccionado;

    if (dni.length !== 8) { mostrarMsg('Ingresa tu DNI completo (8 dígitos).', 'error'); return; }
    if (!partido)         { mostrarMsg('Selecciona un partido político.', 'error'); return; }

    E.votando = true;
    const btn = document.getElementById('btn-votar');
    btn.disabled = true;
    btn.innerHTML = '<div class="spinner"></div> Registrando voto...';

    // Intentar PHP primero; si falla, usar modo local
    if (!E.modoLocal) {
        try {
            const r = await fetch('votar.php?action=votar', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ dni, partido }),
            });
            if (!r.ok) throw new Error('HTTP ' + r.status);
            const d = await r.json();
            E.votando = false;
            if (d.success) {
                procesarExito(d.mensaje);
                await cargarResultados();
                return;
            } else {
                mostrarMsg('⚠️ ' + d.mensaje, 'error');
                resetBoton();
                return;
            }
        } catch {
            // PHP falló → cambiar a modo local silenciosamente
            E.modoLocal = true;
            const banner = document.getElementById('modo-demo');
            if (banner) banner.classList.add('visible');
        }
    }

    // Modo local (sin PHP)
    E.votando = false;
    if (DB.dnis.has(dni)) {
        mostrarMsg('⚠️ Este DNI ya registró su voto. Solo se permite un voto por persona.', 'error');
        resetBoton();
        return;
    }
    DB.dnis.add(dni);
    DB.votos[partido] = (DB.votos[partido] || 0) + 1;
    procesarExito('¡Voto registrado! Gracias por participar.');
    renderResultadosLocal();
}

function procesarExito(msg) {
    E.votado = true;
    mostrarMsg('✅ ' + msg, 'success');
    bloquearFormulario();
}

function resetBoton() {
    E.votando = false;
    const btn = document.getElementById('btn-votar');
    btn.innerHTML = '🗳️ Emitir mi Voto';
    actualizarBoton();
}

// ════════════════════════════════════════════════════════════════
// BLOQUEAR FORMULARIO TRAS VOTAR
// ════════════════════════════════════════════════════════════════
function bloquearFormulario() {
    const inp = document.getElementById('input-dni');
    const btn = document.getElementById('btn-votar');
    if (inp) { inp.disabled = true; inp.classList.add('ok'); }
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = '✅ Voto Emitido — ¡Gracias por participar!';
        btn.style.background = 'linear-gradient(135deg,#065f46,#059669)';
        btn.style.boxShadow  = '0 4px 14px rgba(5,150,105,.4)';
    }
    document.querySelectorAll('.partido-card:not(.selected)')
        .forEach(c => c.classList.add('disabled-card'));
}

// ════════════════════════════════════════════════════════════════
// MENSAJES
// ════════════════════════════════════════════════════════════════
function mostrarMsg(texto, tipo) {
    const div = document.getElementById('mensaje-respuesta');
    if (!div) return;
    div.innerHTML = `<div class="alerta ${tipo}">${texto}</div>`;
    div.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    if (tipo === 'error') setTimeout(() => { div.innerHTML = ''; }, 6000);
}

// ════════════════════════════════════════════════════════════════
// CARGAR RESULTADOS (PHP o local)
// ════════════════════════════════════════════════════════════════
async function cargarResultados() {
    if (E.modoLocal) { renderResultadosLocal(); return; }
    try {
        const r = await fetch('votar.php?action=resultados&t=' + Date.now());
        if (!r.ok) throw new Error();
        const d = await r.json();
        if (d.success) renderResultados(d);
    } catch {
        E.modoLocal = true;
        renderResultadosLocal();
    }
}

function renderResultadosLocal() {
    const votos = DB.votos;
    const total = Object.values(votos).reduce((a, b) => a + b, 0);
    renderResultados({
        votos,
        totalVotos: total,
        totalParticipantes: DB.dnis.size,
    });
}

// ════════════════════════════════════════════════════════════════
// RENDERIZAR RESULTADOS
// ════════════════════════════════════════════════════════════════
function renderResultados(data) {
    const votos   = data.votos || {};
    const total   = data.totalVotos || 0;
    const partic  = data.totalParticipantes || 0;

    // Stats
    setNum('total-votos', total);
    setNum('total-participantes', partic);

    // Hora
    const hora = document.getElementById('ultima-actualizacion');
    if (hora) hora.textContent = new Date().toLocaleTimeString('es-PE');

    // Lista
    const lista = document.getElementById('resultados-lista');
    if (!lista) return;

    const entradas = Object.entries(votos)
        .filter(([, v]) => v > 0)
        .sort(([, a], [, b]) => b - a);

    if (!entradas.length) {
        lista.innerHTML = '<div class="sin-votos">🗳️ Aún no hay votos registrados.<br>¡Sé el primero en participar!</div>';
        return;
    }

    lista.innerHTML = entradas.map(([id, num], i) => {
        const info = PARTIDOS.find(p => p.id === id) || { nombre: id, emoji: '🗳️', candidato: '', img: '', logo: '' };
        const pct  = total > 0 ? ((num / total) * 100).toFixed(1) : 0;
        const posCls = ['p1', 'p2', 'p3'][i] || 'pn';
        const imgSrc = info.img || info.logo;
        const imgHTML = imgSrc
            ? `<img src="${imgSrc}" alt="${info.candidato}" onerror="this.style.display='none';this.nextElementSibling.style.display='inline'">`
              + `<span style="display:none;font-size:.85rem">${info.emoji}</span>`
            : `<span style="font-size:.85rem">${info.emoji}</span>`;

        return `
        <div class="res-item">
          <div class="res-top">
            <div class="res-pos ${posCls}">${i + 1}</div>
            <div class="res-img">${imgHTML}</div>
            <div class="res-info">
              <div class="res-nombre">${info.nombre}</div>
              <div class="res-candidato">${info.candidato}</div>
            </div>
            <div class="res-votos">${num.toLocaleString('es-PE')}</div>
          </div>
          <div class="res-barra-bg">
            <div class="res-barra" style="width:${pct}%"></div>
          </div>
          <div class="res-pct">${pct}% del total</div>
        </div>`;
    }).join('');
}

function setNum(id, val) {
    const el = document.getElementById(id);
    if (!el) return;
    const prev = parseInt(el.textContent.replace(/\D/g, '')) || 0;
    el.textContent = val.toLocaleString('es-PE');
    if (val !== prev) {
        el.style.transform = 'scale(1.15)';
        el.style.transition = 'transform .25s ease';
        setTimeout(() => { el.style.transform = 'scale(1)'; }, 250);
    }
}

// Exponer globales
window.seleccionarPartido = seleccionarPartido;
window.enviarVoto = enviarVoto;
