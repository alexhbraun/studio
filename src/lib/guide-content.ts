
// src/lib/guide-content.ts
export interface GuideChapter {
  id: number;
  title: string;
  content: any;
}

export const guideContent: GuideChapter[] = [
  {
    id: 1,
    title: "Introducción",
    content: [
      {
        type: 'html',
        content: `
          <p class="lead">¡Bienvenido a <strong>StrideSculpt</strong>, tu programa personal de caminata de 30 días! Estás al comienzo de un emocionante viaje que cambiará no solo tu cuerpo, sino también tu forma de pensar sobre el fitness y el bienestar. Esta guía es tu fiel compañera, llena de conocimientos, motivación y consejos prácticos para que cada paso sea un éxito.</p>
        `
      },
      {
        type: 'image',
        src: "/intro-1.png",
        alt: "Una inspiradora vista de un paisaje con un camino que se pierde en la distancia, simbolizando el comienzo de un viaje. La luz es cálida y acogedora.",
        aiHint: "Wide landscape shot of a winding path through rolling green hills at sunrise, symbolizing a new journey. The sky is a warm palette of orange and pink. The path is inviting and clear."
      },
      {
        type: 'html',
        content: `
          <h3>Qué puedes esperar de este programa</h3>
          <p>En los próximos 30 días, descubrirás que caminar es mucho más que una forma de moverse. Es una poderosa herramienta de transformación. Hemos desarrollado este programa cuidadosamente para guiarte paso a paso, desde comienzos suaves hasta sesiones desafiantes que aumentarán tu resistencia y activarán la quema de grasa. No se trata de la perfección, sino de la constancia. Se trata de escuchar a tu cuerpo, celebrar el progreso y establecer un hábito saludable y sostenible que te acompañará mucho después de estos 30 días.</p>

          <h3>¿Para quién es este programa?</h3>
          <p>¡Este programa es para todos! Ya sea que estés retomando el ejercicio después de una larga pausa, quieras mejorar tu nivel de condición física actual o busques una alternativa de bajo impacto al entrenamiento intenso. Nuestra misión es mostrarte cómo puedes lograr resultados sorprendentes con la forma de ejercicio más simple y natural.</p>
          
          <h3>Cómo usar esta guía</h3>
          <p>Esta guía está dividida en capítulos claros. Puedes leerla de principio a fin o consultar específicamente los temas que más te interesen en un momento dado. Recomendamos familiarizarse con los capítulos sobre la técnica correcta y la nutrición al principio para construir una base sólida. Vuelve aquí en cualquier momento que tengas una pregunta o necesites un impulso de motivación.</p>
        `
      },
      {
        type: 'image',
        src: "/intro-2.png",
        alt: "Una persona caminando feliz y enérgica por un sendero pintoresco, representando la alegría y los resultados positivos del programa.",
        aiHint: "Action shot from a low angle of a person's feet in modern sneakers, walking with purpose and energy on a clean, scenic trail. The background is slightly blurred to emphasize motion."
      },
      {
        type: 'html',
        content: `
          <p>¿Estás listo para dar el primer paso? Estamos emocionados de acompañarte en este camino. Empecemos juntos a esculpir una versión más sana, más en forma y más feliz de ti mismo, paso a paso.</p>
        `
      }
    ],
  },
  {
    id: 3,
    title: "El Poder de Caminar",
    content: [
      {
        type: 'html',
        content: `
          <h3>No subestimes el poder de un simple paso, repetido una y otra vez.</h3>
          <p>Caminar es el superpoder que todos poseemos, una forma de ejercicio fundamental, accesible y profundamente efectiva. Es la base sobre la que se construye una salud duradera y es el pilar de tu <strong>Plan de 30 Días</strong>. A diferencia de los entrenamientos de alta intensidad que pueden dejarte agotado, caminar te energiza, te rejuvenece y trabaja en armonía con tu cuerpo.</p>
        `
      },
      {
        type: 'image',
        src: "/power-1.png",
        alt: "Vista de los pies de una persona en zapatillas deportivas, dando un paso decidido hacia adelante sobre un sendero.",
        aiHint: "Dramatic close-up of a high-quality sneaker making contact with a gravel path. The image should convey a sense of determination and the start of a powerful stride. Morning light."
      },
      {
        type: 'html',
        content: `
          <h4>1. Un corazón más fuerte con cada latido</h4>
          <p>Cada caminata de tu plan es un entrenamiento para tu corazón. Al caminar a paso ligero, elevas tu ritmo cardíaco, lo que fortalece el músculo cardíaco. Esto mejora la circulación sanguínea en todo el cuerpo, reduce la presión arterial y disminuye significativamente el riesgo de enfermedades cardiovasculares. Piensa en cada paso como una inversión directa en la longevidad y la salud de tu corazón.</p>
          
          <h4>2. Tu aliado en el control de peso</h4>
          <p>Caminar es una herramienta increíblemente eficaz para quemar calorías. Una caminata enérgica no solo quema calorías durante la actividad, sino que también puede aumentar tu metabolismo. Combinado con los consejos del capítulo de <strong>Fundamentos de Nutrición</strong>, se convierte en la estrategia perfecta y sostenible para alcanzar y mantener un peso saludable.</p>
        `
      },
      {
        type: 'image',
        src: "/power-2.png",
        alt: "Una cinta métrica alrededor de una manzana fresca, simbolizando la conexión entre la nutrición y el control de peso.",
        aiHint: "Artistic shot of a vibrant, crisp apple with a measuring tape loosely wrapped around it, on a clean, minimalist background. This visually connects fitness (measurement) with healthy eating."
      },
      {
        type: 'html',
        content: `
          <h4>3. Construyendo un cuerpo resiliente</h4>
          <p>Es un ejercicio de soporte de peso, lo que significa que fortalece tus huesos y aumenta su densidad, ayudando a prevenir la osteoporosis. Al mismo tiempo, tonifica los músculos de las piernas, los glúteos y el abdomen. Es una forma de bajo impacto, lo que lo hace ideal para tus articulaciones, a diferencia de correr, que puede ser más duro para las rodillas y las caderas. Por eso es la base de nuestro programa.</p>
          
          <h4>4. Un bálsamo para la mente y el espíritu</h4>
          <p>El impacto de caminar va mucho más allá de lo físico. Es una forma de meditación en movimiento. Caminar libera endorfinas, las hormonas de la felicidad, que reducen el estrés, la ansiedad y mejoran tu estado de ánimo. Una caminata al aire libre, especialmente en la naturaleza, puede despejar tu mente, aumentar la creatividad y proporcionarte un valioso tiempo para ti mismo, un pilar clave en el capítulo sobre <strong>Motivación y Constancia</strong>.</p>
        `
      }
    ],
  },
  {
    id: 2,
    title: "Tu Plan de 30 Días: La Hoja de Ruta",
    content: [
      {
        type: 'html',
        content: `
          <h3>Tu mapa hacia el éxito, paso a paso.</h3>
          <p>Este es el corazón de tu transformación. El plan de 30 días no es solo una lista de ejercicios; es una estrategia cuidadosamente diseñada para llevarte desde un punto de partida suave hasta un nivel de condición física que te sorprenderá. Está basado en el principio de <strong>sobrecarga progresiva</strong>, lo que significa que cada semana aumentaremos gradualmente el desafío para que tu cuerpo se adapte, se fortalezca y queme grasa de manera más eficiente.</p>
          `
      },
      {
        type: 'image',
        src: "/plan-1.png",
        alt: "Un calendario o planificador con los primeros días marcados, simbolizando el inicio y la estructura del plan.",
        aiHint: "Clean, top-down shot of a stylish monthly planner or calendar with the first week highlighted or marked with checkmarks. A pen lies next to it, suggesting action and commitment."
      },
      {
        type: 'html',
        content: `
          <h4>La Estructura Semanal</h4>
          <p>El plan está dividido en semanas, cada una con un enfoque específico para construir tu resistencia y fuerza de manera lógica:</p>
          <ul>
            <li><strong>Semana 1: La Fundación (Días 1-7).</strong> Nos centraremos en crear el hábito. Las caminatas son más cortas y de menor intensidad. El objetivo principal es la constancia y perfeccionar la <strong>Técnica Correcta</strong> que aprenderás en otro capítulo.</li>
            <li><strong>Semana 2: Construyendo el Momento (Días 8-14).</strong> Aumentamos la duración y empezamos a introducir intervalos de mayor intensidad. Aquí es donde tu cuerpo comenzará a adaptarse y verás las primeras mejoras en tu resistencia.</li>
            <li><strong>Semana 3: El Desafío (Días 15-21).</strong> Esta es la fase de aceleración. Los entrenamientos son más largos y los intervalos más desafiantes. La <strong>Nutrición y la Hidratación</strong> se vuelven cruciales para mantener tu energía.</li>
            <li><strong>Semana 4 y Final: Consolidación (Días 22-30).</strong> Llevamos tu condición física a un nuevo nivel y consolidamos todo el trabajo duro. Al final de esta fase, notarás una diferencia significativa en cómo te sientes y te ves. El <strong>Descanso y la Regeneración</strong> serán clave para terminar fuerte.</li>
          </ul>

          <h4>Días de Descanso y Flexibilidad</h4>
          <p>Observarás que el plan integra días de descanso o de recuperación activa. Estos días son tan importantes como los días de entrenamiento, como explicamos en el capítulo de <strong>Descanso y Regeneración</strong>. Es cuando tu cuerpo se repara y se hace más fuerte. Escucha a tu cuerpo; si un día te sientes particularmente cansado, no dudes en cambiar un entrenamiento intenso por una caminata de recuperación suave.</p>
          
          <p>Usa la sección del dashboard para seguir tu progreso diario. Marcar cada día como "completado" te dará un increíble impulso de <strong>Motivación</strong>. ¡Confía en el plan, respeta el proceso y prepárate para ver de lo que eres capaz!</p>
        `
      }
    ],
  },
   {
    id: 5,
    title: "La Técnica Correcta",
    content: [
      {
        type: 'html',
        content: `
          <h3>Camina como un profesional: maximiza cada paso</h3>
          <p>Puede que pienses: "¿Caminar? ¡Lo he estado haciendo toda mi vida!" Pero hay una gran diferencia entre un paseo casual y una caminata poderosa y transformadora. Perfeccionar tu técnica no solo te ayudará a quemar más calorías y tonificar más músculos durante tu <strong>Plan de 30 Días</strong>, sino que también te protegerá de lesiones y hará que cada sesión sea más agradable y efectiva. ¡Vamos a convertir tus pasos en progreso!</p>
        `
      },
      {
        type: 'image',
        src: "/technique-1.png",
        alt: "Una persona caminando con una postura perfecta y erguida en un parque, demostrando la forma correcta.",
        aiHint: "Side-profile illustration or photo of a person walking with perfect posture: head up, shoulders back, core engaged. Use graphic overlays to highlight the straight line from ear to shoulder to hip."
      },
      {
        type: 'html',
        content: `
          <h4>1. La base: tu postura</h4>
          <p>Todo comienza con cómo te paras. Una buena postura alinea tu cuerpo para un movimiento eficiente.</p>
          <ul>
            <li><strong>Camina alto:</strong> Imagina que un hilo tira suavemente de la coronilla de tu cabeza hacia el cielo. Alarga tu columna vertebral.</li>
            <li><strong>Hombros relajados:</strong> Lleva los hombros hacia arriba, luego hacia atrás y déjalos caer. Esto abre tu pecho y evita que te encorves.</li>
            <li><strong>Mirada al frente:</strong> Levanta la barbilla y mira unos 3-6 metros hacia adelante. Esto mantiene tu cuello y espalda alineados y te ayuda a anticipar el terreno.</li>
            <li><strong>Activa tu abdomen:</strong> Contrae ligeramente los músculos abdominales. Esto estabiliza tu torso y apoya tu espalda baja.</li>
          </ul>

          <h4>2. El motor: tus pies y piernas</h4>
          <p>Aquí es donde ocurre la magia del movimiento. La forma en que tus pies tocan el suelo lo es todo.</p>
          <ul>
            <li><strong>Talón-punta:</strong> Aterriza suavemente sobre tu talón.</li>
            <li><strong>Rueda hacia adelante:</strong> Rueda tu peso de manera fluida a través de la planta de tu pie, desde el talón hasta la punta.</li>
            <li><strong>Impúlsate:</strong> Empuja con fuerza desde los dedos de los pies para impulsarte hacia tu siguiente paso. Sentirás cómo se activan tus pantorrillas y glúteos.</li>
          </ul>

          <h4>3. El ritmo: tus brazos</h4>
          <p>¡No dejes que tus brazos cuelguen! Usarlos activamente aumenta la intensidad de tu caminata.</p>
          <ul>
            <li><strong>Ángulo de 90 grados:</strong> Dobla los codos en un ángulo de 90 grados.</li>
            <li><strong>Movimiento coordinado:</strong> Balancéalos desde los hombros (no los codos) en oposición a tus piernas. Cuando tu pierna derecha avanza, tu brazo izquierdo avanza, y viceversa.</li>
            <li><strong>Manos relajadas:</strong> Mantén las manos ligeramente ahuecadas, no apretadas en puños.</li>
          </ul>
        `
      },
      {
        type: 'image',
        src: "/technique-2.png",
        alt: "Primer plano de los brazos de un caminante en el ángulo correcto, mostrando el movimiento adecuado.",
        aiHint: "Close-up action shot focusing on the arms of a walker, bent at a perfect 90-degree angle. The motion should be clear, showing one arm forward and one back, in sync with their stride."
      },
      {
        type: 'html',
        content: `
          <h4>4. El combustible: tu respiración</h4>
          <p>Respirar correctamente suministra el oxígeno que tus músculos necesitan para funcionar de manera óptima.</p>
          <ul>
            <li><strong>Respira rítmicamente:</strong> Inhala por la nariz, llenando tu vientre de aire, y exhala por la boca.</li>
            <li><strong>Sincroniza con tus pasos:</strong> Intenta encontrar un ritmo. Por ejemplo, inhala durante dos pasos y exhala durante dos o tres pasos.</li>
          </ul>

          <p class="mt-6">Al principio, puede que tengas que pensar conscientemente en estos elementos. Pero con la práctica, se convertirán en tu nueva forma natural de caminar. Sentirás más poder, más energía y verás mejores resultados. <strong>¡Cada paso es una oportunidad para hacerlo bien!</strong></p>
        `
      }
    ],
  },
  {
    id: 4,
    title: "Fundamentos de Nutrición",
    content: [
      {
        type: 'html',
        content: `
          <h3>Combustible para tu viaje: La nutrición es tu aliada</h3>
          <p>Piensa en tu cuerpo como un coche de alto rendimiento. Tus caminatas del <strong>Plan de 30 Días</strong> son el viaje, y la comida es el combustible premium que necesitas para llegar lejos y con energía. El ejercicio es una parte crucial de tu transformación, pero combinarlo con una nutrición inteligente es lo que desatará tu verdadero potencial. No se trata de dietas restrictivas, sino de nutrir tu cuerpo de forma consciente y disfrutar de alimentos deliciosos que te apoyen en tus metas.</p>
        `
      },
      {
        type: 'image',
        src: "/nutrition-1.png",
        alt: "Una colorida variedad de frutas y verduras frescas dispuestas artísticamente sobre una mesa de madera.",
        aiHint: "Vibrant, colorful flat lay of fresh vegetables, fruits, lean proteins (like chicken breast), and healthy fats (avocado, nuts) arranged beautifully on a rustic wooden table. It should look like a cornucopia of health."
      },
      {
        type: 'html',
        content: `
          <h4>Los tres grandes: Proteínas, Carbohidratos y Grasas</h4>
          <p>Entender estos tres macronutrientes es la base de una alimentación saludable:</p>
          <ul>
            <li><strong>Proteínas: Los constructores.</strong> Son esenciales para reparar y construir los músculos que trabajas en cada caminata. Ayudan a que te sientas satisfecho por más tiempo, lo que es clave para el control de peso.
              <br><em>Encuéntralas en:</em> pollo, pescado, huevos, legumbres (lentejas, garbanzos), tofu y yogur griego.</li>
            <li><strong>Carbohidratos: Tu fuente de energía.</strong> Son el combustible principal para tus músculos. Elige carbohidratos complejos que liberan energía lentamente, manteniéndote activo durante más tiempo.
              <br><em>Elige sabiamente:</em> avena, arroz integral, quinoa, pan integral, batatas y frutas.</li>
            <li><strong>Grasas: Las protectoras.</strong> ¡No todas las grasas son malas! Las grasas saludables son vitales para la función cerebral, la producción de hormonas y la absorción de vitaminas.
              <br><em>Busca las buenas:</em> aguacate, nueces, semillas (chía, lino), aceite de oliva y pescado graso (salmón).</li>
          </ul>

          <h4>La magia de la hidratación</h4>
          <p>El agua es tu mejor amiga en este programa. Estar bien hidratado es fundamental para tener energía, un metabolismo eficiente y una buena recuperación muscular. A menudo, confundimos la sed con el hambre. Intenta beber un vaso de agua antes de cada comida y lleva una botella contigo durante tus caminatas.</p>

          <h4>El momento perfecto para tus comidas</h4>
          <p>No tienes que complicarte, pero algunos principios básicos pueden ayudarte:</p>
          <ul>
            <li><strong>Antes de caminar:</strong> Si necesitas un impulso, una pequeña merienda rica en carbohidratos 30-60 minutos antes es ideal (ej. una banana o un puñado de bayas).</li>
            <li><strong>Después de caminar:</strong> Dentro de una hora después de tu entrenamiento, intenta hacer una comida o merienda que combine proteínas (para la reparación muscular) y carbohidratos (para reponer energía). Un batido de proteínas con fruta o un plato de pollo con quinoa son excelentes opciones.</li>
          </ul>

          <p class="mt-6">Recuerda, cada elección de alimentos es una oportunidad para acelerar tus resultados y sentirte increíble. ¡Estás aprendiendo a cuidar tu cuerpo desde adentro hacia afuera!</p>
        `
      }
    ],
  },
  {
    id: 7,
    title: "Descanso y Regeneración",
    content: [
      {
        type: 'html',
        content: `
          <h3>El Arte de la Pausa: Por Qué el Descanso es tu Arma Secreta</h3>
          <p>En nuestra cultura de "siempre más", es fácil pensar que los resultados solo llegan cuando estamos en movimiento. Pero aquí está la verdad que transformará tu enfoque: <strong>el progreso real no sucede durante el entrenamiento, sino durante el descanso.</strong> La regeneración no es pereza; es una parte activa e inteligente de tu <strong>Plan de 30 Días</strong>. Los días de descanso que verás en tu plan son esenciales.</p>
        `
      },
      {
        type: 'image',
        src: "/rest-1.png",
        alt: "Una persona relajándose en un sofá con una taza de té, en un ambiente tranquilo que evoca paz y recuperación.",
        aiHint: "A serene, cozy image of a person relaxing on a comfortable couch with a steaming mug of tea. Soft, warm lighting. The mood is one of peace, quiet, and well-deserved rest."
      },
      {
        type: 'html',
        content: `
          <h4>1. Construyendo Músculos Mientras Duermes</h4>
          <p>Cuando caminas, especialmente durante las fases más intensas de tu plan, creas microdesgarros en tus fibras musculares. ¡Esto es algo bueno! Es la señal que le dice a tu cuerpo: "Necesito ser más fuerte". Es durante el descanso, y especialmente durante el sueño profundo, que tu cuerpo hace su magia. Repara estas fibras, pero no solo eso: las reconstruye más fuertes y resistentes que antes. Ignorar el descanso es como demoler un edificio y nunca reconstruirlo.</p>
          
          <h4>2. El Sueño: Tu Píldora Mágica para la Recuperación</h4>
          <p>El sueño es el pilar de la regeneración. Durante el sueño, tu cuerpo libera hormonas de crecimiento que son cruciales para la reparación de tejidos. También es cuando tu cerebro procesa lo aprendido y consolida los hábitos. Apunta a <strong>7-9 horas de sueño de calidad</strong> por noche. Para mejorar tu sueño:</p>
          <ul>
            <li>Crea una rutina: acuéstate y levántate a la misma hora todos los días.</li>
            <li>Haz de tu habitación un santuario oscuro, silencioso y fresco.</li>
            <li>Evita las pantallas (teléfono, TV) al menos una hora antes de dormir.</li>
          </ul>
        `
      },
      {
        type: 'image',
        src: "/rest-2.png",
        alt: "Una persona durmiendo plácidamente en una cama cómoda y oscura, simbolizando un sueño profundo y reparador.",
        aiHint: "Peaceful scene of a person sleeping soundly in a comfortable bed. The room is dark, except for soft moonlight coming through a window. The focus is on tranquility and deep, restorative sleep."
      },
      {
        type: 'html',
        content: `
          <h4>3. Recuperación Activa: Moverse para Recuperarse</h4>
          <p>Los días de descanso no tienen por qué significar inmovilidad total. La recuperación activa implica realizar actividades de muy baja intensidad que ayudan a estimular el flujo sanguíneo a los músculos. Esto lleva nutrientes frescos a las áreas que lo necesitan y ayuda a eliminar los productos de desecho metabólico. Algunas ideas para tus días de descanso programados:</p>
          <ul>
            <li>Una caminata muy lenta y corta (10-15 minutos).</li>
            <li>Estiramientos suaves y sostenidos.</li>
            <li>Yoga restaurativo o meditación.</li>
          </ul>

          <h4>4. Escucha a tu Cuerpo: El Indicador Más Importante</h4>
          <p>Tu cuerpo te envía señales constantemente. Si te sientes inusualmente fatigado, adolorido o si tu rendimiento decae, podría ser una señal de que necesitas más descanso. Ignorar estas señales puede llevar al sobreentrenamiento. <strong>Ser inteligente con tu recuperación te hará más fuerte a largo plazo.</strong></p>

          <p class="mt-6">Recuerda: entrenas para desafiar a tu cuerpo, pero descansas para permitirle cambiar. Abraza tus días de descanso con el mismo entusiasmo que tus días de caminata.</p>
        `
      }
    ]
  },
  {
    id: 6,
    title: "Motivación y Constancia",
    content: [
      {
        type: 'html',
        content: `
          <h3>La Llama Interior: Cómo Mantenerte en Marcha</h3>
          <p>La motivación es la chispa que te hace empezar el <strong>Plan de 30 Días</strong>, pero el hábito es lo que te mantiene ardiendo. En este capítulo, te daremos las herramientas no solo para empezar con fuerza, sino para continuar con una determinación inquebrantable.</p>
          
          <h4>La Verdad Sobre la Motivación</h4>
          <p>La motivación no es un estado permanente; es una emoción que fluctúa. ¡Y eso está bien! La clave del éxito no es esperar a que llegue, sino <strong>crearla a través de la acción</strong>. El simple acto de ponerte las zapatillas y salir por la puerta puede ser suficiente para generar el impulso que necesitas. La acción precede a la motivación, no al revés.</p>
        `
      },
      {
        type: 'image',
        src: "/motivation-1.png",
        alt: "Una persona atándose los cordones de sus zapatillas de deporte, lista para salir a caminar.",
        aiHint: "Close-up, top-down shot of a person tying the laces of their running shoes. The focus is on the hands and the shoes, symbolizing the decision and preparation to take action."
      },
      {
        type: 'html',
        content: `
          <h4>Estrategias para Mantener Viva la Llama</h4>
          <ul>
            <li><strong>Define tu "Porqué" Profundo:</strong> No te quedes en "quiero perder peso". Pregúntate: ¿Por qué quiero perder peso? ¿Para tener más energía para jugar con mis hijos? ¿Para sentirme más seguro? Escribe este "porqué" y ponlo en un lugar visible. Será tu ancla en los días difíciles.</li>
            <li><strong>Celebra las Pequeñas Victorias:</strong> ¿Completaste el entrenamiento de hoy aunque estabas cansado? ¡Eso es una victoria! Marcar cada día en el dashboard refuerza tu progreso y crea un ciclo de retroalimentación positiva.</li>
            <li><strong>Planifica tu Éxito:</strong> No dejes tus caminatas al azar. Míralas como citas importantes contigo mismo. Agenda tus entrenamientos en tu calendario, prepara tu ropa la noche anterior. Elimina las barreras antes de que aparezcan.</li>
            <li><strong>No Rompas la Cadena:</strong> Intenta completar tu caminata todos los días programados. Cada día que lo haces, añades un eslabón a la cadena de tu nuevo hábito. Después de unas semanas, tu principal motivación será no querer romper esa cadena.</li>
          </ul>

          <h4>¿Qué Pasa si Fallo un Día?</h4>
          <p>¡No pasa nada! Un día perdido no es un fracaso. La regla de oro es: <strong>nunca te saltes dos días seguidos.</strong> Si te saltas un día, asegúrate de volver al siguiente. El camino hacia el fitness no es una línea recta, sino una serie de pasos hacia adelante. Lo importante es que la dirección general sea de progreso.</p>

          <p class="mt-6">Recuerda, no estás solo en esto. Cada día, estás construyendo una nueva versión de ti mismo. <strong>Sigue adelante. Paso a paso, estás forjando un hábito que te cambiará la vida.</strong></p>
        `
      }
    ],
  },
];
    
