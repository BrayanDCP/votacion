/**
 * VOTO PERÚ 2026 — index.js
 * © 2026 Brayan Delfor Choque Peregrino. Todos los derechos reservados.
 */

'use strict';

/* ════════════════════════════════════════════════════════════
   DATOS DE PARTIDOS — Elecciones Perú 12/04/2026
   Fuente: ONPE / JNE — Información pública oficial
════════════════════════════════════════════════════════════ */
const PARTIDOS = [
  {
    id:'fuerza_popular', nombre:'Fuerza Popular', siglas:'FP',
    candidato:'Keiko Fujimori',
    img:'img/fuera_popular.png', emoji:'⚡',
    ytId:'u4jZFp1bX6w',
    desc:'Fuerza Popular es un partido político de centro-derecha fundado en 2009, heredero de la tradición fujimorista. Promueve el orden, la seguridad, la economía de mercado y la inversión privada como motores del desarrollo nacional.',
    mision:'Construir un Perú seguro, ordenado y próspero, con oportunidades para todos los ciudadanos, basado en el respeto a la ley y la libre empresa.',
    vision:'Ser el partido que lidere la transformación del Perú hacia un país moderno, seguro y con bienestar para todas las familias peruanas.',
    propuestas:['Plan de Seguridad Ciudadana con más policías en las calles','Reactivación económica con reducción de impuestos a las MYPE','Reforma del sistema de justicia para combatir la corrupción','Inversión en infraestructura vial y hospitales en regiones','Política exterior activa de atracción de inversión extranjera']
  },
  {
    id:'alianza_progreso', nombre:'Alianza para el Progreso', siglas:'APP',
    candidato:'César Acuña',
    img:'img/alianza_para_el_progreso.png', emoji:'🚀',
    ytId:'JTMp4UlFLjQ',
    desc:'Alianza para el Progreso es un partido de centro fundado por César Acuña en 2001. Tiene fuerte presencia regional y promueve el desarrollo educativo, la infraestructura y el apoyo al emprendimiento.',
    mision:'Promover el desarrollo integral del Perú con énfasis en educación de calidad, generación de empleo y reducción de la pobreza en todas las regiones.',
    vision:'Un Perú moderno e igualitario donde cada ciudadano tenga acceso a educación, salud y oportunidades de progreso sin importar su origen.',
    propuestas:['Inversión de S/5,000 millones en infraestructura educativa','Programa de becas universitarias para jóvenes de bajos recursos','Creación del Banco del Emprendedor para MYPE','Plan de conectividad vial en regiones alejadas','Reforma del sistema de salud con hospitales modernos']
  },
  {
    id:'renovacion_popular', nombre:'Renovación Popular', siglas:'RP',
    candidato:'Rafael López Aliaga',
    img:'img/renovacion_popular.png', emoji:'🔄',
    ytId:'nSTObch-O8s',
    desc:'Renovación Popular es un partido conservador fundado en 2020 por Rafael López Aliaga. Promueve valores tradicionales, orden público, reducción del Estado y combate frontal a la corrupción y el comunismo.',
    mision:'Restaurar el orden, la moralidad pública y la eficiencia del Estado peruano, devolviendo a los ciudadanos la seguridad y la confianza en sus instituciones.',
    vision:'Un Perú con valores, donde el ciudadano honesto y trabajador sea el eje del desarrollo y la corrupción sea erradicada de todas las instituciones.',
    propuestas:['Mano dura contra el crimen organizado y la delincuencia','Reducción del gasto burocrático del Estado en 30%','Reforma constitucional para fortalecer la democracia','Impulso a la agroindustria y el turismo como motores económicos','Programa de vivienda asequible para familias de bajos ingresos']
  },
  {
    id:'accion_popular', nombre:'Acción Popular', siglas:'AP',
    candidato:'Yonhy Lescano',
    img:'img/accion_popular.png', emoji:'🌟',
    ytId:'x213pPodKuE',
    desc:'Acción Popular es uno de los partidos más antiguos del Perú, fundado en 1956 por Fernando Belaunde Terry. Es un partido de centro con orientación socialdemócrata y fuerte vocación regionalista.',
    mision:'Defender la democracia, la descentralización y el desarrollo equitativo del Perú, poniendo a las personas en el centro de todas las políticas públicas.',
    vision:'Un Perú descentralizado y democrático donde todas las regiones tengan igualdad de oportunidades y acceso a servicios públicos de calidad.',
    propuestas:['Plan de descentralización real del presupuesto nacional','Reforma agraria moderna para el agro familiar','Inversión en agua y saneamiento para zonas rurales','Programa nacional de salud mental post-pandemia','Digitalización del Estado y servicios públicos online']
  },
  {
    id:'partido_morado', nombre:'Partido Morado', siglas:'PM',
    candidato:'Mesías Guevara',
    img:'img/partido_morado.png', emoji:'🟣',
    ytId:'ARSPS2UX71k',
    desc:'El Partido Morado es una organización progresista fundada en 2018. Promueve la reforma institucional profunda, la lucha contra la corrupción, la igualdad de género y el estado de derecho.',
    mision:'Transformar la política peruana con integridad, transparencia y basada en evidencia, construyendo instituciones fuertes al servicio de todos los ciudadanos.',
    vision:'Un Perú con instituciones sólidas, ciudadanía activa y una democracia que funcione realmente para proteger los derechos de todos.',
    propuestas:['Reforma total del sistema judicial y el ministerio público','Ley de transparencia radical en el gasto público','Programa de equidad de género en el sector público','Política ambiental con metas climáticas concretas','Inversión en ciencia, tecnología e innovación productiva']
  },
  {
    id:'somos_peru', nombre:'Somos Perú', siglas:'SP',
    candidato:'George Forsyth',
    img:'img/somos_peru.png', emoji:'🤝',
    ytId:'KLuc05nJ5U0',
    desc:'Somos Perú es un partido de centro-derecha con presencia nacional, conocido por su enfoque en gestión municipal eficiente, seguridad ciudadana y desarrollo local.',
    mision:'Gestionar con eficiencia y honestidad los recursos del Estado para garantizar servicios públicos de calidad y seguridad a todos los peruanos.',
    vision:'Un Perú donde la gestión pública sea un ejemplo de eficiencia, transparencia y orientación al ciudadano en cada rincón del territorio nacional.',
    propuestas:['Plan nacional de seguridad ciudadana con tecnología','Reforma del sistema penitenciario y rehabilitación','Descentralización de la inversión pública hacia municipios','Plan de empleo juvenil con formación técnica','Modernización del sistema de salud primaria']
  },
  {
    id:'peru_libre', nombre:'Perú Libre', siglas:'PL',
    candidato:'Candidato Perú Libre',
    img:'img/peru_libre.png', emoji:'✊',
    ytId:'I446q1S3RmQ',
    desc:'Perú Libre es un partido de izquierda fundado en 2008 en Junín. Promueve el marxismo-leninismo, la nacionalización de recursos naturales y la reforma constitucional mediante asamblea constituyente.',
    mision:'Representar a los sectores populares y trabajadores del Perú, defendiendo sus derechos y promoviendo una redistribución justa de la riqueza nacional.',
    vision:'Un Perú soberano donde los recursos naturales beneficien a todos los peruanos y no a unos pocos, con igualdad real y justicia social.',
    propuestas:['Asamblea Constituyente para nueva Constitución','Nacionalización de recursos mineros y gasíferos','Reforma agraria redistributiva','Educación y salud 100% gratuitas y de calidad','Plan de industrialización nacional con empleo formal']
  },
  {
    id:'juntos_peru', nombre:'Juntos por el Perú', siglas:'JP',
    candidato:'Candidato JP',
    img:'img/juntos_por_el_peru.png', emoji:'🌿',
    ytId:'ITcyviAseNA',
    desc:'Juntos por el Perú es una coalición progresista de izquierda democrática que agrupa a diversas organizaciones sociales y políticas. Promueve la justicia social, la diversidad y los derechos humanos.',
    mision:'Construir una alternativa política plural y democrática que represente a los sectores excluidos y promueva el desarrollo sostenible e inclusivo.',
    vision:'Una sociedad peruana justa, diversa e igualitaria donde se respeten los derechos de todas las personas sin discriminación.',
    propuestas:['Economía solidaria y comercio justo','Protección de derechos de pueblos indígenas','Reforma tributaria progresiva','Política de igualdad de género transversal','Transición energética hacia energías renovables']
  },
  {
    id:'avanza_pais', nombre:'Avanza País', siglas:'AVP',
    candidato:'José Williams',
    img:'img/avanza_pais.png', emoji:'🏃',
    ytId:'y2Pf4_SG0ZY',
    desc:'Avanza País es un partido liberal de centro-derecha que promueve la economía de mercado, la inversión privada, la meritocracia y el fortalecimiento de las fuerzas del orden.',
    mision:'Promover el crecimiento económico sostenido con libertad individual, meritocracia y un Estado eficiente que garantice orden y seguridad.',
    vision:'Un Perú próspero y libre donde cada ciudadano pueda salir adelante por su propio esfuerzo, con reglas claras y un Estado que no obstaculice.',
    propuestas:['Liberalización comercial y atracción de inversión extranjera','Reforma laboral para formalizar el empleo','Fortalecimiento de las Fuerzas Armadas y PNP','Reducción de impuestos para las empresas formales','Plan de concesiones en infraestructura y transportes']
  },
  {
    id:'aprista', nombre:'Partido Aprista Peruano', siglas:'APRA',
    candidato:'Enrique Valderrama',
    img:'img/partido_aprista_peruano.png', emoji:'⭐',
    ytId:'',
    desc:'El Partido Aprista Peruano, fundado en 1924 por Víctor Raúl Haya de la Torre, es el partido más antiguo de América Latina. Promueve el aprismo, una doctrina socialdemócrata latinoamericana.',
    mision:'Representar a los trabajadores y clases medias del Perú con una propuesta política que combine justicia social, democracia y desarrollo nacional.',
    vision:'Un Perú donde el trabajo digno, la educación y la salud sean derechos reales para todos los ciudadanos, basado en los principios del aprismo.',
    propuestas:['Política industrial nacional con apoyo a manufactura','Programa de vivienda social masiva','Fortalecimiento de derechos laborales y sindicales','Inversión en cultura y deporte para la juventud','Reforma educativa con énfasis en valores y ciudadanía']
  },
  {
    id:'fuerza_libertad', nombre:'Fuerza y Libertad', siglas:'FYL',
    candidato:'Fiorella Molinelli',
    img:'img/fuerza_y_libertad.png', emoji:'🦅',
    ytId:'',
    desc:'Fuerza y Libertad es una alianza electoral de centro-derecha que agrupa a diferentes organizaciones comprometidas con la libertad económica, la seguridad y el orden constitucional.',
    mision:'Garantizar la libertad de los ciudadanos peruanos con un Estado que proteja sus derechos, fomente la economía y combata la delincuencia.',
    vision:'Un Perú libre y seguro donde las personas puedan prosperar sin el temor a la delincuencia y con igualdad ante la ley.',
    propuestas:['Reformas para simplificar la creación de empresas','Plan de seguridad con tecnología e inteligencia','Reforma previsional con libertad de elección','Política de salud con participación privada','Digitalización de servicios del Estado']
  },
  {
    id:'fe_peru', nombre:'Fe en el Perú', siglas:'FEP',
    candidato:'Candidato FEP',
    img:'img/fe_en_peru.png', emoji:'✝️',
    ytId:'',
    desc:'Fe en el Perú es un partido de inspiración cristiana que promueve valores tradicionales de familia, fe y servicio a los más necesitados como base de la política nacional.',
    mision:'Gobernar con valores morales y fe en el ser humano, poniendo a la familia como base de la sociedad y al ciudadano más pobre como prioridad.',
    vision:'Un Perú donde los valores espirituales y morales guíen las políticas públicas hacia una sociedad más justa, solidaria y fraterna.',
    propuestas:['Protección de la familia como institución fundamental','Apoyo a comunidades religiosas en labor social','Programa de asistencia a adultos mayores','Educación en valores y ética cívica','Lucha contra el tráfico de personas y explotación']
  },
  {
    id:'obras', nombre:'Partido Cívico Obras', siglas:'OBRAS',
    candidato:'Candidato Obras',
    img:'img/partido_civico_obras.png', emoji:'🏗️',
    ytId:'',
    desc:'Partido Cívico Obras se centra en la gestión eficiente de obras públicas de infraestructura como palanca del desarrollo y generación de empleo en todo el territorio nacional.',
    mision:'Transformar el Perú a través de infraestructura de calidad: carreteras, hospitales, colegios y agua potable para todas las comunidades del país.',
    vision:'Un Perú conectado e integrado donde la inversión en obras públicas sea el motor del desarrollo económico y la mejora de la calidad de vida.',
    propuestas:['Plan de infraestructura vial rural prioritaria','Hospitales regionales modernos en 15 departamentos','Saneamiento básico para comunidades sin acceso','Puertos y aeropuertos regionales para conectividad','Digitalización de contratos de obras para transparencia']
  },
  {
    id:'buen_gobierno', nombre:'Partido del Buen Gobierno', siglas:'PBG',
    candidato:'Candidato PBG',
    img:'img/partido_del_buen_gobierno.png', emoji:'⚖️',
    ytId:'',
    desc:'El Partido del Buen Gobierno promueve la gobernanza transparente, la rendición de cuentas y la modernización del Estado como condiciones para el desarrollo sostenible.',
    mision:'Instaurar una cultura de buen gobierno basada en la transparencia, la eficiencia y el servicio real al ciudadano en cada institución del Estado.',
    vision:'Un Estado peruano moderno, eficiente y honesto que responda a las necesidades reales de los ciudadanos con rapidez y calidad.',
    propuestas:['Gobierno digital con trámites 100% online','Presupuesto participativo ciudadano a nivel nacional','Ley de acceso a información pública reforzada','Meritocracia en cargos públicos de carrera','Control ciudadano de obras y contratos del Estado']
  },
  {
    id:'democrata_verde', nombre:'Partido Demócrata Verde', siglas:'PDV',
    candidato:'Candidato PDV',
    img:'img/partido_democrata_verde.png', emoji:'🌱',
    ytId:'',
    desc:'El Partido Demócrata Verde pone la protección del medio ambiente, la biodiversidad y el desarrollo sostenible al centro de su propuesta política y económica.',
    mision:'Proteger el extraordinario patrimonio natural del Perú mientras se impulsa un desarrollo económico que sea compatible con el equilibrio ecológico.',
    vision:'Un Perú que lidere en América Latina la transición hacia una economía verde, sostenible y respetuosa de su inmensa biodiversidad.',
    propuestas:['Ley de transición energética a renovables al 2035','Protección efectiva de la Amazonía y ecosistemas clave','Agricultura orgánica y eco-turismo como política nacional','Gestión sostenible del agua en zonas de escasez','Ciudades verdes con transporte público limpio']
  },
  {
    id:'esperanza_2021', nombre:'Frente de la Esperanza', siglas:'FE',
    candidato:'Candidato FE',
    img:'img/frente_de_la_esperanza.png', emoji:'🌄',
    ytId:'',
    desc:'El Frente de la Esperanza es una coalición política que nació como alternativa ciudadana al bipartidismo, promoviendo una agenda de reformas institucionales y desarrollo humano.',
    mision:'Ofrecer una alternativa real y esperanzadora a los ciudadanos peruanos cansados de la corrupción y la ineficiencia del sistema político tradicional.',
    vision:'Un Perú renovado donde la esperanza y el trabajo colectivo sean los pilares de un nuevo proyecto nacional de desarrollo e igualdad.',
    propuestas:['Reforma constitucional por referéndum ciudadano','Plan anticorrupción con fiscalía especializada','Inversión en primera infancia y nutrición','Programa de empleo verde y economía circular','Reparaciones a víctimas del conflicto armado interno']
  },
  {
    id:'alianza_venceremos', nombre:'Alianza Venceremos', siglas:'AV',
    candidato:'Ronald Atencio',
    img:'img/alianza_venceremos.png', emoji:'👊',
    ytId:'',
    desc:'Alianza Venceremos es una coalición de organizaciones de izquierda y sociales que busca representar a los sectores más vulnerables y excluidos de la sociedad peruana.',
    mision:'Dar voz y representación política a los millones de peruanos excluidos del sistema, luchando por sus derechos y por una sociedad más igualitaria.',
    vision:'Un Perú donde los sectores populares tengan representación real en el poder y donde la riqueza generada sea distribuida con justicia.',
    propuestas:['Salario mínimo de S/2,000 mensuales','Universalización de la seguridad social','Reforma tributaria con impuesto a la riqueza','Programa de vivienda popular masiva','Educación técnica gratuita para jóvenes']
  },
  {
    id:'patriotico', nombre:'Partido Patriótico del Perú', siglas:'PPP',
    candidato:'Herbert Caller',
    img:'img/partido_patriótico_del_peru.png', emoji:'🇵🇪',
    ytId:'',
    desc:'El Partido Patriótico del Perú defiende la soberanía nacional, el fortalecimiento de las fuerzas armadas y una política exterior independiente basada en los intereses del Perú.',
    mision:'Defender la soberanía e integridad territorial del Perú con fuerzas armadas modernas y una política exterior al servicio de los intereses nacionales.',
    vision:'Un Perú soberano, con fuerzas armadas respetadas y una diplomacia activa que defienda nuestros recursos y territorio con orgullo nacional.',
    propuestas:['Modernización de las Fuerzas Armadas y PNP','Política exterior de no alineamiento activo','Defensa de recursos naturales estratégicos','Industria de defensa nacional con tecnología propia','Educación cívica y patriótica en colegios']
  },
  {
    id:'ahora_nacion', nombre:'Ahora Nación', siglas:'AN',
    candidato:'Alfonso López Chau',
    img:'img/ahora_nacion.png', emoji:'🌅',
    ytId:'',
    desc:'Ahora Nación es un partido que propone renovar la clase política con ciudadanos comprometidos, promoviendo la meritocracia, la transparencia y el desarrollo tecnológico.',
    mision:'Renovar la política peruana con ciudadanos íntegros y preparados que gestionen el Estado con honestidad, eficiencia y visión de futuro.',
    vision:'Una nación moderna con líderes que encarnen los valores del mérito, la honestidad y el servicio genuino a los peruanos de hoy y del mañana.',
    propuestas:['Digitalización total del Estado al 2028','Meritocracia en designación de funcionarios públicos','Plan de ciencia y tecnología para la competitividad','Gobierno abierto con datos públicos accesibles','Reforma electoral para eliminar el transfuguismo']
  },
  {
    id:'libertad_popular', nombre:'Libertad Popular', siglas:'LP',
    candidato:'Rafael Belaunde',
    img:'img/libertad_popular.png', emoji:'🗽',
    ytId:'',
    desc:'Libertad Popular es un partido liberal clásico que defiende las libertades individuales, la economía de mercado y un Estado mínimo y eficiente al servicio del ciudadano.',
    mision:'Garantizar la libertad de los peruanos en todos los ámbitos de la vida, con un Estado que proteja derechos sin intervenir en la economía.',
    vision:'Un Perú libre donde cada persona pueda desarrollarse según sus capacidades sin trabas del Estado, con igualdad de derechos ante la ley.',
    propuestas:['Reducción del Estado y eliminación de burocracia','Libertad total de mercado con regulación mínima','Reforma tributaria con tasa plana','Desregulación del mercado laboral','Privatización de empresas públicas ineficientes']
  },
  {
    id:'peru_primero', nombre:'Perú Primero', siglas:'PP',
    candidato:'Mario Vizcarra',
    img:'img/peru_primero.png', emoji:'🏆',
    ytId:'',
    desc:'Perú Primero es un partido que pone los intereses nacionales por encima de cualquier ideología, promoviendo el desarrollo pragmático con inclusión social y competitividad.',
    mision:'Gobernar con sentido práctico y visión nacional, poniendo el bienestar de todos los peruanos por encima de cualquier interés político o ideológico.',
    vision:'Un Perú donde las decisiones de gobierno se tomen pensando primero en el bienestar de la gente y en el futuro de las nuevas generaciones.',
    propuestas:['Plan de industrialización con valor agregado','Reforma del sistema educativo con foco en empleabilidad','Política de salud preventiva y cobertura universal','Desarrollo de la pequeña y mediana empresa','Plan de reducción de la pobreza con metas medibles']
  },
  {
    id:'cooperacion_popular', nombre:'Cooperación Popular', siglas:'CP',
    candidato:'Yonhy Lescano',
    img:'img/cooperacion_popular.png', emoji:'🤜',
    ytId:'',
    desc:'Cooperación Popular rescata la tradición aprista del cooperativismo y la organización social para el desarrollo comunitario como base del progreso nacional.',
    mision:'Impulsar el cooperativismo y la organización ciudadana como herramientas de desarrollo económico y social en todo el territorio peruano.',
    vision:'Un Perú donde las comunidades organizadas y cooperativas sean el motor del desarrollo local, con apoyo del Estado y autonomía propia.',
    propuestas:['Ley de fomento al cooperativismo nacional','Banco cooperativo con crédito accesible','Programa de vivienda cooperativa','Formación técnica en gestión cooperativa','Mercados comunales en zonas rurales']
  },
  {
    id:'unidad_nacional', nombre:'Unidad Nacional', siglas:'UN',
    candidato:'Roberto Chiabra',
    img:'img/unidad_nacional.png', emoji:'🛡️',
    ytId:'',
    desc:'Unidad Nacional es una coalición que agrupa a fuerzas políticas comprometidas con la democracia, la unidad del país y el rechazo al extremismo de cualquier signo.',
    mision:'Unir a los peruanos en torno a valores democráticos compartidos, rechazando la polarización y construyendo un proyecto nacional inclusivo.',
    vision:'Un Perú unido en su diversidad, con instituciones democráticas fuertes y una ciudadanía comprometida con los valores de la república.',
    propuestas:['Diálogo nacional como política de Estado','Reforma del sistema de partidos políticos','Lucha frontal contra la corrupción con transparencia','Descentralización efectiva y autonomía regional','Modernización del servicio civil del Estado']
  },
  {
    id:'peru_moderno', nombre:'Perú Moderno', siglas:'PERMOD',
    candidato:'Carlos Jaico',
    img:'img/peru_moderno.png', emoji:'🔵',
    ytId:'',
    desc:'Perú Moderno propone llevar al Perú al siglo XXI con inversión en tecnología, educación STEM, digitalización y una economía del conocimiento competitiva globalmente.',
    mision:'Modernizar el Perú mediante la tecnología, la educación de calidad y la innovación, para ser un país competitivo en la economía global del siglo XXI.',
    vision:'Un Perú moderno e innovador que aproveche sus ventajas comparativas para crear empleos de calidad y bienestar para todos sus ciudadanos.',
    propuestas:['Inversión del 6% del PBI en educación y ciencia','Internet de calidad para todo el territorio nacional','Hubs de innovación tecnológica en regiones','Startup Act para emprendimiento tecnológico','Formación docente en tecnología e innovación']
  },
  {
    id:'salvemos_peru', nombre:'Salvemos al Perú', siglas:'SP2',
    candidato:'Antonio Ortiz',
    img:'img/salvemos_al_peru.png', emoji:'🆘',
    ytId:'',
    desc:'Salvemos al Perú es un movimiento político ciudadano que nació de la preocupación ante la crisis institucional, promoviendo reformas urgentes y un liderazgo honesto.',
    mision:'Rescatar al Perú de la crisis política, económica e institucional con liderazgo honesto, reformas valientes y compromiso con la ciudadanía.',
    vision:'Un Perú rescatado de la corrupción y el caos, con instituciones que funcionen y ciudadanos que confíen en sus gobernantes.',
    propuestas:['Plan de emergencia anticorrupción en 100 días','Reforma total del sistema judicial','Austeridad en el gasto público y corte de privilegios','Programa de empleo de emergencia para jóvenes','Ley de responsabilidad fiscal estricta']
  },
  {
    id:'camino_diferente', nombre:'Un Camino Diferente', siglas:'UCD',
    candidato:'Rosario Fernández',
    img:'img/un_camino_diferente.png', emoji:'🛤️',
    ytId:'',
    desc:'Un Camino Diferente propone superar la dicotomía izquierda-derecha con un enfoque pragmático, basado en evidencia y centrado en los resultados reales para los ciudadanos.',
    mision:'Ofrecer una alternativa política que supere las ideologías tradicionales y gobierne con base en evidencia, resultados y el bienestar real de las personas.',
    vision:'Un Perú que aprenda de las mejores prácticas del mundo y las adapte creativamente, sin dogmas ideológicos, para resolver sus problemas concretos.',
    propuestas:['Política pública basada en evidencia y datos','Reforma educativa con modelos exitosos globales','Sistema de salud con resultados medibles','Economía mixta con Estado empresario eficiente','Participación ciudadana digital en decisiones públicas']
  },
  {
    id:'dem_unido', nombre:'Demócrata Unido Perú', siglas:'DUP',
    candidato:'Charlie Carrasco',
    img:'img/democrata_unido_peru.png', emoji:'🤲',
    ytId:'',
    desc:'Demócrata Unido Perú es un partido de centro que promueve la democracia participativa, la justicia social y el fortalecimiento de las instituciones republicanas.',
    mision:'Fortalecer la democracia peruana con participación ciudadana activa, instituciones sólidas y políticas sociales que reduzcan la desigualdad.',
    vision:'Una democracia peruana plena y participativa donde los ciudadanos sean verdaderos protagonistas de las decisiones que afectan su vida.',
    propuestas:['Presupuesto participativo nacional vinculante','Reforma del sistema electoral y partidos','Plan de equidad social y reducción de brechas','Fortalecimiento del Congreso bicameral','Protección de derechos fundamentales y libertades']
  },
  {
    id:'frepap', nombre:'Frente Popular Agrícola', siglas:'FREPAP',
    candidato:'Candidato FREPAP',
    img:'img/frente_popular_agricola.png', emoji:'🌾',
    ytId:'',
    desc:'El Frente Popular Agrícola FIA del Perú representa a las comunidades campesinas y agricultores, promoviendo sus derechos, el acceso a tierra y el desarrollo del agro.',
    mision:'Representar y defender los derechos de los agricultores y comunidades campesinas del Perú, promoviendo políticas que impulsen la agricultura nacional.',
    vision:'Un Perú donde el agricultor sea valorado y tenga acceso a tierra, agua, crédito y tecnología para producir con dignidad y rentabilidad.',
    propuestas:['Seguro agrario universal para pequeños productores','Acceso al agua de riego en zonas áridas','Crédito agrario con tasa preferencial','Reforma de la cadena de comercialización agrícola','Tecnificación del agro familiar con maquinaria']
  },
  {
    id:'integridad', nombre:'Integridad Democrática', siglas:'IDe',
    candidato:'Wolfgang Grozo',
    img:'img/integridad_democratica.png', emoji:'🔒',
    ytId:'',
    desc:'Integridad Democrática pone la ética pública, la lucha anticorrupción y la transparencia absoluta como ejes de su propuesta de gobierno y reforma del Estado.',
    mision:'Garantizar que el Estado peruano funcione con integridad absoluta, sin corrupción, con plena transparencia y al servicio exclusivo de los ciudadanos.',
    vision:'Un Estado peruano íntegro donde la corrupción sea rechazada culturalmente y castigada sin excepciones, con servidores públicos ejemplares.',
    propuestas:['Ley de declaración de bienes de todos los funcionarios','Unidad anticorrupción independiente del Ejecutivo','Transparencia total en contratos y concesiones del Estado','Educación en valores y anticorrupción desde la escuela','Protección a denunciantes de corrupción']
  },
  {
    id:'nuevo_peru', nombre:'Nuevo Perú', siglas:'NP',
    candidato:'Candidato NP',
    img:'img/nuevo_peru.png', emoji:'🌺',
    ytId:'',
    desc:'Nuevo Perú es un partido de izquierda democrática y feminista que promueve los derechos humanos, la igualdad de género y el desarrollo sostenible con justicia social.',
    mision:'Construir una alternativa de izquierda democrática que defienda los derechos humanos, la igualdad de género y el medio ambiente desde el Estado.',
    vision:'Un Perú nuevo donde la igualdad, la dignidad humana y la sostenibilidad sean los principios que guíen todas las políticas públicas.',
    propuestas:['Paridad de género en cargos públicos y privados','Ley de violencia contra la mujer con presupuesto real','Política ambiental de economía circular','Derechos de comunidades indígenas y consulta previa','Seguridad social universal con foco en mujeres']
  },
  {
    id:'prin', nombre:'Partido PRIN', siglas:'PRIN',
    candidato:'Candidato PRIN',
    img:'img/partido_prin.png', emoji:'⚙️',
    ytId:'',
    desc:'El Partido PRIN es una organización política que promueve la renovación institucional, la modernización del Estado y el desarrollo basado en la productividad y la innovación.',
    mision:'Impulsar la renovación política e institucional del Perú con propuestas modernas, pragmáticas y orientadas a resultados concretos para los ciudadanos.',
    vision:'Un Perú renovado con instituciones modernas, funcionarios capaces y honestos, y políticas que promuevan la productividad y el bienestar general.',
    propuestas:['Reforma del Estado con enfoque de resultados','Plan de productividad sectorial con metas','Digitalización de todos los trámites del Estado','Formación técnica alineada al mercado laboral','Reducción de burocracia y corte de trabas]']
  },
  {
    id:'peruanos_libres', nombre:'Peruanos Libres', siglas:'PELLIB',
    candidato:'Candidato PeLib',
    img:'img/peruanos_libres.png', emoji:'🦁',
    ytId:'',
    desc:'Peruanos Libres defiende las libertades individuales, la propiedad privada y la libre iniciativa como base de la prosperidad y el desarrollo nacional.',
    mision:'Defender la libertad de los peruanos en todos los ámbitos, promoviendo un Estado que respete la propiedad y la iniciativa individual como derechos fundamentales.',
    vision:'Un Perú donde cada ciudadano sea libre de elegir su destino, con un Estado que protege sin controlar y regula sin obstaculizar el progreso.',
    propuestas:['Simplificación radical de regulaciones empresariales','Protección absoluta de la propiedad privada','Libertad de contratación laboral','Reforma fiscal con menos impuestos','Autonomía universitaria y libertad académica']
  },
  {
    id:'frente_agr', nombre:'Frente Agrícola FIA', siglas:'FIA',
    candidato:'Candidato FIA',
    img:'img/frente_agricola_fia.png', emoji:'🌽',
    ytId:'',
    desc:'El Frente Agrícola FIA del Perú representa a los agricultores familiares y comunidades rurales, luchando por sus derechos y el desarrollo del campo peruano.',
    mision:'Defender los derechos de los agricultores del Perú y promover políticas que hagan del campo una opción de vida digna y rentable para las familias rurales.',
    vision:'Un campo peruano próspero, con agricultores que produzcan con tecnología, accedan a mercados justos y tengan una vida digna en sus comunidades.',
    propuestas:['Precio mínimo garantizado para productos básicos','Acceso a semillas certificadas y asistencia técnica','Seguro contra desastres climáticos para agricultores','Centros de acopio y mercados rurales formales','Programas de relevo generacional en el campo']
  },
];

/* ════════════════════════════════════════════════════════════
   ESTADO GLOBAL
════════════════════════════════════════════════════════════ */
const S = {
    seleccionado: null,
    votando: false,
    votado: false,
    intervalo: null,
};

/* ════════════════════════════════════════════════════════════
   INIT
════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
    renderPartidos();
    configurarDNI();
    cargarResultados();
    S.intervalo = setInterval(cargarResultados, 5000);
    iniciarTicker();
});

/* ════════════════════════════════════════════════════════════
   TICKER (mensajes alentadores)
════════════════════════════════════════════════════════════ */
function iniciarTicker() {
    const msgs = [
        '🗳️ Tu voto es tu voz — ¡Úsala con responsabilidad!',
        '🇵🇪 El futuro del Perú lo decides tú en las urnas',
        '⚖️ Vota con conciencia, elige con tu corazón y tu razón',
        '💪 Un voto informado es un voto poderoso — ¡Infórmate antes de votar!',
        '🌟 La democracia se construye con la participación de todos',
        '📋 Conoce a tus candidatos — el botón ℹ️ te muestra su propuesta',
        '🔒 Tu voto es secreto y solo puedes votar una vez — ¡Úsalo bien!',
        '🏆 Perú merece lo mejor — vota por quién crees que puede lograrlo',
        '✊ Cada voto cuenta — no importa dónde estés, ¡participa!',
        '🌅 Un Perú mejor empieza con ciudadanos comprometidos como tú',
    ];
    const el = document.querySelector('.ticker');
    if (el) el.textContent = msgs.join('   ·   ');
}

/* ════════════════════════════════════════════════════════════
   RENDERIZAR PARTIDOS
════════════════════════════════════════════════════════════ */
function renderPartidos() {
    const grid = document.getElementById('pgrid');
    if (!grid) return;
    grid.innerHTML = PARTIDOS.map(p => `
    <div class="pcard" id="pc-${p.id}" onclick="seleccionar('${p.id}')" title="${p.nombre}">
      <div class="pimg">
        <img src="${p.img}" alt="${p.nombre}"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
          loading="lazy">
        <span class="pfb" style="display:none">${p.emoji}</span>
      </div>
      <div class="pname">${p.nombre}</div>
      <div class="psig">${p.siglas}</div>
      <button class="pinfo-btn" onclick="event.stopPropagation();abrirModal('${p.id}')">ℹ️ Ver info</button>
    </div>`).join('');
}

/* ════════════════════════════════════════════════════════════
   SELECCIONAR PARTIDO
════════════════════════════════════════════════════════════ */
function seleccionar(id) {
    if (S.votado) return;
    if (S.seleccionado) {
        const prev = document.getElementById(`pc-${S.seleccionado}`);
        if (prev) prev.classList.remove('sel');
    }
    S.seleccionado = id;
    const card = document.getElementById(`pc-${id}`);
    if (card) { card.classList.add('sel'); card.scrollIntoView({ behavior:'smooth', block:'nearest' }); }
    actualizarBoton();
}

/* ════════════════════════════════════════════════════════════
   DNI INPUT
════════════════════════════════════════════════════════════ */
function configurarDNI() {
    const inp = document.getElementById('idni');
    if (!inp) return;
    inp.addEventListener('input', e => {
        e.target.value = e.target.value.replace(/\D/g,'').slice(0,8);
        inp.classList.remove('ok','err');
        if (e.target.value.length === 8) inp.classList.add('ok');
        actualizarBoton();
    });
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') enviarVoto(); });
}
const getDNI = () => (document.getElementById('idni')?.value || '').replace(/\D/g,'');

/* ════════════════════════════════════════════════════════════
   BOTÓN
════════════════════════════════════════════════════════════ */
function actualizarBoton() {
    const btn = document.getElementById('btnvotar');
    if (!btn) return;
    btn.disabled = !(getDNI().length === 8 && S.seleccionado && !S.votando && !S.votado);
}

/* ════════════════════════════════════════════════════════════
   ENVIAR VOTO — solo PHP, sin fallback local visible
════════════════════════════════════════════════════════════ */
async function enviarVoto() {
    if (S.votando || S.votado) return;
    const dni = getDNI();
    const partido = S.seleccionado;
    if (dni.length !== 8) { showMsg('Ingresa tu DNI completo (8 dígitos).','er'); return; }
    if (!partido) { showMsg('Selecciona un partido político.','er'); return; }

    S.votando = true;
    const btn = document.getElementById('btnvotar');
    btn.disabled = true;
    btn.innerHTML = '<div class="spin"></div> Registrando tu voto...';

    try {
        const r = await fetch('api.php?a=votar', {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({ dni, partido }),
        });
        const d = await r.json();
        S.votando = false;
        if (d.ok) {
            S.votado = true;
            showMsg('✅ ¡Tu voto fue registrado exitosamente! Gracias por participar en la democracia peruana 🇵🇪','ok');
            bloquear();
            if (d.votos) renderResultados({ votos:d.votos, total:d.total, partic:d.partic });
            showToast('¡Voto registrado con éxito! 🎉');
        } else {
            showMsg('⚠️ ' + (d.msg || 'Error al registrar. Intenta de nuevo.'), 'er');
            btn.innerHTML = '🗳️ Emitir mi Voto';
            actualizarBoton();
        }
    } catch {
        S.votando = false;
        showMsg('⚠️ Error de conexión. Verifica que el servidor PHP esté activo e intenta de nuevo.', 'er');
        btn.innerHTML = '🗳️ Emitir mi Voto';
        actualizarBoton();
    }
}

/* ════════════════════════════════════════════════════════════
   BLOQUEAR FORMULARIO
════════════════════════════════════════════════════════════ */
function bloquear() {
    const inp = document.getElementById('idni');
    const btn = document.getElementById('btnvotar');
    if (inp) { inp.disabled = true; inp.classList.add('ok'); }
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = '✅ Voto Emitido — ¡Gracias, Perú te necesita!';
        btn.style.cssText = 'background:linear-gradient(135deg,#065f46,#059669);box-shadow:0 4px 16px rgba(5,150,105,.45)';
    }
    document.querySelectorAll('.pcard:not(.sel)').forEach(c => c.classList.add('off'));
}

/* ════════════════════════════════════════════════════════════
   MENSAJES
════════════════════════════════════════════════════════════ */
function showMsg(txt, tipo) {
    const div = document.getElementById('msg');
    if (!div) return;
    div.innerHTML = `<div class="alerta ${tipo}">${txt}</div>`;
    div.scrollIntoView({ behavior:'smooth', block:'nearest' });
    if (tipo === 'er') setTimeout(() => { div.innerHTML = ''; }, 7000);
}

function showToast(txt) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = txt;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3500);
}

/* ════════════════════════════════════════════════════════════
   CARGAR RESULTADOS
════════════════════════════════════════════════════════════ */
async function cargarResultados() {
    try {
        const r = await fetch('api.php?a=res&t=' + Date.now());
        if (!r.ok) return;
        const d = await r.json();
        if (d.ok) renderResultados(d);
    } catch { /* silencioso */ }
}

/* ════════════════════════════════════════════════════════════
   RENDERIZAR RESULTADOS
════════════════════════════════════════════════════════════ */
function renderResultados(d) {
    const votos = d.votos || {};
    const total = d.total || 0;
    const partic = d.partic || 0;

    setN('ntotal', total);
    setN('npartic', partic);
    const hora = document.getElementById('nhora');
    if (hora) hora.textContent = new Date().toLocaleTimeString('es-PE');

    const lista = document.getElementById('rlst');
    if (!lista) return;

    const entradas = Object.entries(votos).filter(([,v]) => v > 0).sort(([,a],[,b]) => b - a);
    if (!entradas.length) {
        lista.innerHTML = '<div class="sv">🗳️ Aún no hay votos registrados.<br>¡Sé el primero en participar!</div>';
        return;
    }
    lista.innerHTML = entradas.map(([id, num], i) => {
        const p = PARTIDOS.find(x => x.id === id) || { nombre: id, emoji:'🗳️', img:'', candidato:'' };
        const pct = total > 0 ? ((num / total) * 100).toFixed(1) : 0;
        const pc = ['r1','r2','r3'][i] || 'rn';
        return `
        <div class="ritem">
          <div class="rtop">
            <div class="rpos ${pc}">${i+1}</div>
            <div class="rthumb">
              <img src="${p.img}" alt="${p.nombre}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" loading="lazy">
              <span style="display:none;font-size:.8rem">${p.emoji}</span>
            </div>
            <div class="rinfo">
              <div class="rnombre">${p.nombre}</div>
              <div class="rcand">${p.candidato}</div>
            </div>
            <div class="rvotos">${num.toLocaleString('es-PE')}</div>
          </div>
          <div class="rbg"><div class="rb" style="width:${pct}%"></div></div>
          <div class="rpct">${pct}% del total</div>
        </div>`;
    }).join('');
}

function setN(id, v) {
    const el = document.getElementById(id);
    if (!el) return;
    const prev = parseInt(el.textContent.replace(/\D/g,'')) || 0;
    el.textContent = v.toLocaleString('es-PE');
    if (v !== prev) { el.style.transform = 'scale(1.15)'; setTimeout(() => { el.style.transform = 'scale(1)'; el.style.transition = 'transform .25s'; }, 200); }
}

/* ════════════════════════════════════════════════════════════
   MODAL NETFLIX — INFO PARTIDO
════════════════════════════════════════════════════════════ */
function abrirModal(id) {
    const p = PARTIDOS.find(x => x.id === id);
    if (!p) return;
    const m = document.getElementById('modal-nf');
    if (!m) return;

    document.getElementById('nf-title').textContent = p.nombre;
    document.getElementById('nf-sub').textContent = `Candidato: ${p.candidato}  •  ${p.siglas}`;

    // Video
    const vwrap = document.getElementById('nf-video-wrap');
    if (p.ytId) {
        vwrap.style.display = 'block';
        document.getElementById('nf-iframe').src = `https://www.youtube.com/embed/${p.ytId}?rel=0&modestbranding=1`;
    } else {
        vwrap.style.display = 'none';
        document.getElementById('nf-iframe').src = '';
    }

    // Símbolo
    const symImg = document.getElementById('nf-sym-img');
    const symFb  = document.getElementById('nf-sym-fb');
    symImg.src = p.img;
    symImg.onerror = () => { symImg.style.display = 'none'; symFb.style.display = 'flex'; };
    symFb.textContent = p.emoji;
    symFb.style.display = 'none'; symImg.style.display = 'block';

    document.getElementById('nf-cand-h').textContent = p.candidato;
    document.getElementById('nf-cand-s').textContent = p.nombre + ' · ' + p.siglas;
    document.getElementById('nf-desc').textContent = p.desc;
    document.getElementById('nf-mision').textContent = p.mision;
    document.getElementById('nf-vision').textContent = p.vision;
    document.getElementById('nf-props').innerHTML = p.propuestas.map(pr => `<li>${pr}</li>`).join('');

    // Botón votar desde modal
    const btnM = document.getElementById('nf-btn-votar');
    if (btnM) {
        btnM.onclick = () => {
            cerrarModal('modal-nf');
            seleccionar(id);
            document.getElementById('pgrid')?.scrollIntoView({ behavior:'smooth', block:'start' });
        };
    }

    m.classList.add('open');
    document.body.style.overflow = 'hidden';
}

/* ════════════════════════════════════════════════════════════
   MODAL ESTADÍSTICAS
════════════════════════════════════════════════════════════ */
async function abrirEstadisticas() {
    const m = document.getElementById('modal-est');
    if (!m) return;
    const body = document.getElementById('est-body');
    body.innerHTML = '<p style="text-align:center;padding:20px;color:#9AA3B2">Cargando estadísticas...</p>';
    m.classList.add('open');
    document.body.style.overflow = 'hidden';

    try {
        const r = await fetch('api.php?a=res&t=' + Date.now());
        const d = await r.json();
        if (!d.ok) throw new Error();
        const votos = d.votos || {};
        const total = d.total || 0;
        const entradas = Object.entries(votos).filter(([,v]) => v > 0).sort(([,a],[,b]) => b - a);
        if (!entradas.length) { body.innerHTML = '<p style="text-align:center;padding:30px;color:#9AA3B2">Aún no hay votos registrados.</p>'; return; }
        body.innerHTML = `
          <p style="font-size:.78rem;color:var(--g2);margin-bottom:18px;text-align:center">
            Total de votos: <strong style="color:var(--r)">${total.toLocaleString('es-PE')}</strong> &nbsp;|&nbsp; 
            Participantes: <strong style="color:var(--r)">${d.partic.toLocaleString('es-PE')}</strong>
          </p>
          ${entradas.map(([id, num], i) => {
            const p = PARTIDOS.find(x => x.id === id) || { nombre: id, emoji:'🗳️', img:'', candidato:'' };
            const pct = total > 0 ? ((num / total) * 100).toFixed(1) : 0;
            return `
            <div class="est-item">
              <div class="est-row">
                <div class="est-thumb">
                  <img src="${p.img}" alt="${p.nombre}" onerror="this.style.display='none';this.nextElementSibling.style.display='inline'" loading="lazy">
                  <span style="display:none;font-size:.8rem">${p.emoji}</span>
                </div>
                <div class="est-name" title="${p.nombre}">${p.nombre}</div>
                <div class="est-num">${num.toLocaleString('es-PE')}</div>
              </div>
              <div class="est-bar-bg"><div class="est-bar" style="width:${pct}%"></div></div>
              <div class="est-pct">${pct}%</div>
            </div>`;
          }).join('')}`;
    } catch {
        body.innerHTML = '<p style="text-align:center;padding:20px;color:#9AA3B2">Error cargando datos.</p>';
    }
}

/* ════════════════════════════════════════════════════════════
   MODALES LEGALES
════════════════════════════════════════════════════════════ */
function abrirTerminos() {
    const m = document.getElementById('modal-terms');
    if (m) { m.classList.add('open'); document.body.style.overflow = 'hidden'; }
}
function abrirPrivacidad() {
    const m = document.getElementById('modal-priv');
    if (m) { m.classList.add('open'); document.body.style.overflow = 'hidden'; }
}

function cerrarModal(id) {
    const m = document.getElementById(id);
    if (!m) return;
    m.classList.remove('open');
    document.body.style.overflow = '';
    // Parar video YouTube si hay
    const ifr = m.querySelector('iframe');
    if (ifr) { const src = ifr.src; ifr.src = ''; ifr.src = src.split('?')[0]; }
}

// Cerrar al click en overlay
document.addEventListener('click', e => {
    if (e.target.classList.contains('modal-overlay')) {
        const id = e.target.id;
        if (id) cerrarModal(id);
    }
});

// Cerrar con ESC
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        ['modal-nf','modal-est','modal-terms','modal-priv'].forEach(id => cerrarModal(id));
    }
});

/* ════════════════════════════════════════════════════════════
   EXPONER GLOBALES
════════════════════════════════════════════════════════════ */
window.seleccionar       = seleccionar;
window.enviarVoto        = enviarVoto;
window.abrirModal        = abrirModal;
window.abrirEstadisticas = abrirEstadisticas;
window.abrirTerminos     = abrirTerminos;
window.abrirPrivacidad   = abrirPrivacidad;
window.cerrarModal       = cerrarModal;
