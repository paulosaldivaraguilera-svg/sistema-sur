// SISTEMA // SUR - Base de Datos de Contenido Teórico e Histórico

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

" No es la conciencia del hombre la que determina su ser, sino el ser social el que determina su conciencia." - Marx`,
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

Es como una religión: el CAPITALISMO crea un FETICHE donde las mercancías parecen tener vida propia, y las relaciones humanas se vuelven invisibles detrás de las transacciones.

"A primera vista, una mercancía parece una cosa trivial, de comprensión inmediata. Su análisis demuestra que es una cosa endiabladamente complicada." - Marx`,
        quote: '"Las relaciones sociales aparecen invertidas: las cosas mandan sobre las personas."'
    },
    'lucha-clases': {
        title: 'LUCHA DE CLASES',
        type: 'ENGINE',
        color: '#00f2ff',
        text: `No es un error del sistema: ES EL MOTOR de la historia.

Desde que existen clases sociales, la historia es la crónica de su conflicto:
- Patricios vs. Plebeyos (Roma)
- Señores vs. Siervos (Feudalismo)
- Burguesía vs. Proletariado (Capitalismo)

En Chile actual, la lucha es entre:
- Quienes viven de su trabajo (el 99%)
- Quienes viven del trabajo ajeno (la oligarquía)

" La historia de todas las sociedades hasta nuestros días es la historia de la lucha de clases." - Manifiesto Comunista`,
        quote: '"O la aristocracia del trabajo aplasta a la plutocracia del capital, o la plutocracia del capital aplasta a la aristocracia del trabajo." - Recabarren'
    },

    // === VLADIMIR LENIN ===
    'imperialismo': {
        title: 'IMPERIALISMO',
        type: 'SYSTEM_ANALYSIS',
        color: '#ff0040',
        text: `El imperialismo es la fase superior, parasitaria y agonizante del capitalismo. Características:

1. MONOPOLIOS reemplazan a la competencia libre
2. EXPORTACIÓN DE CAPITALES reemplaza exportación de mercancías
3. DIVISIÓN DEL MUNDO entre potencias colonialistas
4. GUERRA MUNDIAL por reparto de mercados y territorios

El imperialismocrea:
- Opresión nacional en las colonias
- Desempleo estructural en los centros
- Guerras periódicas por recursos
- Parásitos que viven del trabajo mundial

"El imperialismo es la fase monopolista del capitalismo." - Lenin`,
        quote: '"El imperialismo es la adolescencia del capitalismo, y como toda adolescencia, es una etapa de excessos, de desatinos, de reacciones brutales." - Lenin'
    },
    'estado-revolucion': {
        title: 'ESTADO Y REVOLUCIÓN',
        type: 'OVERWRITE',
        color: '#ff0040',
        text: `El Estado NO es neutral. Es una MAQUINARIA de opresión de una clase sobre otra.

FUNCIONES DEL ESTADO BURGUÉS:
- Police y ejército (represión física)
- Leyes y tribunales (represión jurídica)
- Ideología y medios (represión cultural)

La revolución NO consiste en "cambiar el gobierno". Consiste en DESTRUIR esa maquinaria estatal y construir una nueva: el Estado Obrero.

"El Estado es un órgano de dominación de clase, un órgano de opresión de una clase por otra." - Lenin`,
        quote: '"Entre la sociedad burguesa y la sociedad comunista hay un período de transformación revolucionaria de la una en la otra. Hay también un período político de transición." - Marx'
    },
    'vanguardia': {
        title: 'PARTIDO DE VANGUARDIA',
        type: 'COMMAND',
        color: '#ff0040',
        text: `La rabia espontánea no basta. Se necesita una ORGANIZACIÓN de revolucionarios profesionales.

La vanguardia no es una élite separada del pueblo: es la parte más CONSCIENTE y disciplinada de la clase trabajadora.

FUNCIONES:
1. Teoría revolucionaria (entender el sistema)
2. Organización disciplinada (acción coordinada)
3. Conexión con las masas (no aislarse)
4. Estrategia y táctica (saber cuándo atacar)

"Dadnos una organización de revolucionarios y removeremos a Rusia." - Lenin`,
        quote: '"Sin teoría revolucionaria, no puede haber movimiento revolucionario." - Lenin'
    },
    'quehacer': {
        title: '¿QUÉ HACER?',
        type: 'STRATEGY',
        color: '#ff0040',
        text: `El dilema: ¿confiar en la espontaneidad del movimiento obrero o aportar organización externa?

La espontaneidad sola lleva a la colaboración de clases (sindicalismo económico, reformismo).

La conciencia revolucionaria debe ser TRAÍDA desde fuera, por intelectuales y revolucionarios dedicados.

" Los trabajadores podían espontáneamente llegar al tradeunionismo (conciencia de clase estrecha), pero la conciencia Socialdemócrata (conciencia de clase amplia) debía ser traída desde fuera." - Lenin`,
        quote: '"La historia de todos los países demuestra que la clase obrera, exclusivamente con sus propias fuerzas, puede desarrollar únicamente la conciencia tradeunionista." - Lenin'
    },

    // === JOSEF STALIN ===
    'socialismo-pais': {
        title: 'SOCIALISMO EN UN SOLO PAÍS',
        type: 'THEORY',
        color: '#ffbf00',
        text: `Tesis desarrollada por Stalin: el socialismo puede victoriosamente construirse en un solo país (Rusia), aunque la victoria final mundial requiere revolución en otros países.

BASES:
1. El proletariado puede tomar el poder en un solo país
2. Ese país puede construir socialismocomo base para la revolución mundial
3. Mientras exista un equilibrio de fuerzas mundial (capitalismo vs. socialismo)

CRÍTICA:
Lenin ya había sugerido esto antes. Stalin lo sistematizó como política oficial frente al fracaso de revoluciones en Europa (Alemania, Hungría 1919).

" La construcción del socialismo en un solo país es completamente posible." - Stalin`,
        quote: '"El socialismo puede construirse y se construirá en un solo país, el СССР." - Stalin'
    },
    'construccion': {
        title: 'CONSTRUCCIÓN DEL SOCIALISMO',
        type: 'PRACTICE',
        color: '#ffbf00',
        text: `Stalin lideró la transformación de Rusia de país agrario a potencia industrial en una década (1928-1938).

POLÍTICAS:
1. INDUSTRIALIZACIÓN PLANIFICADA
   - Metas quinquenales
   - Prioridad a industria pesada
   - Movilización del trabajo

2. COLECTIVIZACIÓN AGRARIA
   - Koljoses y Sovjoses
   - Liquidación del kulak (burguesía rural)
   - Granja colectiva

3. TRANSFORMACIÓN CULTURAL
   - Alfabetización masiva
   - Educación superior gratuita
   - Ciencia al servicio del pueblo

RESULTADO: De país derrotado a segunda potencia mundial en 15 años.`,
        quote: '"Atrasados economically, nos vemos amenazados de ser aplastados. O realizemos la industrialización y la collectivización, o pereceremos." - Stalin'
    },
    'cuestion-nacional': {
        title: 'CUESTIÓN NACIONAL',
        type: 'POLICY',
        color: '#ffbf00',
        text: `Stalin analizó las diferentes formas de nación y desarrolló política de acercamiento entre pueblos.

PRINCIPIOS:
1. Derecho de las naciones a la autodeterminación
2. Cada nación tiene derecho a su propio Estado
3. Pero también derecho a unite con otras voluntariamente
4. La burguesía nacional puede ser aliada o enemiga según contexto

ANÁLISIS DE NACIONES:
- Naciones históricas (con Estado propio)
- Naciones sin Estado (oprimidas)
- Nacionalidades (con idioma propio, sin literatura)

"Las naciones tienen derecho a decidir su propio destino." - Stalin`,
        quote: '"El Estado es la forma de organización de una nación para su desenvolvimiento histórico." - Stalin'
    },

    // === PC CHILE ===
    'recabarren': {
        title: 'LUIS E. RECABARREN',
        type: 'FUNDADOR',
        color: '#00f2ff',
        text: `El padre del movimiento obrero chileno. Fundador del Partido Comunista de Chile.

BIOGRAFÍA:
- Nació en Iquique (1876)
- Trabajador del salitre desde los 12 años
- Periodista y parlamentario
- Fundó periódicos obreros: "El Despertar de los Trabajadores"

PENSAMIENTO:
- La emancipación de los trabajadores debe ser obra de los trabajadores mismos
- La educación como herramienta de liberación
- Organización sindical y política
- Crítica al clericalismo y al capitalismo

" No hay salvación para el pueblo que no sea la organización y la propaganda de sus derechos." - Recabarren`,
        quote: '"El Partido Comunista de Chile tiene un solo programa: el bienestar de la clase obrera."'
    },
    'unidad-popular': {
        title: 'UNIDAD POPULAR',
        type: 'REWRITE',
        color: '#ff0040',
        text: `El gobierno de Salvador Allende (1970-1973). El primer gobierno democráticamente elegido con un programa socialista.

LOGROS:
- Nacionalización del cobre (sin indemnización)
- Reforma agraria profunda
- Nacionalización de la banca
- Aumento del 30% en salarios reales
- Medio litro de leche para cada niño chileno
- Expansión de la educación pública

ESTRATEGIA:
- Vía pacífica al socialismo
- Dentro de la institucionalidad burguesa
- Apoyándose en las masas populares

RESULTADO:
La burguesía, junto con EE.UU.,互联aron un Golpe de Estado que destruyó el experimento.

"La historia de la humanidad no registra un solo caso de que una oligarquía entregue voluntariamente sus privilegios." - Allende`,
        quote: '"La historia la hacen los pueblos." - Salvador Allende, último discurso'
    },
    'golpe': {
        title: 'GOLPE DE ESTADO 1973',
        type: 'FATAL',
        color: '#ff0040',
        text: `11 de septiembre de 1973. La democracia chilena fue sepultada por una intervención militar fascista.

CRONOLOGÍA:
- Bombardeo de La Moneda
- Muerte de Salvador Allende
- Comienza la dictadura de Pinochet (17 años)

TERRORISMO DE ESTADO:
- 3.197 desaparecidos
- 28.000 torturados
- 200.000 exiliados
- MWILES de perseguidos

FINANCIAMIENTO:
La CIA financiógolpe (Operación Cóndor). EE.UU. quería "una sociedad honesta" (léase: rentable para intereses gringos).

"L El ladrillo." - Base teórica del modelo económico de la dictadura`,
        quote: '"La violencia de la oligarquía chilena fue siempre la respuesta a la esperanza del pueblo."'
    },
    'resistencia': {
        title: 'RESISTENCIA',
        type: 'CLANDESTINE',
        color: '#00ff88',
        text: `Período 1973-1990. La lucha del pueblo chileno contra la dictadura.

FORMAS DE RESISTENCIA:
- Clandestinidad política (PCCh, MIR)
- Solidarity internacional
- Cultura underground
- Organizaciones de derechos humanos
- Sindicalismo clandestino

EL PCCH EN LA CLANDESTINIDAD:
- Mantuvo organización pese a represión
- Dos direcciones asesinado (1976, 1980)
- Gladys Marín asumió liderazgo
- Volodia Teitelboim survived incendio de La Moneda

LOGROS:
- Derrocamiento de Pinochet (1988)
- Transición a democracia (1990)

"El Partido resiste y seguirá resistiendo." - Gladys Marín`,
        quote: '"A la verdad no renuncio, a la justicia no renuncio." - Gladys Marín'
    },
    'revuelta': {
        title: 'REVUELTA SOCIAL 2019',
        type: 'GLITCH',
        color: '#ffbf00',
        text: `18 de octubre de 2019. El sistema chileno colapsó.

CAUSAS:
- 30 años de modelo neoliberal
- Desigualdad estructural
- Crisis de vivienda, salud, educación
- Fraude electoral (Metro)

CONSECUENCIAS:
- Movilización masiva (millones en calles)
- Paro nacional
- Cabildo abiertos
- Apertura a proceso constituyente

RESULTADO:
Plebicito 2020 (apruebo vs rechazo). Aunque el proceso fue traicionado por la élite.

"No son 30 pesos, son 30 años." - Consigna popular`,
        quote: '"Chile despertó" - Consigna de la revuelta'
    },
    'corvalan': {
        title: 'LUIS CORVALÁN',
        type: 'SECRETARIO GENERAL',
        color: '#00ff88',
        text: `Líder intelectual del Partido Comunista de Chile (1954-1987).

BIOGRAFÍA:
- Nacido en 1916
- Abogado y periodista
- Elegido SG en 1954
- Secuestrado por Pinochet (1976)
- Intercambiado por disidente soviético

PENSAMIENTO:
- Vía pacífica al socialismo
- Democracia popular
- Unidad con sectores progresistas
- Defensa de DDHH

" La democracia verdadera se construye con el pueblo y para el pueblo." - Corvalán`,
        quote: '"No hay camino revolucionario sin la mayoría del pueblo." - Corvalán'
    },
    'teitelboim': {
        title: 'VOLODIA TEITELBOIM',
        type: 'INTELECTUAL',
        color: '#00ff88',
        text: `Escritor, poeta y dirigentes del PCCh. Sobreviviente del incendio de La Moneda.

BIOGRAFÍA:
- Nacido en 1912
- Abogado y escritor
- Secretary General (1987-1994)
- Senator de la República
- Premio Nacional de Literatura (2002)

PENSAMIENTO:
- Marxismo humanista
- Defensa de la cultura popular
- Memoria histórica
- Unitad de la izquierda

"El comunismo es la juventud del mundo, lo que vendrá, lo que aún no es pero que quiere ser." - Teitelboim`,
        quote: '"La memoria es el arma de los pueblos." - Teitelboim'
    },
    'gladys-marin': {
        title: 'GLADYS MARÍN',
        type: 'VANGUARDIA',
        color: '#00ff88',
        text: `Presidenta del Partido Comunista de Chile (1994-2002).

BIOGRAFÍA:
- Nacida en 1921
- Profesora normalista
- Ingresó al PCCh a los 17 años
- Primera mujer en dirigir un partido político mayoritario

PENSAMIENTO:
- Inquebrantable principios comunistas
- Crítica a la transición "consentida"
- Defensa de los DDHH
- unitad popular

"A la verdad no renuncio, a la justicia no renuncio." - Gladys Marín`,
        quote: '"Mi vida ha sido consagrada a la causa del pueblo." - Gladys Marín'
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
    
    content.innerHTML = `
        <p class="text-lg">${data.text}</p>
        <div class="border-l-4 p-4 mt-6" style="border-color: ${data.color}; background: ${data.color}10;">
            <p class="italic font-serif text-xl text-white">${data.quote}</p>
        </div>
    `;
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// Partículas
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let width, height, particles = [];

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.colors = ['#00f2ff', '#ff0040', '#ffbf00', '#00ff88'];
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        if (this.y < 0) this.y = height;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.4;
        ctx.fillRect(this.x, this.y, this.size, this.size);
        ctx.globalAlpha = 1;
    }
}

function init() {
    resize();
    for (let i = 0; i < 100; i++) particles.push(new Particle());
    animate();
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
}

window.addEventListener('resize', resize);
init();

// Cerrar modal con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});
