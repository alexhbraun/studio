import type { WorkoutDay } from './types';

export const workouts: WorkoutDay[] = [
  {
    day: 1,
    title: "Der erste Schritt zur Veränderung",
    description: "Sanfte Einführung in das regelmäßige Gehen",
    exercises: [
      { id: 1, name: "Aufwärm-Gehen", description: "Beginne mit einem langsamen, sanften Gehen, um deine Muskeln aufzuwärmen.", duration: "5", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "gentle walk" },
      { id: 2, name: "Flottes Tempo", description: "Erhöhe dein Tempo auf ein flottes Gehen. Du solltest dich noch unterhalten können.", duration: "10", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "brisk walk" },
      { id: 3, name: "Abkühl-Gehen", description: "Verlangsame dein Tempo, damit sich deine Herzfrequenz wieder normalisiert.", duration: "5", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "slow walk" },
    ],
  },
  {
    day: 2,
    title: "Rhythmus aufbauen",
    description: "Einführung leichter Gehintervalle",
    exercises: [
      { id: 1, name: "Aufwärm-Gehen", description: "Ein sanfter 5-minütiger Spaziergang zum Anfang.", duration: "5", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "path walking" },
      { id: 2, name: "Stetiges flottes Gehen", description: "Halte durchgehend ein gleichmäßiges, flottes Tempo.", duration: "15", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "consistent pace" },
      { id: 3, name: "Abkühlen & Dehnen", description: "Beende mit einem langsamen Gehen und leichten Dehnübungen für die Beine.", duration: "5", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "stretching outdoors" },
    ],
  },
  {
    day: 3,
    title: "Aktiver Tag",
    description: "Steigerung der Intensität und Trainingszeit",
    exercises: [
      { id: 1, name: "Aufwärmen", description: "Leichtes Gehen für 5 Minuten.", duration: "5", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "sunrise walk" },
      { id: 2, name: "Gehintervalle", description: "Wechsle zwischen 2 Minuten flottem Gehen und 1 Minute schnellerem Gehen.", duration: "20", repetitions: "ca. 6-7 Sätze", image: "https://placehold.co/600x400.png", imageHint: "interval training" },
      { id: 3, name: "Abkühlen", description: "Langsames Gehen zum Abschluss.", duration: "5", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "sunset walk" },
    ],
  },
  {
    day: 4,
    title: "Kraft und Ausdauer",
    description: "Sanfte Einführung in die Aktivität",
    exercises: [
        { id: 1, name: "Aufwärm-Gehen", description: "Beginne mit 5 Minuten langsamem Gehen.", duration: "5", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "park walk" },
        { id: 2, name: "Flottes Gehen", description: "20 Minuten flottes, aber angenehmes Tempo.", duration: "20", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "steady pace" },
        { id: 3, name: "Cool-down", description: "Beende mit 3 Minuten langsamem Gehen.", duration: "3", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "relaxing stroll" },
    ],
  },
  ...Array.from({ length: 26 }, (_, i) => i + 5).map(day => {
    const isIntervalDay = day % 3 === 0;
    const isChallengeDay = day % 6 === 1;
    const duration = 25 + Math.floor(day / 1.5);
    
    let title = "Energie und Kraft";
    let description = "Aufbau der Grundkondition";
    
    if (day > 20) description = "Fortgeschrittenes kalorienverbrennendes Training";

    if (isIntervalDay) {
        title = "Kraftintervalle";
    } else if (isChallengeDay) {
        title = "Tagesherausforderung";
    } else if (day % 7 === 0) {
        title = "Wochenfinale";
        description = "Steigerung der Ausdauer";
    } else if (day % 4 === 0) {
        title = "Atemkontrolle";
    } else if (day % 5 === 0) {
        title = "Kalorienverbrennung";
    } else if (day % 2 === 0) {
        title = "Tempo und Rhythmus";
    } else {
        title = "Konzentration";
    }

    return {
      day: day,
      title: title,
      description: description,
      exercises: [
        { id: 1, name: "Aufwärm-Gehen", description: "Beginne mit einem langsamen, sanften Gehen.", duration: "5", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "morning stretch" },
        { 
          id: 2, 
          name: isIntervalDay ? "Gehintervalle" : (isChallengeDay ? "Steigungsgehen" : "Flottes Tempo"), 
          description: isIntervalDay 
            ? "Wechsle zwischen 3 Minuten flottem Gehen und 1 Minute Power-Walking." 
            : (isChallengeDay ? "Finde einen sanften Hügel oder nutze eine Steigung auf dem Laufband." : "Halte ein starkes, flottes Tempo."),
          duration: `${duration-10}`, 
          repetitions: isIntervalDay ? `ca. ${Math.floor((duration-10)/4)} Sätze` : null, 
          image: "https://placehold.co/600x400.png", 
          imageHint: isIntervalDay ? "fast walk" : (isChallengeDay ? "hill walking" : "brisk pace") 
        },
        { id: 3, name: "Abkühl-Gehen", description: "Verlangsame dein Tempo zum Abschluss.", duration: "5", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "relaxing walk" },
      ],
    };
  }),
];
