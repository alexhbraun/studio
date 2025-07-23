
import type { WorkoutDay } from './types';

export const workouts: WorkoutDay[] = [
  {
    day: 1,
    title: "El primer paso hacia el cambio",
    description: "Un comienzo suave en tu nuevo programa. Hoy nos enfocamos en mover el cuerpo y establecer una rutina positiva sin un esfuerzo excesivo.",
    exercises: [
      { id: 1, name: "Caminata de calentamiento", description: "Comienza con un ritmo muy lento y relajado. Tus brazos deben balancearse libremente y tu respiración debe ser tranquila. El objetivo es preparar suavemente los músculos para el esfuerzo que se avecina. Piensa en esta fase como un diálogo con tu cuerpo, despertándolo con amabilidad y preparándolo para la actividad. Siente cómo aumenta ligeramente la circulación y cómo tus articulaciones empiezan a lubricarse. Es tu momento para conectar con el presente.", duration: "5", repetitions: null },
      { id: 2, name: "Ritmo rápido", description: "Aumenta tu ritmo para que tu frecuencia cardíaca se eleve ligeramente, pero aún puedas conversar sin problemas. Concéntrate en una postura erguida y un ritmo de paso constante. Este es el corazón de tu entrenamiento de hoy. Quieres sentir que estás trabajando, pero de forma controlada y sostenible. Imagina que caminas con un propósito, con energía en cada paso, sentando las bases de tu resistencia para los días venideros.", duration: "10", repetitions: null },
      { id: 3, name: "Caminata de enfriamiento", description: "Reduce tu ritmo nuevamente para bajar gradualmente tu frecuencia cardíaca. Aprovecha esta fase para respirar profundamente y dejar que tu cuerpo se calme. Esto promueve la regeneración. Felicítate por el trabajo hecho hoy. Este enfriamiento es un agradecimiento a tu cuerpo por su esfuerzo. Siente cómo tu pulso vuelve a la normalidad y disfruta de la sensación de logro. Has completado tu primer día, ¡y eso es un gran éxito!", duration: "5", repetitions: null },
    ],
  },
  {
    day: 2,
    title: "Construyendo el ritmo",
    description: "Hoy se trata de desarrollar una sensación de ritmo constante y enérgico. La constancia es la clave para desarrollar la resistencia y quemar grasa de manera efectiva.",
    exercises: [
      { id: 1, name: "Caminata de calentamiento", description: "Una caminata suave de 5 minutos para estimular la circulación y movilizar las articulaciones. Presta atención a un movimiento suelto y relajado. Concéntrate en tu respiración, inhalando por la nariz y exhalando por la boca. Libera cualquier tensión en tus hombros y cuello. Este es tu ritual de preparación para una sesión exitosa y llena de energía.", duration: "5", repetitions: null },
      { id: 2, name: "Caminata rápida y constante", description: "Mantén un ritmo rápido y constante durante 15 minutos. Encuentra un ritmo que puedas mantener bien sin quedarte sin aliento. Tu esfuerzo debe ser notable, pero no abrumador. Este es tu 'ritmo de crucero'. El objetivo es la consistencia. Intenta mantener la misma velocidad de principio a fin. Esto enseña a tu cuerpo a ser más eficiente con el uso de energía y es fundamental para construir una base aeróbica sólida.", duration: "15", repetitions: null },
      { id: 3, name: "Enfriamiento y estiramiento", description: "Termina la sesión con una caminata lenta. Después, estira suavemente los músculos de las pantorrillas, los muslos y los glúteos durante 20-30 segundos cada uno para promover la flexibilidad. Este estiramiento final es crucial para prevenir la rigidez y mejorar la recuperación. Mantén cada estiramiento sin rebotar, respirando profundamente para relajar el músculo. Es tu recompensa por el esfuerzo de hoy.", duration: "5", repetitions: null },
    ],
  },
  {
    day: 3,
    title: "Día activo",
    description: "Aumentamos la intensidad con los primeros intervalos. El cambio entre fases de esfuerzo y recuperación estimula el metabolismo y mejora la aptitud cardiovascular.",
    exercises: [
      { id: 1, name: "Calentamiento", description: "Comienza con 5 minutos de caminata ligera. Prepara tu cuerpo mental y físicamente para las secciones más rápidas que vienen. Usa este tiempo para visualizar tu entrenamiento, imaginándote fuerte y enérgico durante los intervalos. Prepara tu mente para el desafío que se avecina.", duration: "5", repetitions: null },
      { id: 2, name: "Intervalos de caminata", description: "Aquí cambiarás el ritmo a propósito: camina rápido durante 2 minutos, seguido de 1 minuto a un ritmo notablemente más rápido que te desafíe. Repite este ciclo durante todo el tiempo. La fase rápida es tu 'sprint'. Deberías sentir tu corazón latir con fuerza y tu respiración acelerarse. La fase de recuperación es para recuperar el aliento, pero sin detenerte por completo. Este método es increíblemente efectivo para mejorar la condición física.", duration: "20", repetitions: "aprox. 6-7 series" },
      { id: 3, name: "Enfriamiento", description: "Reduce drásticamente tu ritmo durante los últimos 5 minutos. Permite que tu pulso se normalice y disfruta de la sensación de haber superado el desafío. Siente la energía que fluye por tu cuerpo. Este es el resultado de un metabolismo activado. Has hecho un trabajo fantástico al llevar a tu cuerpo a un nuevo nivel de intensidad. ¡Siéntete orgulloso!", duration: "5", repetitions: null },
    ],
  },
  {
    day: 4,
    title: "Fuerza y resistencia",
    description: "Una sesión sólida para seguir consolidando tu resistencia básica. Concéntrate en una técnica limpia y una respiración uniforme durante todo el entrenamiento.",
    exercises: [
        { id: 1, name: "Caminata de calentamiento", description: "Comienza con 5 minutos de caminata ligera en un entorno tranquilo para entrar en calor y activar los músculos. Concéntrate en una buena postura: hombros hacia atrás, pecho abierto y la mirada al frente. Prepara tu cuerpo para mantener esta forma durante todo el entrenamiento.", duration: "5", repetitions: null },
        { id: 2, name: "Caminata rápida", description: "Mantén un ritmo rápido pero consistentemente cómodo durante 20 minutos. Se trata de cubrir distancia y entrenar la resistencia, no de hacer sprints. Este es un ejercicio de resistencia pura. El desafío es mantener la constancia y la técnica incluso cuando empieces a sentirte cansado. Siente la fuerza en tus piernas con cada paso.", duration: "20", repetitions: null },
        { id: 3, name: "Enfriamiento", description: "Termina la sesión con 3 minutos de caminata muy lenta. Esto ayuda a eliminar los productos de desecho metabólico de los músculos e iniciar la regeneración. Usa este tiempo para reflexionar sobre lo lejos que has llegado. Cada día construyes sobre el anterior. Eres más fuerte de lo que eras ayer.", duration: "3", repetitions: null },
    ],
  },
  {
    day: 5,
    title: "Quema de calorías",
    description: "Un entrenamiento diseñado para maximizar el gasto calórico a través de un ritmo constantemente alto.",
    exercises: [
      { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. El objetivo es preparar tu cuerpo para una sesión sostenida de quema de energía. Asegúrate de estar bien hidratado antes de empezar.", duration: "5", repetitions: null },
      { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada. Este es tu motor de quema de grasa. Concéntrate en mantener una cadencia alta (pasos por minuto) y usar los brazos activamente para impulsar el movimiento. Siente cómo tu cuerpo genera calor y quema energía. ¡Estás en la zona!", duration: "18", repetitions: null },
      { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Has completado una sesión intensa. Disfruta de la sensación de un trabajo bien hecho y de saber que has dado un gran paso hacia tu objetivo.", duration: "5", repetitions: null },
    ],
  },
  {
    day: 6,
    title: "Intervalos de potencia",
    description: "Alternando fases rápidas y moderadas, el metabolismo se estimula intensamente y se optimiza la quema de grasa.",
    exercises: [
      { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Prepárate mentalmente para los picos de intensidad que vienen. Visualízate moviéndote con fuerza y confianza durante las fases de potencia.", duration: "5", repetitions: null },
      { id: 2, name: "Intervalos de caminata", description: "Alterna entre 3 minutos de caminata rápida y 1 minuto de caminata potente (power walking). Durante el power walking, usa los brazos activamente y aumenta la frecuencia de los pasos. En la fase de potencia, el objetivo es la máxima intensidad controlada. Impúlsate con los glúteos y mantén el abdomen firme. Estos picos de esfuerzo son los que realmente aceleran tu metabolismo.", duration: "20", repetitions: "5 series" },
      { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Has desafiado a tu cuerpo y lo has hecho más fuerte. Siente la satisfacción de haber superado tus límites. La recuperación ahora es clave.", duration: "5", repetitions: null },
    ],
  },
  {
    day: 7,
    title: "Final de la semana",
    description: "Una sesión más larga para concluir la semana, consolidando tu progreso hasta ahora y aumentando la resistencia.",
    exercises: [
      { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Reflexiona sobre tu primera semana de progreso. Has construido una base sólida y hoy es la culminación de ese esfuerzo.", duration: "5", repetitions: null },
      { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada. Esta es tu caminata de resistencia de la semana. Concéntrate en mantener una buena forma incluso cuando te canses. Demuéstrate a ti mismo lo lejos que has llegado. Eres capaz de mucho más de lo que crees.", duration: "25", repetitions: null },
      { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. ¡Felicidades! Has completado la primera semana. Tómate un momento para apreciar tu dedicación y el camino que has recorrido. El descanso de mañana será bien merecido.", duration: "5", repetitions: null },
    ],
  },
  {
    day: 8,
    title: "Control de la respiración",
    description: "Hoy el enfoque está en sincronizar la respiración y el movimiento para aumentar la eficiencia y manejar mejor el esfuerzo.",
    exercises: [
        { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Desde el principio, concéntrate en tu respiración. Inhala profundamente por la nariz, siente cómo se expande tu abdomen, y exhala lentamente por la boca.", duration: "5", repetitions: null },
        { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada. Intenta sincronizar tus pasos con tu respiración. Por ejemplo, inhala durante tres pasos y exhala durante tres pasos. Esto calma tu sistema nervioso y asegura que tus músculos reciban el oxígeno que necesitan, haciéndote más eficiente y resistente.", duration: "23", repetitions: null },
        { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Continúa con la respiración profunda y consciente. Siente cómo la calma inunda tu cuerpo mientras tu ritmo cardíaco desciende. El control de la respiración es una habilidad que te servirá dentro y fuera del entrenamiento.", duration: "5", repetitions: null },
    ]
  },
  {
      day: 9,
      title: "Intervalos de potencia",
      description: "Alternando fases rápidas y moderadas, el metabolismo se estimula intensamente y se optimiza la quema de grasa.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Hoy volvemos a los intervalos. Usa el calentamiento para preparar tu mente para los cambios de ritmo. Con cada minuto que pasa, te sientes más preparado y fuerte.", duration: "5", repetitions: null },
          { id: 2, name: "Intervalos de caminata", description: "Alterna entre 3 minutos de caminata rápida y 1 minuto de caminata potente (power walking). Durante el power walking, usa los brazos activamente y aumenta la frecuencia de los pasos. En las fases de potencia, desafíate a ti mismo un poco más que la última vez. Un paso más rápido, un braceo más enérgico. Es en estos pequeños incrementos donde se produce la verdadera transformación. ¡Tú puedes!", duration: "24", repetitions: "6 series" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Has dominado los intervalos de hoy. Siente el poder que has construido. Tu cuerpo se está adaptando, volviéndose una máquina más eficiente para quemar grasa.", duration: "5", repetitions: null },
      ]
  },
  {
      day: 10,
      title: "Quema de calorías",
      description: "Un entrenamiento diseñado para maximizar el gasto calórico a través de un ritmo constantemente alto.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. El objetivo de hoy es mantener un ritmo elevado. Usa este calentamiento para encontrar tu foco y tu determinación. Prepárate para una sesión de cardio sólida y efectiva.", duration: "5", repetitions: null },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada. Visualiza tus metas. Con cada paso, estás quemando calorías y acercándote más a tu objetivo. Mantén la concentración y la postura. Este es un testimonio de tu creciente resistencia y fuerza de voluntad. Sigue adelante, con fuerza.", duration: "25", repetitions: null },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Buen trabajo. Has mantenido la intensidad y has completado una poderosa sesión de quema de calorías. Hidrátate bien y siéntete orgulloso de tu esfuerzo.", duration: "5", repetitions: null },
      ]
  },
  {
      day: 11,
      title: "Concentración",
      description: "Entrenamiento mental: concéntrate en tu postura, tus pasos y tu entorno para sacar el máximo provecho de tu entrenamiento.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Hoy, la mente es tan importante como el cuerpo. Despeja tus pensamientos y prepárate para estar presente en cada paso de tu caminata.", duration: "5", repetitions: null },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada. Concéntrate en la 'Técnica Correcta' que has aprendido. ¿Están tus hombros relajados? ¿Tu abdomen activo? ¿Aterrizas con el talón y te impulsas con la punta? Esta caminata consciente maximiza los beneficios de cada movimiento.", duration: "26", repetitions: null },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. La concentración que has mantenido ha convertido este entrenamiento en una forma de meditación en movimiento. Llevas contigo no solo los beneficios físicos, sino también una mente más clara y tranquila.", duration: "5", repetitions: null },
      ]
  },
  {
      day: 12,
      title: "Intervalos de potencia",
      description: "Alternando fases rápidas y moderadas, el metabolismo se estimula intensamente y se optimiza la quema de grasa.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Conoces el ejercicio. Sabes que puedes hacerlo. El calentamiento es tu momento para generar confianza antes de enfrentarte a los intervalos con una nueva fuerza.", duration: "5", repetitions: null },
          { id: 2, name: "Intervalos de caminata", description: "Alterna entre 3 minutos de caminata rápida y 1 minuto de caminata potente (power walking). Durante el power walking, usa los brazos activamente y aumenta la frecuencia de los pasos. Estás en la Semana 2. Eres más fuerte. En los minutos de potencia, busca esa intensidad que te desafía pero que sabes que puedes sostener. Siente el poder en tus piernas y la fuerza en tu corazón. ¡Cada intervalo te transforma!", duration: "28", repetitions: "7 series" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Has completado otra sesión de intervalos de alta intensidad. Tu cuerpo está aprendiendo a recuperarse más rápido y a trabajar más duro. Estás haciendo un progreso increíble.", duration: "5", repetitions: null },
      ]
  },
  {
      day: 13,
      title: "Desafío del día",
      description: "Un desafío especial para romper estancamientos y establecer nuevos estímulos para los músculos y la resistencia.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Hoy toca un desafío: la inclinación. Prepara tus piernas y tu mente para un tipo diferente de esfuerzo. La variedad es clave para el progreso.", duration: "5", repetitions: null },
          { id: 2, name: "Caminata en pendiente", description: "Encuentra una colina suave o ajusta una inclinación en la cinta de correr. Mantén un ritmo constante mientras subes para trabajar intensamente los músculos de las piernas y los glúteos. La pendiente es un constructor de fuerza increíble. Inclínate ligeramente hacia adelante desde los tobillos y acorta tus pasos. Siente el trabajo en tus glúteos y pantorrillas. Estás esculpiendo tu cuerpo con cada paso cuesta arriba.", duration: "28", repetitions: null },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Has conquistado la colina. Este tipo de entrenamiento no solo construye fuerza física, sino también fortaleza mental. Has demostrado que no rehúyes un desafío. ¡Excelente trabajo!", duration: "5", repetitions: null },
      ]
  },
  {
      day: 14,
      title: "Final de la semana",
      description: "Una sesión más larga para concluir la semana, consolidando tu progreso hasta ahora y aumentando la resistencia.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Es el final de la segunda semana. Tómate un momento para sentir la diferencia en tu cuerpo en comparación con el Día 1. Eres más fuerte, más resistente. Celebra eso.", duration: "5", repetitions: null },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada. Esta es tu vuelta de la victoria de la semana. Una caminata de resistencia para demostrar todo el progreso que has hecho. Mantén un ritmo sólido y constante. Disfruta de la sensación de poder y resistencia que has construido.", duration: "30", repetitions: null },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. ¡Dos semanas completadas! Estás en el ecuador del programa. El impulso está de tu lado. Descansa bien y prepárate para la segunda mitad de tu transformación.", duration: "5", repetitions: null },
      ]
  },
  {
      day: 15,
      title: "Intervalos de potencia",
      description: "Alternando fases rápidas y moderadas, el metabolismo se estimula intensamente y se optimiza la quema de grasa.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Entramos en la segunda mitad del plan. La intensidad aumenta, pero tú también eres más fuerte. Afronta estos intervalos con la confianza de todo lo que ya has logrado.", duration: "5", repetitions: null },
          { id: 2, name: "Intervalos de caminata", description: "Alterna entre 3 minutos de caminata rápida y 1 minuto de caminata potente (power walking). Durante el power walking, usa los brazos activamente y aumenta la frecuencia de los pasos. Ahora los intervalos son más largos. Tu desafío es mantener la calidad del movimiento en las fases de potencia, incluso cuando te sientas fatigado. Concéntrate, respira y da lo mejor de ti. ¡Aquí es donde ocurre el cambio!", duration: "32", repetitions: "8 series" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Has superado una de las sesiones de intervalos más duras hasta ahora. Tu capacidad cardiovascular y tu resistencia están alcanzando nuevos niveles. Siéntete imparable.", duration: "5", repetitions: null },
      ]
  },
  {
      day: 16,
      title: "Ritmo y cadencia",
      description: "Encuentra y mantén tu ritmo de caminata ideal para ahorrar energía y mejorar el rendimiento.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Hoy nos centramos en la eficiencia del movimiento. Prepara tu cuerpo para encontrar un ritmo que puedas llamar 'tuyo'.", duration: "5", repetitions: null },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada. Experimenta con la longitud y la frecuencia de tus pasos para encontrar el punto óptimo donde te sientas potente y eficiente. Este ritmo sostenible es tu herramienta clave para las caminatas más largas. Domínalo.", duration: "30", repetitions: null },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Al optimizar tu cadencia, no solo mejoras el rendimiento, sino que también reduces el riesgo de lesiones. Has entrenado de forma más inteligente, no solo más dura.", duration: "5", repetitions: null },
      ]
  },
  {
      day: 17,
      title: "Energía y Fuerza",
      description: "Enfoque en construir una sólida condición física básica para preparar sesiones más largas e intensas.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Hoy es un día de construcción. Cada paso que das es un ladrillo más en el edificio de tu nueva condición física. Concéntrate y prepárate para construir.", duration: "5", repetitions: null },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada. Siente la fuerza en tus piernas, la estabilidad en tu abdomen y la resistencia en tu corazón. Eres una máquina de resistencia. Mantén el ritmo y demuestra la fuerza que has estado construyendo día a día.", duration: "31", repetitions: null },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Las sesiones como esta son fundamentales. Consolidan tus ganancias y te preparan para los próximos desafíos. Has fortalecido tu base. ¡Bien hecho!", duration: "5", repetitions: null },
      ]
  },
  {
      day: 18,
      title: "Intervalos de potencia",
      description: "Alternando fases rápidas y moderadas, el metabolismo se estimula intensamente y se optimiza la quema de grasa.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. De vuelta a los intervalos. Ya eres un experto en esto. Sabes qué esperar y sabes que puedes superarlo. Entra en la sesión con una mentalidad de poder y confianza.", duration: "5", repetitions: null },
          { id: 2, name: "Intervalos de caminata", description: "Alterna entre 3 minutos de caminata rápida y 1 minuto de caminata potente (power walking). Durante el power walking, usa los brazos activamente y aumenta la frecuencia de los pasos. Ahora estás trabajando a un nivel superior. Empuja en esas fases de potencia. Siente cómo tu metabolismo se dispara. Este es el tipo de entrenamiento que sigue quemando calorías horas después de haber terminado.", duration: "32", repetitions: "8 series" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Lo has vuelto a hacer. Cada sesión de intervalos te hace más fuerte, más rápido y más resistente. Estás redefiniendo tus límites. ¡Sigue así!", duration: "5", repetitions: null },
      ]
  },
  {
      day: 19,
      title: "Desafío del día",
      description: "Un desafío especial para romper estancamientos y establecer nuevos estímulos para los músculos y la resistencia.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. El desafío de la colina está de vuelta, pero esta vez eres más fuerte. Acepta el desafío sabiendo que estás más que preparado para conquistarlo.", duration: "5", repetitions: null },
          { id: 2, name: "Caminata en pendiente", description: "Encuentra una colina suave o ajusta una inclinación en la cinta de correr. Mantén un ritmo constante mientras subes para trabajar intensamente los músculos de las piernas y los glúteos. Concéntrate en la potencia de tus glúteos para impulsarte hacia arriba. Cada paso es una victoria contra la gravedad y contra tus antiguos límites. Siente la quemazón, es el sonido de la fuerza que se está construyendo.", duration: "32", repetitions: null },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. La fortaleza que ganas en las pendientes se traduce en velocidad y resistencia en terreno plano. Has hecho una inversión increíble en tu condición física hoy.", duration: "5", repetitions: null },
      ]
  },
  {
      day: 20,
      title: "Quema de calorías",
      description: "Entrenamiento avanzado de quema de calorías para maximizar la pérdida de peso y la condición física.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Hoy nos centramos en mantener el motor en marcha. Una sesión de cardio larga y constante para maximizar la quema de grasa. Prepárate para sudar y sentirte increíble.", duration: "5", repetitions: null },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada. Entra en la zona. Encuentra tu ritmo, pon tu música favorita y deja que los minutos pasen. Estás en un viaje de resistencia, demostrando tu capacidad para perseverar. Cada minuto es una victoria.", duration: "33", repetitions: null },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Fantástico trabajo. Has mantenido a tu cuerpo en la zona de quema de grasa durante un tiempo considerable. Los resultados de sesiones como esta se acumulan rápidamente.", duration: "5", repetitions: null },
      ]
  },
  {
      day: 21,
      title: "Intervalos de potencia",
      description: "Alternando fases rápidas y moderadas, el metabolismo se estimula intensamente y se optimiza la quema de grasa.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Última sesión de intervalos de la semana 3. Ya sabes lo que tienes que hacer. Prepárate para darlo todo y terminar la semana con una explosión de energía.", duration: "5", repetitions: null },
          { id: 2, name: "Intervalos de caminata", description: "Alterna entre 3 minutos de caminata rápida y 1 minuto de caminata potente (power walking). Durante el power walking, usa los brazos activamente y aumenta la frecuencia de los pasos. Esta es tu sesión de intervalos más larga hasta ahora. Es un testamento a tu progreso. En cada fase de potencia, recuerda por qué empezaste. Usa esa motivación para impulsarte hasta el final.", duration: "36", repetitions: "9 series" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. ¡Semana 3 completada! Has superado la fase más desafiante del programa. Estás en la recta final. El cambio que has logrado es enorme. ¡Celébralo!", duration: "5", repetitions: null },
      ]
  },
  {
      day: 22,
      title: "Energía y Fuerza",
      description: "Entrenamiento avanzado de quema de calorías para maximizar la pérdida de peso y la condición física.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulation. Comienza la última fase: la consolidación. Hoy se trata de afianzar tu increíble nivel de resistencia. Concéntrate en la sensación de fuerza que tienes ahora.", duration: "5", repetitions: null },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada. Moverse a este ritmo durante tanto tiempo habría parecido imposible hace unas semanas. Ahora, es un desafío que puedes manejar. Siente la potencia en cada paso y la facilidad en tu respiración. Has construido una base increíblemente sólida.", duration: "34", repetitions: null },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Cada sesión de resistencia como esta refina tu motor aeróbico. Estás programando tu cuerpo para ser una máquina eficiente de quemar grasa, incluso en reposo.", duration: "5", repetitions: null },
      ]
  },
  {
      day: 23,
      title: "Concentración",
      description: "Entrenamiento avanzado de quema de calorías para maximizar la pérdida de peso y la condición física.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Hoy volvemos a la caminata consciente. Tu técnica es ahora mucho más natural. Usa esta sesión para pulir los detalles y disfrutar de la conexión mente-cuerpo.", duration: "5", repetitions: null },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada. A este nivel de condición física, los pequeños ajustes en la postura y la técnica tienen un gran impacto. Concéntrate en un movimiento fluido y poderoso. Siente la sinergia de todo tu cuerpo trabajando en armonía para impulsarte hacia adelante.", duration: "35", repetitions: null },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Has cultivado no solo un cuerpo más fuerte, sino también una mente más enfocada. Esta habilidad de concentración te beneficiará en todos los aspectos de tu vida. Gran trabajo.", duration: "5", repetitions: null },
      ]
  },
  {
      day: 24,
      title: "Intervalos de potencia",
      description: "Alternando fases rápidas y moderadas, el metabolismo se estimula intensamente y se optimiza la quema de grasa.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Los intervalos de hoy son una prueba de tu nuevo nivel de potencia. Has hecho esto muchas veces. Confía en tu entrenamiento y en tu fuerza. Estás listo.", duration: "5", repetitions: null },
          { id: 2, name: "Intervalos de caminata", description: "Alterna entre 3 minutos de caminata rápida y 1 minuto de caminata potente (power walking). Durante el power walking, usa los brazos activamente y aumenta la frecuencia de los pasos. En estos últimos días, los intervalos son para demostrar tu poder. Ve a por ello en las fases de alta intensidad. Sorpréndete a ti mismo con lo rápido y fuerte que puedes ser. ¡Desata tu potencial!", duration: "36", repetitions: "9 series" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Has manejado una sesión de alta intensidad con una duración considerable. Tu capacidad de recuperación es más rápida, tu potencia es mayor. Estás en la cima de tu juego.", duration: "5", repetitions: null },
      ]
  },
  {
      day: 25,
      title: "Desafío del día",
      description: "Un desafío especial para romper estancamientos y establecer nuevos estímulos para los músculos y la resistencia.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Último desafío de colina. La última vez que te enfrentaste a esto, eras fuerte. Hoy, eres aún más fuerte. Vamos a por ello con todo.", duration: "5", repetitions: null },
          { id: 2, name: "Caminata en pendiente", description: "Encuentra una colina suave o ajusta una inclinación en la cinta de correr. Mantén un ritmo constante mientras subes para trabajar intensamente los músculos de las piernas y los glúteos. Ataca la colina. Siente el poder que has construido a lo largo de este mes. Ya no es un obstáculo, es una oportunidad para demostrar tu fuerza. Conquista cada paso con determinación.", duration: "35", repetitions: null },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Has dominado el desafío de la pendiente. Este es un reflejo de tu transformación. Los obstáculos que antes parecían grandes ahora son manejables. Esta es la fortaleza que te llevas contigo.", duration: "5", repetitions: null },
      ]
  },
  {
      day: 26,
      title: "Energía y Fuerza",
      description: "Entrenamiento avanzado de quema de calorías para maximizar la pérdida de peso y la condición física.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Estamos muy cerca del final. Cada sesión ahora es una celebración de tu viaje. Disfruta de esta caminata de resistencia, sintiendo la fuerza que posees.", duration: "5", repetitions: null },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada. Esta es una de tus últimas caminatas largas del programa. Hazla memorable. Concéntrate en la sensación de ligereza y poder. Tu cuerpo es una máquina afinada gracias a tu dedicación. Disfruta del viaje.", duration: "36", repetitions: null },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Un entrenamiento de resistencia más en tu haber. Tu corazón, tus pulmones y tus músculos están más sanos y fuertes. Estás a punto de cruzar la línea de meta.", duration: "5", repetitions: null },
      ]
  },
  {
      day: 27,
      title: "Intervalos de potencia",
      description: "Alternando fases rápidas y moderadas, el metabolismo se estimula intensamente y se optimiza la quema de grasa.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. ¡La última sesión de intervalos! Es tu oportunidad de darlo todo. Prepárate para una sesión explosiva y satisfactoria.", duration: "5", repetitions: null },
          { id: 2, name: "Intervalos de caminata", description: "Alterna entre 3 minutos de caminata rápida y 1 minuto de caminata potente (power walking). Durante el power walking, usa los brazos activamente y aumenta la frecuencia de los pasos. Diez series de potencia. Es el entrenamiento de intervalos más duro de todo el programa. Es tu examen final. Demuéstrate a ti mismo todo el poder que has desbloqueado. En cada fase de potencia, deja todo lo que tienes. ¡Sin remordimientos!", duration: "40", repetitions: "10 series" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Lo has hecho. Has superado el pico de intensidad del programa. Siente la euforia del logro. No hay nada que no puedas superar. Estás listo para cualquier cosa.", duration: "5", repetitions: null },
      ]
  },
  {
      day: 28,
      title: "Final de la semana",
      description: "Una sesión más larga para concluir la semana, consolidando tu progreso hasta ahora y aumentando la resistencia.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Última caminata de resistencia de la semana final. Concéntrate, disfruta y celebra cada paso de este penúltimo entrenamiento.", duration: "5", repetitions: null },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada. Durante esta caminata, reflexiona sobre tu viaje. Recuerda el Día 1 y compara cómo te sientes ahora. La diferencia es asombrosa, y todo es gracias a tu constancia. Mantén un ritmo de orgullo y celebración.", duration: "40", repetitions: null },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Estás a solo dos días de completar tu meta de 30 días. La sensación es increíble. Descansa, recupérate y prepárate para los dos últimos días.", duration: "5", repetitions: null },
      ]
  },
  {
      day: 29,
      title: "Ritmo y cadencia",
      description: "Encuentra y mantén tu ritmo de caminata ideal para ahorrar energía y mejorar el rendimiento.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Penúltimo día. Hoy es una caminata para disfrutar de tu nuevo nivel de fitness. Concéntrate en un movimiento suave, eficiente y potente.", duration: "5", repetitions: null },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada. Esta es tu 'vuelta de honor'. Camina con la cabeza alta, con la confianza de alguien que ha trabajado duro y ha logrado un cambio real. Siente la facilidad y la fuerza en tu zancada. Es el resultado de tu dedicación.", duration: "40", repetitions: null },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Mañana es el gran final. Hoy ha sido la preparación perfecta. Relájate, nútrete bien y duerme profundamente. Te lo has ganado.", duration: "5", repetitions: null },
      ]
  },
  {
      day: 30,
      title: "El gran final",
      description: "¡Lo lograste! Hoy celebramos tu increíble viaje. Una última sesión desafiante para marcar la culminación de 30 días de dedicación y progreso.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Este es el momento. El día 30. El día final. Respira hondo y sonríe. Estás a punto de completar lo que te propusiste. Comienza con calma y gratitud.", duration: "5", repetitions: null },
          { id: 2, name: "Caminata final", description: "Combina todo lo que has aprendido. Mantén una técnica excelente, un ritmo fuerte y constante y una actitud positiva. ¡Disfruta cada paso de este último entrenamiento! Esta es la celebración de 30 días de esfuerzo. Camina con orgullo, fuerza y alegría. Recuerda todos los desafíos que superaste. Eres una persona nueva, más fuerte y saludable. ¡Este es tu momento!", duration: "45", repetitions: null },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Has cruzado la línea de meta. ¡FELICIDADES! Te has comprometido, has trabajado duro y has triunfado. Este no es el final, es el comienzo de un estilo de vida más saludable y activo. ¡Estamos increíblemente orgullosos de ti!", duration: "5", repetitions: null },
      ]
  }
];
