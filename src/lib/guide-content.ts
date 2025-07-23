
// src/lib/guide-content.ts

export interface GuideChapter {
  id: number;
  title: string;
  content: string;
}

export const guideContent: GuideChapter[] = [
  {
    id: 1,
    title: "Introducción",
    content: `
      <p class="lead">¡Bienvenido a <strong>SlimWalk</strong>, tu programa personal de caminata de 30 días! Estás al comienzo de un emocionante viaje que cambiará no solo tu cuerpo, sino también tu forma de pensar sobre el fitness y el bienestar. Esta guía es tu fiel compañera, llena de conocimientos, motivación y consejos prácticos para que cada paso sea un éxito.</p>
      
      <div class="my-6 rounded-lg overflow-hidden shadow-lg">
        <img src="https://placehold.co/800x400.png" alt="Una inspiradora vista de un paisaje con un camino que se pierde en la distancia, simbolizando el comienzo de un viaje. La luz es cálida y acogedora." class="w-full" data-ai-hint="inspiring landscape path" />
      </div>

      <h3>Qué puedes esperar de este programa</h3>
      <p>En los próximos 30 días, descubrirás que caminar es mucho más que una forma de moverse. Es una poderosa herramienta de transformación. Hemos desarrollado este programa cuidadosamente para guiarte paso a paso, desde comienzos suaves hasta sesiones desafiantes que aumentarán tu resistencia y activarán la quema de grasa. No se trata de la perfección, sino de la constancia. Se trata de escuchar a tu cuerpo, celebrar el progreso y establecer un hábito saludable y sostenible que te acompañará mucho después de estos 30 días.</p>

      <h3>¿Para quién es este programa?</h3>
      <p>¡Este programa es para todos! Ya sea que estés retomando el ejercicio después de una larga pausa, quieras mejorar tu nivel de condición física actual o busques una alternativa de bajo impacto al entrenamiento intenso. Nuestra misión es mostrarte cómo puedes lograr resultados sorprendentes con la forma de ejercicio más simple y natural.</p>
      
      <h3>Cómo usar esta guía</h3>
      <p>Esta guía está dividida en capítulos claros. Puedes leerla de principio a fin o consultar específicamente los temas que más te interesen en un momento dado. Recomendamos familiarizarse con los capítulos sobre la técnica correcta y la nutrición al principio para construir una base sólida. Vuelve aquí en cualquier momento que tengas una pregunta o necesites un impulso de motivación.</p>

      <div class="my-6 rounded-lg overflow-hidden shadow-lg">
          <img src="https://placehold.co/800x400.png" alt="Una persona caminando feliz y enérgica por un sendero pintoresco, representando la alegría y los resultados positivos del programa." class="w-full" data-ai-hint="energetic person walking" />
      </div>

      <p>¿Estás listo para dar el primer paso? Estamos emocionados de acompañarte en este camino. Empecemos juntos a esculpir una versión más sana, más en forma y más feliz de ti mismo, paso a paso.</p>
    `,
  },
  {
    id: 2,
    title: "El Poder de Caminar",
    content: `
      <h3>No subestimes el poder de un simple paso, repetido una y otra vez.</h3>
      <p>Caminar es el superpoder que todos poseemos, una forma de ejercicio fundamental, accesible y profundamente efectiva. Es la base sobre la que se construye una salud duradera. A diferencia de los entrenamientos de alta intensidad que pueden dejarte agotado, caminar te energiza, te rejuvenece y trabaja en armonía con tu cuerpo.</p>
      
      <div class="my-6 rounded-lg overflow-hidden shadow-lg">
        <img src="https://placehold.co/800x400.png" alt="Vista de los pies de una persona en zapatillas deportivas, dando un paso decidido hacia adelante sobre un sendero." class="w-full" data-ai-hint="determined step forward" />
      </div>

      <h4>1. Un corazón más fuerte con cada latido</h4>
      <p>Cada caminata es un entrenamiento para tu corazón. Al caminar a paso ligero, elevas tu ritmo cardíaco, lo que fortalece el músculo cardíaco. Esto mejora la circulación sanguínea en todo el cuerpo, reduce la presión arterial y disminuye significativamente el riesgo de enfermedades cardiovasculares. Piensa en cada paso como una inversión directa en la longevidad y la salud de tu corazón.</p>
      
      <h4>2. Tu aliado en el control de peso</h4>
      <p>Caminar es una herramienta increíblemente eficaz para quemar calorías. Una caminata enérgica no solo quema calorías durante la actividad, sino que también puede aumentar tu metabolismo. Combinado con una nutrición consciente, se convierte en la estrategia perfecta y sostenible para alcanzar y mantener un peso saludable sin las dietas extremas o el ejercicio extenuante.</p>

       <div class="my-6 rounded-lg overflow-hidden shadow-lg">
        <img src="https://placehold.co/800x400.png" alt="Una cinta métrica alrededor de una manzana fresca, simbolizando la conexión entre la nutrición y el control de peso." class="w-full" data-ai-hint="healthy measurement apple" />
      </div>
      
      <h4>3. Construyendo un cuerpo resiliente</h4>
      <p>Es un ejercicio de soporte de peso, lo que significa que fortalece tus huesos y aumenta su densidad, ayudando a prevenir la osteoporosis. Al mismo tiempo, tonifica los músculos de las piernas, los glúteos y el abdomen. Es una forma de bajo impacto, lo que lo hace ideal para tus articulaciones, a diferencia de correr, que puede ser más duro para las rodillas y las caderas.</p>
      
      <h4>4. Un bálsamo para la mente y el espíritu</h4>
      <p>El impacto de caminar va mucho más allá de lo físico. Es una forma de meditación en movimiento. Caminar libera endorfinas, las hormonas de la felicidad, que reducen el estrés, la ansiedad y mejoran tu estado de ánimo. Una caminata al aire libre, especialmente en la naturaleza, puede despejar tu mente, aumentar la creatividad y proporcionarte un valioso tiempo para ti mismo, lejos de las presiones de la vida diaria.</p>
    `,
  },
  {
    id: 3,
    title: "Fundamentos de Nutrición",
    content: `
      <h3>Combustible para tu viaje: La nutrición es tu aliada</h3>
      <p>Piensa en tu cuerpo como un coche de alto rendimiento. Tus caminatas son el viaje, y la comida es el combustible premium que necesitas para llegar lejos y con energía. El ejercicio es una parte crucial de tu transformación, pero combinarlo con una nutrición inteligente es lo que desatará tu verdadero potencial. No se trata de dietas restrictivas, sino de nutrir tu cuerpo de forma consciente y disfrutar de alimentos deliciosos que te apoyen en tus metas.</p>

      <div class="my-6 rounded-lg overflow-hidden shadow-lg">
        <img src="https://placehold.co/800x400.png" alt="Una colorida variedad de frutas y verduras frescas dispuestas artísticamente sobre una mesa de madera." class="w-full" data-ai-hint="vibrant healthy food" />
      </div>

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
    `,
  },
  {
    id: 4,
    title: "La Técnica Correcta",
    content: `
      <h3>Camina como un profesional: maximiza cada paso</h3>
      <p>Puede que pienses: "¿Caminar? ¡Lo he estado haciendo toda mi vida!" Pero hay una gran diferencia entre un paseo casual y una caminata poderosa y transformadora. Perfeccionar tu técnica no solo te ayudará a quemar más calorías y tonificar más músculos, sino que también te protegerá de lesiones y hará que cada sesión sea más agradable y efectiva. ¡Vamos a convertir tus pasos en progreso!</p>

      <div class="my-6 rounded-lg overflow-hidden shadow-lg">
        <img src="https://placehold.co/800x400.png" alt="Una persona caminando con una postura perfecta y erguida en un parque, demostrando la forma correcta." class="w-full" data-ai-hint="perfect walking posture" />
      </div>

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
      
      <div class="my-6 rounded-lg overflow-hidden shadow-lg">
        <img src="https://placehold.co/800x400.png" alt="Primer plano de los brazos de un caminante en el ángulo correcto, mostrando el movimiento adecuado." class="w-full" data-ai-hint="focused arm movement" />
      </div>

      <h4>4. El combustible: tu respiración</h4>
      <p>Respirar correctamente suministra el oxígeno que tus músculos necesitan para funcionar de manera óptima.</p>
      <ul>
        <li><strong>Respira rítmicamente:</strong> Inhala por la nariz, llenando tu vientre de aire, y exhala por la boca.</li>
        <li><strong>Sincroniza con tus pasos:</strong> Intenta encontrar un ritmo. Por ejemplo, inhala durante dos pasos y exhala durante dos o tres pasos.</li>
      </ul>

      <p class="mt-6">Al principio, puede que tengas que pensar conscientemente en estos elementos. Pero con la práctica, se convertirán en tu nueva forma natural de caminar. Sentirás más poder, más energía y verás mejores resultados. <strong>¡Cada paso es una oportunidad para hacerlo bien!</strong></p>
    `,
  },
  {
    id: 5,
    title: "Motivación y Constancia",
    content: `
      <h3>La Llama Interior: Cómo Cultivar la Motivación y Forjar un Hábito Inquebrantable</h3>
      <p>La motivación es la chispa que enciende el fuego, pero el hábito es lo que mantiene esa llama ardiendo día tras día. En este capítulo, te daremos las herramientas no solo para empezar con fuerza, sino para continuar con una determinación que te sorprenderá a ti mismo.</p>
      
      <h4>La Verdad Sobre la Motivación</h4>
      <p>La motivación no es un estado permanente; es una emoción que fluctúa. ¡Y eso está bien! Nadie se siente 100% motivado todo el tiempo. La clave del éxito no es esperar a que llegue la motivación, sino <strong>crearla a través de la acción</strong>. El simple acto de ponerte las zapatillas y salir por la puerta puede ser suficiente para generar el impulso que necesitas. La acción precede a la motivación, no al revés.</p>
      
      <div class="my-6 rounded-lg overflow-hidden shadow-lg">
        <img src="https://placehold.co/800x400.png" alt="Una persona atándose los cordones de sus zapatillas de deporte, lista para salir a caminar." class="w-full" data-ai-hint="tying shoelaces ready" />
      </div>

      <h4>Estrategias para Mantener Viva la Llama</h4>
      <ul>
        <li><strong>Define tu "Porqué" Profundo:</strong> No te quedes en "quiero perder peso". Pregúntate: ¿Por qué quiero perder peso? ¿Para tener más energía para jugar con mis hijos? ¿Para sentirme más seguro y vibrante? Escribe este "porqué" y ponlo en un lugar visible. Será tu ancla en los días difíciles.</li>
        <li><strong>Establece Metas Inteligentes (SMART):</strong>
            <ul>
                <li><strong>Específicas:</strong> "Caminaré 30 minutos, 5 días a la semana."</li>
                <li><strong>Medibles:</strong> La app registrará tus entrenamientos.</li>
                <li><strong>Alcanzables:</strong> El programa está diseñado para ser progresivo y realista.</li>
                <li><strong>Relevantes:</strong> ¿Se alinea con tu "porqué"?</li>
                <li><strong>Con Plazo:</strong> Este es un programa de 30 días, ¡un plazo perfecto!</li>
            </ul>
        </li>
        <li><strong>Celebra las Pequeñas Victorias:</strong> ¿Completaste el entrenamiento de hoy aunque estabas cansado? ¡Eso es una victoria! Reconoce y celebra cada día que cumples. Esto refuerza el hábito y crea un ciclo de retroalimentación positiva.</li>
        <li><strong>Planifica tu Éxito:</strong> No dejes tus caminatas al azar. Míralas como citas importantes contigo mismo. Agenda tus entrenamientos en tu calendario, prepara tu ropa la noche anterior. Elimina las barreras antes de que aparezcan.</li>
        <li><strong>No Rompas la Cadena:</strong> Intenta completar tu caminata todos los días programados. Cada día que lo haces, añades un eslabón a la cadena de tu nuevo hábito. Después de unas semanas, tu principal motivación será no querer romper esa cadena.</li>
      </ul>

      <h4>¿Qué Pasa si Fallo un Día?</h4>
      <p>¡No pasa nada! Un día perdido no es un fracaso; es simplemente un dato. La regla de oro es: <strong>nunca te saltes dos días seguidos.</strong> Si te saltas un día, asegúrate de volver al siguiente. El camino hacia el fitness no es una línea recta, sino una serie de pasos hacia adelante. Lo importante es que la dirección general sea de progreso.</p>

      <p class="mt-6">Recuerda, no estás solo en esto. Cada día, estás construyendo una nueva versión de ti mismo. Estás invirtiendo en tu salud, tu energía y tu felicidad. <strong>Sigue adelante. Paso a paso, estás forjando un hábito que te cambiará la vida.</strong></p>
    `,
  },
  {
    id: 6,
    title: "Descanso y Regeneración",
    content: `
      <h3>El Arte de la Pausa: Por Qué el Descanso es tu Arma Secreta</h3>
      <p>En nuestra cultura de "siempre más", es fácil pensar que los resultados solo llegan cuando estamos en movimiento. Pero aquí está la verdad que transformará tu enfoque: <strong>el progreso real no sucede durante el entrenamiento, sino durante el descanso.</strong> La regeneración no es pereza; es una parte activa, inteligente y absolutamente esencial de tu camino hacia un cuerpo más fuerte y en forma.</p>

      <div class="my-6 rounded-lg overflow-hidden shadow-lg">
        <img src="https://placehold.co/800x400.png" alt="Una persona relajándose en un sofá con una taza de té, en un ambiente tranquilo que evoca paz y recuperación." class="w-full" data-ai-hint="calm relaxation tea" />
      </div>

      <h4>1. Construyendo Músculos Mientras Duermes</h4>
      <p>Cuando caminas, especialmente durante las fases más intensas, creas microdesgarros en tus fibras musculares. ¡Esto es algo bueno! Es la señal que le dice a tu cuerpo: "Necesito ser más fuerte". Es durante el descanso, y especialmente durante el sueño profundo, que tu cuerpo hace su magia. Repara estas fibras, pero no solo eso: las reconstruye más fuertes y resistentes que antes. Ignorar el descanso es como demoler un edificio y nunca reconstruirlo.</p>
      
      <h4>2. El Sueño: Tu Píldora Mágica para la Recuperación</h4>
      <p>El sueño es el pilar de la regeneración. Durante el sueño, tu cuerpo libera hormonas de crecimiento que son cruciales para la reparación de tejidos. También es cuando tu cerebro procesa lo aprendido y consolida los hábitos. Apunta a <strong>7-9 horas de sueño de calidad</strong> por noche. Para mejorar tu sueño:</p>
      <ul>
        <li>Crea una rutina: acuéstate y levántate a la misma hora todos los días.</li>
        <li>Haz de tu habitación un santuario oscuro, silencioso y fresco.</li>
        <li>Evita las pantallas (teléfono, TV) al menos una hora antes de dormir.</li>
      </ul>

      <div class="my-6 rounded-lg overflow-hidden shadow-lg">
        <img src="https://placehold.co/800x400.png" alt="Una persona durmiendo plácidamente en una cama cómoda y oscura, simbolizando un sueño profundo y reparador." class="w-full" data-ai-hint="restful peaceful sleep" />
      </div>

      <h4>3. Recuperación Activa: Moverse para Recuperarse</h4>
      <p>Los días de descanso no tienen por qué significar inmovilidad total. La recuperación activa implica realizar actividades de muy baja intensidad que ayudan a estimular el flujo sanguíneo a los músculos. Esto lleva nutrientes frescos a las áreas que lo necesitan y ayuda a eliminar los productos de desecho metabólico, lo que puede reducir el dolor muscular y acelerar la recuperación. Algunas ideas:</p>
      <ul>
        <li>Una caminata muy lenta y corta (10-15 minutos).</li>
        <li>Estiramientos suaves y sostenidos.</li>
        <li>Yoga restaurativo o meditación.</li>
      </ul>

      <h4>4. Escucha a tu Cuerpo: El Indicador Más Importante</h4>
      <p>Tu cuerpo te envía señales constantemente. Aprende a escucharlas. Si te sientes inusualmente fatigado, adolorido o si tu rendimiento decae, podría ser una señal de que necesitas más descanso. Ignorar estas señales puede llevar al sobreentrenamiento, lo que aumenta el riesgo de lesiones y detiene tu progreso. <strong>Ser inteligente con tu recuperación te hará más rápido y más fuerte a largo plazo.</strong></p>

      <p class="mt-6">Recuerda: entrenas para desafiar a tu cuerpo, pero descansas para permitirle cambiar. Abraza tus días de descanso con el mismo entusiasmo que tus días de caminata. Son dos caras de la misma moneda del éxito.</p>
    `
  }
];
