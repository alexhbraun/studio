import type { WorkoutDay } from './types';

export const workouts: WorkoutDay[] = [
  {
    day: 1,
    title: "El primer paso hacia el cambio",
    description: "Un comienzo suave en tu nuevo programa. Hoy nos enfocamos en mover el cuerpo y establecer una rutina positiva sin un esfuerzo excesivo.",
    exercises: [
      { id: 1, name: "Caminata de calentamiento", description: "Comienza con un ritmo muy lento y relajado. Tus brazos deben balancearse libremente y tu respiración debe ser tranquila. El objetivo es preparar suavemente los músculos para el esfuerzo que se avecina.", duration: "5", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "woman stretching park" },
      { id: 2, name: "Ritmo rápido", description: "Aumenta tu ritmo para que tu frecuencia cardíaca se eleve ligeramente, pero aún puedas conversar sin problemas. Concéntrate en una postura erguida y un ritmo de paso constante.", duration: "10", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "man power walking" },
      { id: 3, name: "Caminata de enfriamiento", description: "Reduce tu ritmo nuevamente para bajar gradualmente tu frecuencia cardíaca. Aprovecha esta fase para respirar profundamente y dejar que tu cuerpo se calme. Esto promueve la regeneración.", duration: "5", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "woman walking slowly" },
    ],
  },
  {
    day: 2,
    title: "Construyendo el ritmo",
    description: "Hoy se trata de desarrollar una sensación de ritmo constante y enérgico. La constancia es la clave para desarrollar la resistencia y quemar grasa de manera efectiva.",
    exercises: [
      { id: 1, name: "Caminata de calentamiento", description: "Una caminata suave de 5 minutos para estimular la circulación y movilizar las articulaciones. Presta atención a un movimiento suelto y relajado.", duration: "5", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "path walking" },
      { id: 2, name: "Caminata rápida y constante", description: "Mantén un ritmo rápido y constante durante 15 minutos. Encuentra un ritmo que puedas mantener bien sin quedarte sin aliento. Tu esfuerzo debe ser notable, pero no abrumador.", duration: "15", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "consistent pace" },
      { id: 3, name: "Enfriamiento y estiramiento", description: "Termina la sesión con una caminata lenta. Después, estira suavemente los músculos de las pantorrillas, los muslos y los glúteos durante 20-30 segundos cada uno para promover la flexibilidad.", duration: "5", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "stretching outdoors" },
    ],
  },
  {
    day: 3,
    title: "Día activo",
    description: "Aumentamos la intensidad con los primeros intervalos. El cambio entre fases de esfuerzo y recuperación estimula el metabolismo y mejora la aptitud cardiovascular.",
    exercises: [
      { id: 1, name: "Calentamiento", description: "Comienza con 5 minutos de caminata ligera. Prepara tu cuerpo mental y físicamente para las secciones más rápidas que vienen.", duration: "5", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "sunrise walk" },
      { id: 2, name: "Intervalos de caminata", description: "Aquí cambiarás el ritmo a propósito: camina rápido durante 2 minutos, seguido de 1 minuto a un ritmo notablemente más rápido que te desafíe. Repite este ciclo durante todo el tiempo.", duration: "20", repetitions: "aprox. 6-7 series", image: "https://placehold.co/600x400.png", imageHint: "interval training" },
      { id: 3, name: "Enfriamiento", description: "Reduce drásticamente tu ritmo durante los últimos 5 minutos. Permite que tu pulso se normalice y disfruta de la sensación de haber superado el desafío.", duration: "5", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "sunset walk" },
    ],
  },
  {
    day: 4,
    title: "Fuerza y ​​resistencia",
    description: "Una sesión sólida para seguir consolidando tu resistencia básica. Concéntrate en una técnica limpia y una respiración uniforme durante todo el entrenamiento.",
    exercises: [
        { id: 1, name: "Caminata de calentamiento", description: "Comienza con 5 minutos de caminata ligera en un entorno tranquilo para entrar en calor y activar los músculos.", duration: "5", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "park walk" },
        { id: 2, name: "Caminata rápida", description: "Mantén un ritmo rápido pero consistentemente cómodo durante 20 minutos. Se trata de cubrir distancia y entrenar la resistencia, no de hacer sprints.", duration: "20", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "steady pace" },
        { id: 3, name: "Enfriamiento", description: "Termina la sesión con 3 minutos de caminata muy lenta. Esto ayuda a eliminar los productos de desecho metabólico de los músculos e iniciar la regeneración.", duration: "3", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "relaxing stroll" },
    ],
  },
  ...Array.from({ length: 26 }, (_, i) => i + 5).map(day => {
    const isIntervalDay = day % 3 === 0;
    const isChallengeDay = day % 6 === 1;
    const duration = 25 + Math.floor(day / 1.5);
    
    let title = "Energía y Fuerza";
    let description = "Enfoque en construir una sólida condición física básica para preparar sesiones más largas e intensas.";
    
    if (day > 20) description = "Entrenamiento avanzado de quema de calorías para maximizar la pérdida de peso y la condición física.";

    if (isIntervalDay) {
        title = "Intervalos de potencia";
        description = "Alternando fases rápidas y moderadas, el metabolismo se estimula intensamente y se optimiza la quema de grasa.";
    } else if (isChallengeDay) {
        title = "Desafío del día";
        description = "Un desafío especial para romper estancamientos y establecer nuevos estímulos para los músculos y la resistencia.";
    } else if (day % 7 === 0) {
        title = "Final de la semana";
        description = "Una sesión más larga para concluir la semana, consolidando tu progreso hasta ahora y aumentando la resistencia.";
    } else if (day % 4 === 0) {
        title = "Control de la respiración";
        description = "Hoy el enfoque está en sincronizar la respiración y el movimiento para aumentar la eficiencia y manejar mejor el esfuerzo.";
    } else if (day % 5 === 0) {
        title = "Quema de calorías";
        description = "Un entrenamiento diseñado para maximizar el gasto calórico a través de un ritmo constantemente alto.";
    } else if (day % 2 === 0) {
        title = "Ritmo y cadencia";
        description = "Encuentra y mantén tu ritmo de caminata ideal para ahorrar energía y mejorar el rendimiento.";
    } else {
        title = "Concentración";
        description = "Entrenamiento mental: concéntrate en tu postura, tus pasos y tu entorno para sacar el máximo provecho de tu entrenamiento.";
    }

    return {
      day: day,
      title: title,
      description: description,
      exercises: [
        { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación.", duration: "5", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "morning stretch" },
        { 
          id: 2, 
          name: isIntervalDay ? "Intervalos de caminata" : (isChallengeDay ? "Caminata en pendiente" : "Ritmo rápido"), 
          description: isIntervalDay 
            ? "Alterna entre 3 minutos de caminata rápida y 1 minuto de caminata potente (power walking). Durante el power walking, usa los brazos activamente y aumenta la frecuencia de los pasos." 
            : (isChallengeDay ? "Encuentra una colina suave o ajusta una inclinación en la cinta de correr. Mantén un ritmo constante mientras subes para trabajar intensamente los músculos de las piernas y los glúteos." : "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada."),
          duration: `${duration-10}`, 
          repetitions: isIntervalDay ? `aprox. ${Math.floor((duration-10)/4)} series` : null, 
          image: "https://placehold.co/600x400.png", 
          imageHint: isIntervalDay ? "fast walk" : (isChallengeDay ? "hill walking" : "brisk pace") 
        },
        { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular.", duration: "5", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "relaxing walk" },
      ],
    };
  }),
];
