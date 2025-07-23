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
      <h3>Por qué caminar es tan efectivo</h3>
      <p>Caminar es una de las formas de ejercicio más naturales y accesibles. Es de bajo impacto para las articulaciones, no requiere equipo especial y se puede practicar en casi cualquier lugar.</p>
      <ul>
        <li>Mejora de la salud cardiovascular</li>
        <li>Apoyo en el control del peso</li>
        <li>Fortalecimiento de huesos y músculos</li>
        <li>Reducción del estrés y mejora del estado de ánimo</li>
      </ul>
      <p><i>Próximamente se añadirán explicaciones detalladas y fundamentos científicos.</i></p>
    `,
  },
  {
    id: 3,
    title: "Fundamentos de Nutrición",
    content: `
      <h3>La nutrición como factor de éxito</h3>
      <p>El ejercicio es solo la mitad de la batalla. Una dieta equilibrada es crucial para alcanzar tus metas y nutrir tu cuerpo de manera óptima.</p>
      <h4>Macro y Micronutrientes</h4>
      <p>Un breve resumen sobre proteínas, carbohidratos, grasas, vitaminas y minerales, y su papel en tu cuerpo.</p>
      <h4>Hidratación</h4>
      <p>Por qué beber suficiente agua es esencial para la energía, el metabolismo y el bienestar general.</p>
      <p><i>Próximamente se añadirán consejos prácticos, recetas sencillas y planes de comidas.</i></p>
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
