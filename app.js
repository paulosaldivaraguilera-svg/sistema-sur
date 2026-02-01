// SISTEMA // SUR - Base de Datos de Contenido Teórico e Histórico v3.1

const db = {
    // === KARL MARX ===
    'materialismo': {
        title: 'MATERIALISMO DIALÉCTICO',
        type: 'KERNEL',
        color: '#00f2ff',
        text: `El materialismo dialéctico es el método filosófico desarrollado por Marx y Engels. No es un dogma, sino una herramienta para analizar la realidad en su desarrollo histórico.

La realidad no es estática: está en CONSTANTE MOVIMIENTO y transformación. Todo fenómeno genera su contrario, y de esa contradicción nace el cambio.

PRINCIPIOS BÁSICOS:
1. Todo está relacionado con todo (conexión universal)
2. Todo cambia (desarrollo infinito)
3. Los cambios son graduales (cantidad → cualidad)
4. La contradicción es la fuente del desarrollo (lucha de contrarios)

"No es la conciencia del hombre la que determina su ser, sino el ser social el que determina su conciencia." - Marx`,
        quote: '"La filosofía no cambia nada, pero el mundo necesita cambiarse a sí mismo." - Marx'
    },
    'plusvalia': {
        title: 'PLUSVALÍA',
        type: 'EXPLOIT',
        color: '#00f2ff',
        text: `El mecanismo fundamental de la explotación capitalista. El trabajador produce más valor del que recibe como salario.

MECANISMO:
- Trabajas 8 horas
- En 2 horas produces el valor de tu salario
- Las 6 horas restantes son TRABAJO NO REMUNERADO
- Ese trabajo extra se llama PLUSVALÍA

Esa diferencia es la GANANCIA del capitalismo. No es "productividad" ni "innovación": es robo sistemático del tiempo de vida del trabajador.

"El capital es trabajo muerto que, como un vampiro, vive solo de chupar trabajo vivo." - Marx`,
        quote: '"Quien produce todo no tiene nada; quien no produce nada lo tiene todo." - Marx'
    },
    'fetichismo': {
        title: 'FETICHISMO DE LA MERCANCÍA',
        type: 'LOGIC',
        color: '#00f2ff',
        text: `Las relaciones sociales entre personas se disfrazan de relaciones entre COSAS.

En el capitalismo:
- El trabajo humano aparece como valor de la mercancía
- Las relaciones de explotación parecen "intercambio justo"
- El dinero parece generar más dinero (no el trabajo ajeno)

Es como una religión: el CAPITALISMO crea un FETICHE donde las mercancías parecen tener vida propia.`,
        quote: '"Las relaciones sociales aparecen invertidas: las cosas mandan sobre las personas."'
    },
    'lucha-clases': {
        title: 'LUCHA DE CLASES',
        type: 'ENGINE',
        color: '#00f2ff',
        text: `No es un error del sistema: ES EL MOTOR de la historia.

Desde que existen clases sociales, la historia es la crónica de su conflicto. En Chile actual, la lucha es entre quienes viven de su trabajo y quienes viven del trabajo ajeno.

"La historia de todas las sociedades hasta nuestros días es la historia de la lucha de clases." - Manifiesto Comunista`,
        quote: '"O la aristocracia del trabajo aplasta a la plutocracia del capital." - Recabarren'
    },
    'engels-origen': {
        title: 'EL ORIGEN DE LA FAMILIA (Engels)',
        type: 'CLASSICS',
        color: '#00f2ff',
        text: `Obra clásica de Engels (1884) donde analiza el origen de la familia, el matrimonio y la propiedad privada.

La familia monogámica es la primera forma de explotación de la mujer por el hombre, coincidiendo con el surgimiento de la propiedad privada.

"El grado de emancipación de la mujer es la medida natural de la emancipación general." - Engels`,
        quote: '"La monogamia fue la primera forma de familia que no se basó en condiciones naturales, sino económicas." - Engels'
    },

    // === ROSA LUXEMBURG ===
    'luxemburg-reforma': {
        title: 'REFORMA O REVOLUCIÓN (Luxemburg)',
        type: 'STRATEGY',
        color: '#ff0040',
        text: `Obra de Rosa Luxemburg (1900) que analiza la relación entre reformas graduales y transformación revolucionaria.

TESIS CENTRAL: El reformismo es una ilusión peligrosa. Sin perspectiva revolucionaria, las reformas se vuelven imposibles de defender.

"El socialismo no es un régimen que se decreta desde arriba. Es una conquista de las masas." - Luxemburg`,
        quote: '"La libertad es siempre la libertad de quien piensa diferente." - Luxemburg'
    },
    'luxemburg-acumulacion': {
        title: 'LA ACUMULACIÓN DEL CAPITAL (Luxemburg)',
        type: 'ECONOMICS',
        color: '#ff0040',
        text: `Obra de Rosa Luxemburg (1913) donde analiza los límites internos del capitalismo.

El capitalismo necesita expandirse constantemente hacia espacios no capitalistas para sobrevivir. Pero esa expansión tiene límites: el imperialismo y la guerra.`,
        quote: '"La crisis final del capitalismo será también la crisis de la civilización humana." - Luxemburg'
    },

    // === VLADIMIR LENIN ===
    'imperialismo': {
        title: 'IMPERIALISMO',
        type: 'SYSTEM_ANALYSIS',
        color: '#ff0040',
        text: `El imperialismo es la fase superior, parasitaria y agonizante del capitalismo.

CARACTERÍSTICAS:
1. MONOPOLIOS reemplazan a la competencia libre
2. EXPORTACIÓN DE CAPITALES reemplaza exportación de mercancías
3. DIVISIÓN DEL MUNDO entre potencias colonialistas
4. GUERRA MUNDIAL por reparto de mercados

"El imperialismo es la fase monopolista del capitalismo." - Lenin`,
        quote: '"El imperialismo es la adolescencia del capitalismo." - Lenin'
    },
    'estado-revolucion': {
        title: 'ESTADO Y REVOLUCIÓN',
        type: 'OVERWRITE',
        color: '#ff0040',
        text: `El Estado NO es neutral. Es una MAQUINARIA de opresión de una clase sobre otra.

La revolución NO consiste en "cambiar el gobierno". Consiste en DESTRUIR esa maquinaria estatal y construir una nueva: el Estado Obrero.

"El Estado es un órgano de dominación de clase, un órgano de opresión de una clase por otra." - Lenin`,
        quote: '"Entre la sociedad burguesa y la sociedad comunista hay un período de transformación revolucionaria." - Marx'
    },
    'vanguardia': {
        title: 'PARTIDO DE VANGUARDIA',
        type: 'COMMAND',
        color: '#ff0040',
        text: `La rabia espontánea no basta. Se necesita una ORGANIZACIÓN de revolucionarios profesionales.

La vanguardia es la parte más CONSCIENTE y disciplinada de la clase trabajadora.

"Dadnos una organización de revolucionarios y removeremos a Rusia." - Lenin`,
        quote: '"Sin teoría revolucionaria, no puede haber movimiento revolucionario." - Lenin'
    },
    'quehacer': {
        title: '¿QUÉ HACER?',
        type: 'STRATEGY',
        color: '#ff0040',
        text: `La espontaneidad sola lleva a la colaboración de clases. La conciencia revolucionaria debe ser TRAÍDA desde fuera, por intelectuales y revolucionarios dedicados.`,
        quote: '"Los trabajadores pueden desarrollar únicamente la conciencia tradeunionista." - Lenin'
    },

    // === MAO ZEDONG ===
    'mao-contradicciones': {
        title: 'LAS CONTRADICCIONES (Mao)',
        type: 'PHILOSOPHY',
        color: '#ffbf00',
        text: `Mao desarrolló la teoría de las contradicciones en el socialismO (1957).

TIPOS:
1. Principales: Entre las clases antagónicas
2. Secundarias: Entre diferentes sectores del pueblo
3. Antagónicas: No pueden resolverse dentro del sistema

"Sin análisis no hay buena política." - Mao`,
        quote: '"Las masas populares son las fuerzas creadoras de la historia." - Mao'
    },
    'mao-guerra': {
        title: 'LA GUERRA POPULAR (Mao)',
        type: 'MILITARY',
        color: '#ffbf00',
        text: `Mao desarrolló la estrategia de guerrilla basada en las masas.

PRINCIPIOS:
1. El pueblo es el mar donde nadan los guerrilleros
2. Larga guerra contra invasor
3. Avanzar estratégicamente
4. Unidad de comando

"El poder político crece de la boca del rifle." - Mao`,
        quote: '"La guerra es la continuación de la política por otros medios." - Mao'
    },

    // === JOSEF STALIN ===
    'socialismo-pais': {
        title: 'SOCIALISMO EN UN SOLO PAÍS',
        type: 'THEORY',
        color: '#ffbf00',
        text: `Tesis de Stalin: el socialismo puede victoriosamente construirse en un solo país (Rusia).

"La construcción del socialismo en un solo país es completamente posible." - Stalin`,
        quote: '"El socialismo puede construirse en un solo país, el СССР." - Stalin'
    },
    'construccion': {
        title: 'CONSTRUCCIÓN DEL SOCIALISMO',
        type: 'PRACTICE',
        color: '#ffbf00',
        text: `Stalin lideró la transformación de Rusia de país agrario a potencia industrial (1928-1938): Industrialización planificada, Colectivización agraria, Transformación cultural.`,
        quote: '"O realizemos la industrialización o pereceremos." - Stalin'
    },
    'cuestion-nacional': {
        title: 'CUESTIÓN NACIONAL',
        type: 'POLICY',
        color: '#ffbf00',
        text: `Stalin analizó las diferentes formas de nación y desarrolló política de acercamiento entre pueblos. Derecho de las naciones a la autodeterminación.`,
        quote: '"Las naciones tienen derecho a decidir su propio destino." - Stalin'
    },

    // === ANTONIO GRAMSCI ===
    'gramsci-hegemonia': {
        title: 'HEGEMONÍA CULTURAL (Gramsci)',
        type: 'CULTURE',
        color: '#bf00ff',
        text: `El dominio de una clase se mantiene no solo por la fuerza, sino por el consenso cultural a través de Iglesia, medios, escuelas, familia.

La contrahegemonía: construir una nueva cultura alternativa que desafíe la hegemonía burguesa.

"La hegemonía es consentimiento activo de los gobernados." - Gramsci`,
        quote: '"Pessimismo del intelecto, optimismo de la voluntad." - Gramsci'
    },
    'gramsci-posiciones': {
        title: 'GUERRA DE POSICIONES (Gramsci)',
        type: 'STRATEGY',
        color: '#bf00ff',
        text: `En sociedades occidentales avanzadas, la revolución requiere conquistar terreno cultural (guerra de posiciones).

Conquistar instituciones culturales, formar intelectuales orgánicos, construir bloque histórico alternativo.`,
        quote: '"La guerra de posiciones es la única posible para clases modernas." - Gramsci'
    },

    // === CHE GUEVARA ===
    'che-nuevo': {
        title: 'EL HOMBRE NUEVO (Che)',
        type: 'ETHICS',
        color: '#00ff88',
        text: `El Che desarrolló el concepto del "hombre nuevo" para el socialismO.

CARACTERÍSTICAS:
- Moral superior (no motivado por dinero)
- Solidaridad como principio
- Trabajo voluntario
- Contra el egoísmo

"El verdadero revolucionario está guiado por grandes sentimientos de amor." - Che`,
        quote: '"El socialismo económico sin moral revolucionaria no me interesa." - Che'
    },
    'che-moral': {
        title: 'MORAL REVOLUCIONARIA (Che)',
        type: 'ETHICS',
        color: '#00ff88',
        text: `El Che enfatizó que el socialismone puede basarse solo en incentivos materiales. Se necesita moral revolucionaria: Antiegoísmo, Antindividualismo, Internacionalismo, Ejemplaridad.`,
        quote: '"Nous devemos ser los primeros en pedirnos cuentas." - Che'
    },

    // === PC CHILE ===
    'recabarren': {
        title: 'LUIS E. RECABARREN',
        type: 'FUNDADOR',
        color: '#00f2ff',
        text: `El padre del movimiento obrero chileno. Fundador del Partido Comunista de Chile (1876-1924).

"La emancipación de los trabajadores debe ser obra de los trabajadores mismos." - Recabarren`,
        quote: '"No hay salvación para el pueblo que no sea la organización." - Recabarren'
    },
    'pc-fundacion': {
        title: 'FUNDACIÓN DEL PCCh (1922)',
        type: 'HISTORY',
        color: '#00f2ff',
        text: `El Partido Comunista de Chile fue fundado el 24 de junio de 1922, bajo influencia de la Revolución Rusa (1917). Fundadores: Recabarren, Galleguillos, Vargas Puebla, Labbé, Lafertte.`,
        quote: '"La emancipación de los trabajadores debe ser obra de los trabajadores mismos."'
    },
    'corvalan': {
        title: 'LUIS CORVALÁN',
        type: 'SECRETARIO GENERAL',
        color: '#00ff88',
        text: `Líder intelectual del PCCh (1954-1987). Secuestrado por Pinochet, intercambiado por disidente soviético.

"La democracia verdadera se construye con el pueblo y para el pueblo." - Corvalán`,
        quote: '"No hay camino revolucionario sin la mayoría del pueblo." - Corvalán'
    },
    'teitelboim': {
        title: 'VOLODIA TEITELBOIM',
        type: 'INTELECTUAL',
        color: '#00ff88',
        text: `Escritor, poeta y dirigente del PCCh. Sobreviviente del incendio de La Moneda. Premio Nacional de Literatura 2002.

"El comunismo es la juventud del mundo." - Teitelboim`,
        quote: '"La memoria es el arma de los pueblos." - Teitelboim'
    },
    'gladys-marin': {
        title: 'GLADYS MARÍN',
        type: 'VANGUARDIA',
        color: '#00ff88',
        text: `Presidenta del PCCh (1994-2002). Primera mujer en dirigir un partido político mayoritario en Chile.

"A la verdad no renuncio, a la justicia no renuncio." - Gladys Marín`,
        quote: '"Mi vida ha sido consagrada a la causa del pueblo." - Gladys Marín'
    },

    // === HISTORIA DE CHILE ===
    'up-1970': {
        title: 'UNIDAD POPULAR (1970-1973)',
        type: 'REWRITE',
        color: '#ff0040',
        text: `Gobierno de Salvador Allende. Primer gobierno democráticamente elegido con un programa socialista.

LOGROS: Nacionalización del cobre, Reforma agraria, Nacionalización de la banca, Aumento salarial, Leche para todos.

RESULTADO: Golpe de Estado respaldado por EE.UU.`,
        quote: '"La historia la hacen los pueblos." - Allende'
    },
    'golpe-73': {
        title: 'GOLPE DE ESTADO 1973',
        type: 'FATAL',
        color: '#ff0040',
        text: `11 de septiembre de 1973. La democracia chilena fue sepultada por una intervención militar fascista.

TERRORISMO DE ESTADO: 3.197 desaparecidos, 28.000 torturados, 200.000 exiliados.`,
        quote: '"La violencia de la oligarquía fue siempre la respuesta a la esperanza del pueblo."'
    },
    'resistencia': {
        title: 'RESISTENCIA (1973-1990)',
        type: 'CLANDESTINE',
        color: '#00ff88',
        text: `La lucha del pueblo chileno contra la dictadura: Clandestinidad política, Solidaridad internacional, Cultura underground, Organizaciones de DDHH.

RESULTADO: Derrocamiento de Pinochet (1988), Transición a democracia (1990).`,
        quote: '"El Partido resiste y seguirá resistiendo." - Gladys Marín'
    },
    'revuelta-2019': {
        title: 'REVUELTA SOCIAL 2019',
        type: 'GLITCH',
        color: '#ffbf00',
        text: `18 de octubre de 2019. El sistema chileno colapsó por 30 años de modelo neoliberal.

"No son 30 pesos, son 30 años." - Consigna popular`,
        quote: '"Chile despertó"'
    },
    'huelga-salitre': {
        title: 'HUELGA DEL SALITRE (1907)',
        type: 'HISTORY',
        color: '#00f2ff',
        text: `Huelga masiva de trabajadores salitreros en Iquique. La respuesta fue la Matanza de la Plaza de la Democracia (21 de diciembre de 1907), donde murieron más0 trabajadores y sus familias.`,
        quote: '"Recordar de 200 para no repetir."'
    }
};

// Funciones del Modal
function openModal(id) {
    const data = db[id];
    if (!data) return;
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const content = document.getElementById('modal-content');
    title.innerText = data.title;
    title.style.color = data.color;
    content.innerHTML = `<p class="text-lg">${data.text}</p><div class="border-l-4 p-4 mt-6" style="border-color: ${data.color}; background: ${data.color}10;"><p class="italic font-serif text-xl text-white">${data.quote}</p></div>`;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    document.getElementById('modal').classList.remove('flex');
}

// Partículas
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let width, height, particles = [];

function resize() { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; }

class Particle {
    constructor() { this.init(); }
    init() { this.x = Math.random() * width; this.y = Math.random() * height; this.l = Math.random() * 20 + 10; this.v = Math.random() * 15 + 10; }
    draw() { ctx.strokeStyle = 'rgba(174, 194, 224, 0.5)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(this.x, this.y); ctx.lineTo(this.x + this.l * 0.1, this.y + this.l); ctx.stroke(); }
    update() { this.y += this.v; if (this.y > height) { this.y = -this.l; this.x = Math.random() * width; } this.draw(); }
}

function init() {
    resize();
    for (let i = 0; i < 100; i++) particles.push(new Particle());
    animate();
}

function animate() { ctx.clearRect(0, 0, width, height); particles.forEach(p => p.update()); requestAnimationFrame(animate); }

window.addEventListener('resize', resize);
init();

document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
