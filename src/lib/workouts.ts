
import type { WorkoutDay } from './types';

export const workouts: WorkoutDay[] = [
  {
    day: 1,
    title: "El primer paso hacia el cambio",
    description: "Un comienzo suave en tu nuevo programa. Hoy nos enfocamos en mover el cuerpo y establecer una rutina positiva sin un esfuerzo excesivo.",
    calories: 120,
    steps: 2000,
    exercises: [
      { id: 1, name: "Caminata de calentamiento", description: "Este es tu momento de transición del reposo al movimiento. Comienza a caminar a un ritmo muy lento y natural, como si estuvieras paseando por un parque sin prisa. Deja que tus brazos se balanceen libremente a los costados, sin forzar el movimiento. Concéntrate en tu respiración: inhala suavemente por la nariz y exhala por la boca. El objetivo aquí no es el esfuerzo, sino despertar a tu cuerpo con amabilidad. Piensa en esta fase como un diálogo silencioso con tus músculos y articulaciones, diciéndoles que la actividad está por comenzar. Siente cómo la sangre empieza a fluir un poco más rápido, llevando oxígeno a tus piernas. Has tomado la decisión de empezar, y este primer paso es la prueba de ello.", duration: "5", repetitions: null, calories: 25, steps: 400 },
      { id: 2, name: "Ritmo rápido", description: "Ahora, aumenta conscientemente tu ritmo. Deberías sentir que tu corazón late un poco más rápido, pero aún así serías capaz de mantener una conversación. Concéntrate en tu postura: camina erguido, con los hombros relajados y hacia atrás, y la mirada al frente. Este es el núcleo de tu entrenamiento de hoy, donde comienzas a construir tu base aeróbica. Imagina que cada paso te llena de energía y te acerca a tu meta. No se trata de velocidad, sino de constancia. Estás enseñando a tu cuerpo a ser más eficiente.", duration: "10", repetitions: null, calories: 70, steps: 1200 },
      { id: 3, name: "Caminata de enfriamiento", description: "Reduce tu velocidad de nuevo, volviendo al ritmo suave del principio. Esta fase es crucial para que tu ritmo cardíaco vuelva a la normalidad de forma gradual y para indicarle a tu cuerpo que el trabajo ha terminado. Usa estos minutos para respirar profundamente y sentir la satisfacción del deber cumplido. Has completado el primer día. Este es el fundamento sobre el que construirás todo tu progreso. No subestimes este logro; es el más importante. ¡Felicidades!", duration: "5", repetitions: null, calories: 25, steps: 400 },
    ],
  },
  {
    day: 2,
    title: "Construyendo el ritmo",
    description: "Hoy se trata de desarrollar una sensación de ritmo constante y enérgico. La constancia es la clave para desarrollar la resistencia y quemar grasa de manera efectiva.",
    calories: 150,
    steps: 2500,
    exercises: [
      { id: 1, name: "Caminata de calentamiento", description: "Inicia tu sesión con 5 minutos de caminata suave. El objetivo es aumentar la temperatura corporal y la circulación sanguínea hacia los músculos. Concéntrate en tu respiración: inhala por la nariz, exhala por la boca. Libera la tensión de tus hombros y cuello. Este es tu ritual de preparación, un momento para centrarte antes de la sesión principal. Cada entrenamiento que comienzas es una victoria.", duration: "5", repetitions: null, calories: 25, steps: 400 },
      { id: 2, name: "Caminata rápida y constante", description: "Durante los próximos 15 minutos, encuentra un ritmo que te desafíe pero que puedas mantener de forma constante. Este es tu 'ritmo de crucero'. Deberías respirar más profundamente, pero sin quedarte sin aliento. La clave aquí es la consistencia. Intenta no variar la velocidad. Estás construyendo tu motor de resistencia. Siente la fuerza en tus piernas y el ritmo constante de tus pasos. Estás construyendo una base sólida.", duration: "15", repetitions: null, calories: 100, steps: 1700 },
      { id: 3, name: "Enfriamiento y estiramiento", description: "Reduce la velocidad durante 5 minutos para enfriar. Luego, dedica tiempo a estirar los músculos principales: pantorrillas, cuádriceps (muslos delanteros) e isquiotibiales (muslos traseros). Mantén cada estiramiento durante 20-30 segundos sin rebotar. Esto no solo mejora la flexibilidad, sino que acelera la recuperación y previene lesiones. Es tu forma de agradecerle a tu cuerpo por el esfuerzo.", duration: "5", repetitions: null, calories: 25, steps: 400 },
    ],
  },
  {
    day: 3,
    title: "Día activo",
    description: "Aumentamos la intensidad con los primeros intervalos. El cambio entre fases de esfuerzo y recuperación estimula el metabolismo y mejora la aptitud cardiovascular.",
    calories: 180,
    steps: 2800,
    exercises: [
      { id: 1, name: "Calentamiento", description: "Comienza con 5 minutos de caminata ligera. Hoy introducirás un nuevo desafío: los intervalos. Usa este tiempo para preparar tu mente para los cambios de ritmo. Visualiza cómo te mueves con energía durante las fases rápidas y cómo recuperas el control en las más lentas. La preparación mental es clave para una sesión exitosa.", duration: "5", repetitions: null, calories: 25, steps: 400 },
      { id: 2, name: "Intervalos de caminata", description: "Alterna entre 2 minutos de caminata a un ritmo normal y 1 minuto a un ritmo mucho más rápido que te exija un esfuerzo notable. Durante el minuto rápido, tu respiración se acelerará y sentirás el trabajo. Luego, en los dos minutos de recuperación, reduce la velocidad para recuperar el aliento, pero no te detengas. Este método de 'picos' es increíblemente efectivo para mejorar tu condición física y acelerar tu metabolismo. ¡Tú puedes!", duration: "20", repetitions: "aprox. 6-7 series", calories: 130, steps: 2000 },
      { id: 3, name: "Enfriamiento", description: "Finaliza con 5 minutos de caminata muy lenta. Permite que tu pulso se normalice gradualmente. Siente la energía que has generado. Los intervalos dejan tu metabolismo trabajando incluso después de terminar el ejercicio. Has llevado a tu cuerpo a un nuevo nivel de intensidad. ¡Siéntete orgulloso y recupérate bien!", duration: "5", repetitions: null, calories: 25, steps: 400 },
    ],
  },
  {
    day: 4,
    title: "Fuerza y resistencia",
    description: "Una sesión sólida para seguir consolidando tu resistencia básica. Concéntrate en una técnica limpia y una respiración uniforme durante todo el entrenamiento.",
    calories: 160,
    steps: 2600,
    exercises: [
        { id: 1, name: "Caminata de calentamiento", description: "Inicia con 5 minutos de caminata ligera. Concéntrate en adoptar una postura excelente desde el principio: hombros hacia atrás, pecho abierto, abdomen ligeramente contraído y la mirada al frente. Esta técnica no solo previene lesiones, sino que maximiza los beneficios de cada paso. Prepara tu cuerpo para mantener esta forma durante todo el entrenamiento.", duration: "5", repetitions: null, calories: 20, steps: 400 },
        { id: 2, name: "Caminata rápida", description: "Mantén un ritmo rápido y constante durante 20 minutos. El desafío de hoy es la resistencia mental y física. A medida que avanzas, tu mente puede decirte que bajes el ritmo. Tu trabajo es mantener la constancia, respirar profundamente y concentrarte en la fuerza de tus piernas. Estás construyendo una resistencia que te servirá en todos los aspectos de tu vida.", duration: "20", repetitions: null, calories: 120, steps: 2000 },
        { id: 3, name: "Enfriamiento", description: "Termina con 3 minutos de caminata muy lenta. Este enfriamiento activo ayuda a eliminar el ácido láctico de los músculos, reduciendo la posibilidad de agujetas. Usa este tiempo para reflexionar sobre tu progreso. Cada día construyes sobre el anterior. Hoy eres más fuerte de lo que eras ayer. Reconoce tu esfuerzo.", duration: "3", repetitions: null, calories: 20, steps: 200 },
    ],
  },
  {
    day: 5,
    title: "Quema de calorías",
    description: "Un entrenamiento diseñado para maximizar el gasto calórico a través de un ritmo constantemente alto.",
    calories: 190,
    steps: 2800,
    exercises: [
      { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y asegúrate de estar bien hidratado. Rota suavemente los hombros y las caderas para lubricar las articulaciones. Hoy el objetivo es mantener una intensidad elevada de forma sostenida. Prepara tu cuerpo y tu mente para una sesión de cardio pura y efectiva, donde cada paso cuenta para tu objetivo.", duration: "5", repetitions: null, calories: 30, steps: 400 },
      { id: 2, name: "Ritmo rápido", description: "Durante 18 minutos, mantén un ritmo que te haga sudar y respirar de forma profunda pero controlada. Este es tu 'punto dulce' para quemar grasa. Concéntrate en mantener una cadencia alta (pasos por minuto) y usa los brazos activamente, doblados a 90 grados, para impulsar tu movimiento. Siente cómo tu cuerpo genera calor. Estás en la zona de quema de calorías. ¡Sigue así!", duration: "18", repetitions: null, calories: 130, steps: 2000 },
      { id: 3, name: "Caminata de enfriamiento", description: "Reduce drásticamente la velocidad. Sacude suavemente los brazos y las piernas para liberar la tensión. Has completado una sesión intensa y muy productiva. Disfruta de la sensación de un trabajo bien hecho. Tu cuerpo te lo agradece y tu metabolismo está activado. ¡Gran trabajo!", duration: "5", repetitions: null, calories: 30, steps: 400 },
    ],
  },
  {
    day: 6,
    title: "Intervalos de potencia",
    description: "Alternando fases rápidas y moderadas, el metabolismo se estimula intensamente y se optimiza la quema de grasa.",
    calories: 220,
    steps: 3000,
    exercises: [
      { id: 1, name: "Caminata de calentamiento", description: "Comienza con 5 minutos de caminata suave. Prepárate mentalmente para los picos de intensidad. Visualízate moviéndote con fuerza y confianza durante las fases de potencia. Recuerda que cada intervalo es una oportunidad para desafiar tus límites y hacerte más fuerte. Hoy das un paso más en tu capacidad atlética.", duration: "5", repetitions: null, calories: 30, steps: 400 },
      { id: 2, name: "Intervalos de caminata", description: "Alterna 3 minutos de caminata rápida con 1 minuto de 'power walking' (caminata de potencia). En la fase de potencia, el objetivo es la máxima intensidad controlada. Aumenta la frecuencia de tus pasos, bracea enérgicamente y contrae los glúteos en cada zancada. Deberías sentir que es un esfuerzo significativo. Estos picos son los que realmente revolucionan tu metabolismo.", duration: "20", repetitions: "5 series", calories: 160, steps: 2200 },
      { id: 3, name: "Caminata de enfriamiento", description: "Reduce la velocidad y respira profundamente. Has desafiado a tu cuerpo y lo has obligado a adaptarse. Siente la satisfacción de haber superado tus límites. La recuperación ahora es clave para asimilar los beneficios de este entrenamiento tan eficaz. Has trabajado de forma muy inteligente hoy.", duration: "5", repetitions: null, calories: 30, steps: 400 },
    ],
  },
  {
    day: 7,
    title: "Final de la semana",
    description: "Una sesión más larga para concluir la semana, consolidando tu progreso hasta ahora y aumentando la resistencia.",
    calories: 250,
    steps: 3500,
    exercises: [
      { id: 1, name: "Caminata de calentamiento", description: "Inicia tu caminata de fin de semana con una sonrisa. Reflexiona sobre tu primera semana de progreso. Has construido una base sólida y has sido constante. Hoy es la culminación de ese esfuerzo. Siente el orgullo y la confianza que has ganado. Prepara tu cuerpo para una caminata de resistencia satisfactoria.", duration: "5", repetitions: null, calories: 30, steps: 400 },
      { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y constante durante 25 minutos. Esta es tu caminata de resistencia de la semana. Concéntrate en mantener una buena técnica, incluso cuando empieces a sentir el cansancio. Demuéstrate a ti mismo lo lejos que has llegado. Eres capaz de mucho más de lo que pensabas hace 7 días. ¡Disfruta de tu nueva fortaleza!", duration: "25", repetitions: null, calories: 190, steps: 2700 },
      { id: 3, name: "Caminata de enfriamiento", description: "Baja el ritmo y relájate. ¡Felicidades! Has completado la primera semana. Es un hito enorme. Tómate un momento para apreciar tu dedicación. Has establecido un hábito poderoso. El descanso de mañana será totalmente merecido y una parte crucial de tu progreso. ¡Excelente trabajo!", duration: "5", repetitions: null, calories: 30, steps: 400 },
    ],
  },
  {
    day: 8,
    title: "Control de la respiración",
    description: "Hoy el enfoque está en sincronizar la respiración y el movimiento para aumentar la eficiencia y manejar mejor el esfuerzo.",
    calories: 230,
    steps: 3300,
    exercises: [
        { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Desde el principio, concéntrate en tu respiración. Inhala profundamente por la nariz, siente cómo se expande tu abdomen, y exhala lentamente por la boca.", duration: "5", repetitions: null, calories: 30, steps: 400 },
        { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada. Intenta sincronizar tus pasos con tu respiración. Por ejemplo, inhala durante tres pasos y exhala durante tres pasos. Esto calma tu sistema nervioso y asegura que tus músculos receban el oxígeno que necesitan, haciéndote más eficiente y resistente.", duration: "23", repetitions: null, calories: 170, steps: 2500 },
        { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Continúa con la respiración profunda y consciente. Siente cómo la calma inunda tu cuerpo mientras tu ritmo cardíaco desciende. El control de la respiración es una habilidad que te servirá dentro y fuera del entrenamiento.", duration: "5", repetitions: null, calories: 30, steps: 400 },
    ]
  },
  {
      day: 9,
      title: "Intervalos de potencia",
      description: "Alternando fases rápidas y moderadas, el metabolismo se estimula intensamente y se optimiza la quema de grasa.",
      calories: 260,
      steps: 3500,
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Hoy volvemos a los intervalos. Usa el calentamiento para preparar tu mente para los cambios de ritmo. Con cada minuto que pasa, te sientes más preparado y fuerte.", duration: "5", repetitions: null, calories: 30, steps: 400 },
          { id: 2, name: "Intervalos de caminata", description: "Alterna entre 3 minutos de caminata rápida y 1 minuto de caminata potente (power walking). Durante el power walking, usa los brazos activamente y aumenta la frecuencia de los pasos. En las fases de potencia, desafíate a ti mismo un poco más que la última vez. Un paso más rápido, un braceo más enérgico. Es en estos pequeños incrementos donde se produce la verdadera transformación. ¡Tú puedes!", duration: "24", repetitions: "6 series", calories: 200, steps: 2700 },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Has dominado los intervalos de hoy. Siente el poder que has construido. Tu cuerpo se está adaptando, volviéndose una máquina más eficiente para quemar grasa.", duration: "5", repetitions: null, calories: 30, steps: 400 },
      ]
  },
  {
      day: 10,
      title: "Quema de calorías",
      description: "Un entrenamiento diseñado para maximizar el gasto calórico a través de un ritmo constantemente alto.",
      calories: 280,
      steps: 3700,
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. El objetivo de hoy es mantener un ritmo elevado. Usa este calentamiento para encontrar tu foco y tu determinación. Prepárate para una sesión de cardio sólida y efectiva.", duration: "5", repetitions: null, calories: 35, steps: 400 },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada. Visualiza tus metas. Con cada paso, estás quemando calorías y acercándote más a tu objetivo. Mantén la concentración y la postura. Este es un testimonio de tu creciente resistencia y fuerza de voluntad. Sigue adelante, con fuerza.", duration: "25", repetitions: null, calories: 210, steps: 2900 },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Buen trabajo. Has mantenido la intensidad y has completado una poderosa sesión de quema de calorías. Hidrátate bien y siéntete orgulloso de tu esfuerzo.", duration: "5", repetitions: null, calories: 35, steps: 400 },
      ]
  },
  {
      day: 11,
      title: "Concentración",
      description: "Entrenamiento mental: concéntrate en tu postura, tus pasos y tu entorno para sacar el máximo provecho de tu entrenamiento.",
      calories: 270,
      steps: 3800,
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Hoy, la mente es tan importante como el cuerpo. Despeja tus pensamientos y prepárate para estar presente en cada paso de tu caminata.", duration: "5", repetitions: null, calories: 30, steps: 400 },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada. Concéntrate en la 'Técnica Correcta' que has aprendido. ¿Están tus hombros relajados? ¿Tu abdomen activo? ¿Aterrizas con el talón y te impulsas con la punta? Esta caminata consciente maximiza los beneficios de cada movimiento.", duration: "26", repetitions: null, calories: 210, steps: 3000 },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. La concentración que has mantenido ha convertido este entrenamiento en una forma de meditación en movimiento. Llevas contigo no solo los beneficios físicos, sino también una mente más clara y tranquila.", duration: "5", repetitions: null, calories: 30, steps: 400 },
      ]
  },
  {
      day: 12,
      title: "Intervalos de potencia",
      description: "Alternando fases rápidas y moderadas, el metabolismo se estimula intensamente y se optimiza la quema de grasa.",
      calories: 300,
      steps: 3900,
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Conoces el ejercicio. Sabes que puedes hacerlo. El calentamiento es tu momento para generar confianza antes de enfrentarte a los intervalos con una nueva fuerza.", duration: "5", repetitions: null, calories: 35, steps: 400 },
          { id: 2, name: "Intervalos de caminata", description: "Alterna entre 3 minutos de caminata rápida y 1 minuto de caminata potente (power walking). Durante el power walking, usa los brazos activamente y aumenta la frecuencia de los pasos. Estás en la Semana 2. Eres más fuerte. En los minutos de potencia, busca esa intensidad que te desafía pero que sabes que puedes sostener. Siente el poder en tus piernas y la fuerza en tu corazón. ¡Cada intervalo te transforma!", duration: "28", repetitions: "7 series", calories: 230, steps: 3100 },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Has completado otra sesión de intervalos de alta intensidad. Tu cuerpo está aprendiendo a recuperarse más rápido y a trabajar más duro. Estás haciendo un progreso increíble.", duration: "5", repetitions: null, calories: 35, steps: 400 },
      ]
  },
  {
      day: 13,
      title: "Desafío del día",
      description: "Un desafío especial para romper estancamientos y establecer nuevos estímulos para los músculos y la resistencia.",
      calories: 310,
      steps: 3500,
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Hoy toca un desafío: la inclinación. Prepara tus piernas y tu mente para un tipo diferente de esfuerzo. La variedad es clave para el progreso.", duration: "5", repetitions: null, calories: 35, steps: 400 },
          { id: 2, name: "Caminata en pendiente", description: "Encuentra una colina suave o ajusta una inclinación en la cinta de correr. Mantén un ritmo constante mientras subes para trabajar intensamente los músculos de las piernas y los glúteos. La pendiente es un constructor de fuerza increíble. Inclínate ligeramente hacia adelante desde los tobillos y acorta tus pasos. Siente el trabajo en tus glúteos y pantorrillas. Estás esculpiendo tu cuerpo con cada paso cuesta arriba.", duration: "28", repetitions: null, calories: 240, steps: 2700 },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Has conquistado la colina. Este tipo de entrenamiento no solo construye fuerza física, sino también fortaleza mental. Has demostrado que no rehúyes un desafío. ¡Excelente trabajo!", duration: "5", repetitions: null, calories: 35, steps: 400 },
      ]
  },
  {
      day: 14,
      title: "Final de la semana",
      description: "Una sesión más larga para concluir la semana, consolidando tu progreso hasta ahora y aumentando la resistencia.",
      calories: 330,
      steps: 4200,
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Es el final de la segunda semana. Tómate un momento para sentir la diferencia en tu cuerpo en comparación con el Día 1. Eres más fuerte, más resistente. Celebra eso.", duration: "5", repetitions: null, calories: 35, steps: 400 },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada. Esta es tu vuelta de la victoria de la semana. Una caminata de resistencia para demostrar todo el progreso que has hecho. Mantén un ritmo sólido y constante. Disfruta de la sensación de poder y resistencia que has construido.", duration: "30", repetitions: null, calories: 260, steps: 3400 },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. ¡Dos semanas completadas! Estás en el ecuador del programa. El impulso está de tu lado. Descansa bien y prepárate para la segunda mitad de tu transformación.", duration: "5", repetitions: null, calories: 35, steps: 400 },
      ]
  },
  {
      day: 15,
      title: "Intervalos de potencia",
      description: "Alternando fases rápidas y moderadas, el metabolismo se estimula intensamente y se optimiza la quema de grasa.",
      calories: 350,
      steps: 4300,
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Entramos en la segunda mitad del plan. La intensidad aumenta, pero tú también eres más fuerte. Afronta estos intervalos con la confianza de todo lo que ya has logrado.", duration: "5", repetitions: null, calories: 40, steps: 400 },
          { id: 2, name: "Intervalos de caminata", description: "Alterna entre 3 minutos de caminata rápida y 1 minuto de caminata potente (power walking). Durante el power walking, usa los brazos activamente y aumenta la frecuencia de los pasos. Ahora los intervalos son más largos. Tu desafío es mantener la calidad del movimiento en las fases de potencia, incluso cuando te sientas fatigado. Concéntrate, respira y da lo mejor de ti. ¡Aquí es donde ocurre el cambio!", duration: "32", repetitions: "8 series", calories: 270, steps: 3500 },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Has superado una de las sesiones de intervalos más duras hasta ahora. Tu capacidad cardiovascular y tu resistencia están alcanzando nuevos niveles. Siéntete imparable.", duration: "5", repetitions: null, calories: 40, steps: 400 },
      ]
  },
  {
      day: 16,
      title: "Ritmo y cadencia",
      description: "Encuentra y mantén tu ritmo de caminata ideal para ahorrar energía y mejorar el rendimiento.",
      calories: 320,
      steps: 4100,
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Hoy nos centramos en la eficiencia del movimiento. Prepara tu cuerpo para encontrar un ritmo que puedas llamar 'tuyo'.", duration: "5", repetitions: null, calories: 35, steps: 400 },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada. Experimenta con la longitud y la frecuencia de tus pasos para encontrar el punto óptimo donde te sientas potente y eficiente. Este ritmo sostenible es tu herramienta clave para las caminatas más largas. Domínalo.", duration: "30", repetitions: null, calories: 250, steps: 3300 },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Al optimizar tu cadencia, no solo mejoras el rendimiento, sino que también reduces el riesgo de lesiones. Has entrenado de forma más inteligente, no solo más dura.", duration: "5", repetitions: null, calories: 35, steps: 400 },
      ]
  },
  {
      day: 17,
      title: "Energía y Fuerza",
      description: "Enfoque en construir una sólida condición física básica para preparar sesiones más largas e intensas.",
      calories: 340,
      steps: 4200,
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Hoy es un día de construcción. Cada paso que das es un ladrillo más en el edificio de tu nueva condición física. Concéntrate y prepárate para construir.", duration: "5", repetitions: null, calories: 40, steps: 400 },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada. Siente la fuerza en tus piernas, la estabilidad en tu abdomen y la resistencia en tu corazón. Eres una máquina de resistencia. Mantén el ritmo y demuestra la fuerza que has estado construyendo día a día.", duration: "31", repetitions: null, calories: 260, steps: 3400 },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Las sesiones como esta son fundamentales. Consolidan tus ganancias y te preparan para los próximos desafíos. Has fortalecido tu base. ¡Bien hecho!", duration: "5", repetitions: null, calories: 40, steps: 400 },
      ]
  },
  {
      day: 18,
      title: "Intervalos de potencia",
      description: "Alternando fases rápidas y moderadas, el metabolismo se estimula intensamente y se optimiza la quema de grasa.",
      calories: 360,
      steps: 4400,
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. De vuelta a los intervalos. Ya eres un experto en esto. Sabes qué esperar y sabes que puedes superarlo. Entra en la sesión con una mentalidad de poder y confianza.", duration: "5", repetitions: null, calories: 40, steps: 400 },
          { id: 2, name: "Intervalos de caminata", description: "Alterna entre 3 minutos de caminata rápida y 1 minuto de caminata potente (power walking). Durante el power walking, usa los brazos activamente y aumenta la frecuencia de los pasos. Ahora estás trabajando a un nivel superior. Empuja en esas fases de potencia. Siente cómo tu metabolismo se dispara. Este es el tipo de entrenamiento que sigue quemando calorías horas después de haber terminado.", duration: "32", repetitions: "8 series", calories: 280, steps: 3600 },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Lo has vuelto a hacer. Cada sesión de intervalos te hace más fuerte, más rápido y más resistente. Estás redefiniendo tus límites. ¡Sigue así!", duration: "5", repetitions: null, calories: 40, steps: 400 },
      ]
  },
  {
      day: 19,
      title: "Desafío del día",
      description: "Un desafío especial para romper estancamientos y establecer nuevos estímulos para los músculos y la resistencia.",
      calories: 370,
      steps: 4000,
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. El desafío de la colina está de vuelta, pero esta vez eres más fuerte. Acepta el desafío sabiendo que estás más que preparado para conquistarlo.", duration: "5", repetitions: null, calories: 40, steps: 400 },
          { id: 2, name: "Caminata en pendiente", description: "Encuentra una colina suave o ajusta una inclinación en la cinta de correr. Mantén un ritmo constante mientras subes para trabajar intensamente los músculos de las piernas y los glúteos. Concéntrate en la potencia de tus glúteos para impulsarte hacia arriba. Cada paso es una victoria contra la gravedad y contra tus antiguos límites. Siente la quemazón, es el sonido de la fuerza que se está construyendo.", duration: "32", repetitions: null, calories: 290, steps: 3200 },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. La fortaleza que ganas en las pendientes se traduce en velocidad y resistencia en terreno plano. Has hecho una inversión increíble en tu condición física hoy.", duration: "5", repetitions: null, calories: 40, steps: 400 },
      ]
  },
  {
      day: 20,
      title: "Quema de calorías",
      description: "Entrenamiento avanzado de quema de calorías para maximizar la pérdida de peso y la condición física.",
      calories: 380,
      steps: 4500,
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Hoy nos centramos en mantener el motor en marcha. Una sesión de cardio larga y constante para maximizar la quema de grasa. Prepárate para sudar y sentirte increíble.", duration: "5", repetitions: null, calories: 40, steps: 400 },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada. Entra en la zona. Encuentra tu ritmo, pon tu música favorita y deja que los minutos pasen. Estás en un viaje de resistencia, demostrando tu capacidad para perseverar. Cada minuto es una victoria.", duration: "33", repetitions: null, calories: 300, steps: 3700 },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Fantástico trabajo. Has mantenido a tu cuerpo en la zona de quema de grasa durante un tiempo considerable. Los resultados de sesiones como esta se acumulan rápidamente.", duration: "5", repetitions: null, calories: 40, steps: 400 },
      ]
  },
  {
      day: 21,
      title: "Intervalos de potencia",
      description: "Alternando fases rápidas y moderadas, el metabolismo se estimula intensamente y se optimiza la quema de grasa.",
      calories: 400,
      steps: 4800,
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Última sesión de intervalos de la semana 3. Ya sabes lo que tienes que hacer. Prepárate para darlo todo y terminar la semana con una explosión de energía.", duration: "5", repetitions: null, calories: 40, steps: 400 },
          { id: 2, name: "Intervalos de caminata", description: "Alterna entre 3 minutos de caminata rápida y 1 minuto de caminata potente (power walking). Durante el power walking, usa los brazos activamente y aumenta la frecuencia de los pasos. Esta es tu sesión de intervalos más larga hasta ahora. Es un testamento a tu progreso. En cada fase de potencia, recuerda por qué empezaste. Usa esa motivación para impulsarte hasta el final.", duration: "36", repetitions: "9 series", calories: 320, steps: 4000 },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. ¡Semana 3 completada! Has superado la fase más desafiante del programa. Estás en la recta final. El cambio que has logrado es enorme. ¡Celébralo!", duration: "5", repetitions: null, calories: 40, steps: 400 },
      ]
  },
  {
      day: 22,
      title: "Energía y Fuerza",
      description: "Entrenamiento avanzado de quema de calorías para maximizar la pérdida de peso y la condición física.",
      calories: 390,
      steps: 4700,
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulation. Comienza la última fase: la consolidación. Hoy se trata de afianzar tu increíble nivel de resistencia. Concéntrate en la sensación de fuerza que tienes ahora.", duration: "5", repetitions: null, calories: 40, steps: 400 },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada. Moverse a este ritmo durante tanto tiempo habría parecido imposible hace unas semanas. Ahora, es un desafío que puedes manejar. Siente la potencia en cada paso y la facilidad en tu respiración. Has construido una base increíblemente sólida.", duration: "34", repetitions: null, calories: 310, steps: 3900 },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Cada sesión de resistencia como esta refina tu motor aeróbico. Estás programando tu cuerpo para ser una máquina eficiente de quemar grasa, incluso en reposo.", duration: "5", repetitions: null, calories: 40, steps: 400 },
      ]
  },
  {
      day: 23,
      title: "Concentración",
      description: "Entrenamiento avanzado de quema de calorías para maximizar la pérdida de peso y la condición física.",
      calories: 400,
      steps: 4800,
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Hoy volvemos a la caminata consciente. Tu técnica es ahora mucho más natural. Usa esta sesión para pulir los detalles y disfrutar de la conexión mente-cuerpo.", duration: "5", repetitions: null, calories: 40, steps: 400 },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada. A este nivel de condición física, los pequeños ajustes en la postura y la técnica tienen un gran impacto. Concéntrate en un movimiento fluido y poderoso. Siente la sinergia de todo tu cuerpo trabajando en armonía para impulsarte hacia adelante.", duration: "35", repetitions: null, calories: 320, steps: 4000 },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Has cultivado no solo un cuerpo más fuerte, sino también una mente más enfocada. Esta habilidad de concentración te beneficiará en todos los aspectos de tu vida. Gran trabajo.", duration: "5", repetitions: null, calories: 40, steps: 400 },
      ]
  },
  {
      day: 24,
      title: "Intervalos de potencia",
      description: "Alternando fases rápidas y moderadas, el metabolismo se estimula intensamente y se optimiza la quema de grasa.",
      calories: 420,
      steps: 5000,
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Los intervalos de hoy son una prueba de tu nuevo nivel de potencia. Has hecho esto muchas veces. Confía en tu entrenamiento y en tu fuerza. Estás listo.", duration: "5", repetitions: null, calories: 40, steps: 400 },
          { id: 2, name: "Intervalos de caminata", description: "Alterna entre 3 minutos de caminata rápida y 1 minuto de caminata potente (power walking). Durante el power walking, usa los brazos activamente y aumenta la frecuencia de los pasos. En estos últimos días, los intervalos son para demostrar tu poder. Ve a por ello en las fases de alta intensidad. Sorpréndete a ti mismo con lo rápido y fuerte que puedes ser. ¡Desata tu potencial!", duration: "36", repetitions: "9 series", calories: 340, steps: 4200 },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Has manejado una sesión de alta intensidad con una duración considerable. Tu capacidad de recuperación es más rápida, tu potencia es mayor. Estás en la cima de tu juego.", duration: "5", repetitions: null, calories: 40, steps: 400 },
      ]
  },
  {
      day: 25,
      title: "Desafío del día",
      description: "Un desafío especial para romper estancamientos y establecer nuevos estímulos para los músculos y la resistencia.",
      calories: 430,
      steps: 4500,
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Último desafío de colina. La última vez que te enfrentaste a esto, eras fuerte. Hoy, eres aún más fuerte. Vamos a por ello con todo.", duration: "5", repetitions: null, calories: 40, steps: 400 },
          { id: 2, name: "Caminata en pendiente", description: "Encuentra una colina suave o ajusta una inclinación en la cinta de correr. Mantén un ritmo constante mientras subes para trabajar intensamente los músculos de las piernas y los glúteos. Ataca la colina. Siente el poder que has construido a lo largo de este mes. Ya no es un obstáculo, es una oportunidad para demostrar tu fuerza. Conquista cada paso con determinación.", duration: "35", repetitions: null, calories: 350, steps: 3700 },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Has dominado el desafío de la pendiente. Este es un reflejo de tu transformación. Los obstáculos que antes parecían grandes ahora son manejables. Esta es la fortaleza que te llevas contigo.", duration: "5", repetitions: null, calories: 40, steps: 400 },
      ]
  },
  {
      day: 26,
      title: "Energía y Fuerza",
      description: "Entrenamiento avanzado de quema de calorías para maximizar la pérdida de peso y la condición física.",
      calories: 410,
      steps: 5100,
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Estamos muy cerca del final. Cada sesión ahora es una celebración de tu viaje. Disfruta de esta caminata de resistencia, sintiendo la fuerza que posees.", duration: "5", repetitions: null, calories: 40, steps: 400 },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada. Esta es una de tus últimas caminatas largas del programa. Hazla memorable. Concéntrate en la sensación de ligereza y poder. Tu cuerpo es una máquina afinada gracias a tu dedicación. Disfruta del viaje.", duration: "36", repetitions: null, calories: 330, steps: 4300 },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Un entrenamiento de resistencia más en tu haber. Tu corazón, tus pulmones y tus músculos están más sanos y fuertes. Estás a punto de cruzar la línea de meta.", duration: "5", repetitions: null, calories: 40, steps: 400 },
      ]
  },
  {
      day: 27,
      title: "Intervalos de potencia",
      description: "Alternando fases rápidas y moderadas, el metabolismo se estimula intensamente y se optimiza la quema de grasa.",
      calories: 450,
      steps: 5300,
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. ¡La última sesión de intervalos! Es tu oportunidad de darlo todo. Prepárate para una sesión explosiva y satisfactoria.", duration: "5", repetitions: null, calories: 45, steps: 400 },
          { id: 2, name: "Intervalos de caminata", description: "Alterna entre 3 minutos de caminata rápida y 1 minuto de caminata potente (power walking). Durante el power walking, usa los brazos activamente y aumenta la frecuencia de los pasos. Diez series de potencia. Es el entrenamiento de intervalos más duro de todo el programa. Es tu examen final. Demuéstrate a ti mismo todo el poder que has desbloqueado. En cada fase de potencia, deja todo lo que tienes. ¡Sin remordimientos!", duration: "40", repetitions: "10 series", calories: 360, steps: 4500 },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Lo has hecho. Has superado el pico de intensidad del programa. Siente la euforia del logro. No hay nada que no puedas superar. Estás listo para cualquier cosa.", duration: "5", repetitions: null, calories: 45, steps: 400 },
      ]
  },
  {
      day: 28,
      title: "Final de la semana",
      description: "Una sesión más larga para concluir la semana, consolidando tu progreso hasta ahora y aumentando la resistencia.",
      calories: 440,
      steps: 5200,
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Última caminata de resistencia de la semana final. Concéntrate, disfruta y celebra cada paso de este penúltimo entrenamiento.", duration: "5", repetitions: null, calories: 40, steps: 400 },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada. Durante esta caminata, reflexiona sobre tu viaje. Recuerda el Día 1 y compara cómo te sientes ahora. La diferencia es asombrosa, y todo es gracias a tu constancia. Mantén un ritmo de orgullo y celebración.", duration: "40", repetitions: null, calories: 360, steps: 4400 },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Estás a solo dos días de completar tu meta de 30 días. La sensación es increíble. Descansa, recupérate y prepárate para los dos últimos días.", duration: "5", repetitions: null, calories: 40, steps: 400 },
      ]
  },
  {
      day: 29,
      title: "Ritmo y cadencia",
      description: "Encuentra y mantén tu ritmo de caminata ideal para ahorrar energía y mejorar el rendimiento.",
      calories: 430,
      steps: 5100,
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Penúltimo día. Hoy es una caminata para disfrutar de tu nuevo nivel de fitness. Concéntrate en un movimiento suave, eficiente y potente.", duration: "5", repetitions: null, calories: 40, steps: 400 },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada. Esta es tu 'vuelta de honor'. Camina con la cabeza alta, con la confianza de alguien que ha trabajado duro y ha logrado un cambio real. Siente la facilidad y la fuerza en tu zancada. Es el resultado de tu dedicación.", duration: "40", repetitions: null, calories: 350, steps: 4300 },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Mañana es el gran final. Hoy ha sido la preparación perfecta. Relájate, nútrete bien y duerme profundamente. Te lo has ganado.", duration: "5", repetitions: null, calories: 40, steps: 400 },
      ]
  },
  {
      day: 30,
      title: "El gran final",
      description: "¡Lo lograste! Hoy celebramos tu increíble viaje. Una última sesión desafiante para marcar la culminación de 30 días de dedicación y progreso.",
      calories: 500,
      steps: 5500,
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación. Este es el momento. El día 30. El día final. Respira hondo y sonríe. Estás a punto de completar lo que te propusiste. Comienza con calma y gratitud.", duration: "5", repetitions: null, calories: 50, steps: 500 },
          { id: 2, name: "Caminata final", description: "Combina todo lo que has aprendido. Mantén una técnica excelente, un ritmo fuerte y constante y una actitud positiva. ¡Disfruta cada paso de este último entrenamiento! Esta es la celebración de 30 días de esfuerzo. Camina con orgullo, fuerza y alegría. Recuerda todos los desafíos que superaste. Eres una persona nueva, más fuerte y saludable. ¡Este es tu momento!", duration: "45", repetitions: null, calories: 400, steps: 4500 },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular. Has cruzado la línea de meta. ¡FELICIDADES! Te has comprometido, has trabajado duro y has triunfado. Este no es el final, es el comienzo de un estilo de vida más saludable y activo. ¡Estamos increíblemente orgullosos de ti!", duration: "5", repetitions: null, calories: 50, steps: 500 },
      ]
  }
];
