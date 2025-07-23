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
        <img src="https://placehold.co/800x400.png" alt="Una inspiradora vista de un paisaje con un camino que se pierde en la distancia, simbolizando el comienzo de un viaje. La luz es cálida y acogedora." class="w-full" data-ai-hint="path landscape" />
      </div>

      <h3>Qué puedes esperar de este programa</h3>
      <p>En los próximos 30 días, descubrirás que caminar es mucho más que una forma de moverse. Es una poderosa herramienta de transformación. Hemos desarrollado este programa cuidadosamente para guiarte paso a paso, desde comienzos suaves hasta sesiones desafiantes que aumentarán tu resistencia y activarán la quema de grasa. No se trata de la perfección, sino de la constancia. Se trata de escuchar a tu cuerpo, celebrar el progreso y establecer un hábito saludable y sostenible que te acompañará mucho después de estos 30 días.</p>

      <h3>¿Para quién es este programa?</h3>
      <p>¡Este programa es para todos! Ya sea que estés retomando el ejercicio después de una larga pausa, quieras mejorar tu nivel de condición física actual o busques una alternativa de bajo impacto al entrenamiento intenso. Nuestra misión es mostrarte cómo puedes lograr resultados sorprendentes con la forma de ejercicio más simple y natural.</p>
      
      <h3>Cómo usar esta guía</h3>
      <p>Esta guía está dividida en capítulos claros. Puedes leerla de principio a fin o consultar específicamente los temas que más te interesen en un momento dado. Recomendamos familiarizarse con los capítulos sobre la técnica correcta y la nutrición al principio para construir una base sólida. Vuelve aquí en cualquier momento que tengas una pregunta o necesites un impulso de motivación.</p>

      <div class="my-6 rounded-lg overflow-hidden shadow-lg">
          <img src="https://placehold.co/800x400.png" alt="Una persona caminando feliz y enérgica por un sendero pintoresco, representando la alegría y los resultados positivos del programa." class="w-full" data-ai-hint="happy walking" />
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
        <img src="https://placehold.co/800x400.png" alt="Vista de los pies de una persona en zapatillas deportivas, dando un paso decidido hacia adelante sobre un sendero." class="w-full" data-ai-hint="walking shoes step" />
      </div>

      <h4>1. Un corazón más fuerte con cada latido</h4>
      <p>Cada caminata es un entrenamiento para tu corazón. Al caminar a paso ligero, elevas tu ritmo cardíaco, lo que fortalece el músculo cardíaco. Esto mejora la circulación sanguínea en todo el cuerpo, reduce la presión arterial y disminuye significativamente el riesgo de enfermedades cardiovasculares. Piensa en cada paso como una inversión directa en la longevidad y la salud de tu corazón.</p>
      
      <h4>2. Tu aliado en el control de peso</h4>
      <p>Caminar es una herramienta increíblemente eficaz para quemar calorías. Una caminata enérgica no solo quema calorías durante la actividad, sino que también puede aumentar tu metabolismo. Combinado con una nutrición consciente, se convierte en la estrategia perfecta y sostenible para alcanzar y mantener un peso saludable sin las dietas extremas o el ejercicio extenuante.</p>

       <div class="my-6 rounded-lg overflow-hidden shadow-lg">
        <img src="https://placehold.co/800x400.png" alt="Una cinta métrica alrededor de una manzana fresca, simbolizando la conexión entre la nutrición y el control de peso." class="w-full" data-ai-hint="apple measuring tape" />
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
        <img src="https://placehold.co/800x400.png" alt="Una colorida variedad de frutas y verduras frescas dispuestas artísticamente sobre una mesa de madera." class="w-full" data-ai-hint="fresh vegetables fruit" />
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
      <h3>Caminar de forma eficiente y sin lesiones</h3>
      <p>La postura y técnica correctas pueden marcar la diferencia en la efectividad de tu entrenamiento y en cómo te sientes al hacerlo.</p>
      <ul>
        <li><strong>Postura:</strong> Camina erguido, con los hombros hacia atrás y la mirada al frente.</li>
        <li><strong>Movimiento de brazos:</strong> Dobla los brazos en un ángulo de 90 grados y balancéalos libremente.</li>
        <li><strong>Pisada:</strong> Apoya primero el talón y luego rueda el peso sobre toda la planta del pie.</li>
      </ul>
      <p><i>Próximamente se añadirán guías visuales y correcciones de errores comunes.</i></p>
    `,
  },
  {
    id: 5,
    title: "Motivación y Constancia",
    content: `
      <h3>Crear hábitos a largo plazo</h3>
      <p>La motivación es lo que te pone en marcha. El hábito es lo que te mantiene en movimiento.</p>
      <p>Consejos para mantener la motivación:</p>
      <ul>
        <li>Establece metas intermedias realistas.</li>
        <li>Sigue tu progreso.</li>
        <li>Encuentra un compañero de entrenamiento.</li>
        <li>Recompénsate por los hitos alcanzados.</li>
      </ul>
      <p><i>Próximamente se añadirán estrategias para superar la desmotivación y manejar los contratiempos.</i></p>
    `,
  },
  {
    id: 6,
    title: "Descanso y Regeneración",
    content: `
        <h3>Por qué las pausas son tan importantes</h3>
        <p>Tu cuerpo no se fortalece durante el entrenamiento, sino en las fases de descanso posteriores. La regeneración es un proceso activo y crucial para tu progreso.</p>
        <h4>El papel del sueño</h4>
        <p>Un buen descanso es fundamental para la reparación del tejido muscular, la regulación hormonal y la recuperación mental.</p>
        <h4>Recuperación activa</h4>
        <p>Actividades ligeras como estiramientos o yoga suave en los días de descanso pueden promover la regeneración.</p>
        <p><i>Próximamente se añadirán instrucciones para ejercicios de estiramiento y técnicas de relajación.</i></p>
    `
  }
];
