
import type { WorkoutDay } from './types';

export const workouts: WorkoutDay[] = [
  {
    day: 1,
    title: "El primer paso hacia el cambio",
    description: "Un comienzo suave en tu nuevo programa. Hoy nos enfocamos en mover el cuerpo y establecer una rutina positiva sin un esfuerzo excesivo.",
    exercises: [
      { id: 1, name: "Caminata de calentamiento", description: "Comienza con un ritmo muy lento y relajado. Tus brazos deben balancearse libremente y tu respiración debe ser tranquila. El objetivo es preparar suavemente los músculos para el esfuerzo que se avecina.", duration: "5", repetitions: null, image: "/day1-warmup.png", imageHint: "woman stretching park" },
      { id: 2, name: "Ritmo rápido", description: "Aumenta tu ritmo para que tu frecuencia cardíaca se eleve ligeramente, pero aún puedas conversar sin problemas. Concéntrate en una postura erguida y un ritmo de paso constante.", duration: "10", repetitions: null, image: "/day1-brisk.png", imageHint: "man power walking" },
      { id: 3, name: "Caminata de enfriamiento", description: "Reduce tu ritmo nuevamente para bajar gradualmente tu frecuencia cardíaca. Aprovecha esta fase para respirar profundamente y dejar que tu cuerpo se calme. Esto promueve la regeneración.", duration: "5", repetitions: null, image: "/day1-cooldown.png", imageHint: "woman walking slowly" },
    ],
  },
  {
    day: 2,
    title: "Construyendo el ritmo",
    description: "Hoy se trata de desarrollar una sensación de ritmo constante y enérgico. La constancia es la clave para desarrollar la resistencia y quemar grasa de manera efectiva.",
    exercises: [
      { id: 1, name: "Caminata de calentamiento", description: "Una caminata suave de 5 minutos para estimular la circulación y movilizar las articulaciones. Presta atención a un movimiento suelto y relajado.", duration: "5", repetitions: null, image: "/day2-warmup.png", imageHint: "path walking" },
      { id: 2, name: "Caminata rápida y constante", description: "Mantén un ritmo rápido y constante durante 15 minutos. Encuentra un ritmo que puedas mantener bien sin quedarte sin aliento. Tu esfuerzo debe ser notable, pero no abrumador.", duration: "15", repetitions: null, image: "/day2-steady.png", imageHint: "consistent pace" },
      { id: 3, name: "Enfriamiento y estiramiento", description: "Termina la sesión con una caminata lenta. Después, estira suavemente los músculos de las pantorrillas, los muslos y los glúteos durante 20-30 segundos cada uno para promover la flexibilidad.", duration: "5", repetitions: null, image: "/day2-cooldown.png", imageHint: "stretching outdoors" },
    ],
  },
  {
    day: 3,
    title: "Día activo",
    description: "Aumentamos la intensidad con los primeros intervalos. El cambio entre fases de esfuerzo y recuperación estimula el metabolismo y mejora la aptitud cardiovascular.",
    exercises: [
      { id: 1, name: "Calentamiento", description: "Comienza con 5 minutos de caminata ligera. Prepara tu cuerpo mental y físicamente para las secciones más rápidas que vienen.", duration: "5", repetitions: null, image: "/day3-warmup.png", imageHint: "sunrise walk" },
      { id: 2, name: "Intervalos de caminata", description: "Aquí cambiarás el ritmo a propósito: camina rápido durante 2 minutos, seguido de 1 minuto a un ritmo notablemente más rápido que te desafíe. Repite este ciclo durante todo el tiempo.", duration: "20", repetitions: "aprox. 6-7 series", image: "/day3-intervals.png", imageHint: "interval training" },
      { id: 3, name: "Enfriamiento", description: "Reduce drásticamente tu ritmo durante los últimos 5 minutos. Permite que tu pulso se normalice y disfruta de la sensación de haber superado el desafío.", duration: "5", repetitions: null, image: "/day3-cooldown.png", imageHint: "sunset walk" },
    ],
  },
  {
    day: 4,
    title: "Fuerza y ​​resistencia",
    description: "Una sesión sólida para seguir consolidando tu resistencia básica. Concéntrate en una técnica limpia y una respiración uniforme durante todo el entrenamiento.",
    exercises: [
        { id: 1, name: "Caminata de calentamiento", description: "Comienza con 5 minutos de caminata ligera en un entorno tranquilo para entrar en calor y activar los músculos.", duration: "5", repetitions: null, image: "/day4-warmup.png", imageHint: "park walk" },
        { id: 2, name: "Caminata rápida", description: "Mantén un ritmo rápido pero consistentemente cómodo durante 20 minutos. Se trata de cubrir distancia y entrenar la resistencia, no de hacer sprints.", duration: "20", repetitions: null, image: "/day4-brisk.png", imageHint: "steady pace" },
        { id: 3, name: "Enfriamiento", description: "Termina la sesión con 3 minutos de caminata muy lenta. Esto ayuda a eliminar los productos de desecho metabólico de los músculos e iniciar la regeneración.", duration: "3", repetitions: null, image: "/day4-cooldown.png", imageHint: "relaxing stroll" },
    ],
  },
  {
    day: 5,
    title: "Quema de calorías",
    description: "Un entrenamiento diseñado para maximizar el gasto calórico a través de un ritmo constantemente alto.",
    exercises: [
      { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación.", duration: "5", repetitions: null, image: "/day5-warmup.png", imageHint: "morning stretch" },
      { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada.", duration: "18", repetitions: null, image: "/day5-fast-pace.png", imageHint: "brisk pace" },
      { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular.", duration: "5", repetitions: null, image: "/day5-cooldown.png", imageHint: "relaxing walk" },
    ],
  },
  {
    day: 6,
    title: "Intervalos de potencia",
    description: "Alternando fases rápidas y moderadas, el metabolismo se estimula intensamente y se optimiza la quema de grasa.",
    exercises: [
      { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación.", duration: "5", repetitions: null, image: "/day6-warmup.png", imageHint: "morning stretch" },
      { id: 2, name: "Intervalos de caminata", description: "Alterna entre 3 minutos de caminata rápida y 1 minuto de caminata potente (power walking). Durante el power walking, usa los brazos activamente y aumenta la frecuencia de los pasos.", duration: "20", repetitions: "5 series", image: "/day6-intervals.png", imageHint: "fast walk" },
      { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular.", duration: "5", repetitions: null, image: "/day6-cooldown.png", imageHint: "relaxing walk" },
    ],
  },
  {
    day: 7,
    title: "Final de la semana",
    description: "Una sesión más larga para concluir la semana, consolidando tu progreso hasta ahora y aumentando la resistencia.",
    exercises: [
      { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación.", duration: "5", repetitions: null, image: "/day7-warmup.png", imageHint: "morning stretch" },
      { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada.", duration: "25", repetitions: null, image: "/day7-fast-pace.png", imageHint: "brisk pace" },
      { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular.", duration: "5", repetitions: null, image: "/day7-cooldown.png", imageHint: "relaxing walk" },
    ],
  },
  {
    day: 8,
    title: "Control de la respiración",
    description: "Hoy el enfoque está en sincronizar la respiración y el movimiento para aumentar la eficiencia y manejar mejor el esfuerzo.",
    exercises: [
        { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación.", duration: "5", repetitions: null, image: "/day8-warmup.png", imageHint: "morning stretch" },
        { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada.", duration: "23", repetitions: null, image: "/day8-fast-pace.png", imageHint: "brisk pace" },
        { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular.", duration: "5", repetitions: null, image: "/day8-cooldown.png", imageHint: "relaxing walk" },
    ]
  },
  {
      day: 9,
      title: "Intervalos de potencia",
      description: "Alternando fases rápidas y moderadas, el metabolismo se estimula intensamente y se optimiza la quema de grasa.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación.", duration: "5", repetitions: null, image: "/day9-warmup.png", imageHint: "morning stretch" },
          { id: 2, name: "Intervalos de caminata", description: "Alterna entre 3 minutos de caminata rápida y 1 minuto de caminata potente (power walking). Durante el power walking, usa los brazos activamente y aumenta la frecuencia de los pasos.", duration: "24", repetitions: "6 series", image: "/day9-intervals.png", imageHint: "fast walk" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular.", duration: "5", repetitions: null, image: "/day9-cooldown.png", imageHint: "relaxing walk" },
      ]
  },
  {
      day: 10,
      title: "Quema de calorías",
      description: "Un entrenamiento diseñado para maximizar el gasto calórico a través de un ritmo constantemente alto.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación.", duration: "5", repetitions: null, image: "/day10-warmup.png", imageHint: "morning stretch" },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada.", duration: "25", repetitions: null, image: "/day10-fast-pace.png", imageHint: "brisk pace" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular.", duration: "5", repetitions: null, image: "/day10-cooldown.png", imageHint: "relaxing walk" },
      ]
  },
  {
      day: 11,
      title: "Concentración",
      description: "Entrenamiento mental: concéntrate en tu postura, tus pasos y tu entorno para sacar el máximo provecho de tu entrenamiento.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación.", duration: "5", repetitions: null, image: "/day11-warmup.png", imageHint: "morning stretch" },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada.", duration: "26", repetitions: null, image: "/day11-fast-pace.png", imageHint: "brisk pace" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular.", duration: "5", repetitions: null, image: "/day11-cooldown.png", imageHint: "relaxing walk" },
      ]
  },
  {
      day: 12,
      title: "Intervalos de potencia",
      description: "Alternando fases rápidas y moderadas, el metabolismo se estimula intensamente y se optimiza la quema de grasa.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación.", duration: "5", repetitions: null, image: "/day12-warmup.png", imageHint: "morning stretch" },
          { id: 2, name: "Intervalos de caminata", description: "Alterna entre 3 minutos de caminata rápida y 1 minuto de caminata potente (power walking). Durante el power walking, usa los brazos activamente y aumenta la frecuencia de los pasos.", duration: "28", repetitions: "7 series", image: "/day12-intervals.png", imageHint: "fast walk" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular.", duration: "5", repetitions: null, image: "/day12-cooldown.png", imageHint: "relaxing walk" },
      ]
  },
  {
      day: 13,
      title: "Desafío del día",
      description: "Un desafío especial para romper estancamientos y establecer nuevos estímulos para los músculos y la resistencia.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación.", duration: "5", repetitions: null, image: "/day13-warmup.png", imageHint: "morning stretch" },
          { id: 2, name: "Caminata en pendiente", description: "Encuentra una colina suave o ajusta una inclinación en la cinta de correr. Mantén un ritmo constante mientras subes para trabajar intensamente los músculos de las piernas y los glúteos.", duration: "28", repetitions: null, image: "/day13-hill-walk.png", imageHint: "hill walking" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular.", duration: "5", repetitions: null, image: "/day13-cooldown.png", imageHint: "relaxing walk" },
      ]
  },
  {
      day: 14,
      title: "Final de la semana",
      description: "Una sesión más larga para concluir la semana, consolidando tu progreso hasta ahora y aumentando la resistencia.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación.", duration: "5", repetitions: null, image: "/day14-warmup.png", imageHint: "morning stretch" },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada.", duration: "30", repetitions: null, image: "/day14-fast-pace.png", imageHint: "brisk pace" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular.", duration: "5", repetitions: null, image: "/day14-cooldown.png", imageHint: "relaxing walk" },
      ]
  },
  {
      day: 15,
      title: "Intervalos de potencia",
      description: "Alternando fases rápidas y moderadas, el metabolismo se estimula intensamente y se optimiza la quema de grasa.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación.", duration: "5", repetitions: null, image: "/day15-warmup.png", imageHint: "morning stretch" },
          { id: 2, name: "Intervalos de caminata", description: "Alterna entre 3 minutos de caminata rápida y 1 minuto de caminata potente (power walking). Durante el power walking, usa los brazos activamente y aumenta la frecuencia de los pasos.", duration: "32", repetitions: "8 series", image: "/day15-intervals.png", imageHint: "fast walk" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular.", duration: "5", repetitions: null, image: "/day15-cooldown.png", imageHint: "relaxing walk" },
      ]
  },
  {
      day: 16,
      title: "Ritmo y cadencia",
      description: "Encuentra y mantén tu ritmo de caminata ideal para ahorrar energía y mejorar el rendimiento.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación.", duration: "5", repetitions: null, image: "/day16-warmup.png", imageHint: "morning stretch" },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada.", duration: "30", repetitions: null, image: "/day16-fast-pace.png", imageHint: "brisk pace" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular.", duration: "5", repetitions: null, image: "/day16-cooldown.png", imageHint: "relaxing walk" },
      ]
  },
  {
      day: 17,
      title: "Energía y Fuerza",
      description: "Enfoque en construir una sólida condición física básica para preparar sesiones más largas e intensas.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación.", duration: "5", repetitions: null, image: "/day17-warmup.png", imageHint: "morning stretch" },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada.", duration: "31", repetitions: null, image: "/day17-fast-pace.png", imageHint: "brisk pace" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular.", duration: "5", repetitions: null, image: "/day17-cooldown.png", imageHint: "relaxing walk" },
      ]
  },
  {
      day: 18,
      title: "Intervalos de potencia",
      description: "Alternando fases rápidas y moderadas, el metabolismo se estimula intensamente y se optimiza la quema de grasa.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación.", duration: "5", repetitions: null, image: "/day18-warmup.png", imageHint: "morning stretch" },
          { id: 2, name: "Intervalos de caminata", description: "Alterna entre 3 minutos de caminata rápida y 1 minuto de caminata potente (power walking). Durante el power walking, usa los brazos activamente y aumenta la frecuencia de los pasos.", duration: "32", repetitions: "8 series", image: "/day18-intervals.png", imageHint: "fast walk" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular.", duration: "5", repetitions: null, image: "/day18-cooldown.png", imageHint: "relaxing walk" },
      ]
  },
  {
      day: 19,
      title: "Desafío del día",
      description: "Un desafío especial para romper estancamientos y establecer nuevos estímulos para los músculos y la resistencia.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación.", duration: "5", repetitions: null, image: "/day19-warmup.png", imageHint: "morning stretch" },
          { id: 2, name: "Caminata en pendiente", description: "Encuentra una colina suave o ajusta una inclinación en la cinta de correr. Mantén un ritmo constante mientras subes para trabajar intensamente los músculos de las piernas y los glúteos.", duration: "32", repetitions: null, image: "/day19-hill-walk.png", imageHint: "hill walking" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular.", duration: "5", repetitions: null, image: "/day19-cooldown.png", imageHint: "relaxing walk" },
      ]
  },
  {
      day: 20,
      title: "Quema de calorías",
      description: "Entrenamiento avanzado de quema de calorías para maximizar la pérdida de peso y la condición física.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación.", duration: "5", repetitions: null, image: "/day20-warmup.png", imageHint: "morning stretch" },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada.", duration: "33", repetitions: null, image: "/day20-fast-pace.png", imageHint: "brisk pace" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular.", duration: "5", repetitions: null, image: "/day20-cooldown.png", imageHint: "relaxing walk" },
      ]
  },
  {
      day: 21,
      title: "Intervalos de potencia",
      description: "Alternando fases rápidas y moderadas, el metabolismo se estimula intensamente y se optimiza la quema de grasa.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación.", duration: "5", repetitions: null, image: "/day21-warmup.png", imageHint: "morning stretch" },
          { id: 2, name: "Intervalos de caminata", description: "Alterna entre 3 minutos de caminata rápida y 1 minuto de caminata potente (power walking). Durante el power walking, usa los brazos activamente y aumenta la frecuencia de los pasos.", duration: "36", repetitions: "9 series", image: "/day21-intervals.png", imageHint: "fast walk" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular.", duration: "5", repetitions: null, image: "/day21-cooldown.png", imageHint: "relaxing walk" },
      ]
  },
  {
      day: 22,
      title: "Energía y Fuerza",
      description: "Entrenamiento avanzado de quema de calorías para maximizar la pérdida de peso y la condición física.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación.", duration: "5", repetitions: null, image: "/day22-warmup.png", imageHint: "morning stretch" },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada.", duration: "34", repetitions: null, image: "/day22-fast-pace.png", imageHint: "brisk pace" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular.", duration: "5", repetitions: null, image: "/day22-cooldown.png", imageHint: "relaxing walk" },
      ]
  },
  {
      day: 23,
      title: "Concentración",
      description: "Entrenamiento avanzado de quema de calorías para maximizar la pérdida de peso y la condición física.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación.", duration: "5", repetitions: null, image: "/day23-warmup.png", imageHint: "morning stretch" },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada.", duration: "35", repetitions: null, image: "/day23-fast-pace.png", imageHint: "brisk pace" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular.", duration: "5", repetitions: null, image: "/day23-cooldown.png", imageHint: "relaxing walk" },
      ]
  },
  {
      day: 24,
      title: "Intervalos de potencia",
      description: "Alternando fases rápidas y moderadas, el metabolismo se estimula intensamente y se optimiza la quema de grasa.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación.", duration: "5", repetitions: null, image: "/day24-warmup.png", imageHint: "morning stretch" },
          { id: 2, name: "Intervalos de caminata", description: "Alterna entre 3 minutos de caminata rápida y 1 minuto de caminata potente (power walking). Durante el power walking, usa los brazos activamente y aumenta la frecuencia de los pasos.", duration: "36", repetitions: "9 series", image: "/day24-intervals.png", imageHint: "fast walk" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular.", duration: "5", repetitions: null, image: "/day24-cooldown.png", imageHint: "relaxing walk" },
      ]
  },
  {
      day: 25,
      title: "Desafío del día",
      description: "Un desafío especial para romper estancamientos y establecer nuevos estímulos para los músculos y la resistencia.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación.", duration: "5", repetitions: null, image: "/day25-warmup.png", imageHint: "morning stretch" },
          { id: 2, name: "Caminata en pendiente", description: "Encuentra una colina suave o ajusta una inclinación en la cinta de correr. Mantén un ritmo constante mientras subes para trabajar intensamente los músculos de las piernas y los glúteos.", duration: "35", repetitions: null, image: "/day25-hill-walk.png", imageHint: "hill walking" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular.", duration: "5", repetitions: null, image: "/day25-cooldown.png", imageHint: "relaxing walk" },
      ]
  },
  {
      day: 26,
      title: "Energía y Fuerza",
      description: "Entrenamiento avanzado de quema de calorías para maximizar la pérdida de peso y la condición física.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación.", duration: "5", repetitions: null, image: "/day26-warmup.png", imageHint: "morning stretch" },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada.", duration: "36", repetitions: null, image: "/day26-fast-pace.png", imageHint: "brisk pace" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular.", duration: "5", repetitions: null, image: "/day26-cooldown.png", imageHint: "relaxing walk" },
      ]
  },
  {
      day: 27,
      title: "Intervalos de potencia",
      description: "Alternando fases rápidas y moderadas, el metabolismo se estimula intensamente y se optimiza la quema de grasa.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación.", duration: "5", repetitions: null, image: "/day27-warmup.png", imageHint: "morning stretch" },
          { id: 2, name: "Intervalos de caminata", description: "Alterna entre 3 minutos de caminata rápida y 1 minuto de caminata potente (power walking). Durante el power walking, usa los brazos activamente y aumenta la frecuencia de los pasos.", duration: "40", repetitions: "10 series", image: "/day27-intervals.png", imageHint: "fast walk" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular.", duration: "5", repetitions: null, image: "/day27-cooldown.png", imageHint: "relaxing walk" },
      ]
  },
  {
      day: 28,
      title: "Final de la semana",
      description: "Una sesión más larga para concluir la semana, consolidando tu progreso hasta ahora y aumentando la resistencia.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación.", duration: "5", repetitions: null, image: "/day28-warmup.png", imageHint: "morning stretch" },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada.", duration: "40", repetitions: null, image: "/day28-fast-pace.png", imageHint: "brisk pace" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular.", duration: "5", repetitions: null, image: "/day28-cooldown.png", imageHint: "relaxing walk" },
      ]
  },
  {
      day: 29,
      title: "Ritmo y cadencia",
      description: "Encuentra y mantén tu ritmo de caminata ideal para ahorrar energía y mejorar el rendimiento.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación.", duration: "5", repetitions: null, image: "/day29-warmup.png", imageHint: "morning stretch" },
          { id: 2, name: "Ritmo rápido", description: "Mantén un ritmo fuerte y rápido que te desafíe pero no te agote. Tu respiración debe ser profunda y controlada.", duration: "40", repetitions: null, image: "/day29-fast-pace.png", imageHint: "brisk pace" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular.", duration: "5", repetitions: null, image: "/day29-cooldown.png", imageHint: "relaxing walk" },
      ]
  },
  {
      day: 30,
      title: "El gran final",
      description: "¡Lo lograste! Hoy celebramos tu increíble viaje. Una última sesión desafiante para marcar la culminación de 30 días de dedicación y progreso.",
      exercises: [
          { id: 1, name: "Caminata de calentamiento", description: "Comienza con una caminata lenta y suave. Rota los hombros y los brazos para aflojar la parte superior del cuerpo y promover la circulación.", duration: "5", repetitions: null, image: "/day30-warmup.png", imageHint: "morning stretch" },
          { id: 2, name: "Caminata final", description: "Combina todo lo que has aprendido. Mantén una técnica excelente, un ritmo fuerte y constante y una actitud positiva. ¡Disfruta cada paso de este último entrenamiento!", duration: "45", repetitions: null, image: "/day30-final-walk.png", imageHint: "celebratory walk" },
          { id: 3, name: "Caminata de enfriamiento", description: "Disminuye considerablemente la velocidad y sacude los brazos y las piernas. Esto ayuda a tu cuerpo a recuperarse y previene el dolor muscular.", duration: "5", repetitions: null, image: "/day30-cooldown.png", imageHint: "relaxing walk" },
      ]
  }
];
