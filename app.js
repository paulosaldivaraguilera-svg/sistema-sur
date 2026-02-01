// SISTEMA // SUR - Base de Datos EXTENDIDA v3.2
// Expansión: Más PC Chile, Más Historia, Más Teoría Latinoamericana

const db = {
    // ============================================
    // KARL MARX - COMPLETO
    // ============================================
    'materialismo': {
        title: 'MATERIALISMO DIALÉCTICO',
        type: 'KERNEL',
        color: '#00f2ff',
        text: `El materialismo dialéctico es el método filosófico desarrollado por Marx y Engels. No es un dogma, sino una herramienta para analizar la realidad en su desarrollo histórico.

PRINCIPIOS:
1. TODO ESTÁ RELACIONADO (conexión universal)
2. TODO CAMBIA (desarrollo infinito)
3. LOS CAMBIOS SON GRADUALES (cantidad → cualidad)
4. LA CONTRADICCIÓN es la fuente del desarrollo

"No es la conciencia del hombre la que determina su ser, sino el ser social el que determina su conciencia." - Marx (Prólogo a La Contribución)`,
        quote: '"La filosofía no cambia nada, pero el mundo necesita cambiarse a sí mismo." - Marx'
    },
    'plusvalia': {
        title: 'PLUSVALÍA',
        type: 'EXPLOIT',
        color: '#00f2ff',
        text: `El mecanismo fundamental de la explotación capitalista.

MECANISMO:
- Trabajas 8 horas
- En 2 horas produces el valor de tu salario
- Las 6 horas restantes son TRABAJO NO REMUNERADO
- Ese trabajo extra = PLUSVALÍA (la ganancia)

"El capital es trabajo muerto que, como un vampiro, vive solo de chupar trabajo vivo." - El Capital`,
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

Es como una religión: las mercancías parecen tener vida propia.`,
        quote: '"Las relaciones sociales aparecen invertidas: las cosas mandan sobre las personas."'
    },
    'lucha-clases': {
        title: 'LUCHA DE CLASES',
        type: 'ENGINE',
        color: '#00f2ff',
        text: `No es un error del sistema: ES EL MOTOR de la historia.

- Patricios vs. Plebeyos (Roma)
- Señores vs. Siervos (Feudalismo)  
- Burguesía vs. Proletariado (Capitalismo)

"La historia de todas las sociedades hasta nuestros días es la historia de la lucha de clases." - Manifiesto (1848)`,
        quote: '"O la aristocracia del trabajo aplasta a la plutocracia del capital." - Recabarren'
    },
    'alienacion': {
        title: 'ALIENACIÓN',
        type: 'PSYCHOLOGY',
        color: '#00f2ff',
        text: `El trabajador está alienado (separado) de:
1. SU TRABAJO (no decide qué producir)
2. LOS PRODUCTOS (no le pertenecen)
3. OTROS TRABAJADORES (competencia)
4. SU PROPIA ESENCIA (reducido a máquina de trabajar)

"El trabajador se siente libre solo en sus funciones animales." - Marx`,
        quote: '"El trabajo alienado es trabajo forzado." - Marx'
    },
    'manifiesto': {
        title: 'MANIFIESTO COMUNISTA',
        type: 'HISTORY',
        color: '#00f2ff',
        text: `Publicado por Marx y Engels en 1848. La biblia del movimiento obrero.

FRASES CÉLEBRES:
- "Un fantasma recorre Europa"
- "Proletarios de todos los países, uníos"
- "Los资本家 no tienen patria"

PROGRAMA:
- Expropiación de la propiedad privada
- Centralización del crédito
- Nacionalización de los medios de producción`,
        quote: '"La historia de toda sociedad hasta hoy es la historia de la lucha de clases."'
    },

    // ============================================
    // FRIEDRICH ENGELS
    // ============================================
    'engels-origen': {
        title: 'EL ORIGEN DE LA FAMILIA',
        type: 'CLASSICS',
        color: '#00f2ff',
        text: `Engels (1884) analiza el origen de la familia y el matrimonio.

TESIS: La familia monogámica es la primera forma de explotación de la mujer por el hombre, coincidiendo con el surgimiento de la propiedad privada.

"El grado de emancipación de la mujer es la medida natural de la emancipación general." - Engels`,
        quote: '"La monogamia fue la primera forma de familia que no se basó en condiciones naturales, sino económicas." - Engels'
    },
    'engels-dialectica': {
        title: 'DIALÉCTICA DE LA NATURALEZA',
        type: 'PHILOSOPHY',
        color: '#00f2ff',
        text: `Engels desarrolló los principios dialécticos aplicados a las ciencias.

LEYES:
1. Transformación de cantidad en cualidad
2. Penetración de los contrarios
3. Negación de la negación

APLICACIÓN: Evolución biológica, Geología, Química, Física.`,
        quote: '"La naturaleza es la prueba de la dialéctica." - Engels'
    },
    'engels-casa': {
        title: 'EL TRABAJO DE LA MUJER',
        type: 'FEMINISM',
        color: '#00f2ff',
        text: `Engels analizó cómo el trabajo doméstico no remunerado reproduce la fuerza de trabajo.

El trabajo doméstico:
- No es reconocido como "trabajo"
- Es "natural" de la mujer
- Permite al capital no pagar ese costo

"La emancipación de la mujer será la obra de la mujer misma." - Engels`,
        quote: '"El sistema doméstico actual es la base de la subordinación femenina." - Engels'
    },

    // ============================================
    // ROSA LUXEMBURG
    // ============================================
    'luxemburg-reforma': {
        title: 'REFORMA O REVOLUCIÓN',
        type: 'STRATEGY',
        color: '#ff0040',
        text: `Obra de Rosa Luxemburg (1900).

TESIS: El reformismo es una ilusión peligrosa. Sin perspectiva revolucionaria, las reformas son absorbidas por el capitalismo.

"El socialismo no es un régimen que se decreta desde arriba. Es una conquista de las masas." - Luxemburg`,
        quote: '"La libertad es siempre la libertad de quien piensa diferente." - Luxemburg'
    },
    'luxemburg-acumulacion': {
        title: 'LA ACUMULACIÓN DEL CAPITAL',
        type: 'ECONOMICS',
        color: '#ff0040',
        text: `Obra de Rosa Luxemburg (1913). El capitalismo necesita expandirse hacia espacios no capitalistas para sobrevivir.

LIMITES:
- Imperialismo (competencia por colonias)
- Guerras mundiales
- Crisis periódicas

"El capital es una relación social, no una cosa." - Luxemburg`,
        quote: '"La crisis final del capitalismo será también la crisis de la civilización humana." - Luxemburg'
    },
    'luxemburg-huelga': {
        title: 'LA HUELGA DE MASAS',
        type: 'TACTICS',
        color: '#ff0040',
        text: `Rosa Luxemburg desarrolló la teoría de la huelga de masas como weapon del proletariado.

La huelga de masas:
- No es solo económica, es política
- Desorganiza al Estado
- Crea conciencia colectiva

"Cuando los obreros hablan de huelga, los amos hablan de incendio." - Luxemburg`,
        quote: '"La huelga de masas es el método específico de la agitación política de masas." - Luxemburg'
    },

    // ============================================
    // VLADIMIR LENIN
    // ============================================
    'imperialismo': {
        title: 'IMPERIALISMO',
        type: 'SYSTEM_ANALYSIS',
        color: '#ff0040',
        text: `El imperialismo es la fase superior del capitalismo (1916).

CARACTERÍSTICAS:
1. Monopolios reemplazan competencia
2. Exportación de capitales > exportación de mercancías
3. División del mundo entre potencias
4. Guerras por reparto de mercados

"El imperialismo es la fase monopolista del capitalismo." - Lenin`,
        quote: '"El imperialismo es la adolescencia del capitalismo." - Lenin'
    },
    'estado-revolucion': {
        title: 'ESTADO Y REVOLUCIÓN',
        type: 'OVERWRITE',
        color: '#ff0040',
        text: `El Estado NO es neutral. Es MAQUINARIA de opresión de clase.

FUNCIONES:
- Ejército y policía (represión física)
- Leyes y tribunales (represión jurídica)
- Medios e ideología (represión cultural)

La revolución: DESTRUIR esa maquinaria y construir el Estado Obrero.`,
        quote: '"Entre la sociedad burguesa y la comunista hay un período de transformación revolucionaria." - Marx'
    },
    'vanguardia': {
        title: 'PARTIDO DE VANGUARDIA',
        type: 'COMMAND',
        color: '#ff0040',
        text: `La rabia espontánea no basta. Se necesita ORGANIZACIÓN de revolucionarios profesionales.

"Dadnos una organización de revolucionarios y removeremos a Rusia." - Lenin (1902)`,
        quote: '"Sin teoría revolucionaria, no puede haber movimiento revolucionario." - Lenin'
    },
    'quehacer': {
        title: '¿QUÉ HACER?',
        type: 'STRATEGY',
        color: '#ff0040',
        text: `La espontaneidad sola lleva a la colaboración de clases (sindicalismo económico).

La conciencia revolucionaria debe ser TRAÍDA desde fuera, por intelectuales y revolucionarios dedicados.`,
        quote: '"Los trabajadores pueden desarrollar únicamente la conciencia tradeunionista." - Lenin'
    },
    'terrorismo': {
        title: 'TERRORISMO Y COMUNISMO',
        type: 'STRATEGY',
        color: '#ff0040',
        text: `Lenin respondió a los SR (socialistas-revolucionarios) que el terror individual no funciona.

RAZONES:
1. Desorienta a las masas
2. Justifica la represión del Estado
3. Aísla al revolucionario

"El terrorismo de masas, no el terror individual." - Lenin`,
        quote: '"No hay que buscar la salvación en el terror individual." - Lenin'
    },

    // ============================================
    // MAO ZEDONG
    // ============================================
    'mao-contradicciones': {
        title: 'LAS CONTRADICCIONES',
        type: 'PHILOSOPHY',
        color: '#ffbf00',
        text: `Mao desarrolló la teoría de las contradicciones (1957).

TIPOS:
1. Principales: Entre clases antagónicas
2. Secundarias: Entre sectores del pueblo
3. Antagónicas: No resolubles dentro del sistema

"Sin análisis no hay buena política." - Mao`,
        quote: '"Las masas populares son las fuerzas creadoras de la historia." - Mao'
    },
    'mao-guerra': {
        title: 'LA GUERRA POPULAR',
        type: 'MILITARY',
        color: '#ffbf00',
        text: `Estrategia de guerrilla basada en las masas.

PRINCIPIOS:
1. El pueblo es el mar donde nadan los guerrilleros
2. Larga guerra contra invasor
3. Avanzar estratégicamente entre áreas

"El poder político crece de la boca del rifle." - Mao`,
        quote: '"La guerra es la continuación de la política por otros medios." - Mao'
    },
    'mao-contrarrevolucion': {
        title: 'SOBRE LA CONTRARREVOLUCIÓN',
        type: 'POLITICS',
        color: '#ffbf00',
        text: `Mao analizó que dentro del socialismopersisten las contradicciones.

CONTRADICCIONES:
- Pueblo vs. enemigo
- Pueblo vs. errores del Partido
- Errores del pueblo (influencia burguesa)

"El período de transición es largo, la lucha es inevitable." - Mao`,
        quote: '"No hay construcción sin destrucción." - Mao'
    },

    // ============================================
    // JOSEF STALIN
    // ============================================
    'socialismo-pais': {
        title: 'SOCIALISMO EN UN SOLO PAÍS',
        type: 'THEORY',
        color: '#ffbf00',
        text: `Tesis de Stalin: el socialismo puede victoriosamente construirse en un solo país.

"La construcción del socialismo en un solo país es completamente posible." - Stalin (1924)`,
        quote: '"El socialismo puede construirse y se construirá en un solo país, el СССР." - Stalin'
    },
    'construccion': {
        title: 'CONSTRUCCIÓN DEL SOCIALISMO',
        type: 'PRACTICE',
        color: '#ffbf00',
        text: `Stalin lideró la transformación de Rusia (1928-1938):

1. INDUSTRIALIZACIÓN PLANIFICADA (metas quinquenales)
2. COLECTIVIZACIÓN AGRARIA (koljoses)
3. TRANSFORMACIÓN CULTURAL (alfabetización masiva)

RESULTADO: De país agrario a segunda potencia mundial.`,
        quote: '"O industrialización o perecer." - Stalin'
    },
    'cuestion-nacional': {
        title: 'CUESTIÓN NACIONAL',
        type: 'POLICY',
        color: '#ffbf00',
        text: `Stalin analizó las formas de nación.

PRINCIPIOS:
- Derecho a la autodeterminación
- Cada nación tiene derecho a su propio Estado
- Aproximación voluntaria entre pueblos

"Las naciones tienen derecho a decidir su propio destino." - Stalin`,
        quote: '"El Estado es la forma de organización de una nación." - Stalin'
    },
    'dialecto-materialismo': {
        title: 'MATERIALISMO DIALÉCTICO Y HISTÓRICO',
        type: 'PHILOSOPHY',
        color: '#ffbf00',
        text: `Stalin sistematizó el marxismo-leninismo.

CUATRO LEYES:
1. Todo está conectado
2. Todo cambia eternamente
3. Cambios graduales -> salto cualitativo
4. Contradicción universal

"El marxismo no admite el economicismo mecánico." - Stalin`,
        quote: '"La teoría de Marx es todopoderosa porque es correcta." - Stalin'
    },

    // ============================================
    // ANTONIO GRAMSCI
    // ============================================
    'gramsci-hegemonia': {
        title: 'HEGEMONÍA CULTURAL',
        type: 'CULTURE',
        color: '#bf00ff',
        text: `El dominio de una clase se mantiene por CONSENSO cultural, no solo fuerza.

MECANISMOS:
- Iglesia (moral)
- Medios (información)
- Escuelas (educación)
- Familia (reproducción)

La hegemonía: consentimiento activo de los gobernados.`,
        quote: '"Pessimismo del intelecto, optimismo de la voluntad." - Gramsci'
    },
    'gramsci-posiciones': {
        title: 'GUERRA DE POSICIONES',
        type: 'STRATEGY',
        color: '#bf00ff',
        text: `En sociedades occidentales, la revolución requiere conquistar terreno cultural.

ESTRATEGIA:
1. Conquistar instituciones culturales
2. Formar intelectuales orgánicos
3. Construir bloque histórico alternativo
4. Cuando el consenso colapsa, actuar

"La guerra de posiciones es la única posible." - Gramsci`,
        quote: '"Los intelectuales son los empleados del grupo dominante." - Gramsci'
    },
    'gramsci-cuadernos': {
        title: 'CUADERNOS DE LA CÁRCEL',
        type: 'PHILOSOPHY',
        color: '#bf00ff',
        text: `Gramsci escribió 32 cuadernos en la cárcel fascista (1929-1935).

TEMAS:
- Filosofía de la praxis
- Americanismo y fordismo
- Folklore como concepción del mundo
- Intelectuales y organización

"Los cuadernos son la contribución más importante al marxismo después de Lenin."`,
        quote: '"La filosofía de la praxis es el humanismo más radical." - Gramsci'
    },

    // ============================================
    // CHE GUEVARA
    // ============================================
    'che-nuevo': {
        title: 'EL HOMBRE NUEVO',
        type: 'ETHICS',
        color: '#00ff88',
        text: `El Che desarrolló el concepto del "hombre nuevo" para el socialismO.

CARACTERÍSTICAS:
- Moral superior (no dinero)
- Solidaridad como principio
- Trabajo voluntario
- Contra el egoísmo

"El verdadero revolucionario está guiado por grandes sentimientos de amor." - Che`,
        quote: '"El socialismo económico sin moral revolucionaria no me interesa." - Che'
    },
    'che-moral': {
        title: 'MORAL REVOLUCIONARIA',
        type: 'ETHICS',
        color: '#00ff88',
        text: `El Che enfatizó la moral revolucionaria sobre los incentivos materiales.

PRINCIPIOS:
1. ANTIEGOÍSMO: colectivismo sobre individualismo
2. ANTIMATERIALISMO: deber sobre recompensa
3. INTERNACIONALISMO: revolución mundial
4. EJEMPLARIDAD: los cuadros deben ser mejores

" Nous devemos ser los primeros en pedirnos cuentas." - Che`,
        quote: '"El revolucionario verdadero mide su éxito por la transformación de las condiciones materiales." - Che'
    },
    'che-internacionalismo': {
        title: 'INTERNACIONALISMO',
        type: 'POLITICS',
        color: '#00ff88',
        text: `El Che creía que la revolución debía ser mundial.

"El internacionalismo es un deber, no una frase." - Che

La revolución en un solo país es insuficiente mientras el capitalismo domine globalmente.`,
        quote: '"Donde sea que nos sorprenda la muerte, bienvenida sea." - Che'
    },

    // ============================================
    // PC CHILE - FUNDADORES
    // ============================================
    'recabarren': {
        title: 'LUIS E. RECABARREN (1876-1924)',
        type: 'FUNDADOR',
        color: '#00f2ff',
        text: `El padre del movimiento obrero chileno. Fundador del PCCh.

PENSAMIENTO:
- "La emancipación de los trabajadores debe ser obra de los trabajadores mismos"
- La educación como herramienta de liberación
- Crítica al clericalismo y capitalismo

"No hay salvación para el pueblo que no sea la organización y la propaganda de sus derechos." - Recabarren`,
        quote: '"El Partido Comunista de Chile tiene un solo programa: el bienestar de la clase obrera."'
    },
    'galleguillos': {
        title: 'BALTASAR GALLEGUILLOS (1884-1969)',
        type: 'FUNDADOR',
        color: '#00f2ff',
        text: `Dirigente sindical del salitre. Primer Secretario General del PCCh (1922-1932).

Lideró las grandes huelgas del Norte Grande contra la explotación. Comprometido con la unidad obrera.`,
        quote: '"La organización es el arma del proletariado." - Galleguillos'
    },
    'vargas-puebla': {
        title: 'JUAN VARGAS PUEBLA (1895-1971)',
        type: 'FUNDADOR',
        color: '#00f2ff',
        text: `Abogado y periodista. Uno de los fundadores del PCCh.

Tuvo un rol clave en la estructuración ideológica del Partido durante sus primeros años.`,
        quote: '"La prensa obrera es el arma de la clase trabajadora." - Vargas Puebla'
    },
    'labbe': {
        title: 'CARLOS LABBÉ (1889-1963)',
        type: 'FUNDADOR',
        color: '#00f2ff',
        text: `Periodista y dirigente. Fundador del PCCh y del diario "El Luchador".

Desarrolló trabajo político en Valparaíso y Santiago.`,
        quote: '"La verdad de los trabajadores se impone sobre las mentiras de la burguesía." - Labbé'
    },
    'lafertte': {
        title: 'ELÍAS LAFFERTE (1887-1962)',
        type: 'FUNDADOR',
        color: '#00f2ff',
        text: `Minero y sindicalista. Presidente del PCCh (1932-1940).

Lideró el Partido durante el período del Frente Popular. Luchó contra el fascismo y por los derechos obreros.`,
        quote: '"La unidad de la izquierda es la fuerza del pueblo." - Lafertte'
    },

    // ============================================
    // PC CHILE - DIRIGENTES HISTÓRICOS
    // ============================================
    'corvalan': {
        title: 'LUIS CORVALÁN (1916-1987)',
        type: 'SECRETARIO GENERAL',
        color: '#00ff88',
        text: `Líder intelectual del PCCh (1954-1987). Abogado y periodista.

Secuestrado por Pinochet (1976), intercambiado por disidente soviético.

"La democracia verdadera se construye con el pueblo y para el pueblo." - Corvalán`,
        quote: '"No hay camino revolucionario sin la mayoría del pueblo." - Corvalán'
    },
    'teitelboim': {
        title: 'VOLODIA TEITELBOIM (1912-2008)',
        type: 'INTELECTUAL',
        color: '#00ff88',
        text: `Escritor, poeta y dirigente. Secretario General (1987-1994). Sobreviviente del incendio de La Moneda.

Premio Nacional de Literatura (2002). Intelectual marxista de primera línea.

"El comunismo es la juventud del mundo, lo que vendrá." - Teitelboim`,
        quote: '"La memoria es el arma de los pueblos." - Teitelboim'
    },
    'gladys-marin': {
        title: 'GLADYS MARÍN (1921-2011)',
        type: 'VANGUARDIA',
        color: '#00ff88',
        text: `Presidenta del PCCh (1994-2002). Primera mujer en dirigir un partido político mayoritario en Chile.

"A la verdad no renuncio, a la justicia no renuncio." - Gladys Marín`,
        quote: '"Mi vida ha sido consagrada a la causa del pueblo." - Gladys Marín'
    },
    'insunza': {
        title: 'JORGE INSUNZA (1923-2007)',
        type: 'DIRIGENTE',
        color: '#00ff88',
        text: `Abogado y parlamentario. Integró la Comisión Política del PCCh.

Trabajó por la unidad de la izquierda y la democratización del país.`,
        quote: '"La lucha por la democracia es la lucha por el socialismo." - Insunza'
    },
    'navarrete': {
        title: 'ROBERTO NAVARRETE (1928-2005)',
        type: 'DIRIGENTE',
        color: '#00ff88',
        text: `Periodista y dirigente. Secuestrado en 1985 por la DINA, liberado gracias a presión internacional.

Luchó toda su vida por los derechos humanos y la justicia social.`,
        quote: '"La memoria de los caídos nos obliga a seguir luchando." - Navarrete'
    },
    'orellana': {
        title: 'RENÉ ORELLANA (1938-2019)',
        type: 'DIRIGENTE',
        color: '#00ff88',
        text: `Abogado y escritor. Presidente del PCCh (1990-1994).

Periodista de "El Siglo", desarrolló una importante labor de análisis político.`,
        quote: '"El PCCh es la expresión más pura del anhelo de justicia del pueblo chileno." - Orellana'
    },

    // ============================================
    // PC CHILE - CONTEMPORÁNEOS
    // ============================================
    'teillier': {
        title: 'GUILLERMO TEILLIER (1955-2023)',
        type: 'PRESIDENTE',
        color: '#00ff88',
        text: `Presidente del PCCh (2005-2023). Abogado y parlamentario.

Lideró el Partido en el período de la Concertación y la Nueva Mayoría. Buscó la unidad de la izquierda.

"Vamos a restituir la dignidad de los DDHH en el Gobierno." - Teillier`,
        quote: '"El PCCh es la memoria histórica del pueblo chileno." - Teillier'
    },
    'carmona': {
        title: 'LAUTARO CARMONA',
        type: 'PRESIDENTE',
        color: '#00ff88',
        text: `Presidente del PCCh (2023-actual). Integró la Comisión Política desde 1994.

Ex alcalde de Lota, representando la tradición minera del Partido.

"El socialismo del siglo XXI es una perspectiva, no una формула." - Carmona`,
        quote: '"La lucha de clases sigue vigente en Chile." - Carmona'
    },
    'cariola': {
        title: 'KAROL CARIOLA',
        type: 'DIRIGENTE',
        color: '#00ff88',
        text: `Abogada y parlamentaria. Una de las voces más jóvenes de la dirigencia del PCCh.

Presidenta de la FECH (2004), luchando por educación pública.`,
        quote: '"La educación no es una mercancía, es un derecho." - Cariola'
    },
    'barrera': {
        title: 'BORRIS BARRERA',
        type: 'DIRIGENTE',
        color: '#00ff88',
        text: `Abogado y parlamentario. Histórico militante del PCCh.

Desarrolló trabajo en derechos humanos y memoria histórica.`,
        quote: '"La memoria es el oxígeno de la justicia." - Barrera'
    },
    'gutierrez': {
        title: 'MIGUEL GUTIÉRREZ',
        type: 'DIRIGENTE',
        color: '#00ff88',
        text: `Periodista y escritor. Director de "El Siglo" (2008-2019).

Intelectual marxista contemporáneo, analista de la realidad nacional.`,
        quote: '"El neoliberalismo es el enemigo a derrotar." - Gutiérrez'
    },

    // ============================================
    // TEORÍA LATINOAMERICANA
    // ============================================
    'mariategui': {
        title: 'JOSÉ CARLOS MARIÁTEGUI',
        type: 'LATAM',
        color: '#ffbf00',
        text: `Perú, 1894-1930. Fundador del marxismo latinoamericano.

"Siete Ensayos de Interpretación de la Realidad Peruana" (1928).

"La revolución latinoamericana será socialista o no será." - Mariátegui`,
        quote: '"El problema del indio es un problema económico." - Mariátegui'
    },
    'fidel': {
        title: 'FIDEL CASTRO',
        type: 'LATAM',
        color: '#ffbf00',
        text: `Cuba, 1926-2016. Líder de la Revolución Cubana (1959).

Discursos seleccionados sobre el socialismo cubano.

"Hasta la victoria siempre." - Fidel`,
        quote: '"La historia me absolverá." - Fidel'
    },
    'chavez': {
        title: 'HUGO CHÁVEZ',
        type: 'LATAM',
        color: '#ffbf00',
        text: `Venezuela, 1954-2013. Líder de la Revolución Bolivariana (1999-2013).

Socialismo del siglo XXI: participación popular y riqueza nacional.

"Patria, socialismo o muerte." - Chávez`,
        quote: '"El capitalismo es un sistema de muerte." - Chávez'
    },
    'evo': {
        title: 'EVO MORALES',
        type: 'LATAM',
        color: '#ffbf00',
        text: `Bolivia, 1959-actual. Primer presidente indígena de Bolivia (2006-2019).

Descolonización y nacionalización de recursos naturales.

"Ahora el pueblo gobierna." - Evo`,
        quote: '"La dignidad de los pueblos no se negocia." - Evo'
    },
    'camilo-torres': {
        title: 'CAMILO TORRES',
        type: 'LATAM',
        color: '#ffbf00',
        text: `Colombia, 1929-1966. Sacerdote y revolucionario.

"La sociología revolucionaria es la ciencia de la liberación." - Camilo Torres`,
        quote: '"El amor revolucionario es el más alto amor." - Camilo Torres'
    },
    'neruda': {
        title: 'PABLO NERUDA',
        type: 'CULTURE',
        color: '#ffbf00',
        text: `Chile, 1904-1973. Poeta, diplomático, Premio Nobel de Literatura (1971).

Poeta oficial del PCCh. Escribió sobre el amor, el mar y la revolución.

"Me gustas cuando callas porque estás como ausente." - Neruda`,
        quote: '"Puedo escribir los versos más tristes esta noche." - Neruda'
    },
    'violeta-parra': {
        title: 'VIOLETA PARRA',
        type: 'CULTURE',
        color: '#ffbf00',
        text: `Chile, 1917-1967. Cantautora, artista popular, folclorista.

Recolectó y creó la música popular chilena. Comprometida con el pueblo.

"Gracias a la vida que me ha dado tanto." - Violeta`,
        quote: '"El folklore es la voz del pueblo." - Violeta'
    },

    // ============================================
    // HISTORIA DE CHILE
    // ============================================
    'huelga-salitre': {
        title: 'HUELGA DEL SALITRE (1907)',
        type: 'HISTORY',
        color: '#00f2ff',
        text: `Huelga masiva de trabajadores salitreros en Iquique. 
Matanza de la Plaza de la Democracia (21 de diciembre de 1907).
Más de 200 trabajadores y sus familias asesinados por el ejército.`,
        quote: '"Recordar para no repetir."'
    },
    'fundacion-pcch': {
        title: 'FUNDACIÓN DEL PCCh (1922)',
        type: 'HISTORY',
        color: '#00f2ff',
        text: `24 de junio de 1922. Fundación oficial bajo influencia de la Revolución Rusa (1917).

FUNDADORES: Recabarren (inspirador), Galleguillos, Vargas Puebla, Labbé, Lafertte.

PROGRAMA: Nacionalización, control obrero, tierra para quien la trabaja.`,
        quote: '"La emancipación de los trabajadores debe ser obra de los trabajadores mismos."'
    },
    'frente-popular': {
        title: 'FRENTE POPULAR (1938)',
        type: 'HISTORY',
        color: '#00f2ff',
        text: `Alianza electoral que llevó a Pedro Aguirre Cerda a la presidencia.

"Gobernar es educar." - Lema del gobierno.

Primera experiencia de gobierno popular en Chile.`,
        quote: '"El pueblo unida jamás será vencido."'
    },
    'up-1970': {
        title: 'UNIDAD POPULAR (1970-1973)',
        type: 'HISTORY',
        color: '#ff0040',
        text: `Gobierno de Salvador Allende. Primer gobierno democráticamente elegido con programa socialista.

LOGROS: Nacionalización del cobre, Reforma agraria, Nacionalización de la banca, Leche para todos.

RESULTADO: Golpe de Estado (11/09/1973).`,
        quote: '"La historia la hacen los pueblos." - Allende'
    },
    'golpe-73': {
        title: 'GOLPE DE ESTADO (1973)',
        type: 'HISTORY',
        color: '#ff0040',
        text: `11 de septiembre de 1973. Bombardeo de La Moneda. Muerte de Salvador Allende.

TERRORISMO DE ESTADO:
- 3.197 desaparecidos
- 28.000 torturados
- 200.000 exiliados
- 17 años de dictadura

La CIA financiógolpe (Operación Cóndor).`,
        quote: '"La violencia de la oligarquía fue siempre la respuesta a la esperanza del pueblo."'
    },
    'resistencia-73-90': {
        title: 'RESISTENCIA (1973-1990)',
        type: 'HISTORY',
        color: '#00ff88',
        text: `Lucha del pueblo chileno contra la dictadura.

FORMAS: Clandestinidad política, solidaridad internacional, cultura underground, DDHH.

LOGRO: Derrocamiento de Pinochet (1988), Transición a democracia (1990).`,
        quote: '"El Partido resiste y seguirá resistiendo." - Gladys Marín'
    },
    'transicion': {
        title: 'TRANSICIÓN (1990-2011)',
        type: 'HISTORY',
        color: '#00ff88',
        text: `Período post-dictadura. "Democracia protegida" con Constitución de 1980.

Límites: Neoliberalismo consolidado, DDHH impunes, desigualdad estructural.

Protestas estudiantiles (2006, 2011) marcaron el fin del "modelo".`,
        quote: '"La transición nunca terminó."'
    },
    'revuelta-2019': {
        title: 'REVUELTA SOCIAL (2019)',
        type: 'HISTORY',
        color: '#ffbf00',
        text: `18 de octubre de 2019. Estallido social contra 30 años de modelo neoliberal.

"No son 30 pesos, son 30 años."

Millones en calles. Cabildo abiertos. Proceso constitucional.`,
        quote: '"Chile despertó."'
    },
    'constitucion-2020': {
        title: 'PLEBISCITO (2020)',
        type: 'HISTORY',
        color: '#ffbf00',
        text: `25 de octubre de 2020. Plebiscito por una nueva constitución.

APRUECHO (80%) v/s RECHAZO (20%).

El proceso constitucional fue traicionado por la derecha en 2022-2023.`,
        quote: '"Que la rabia se transforme en esperanza."'
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
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
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

console.log('SISTEMA // SUR v3.2 cargado: ' + Object.keys(db).length + ' entradas');
