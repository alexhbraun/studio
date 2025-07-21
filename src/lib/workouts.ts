import type { WorkoutDay } from './types';

export const workouts: WorkoutDay[] = [
  {
    day: 1,
    title: "Der erste Schritt zur Veränderung",
    description: "Ein sanfter Start in dein neues Programm. Heute konzentrieren wir uns darauf, den Körper zu bewegen und eine positive Routine ohne übermäßige Anstrengung zu etablieren.",
    exercises: [
      { id: 1, name: "Aufwärm-Gehen", description: "Beginne mit einem sehr langsamen, entspannten Tempo. Deine Arme sollten locker schwingen und deine Atmung sollte ruhig sein. Das Ziel ist es, die Muskeln sanft auf die bevorstehende Belastung vorzubereiten.", duration: "5", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "woman stretching park" },
      { id: 2, name: "Flottes Tempo", description: "Erhöhe dein Tempo, sodass dein Herzschlag leicht ansteigt, du dich aber immer noch problemlos unterhalten kannst. Konzentriere dich auf eine aufrechte Haltung und einen gleichmäßigen Schrittrhythmus.", duration: "10", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "man power walking" },
      { id: 3, name: "Abkühl-Gehen", description: "Reduziere dein Tempo wieder deutlich, um deine Herzfrequenz allmählich zu senken. Nutze diese Phase, um tief durchzuatmen und deinen Körper zur Ruhe kommen zu lassen. Dies fördert die Regeneration.", duration: "5", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "woman walking slowly" },
    ],
  },
  {
    day: 2,
    title: "Rhythmus aufbauen",
    description: "Heute geht es darum, ein Gefühl für ein gleichmäßiges, zügiges Tempo zu entwickeln. Konstanz ist der Schlüssel zum Aufbau von Ausdauer und zur effektiven Fettverbrennung.",
    exercises: [
      { id: 1, name: "Aufwärm-Gehen", description: "Ein sanfter 5-minütiger Spaziergang, um die Durchblutung anzuregen und die Gelenke zu mobilisieren. Achte auf eine lockere und entspannte Bewegung.", duration: "5", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "path walking" },
      { id: 2, name: "Stetiges flottes Gehen", description: "Halte für 15 Minuten ein konstantes, flottes Tempo. Finde einen Rhythmus, den du gut durchhalten kannst, ohne außer Atem zu geraten. Deine Anstrengung sollte spürbar, aber nicht überfordernd sein.", duration: "15", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "consistent pace" },
      { id: 3, name: "Abkühlen & Dehnen", description: "Beende die Einheit mit einem langsamen Spaziergang. Im Anschluss solltest du deine Waden-, Oberschenkel- und Gesäßmuskulatur für jeweils 20-30 Sekunden sanft dehnen, um die Flexibilität zu fördern.", duration: "5", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "stretching outdoors" },
    ],
  },
  {
    day: 3,
    title: "Aktiver Tag",
    description: "Wir steigern die Intensität durch erste Intervalle. Der Wechsel zwischen Belastungs- und Erholungsphasen kurbelt den Stoffwechsel an und verbessert die kardiovaskuläre Fitness.",
    exercises: [
      { id: 1, name: "Aufwärmen", description: "Beginne mit 5 Minuten lockerem Gehen. Bereite deinen Körper mental und physisch auf die bevorstehenden schnelleren Abschnitte vor.", duration: "5", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "sunrise walk" },
      { id: 2, name: "Gehintervalle", description: "Hier wechselst du gezielt das Tempo: Gehe 2 Minuten flott, gefolgt von 1 Minute in einem deutlich schnelleren Tempo, das dich fordert. Wiederhole diesen Zyklus für die gesamte Dauer.", duration: "20", repetitions: "ca. 6-7 Sätze", image: "https://placehold.co/600x400.png", imageHint: "interval training" },
      { id: 3, name: "Abkühlen", description: "Reduziere dein Tempo für die letzten 5 Minuten stark. Erlaube deinem Puls, sich zu normalisieren, und genieße das Gefühl, die Herausforderung gemeistert zu haben.", duration: "5", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "sunset walk" },
    ],
  },
  {
    day: 4,
    title: "Kraft und Ausdauer",
    description: "Eine solide Einheit, um deine Grundlagenausdauer weiter zu festigen. Konzentriere dich auf eine saubere Technik und eine gleichmäßige Atmung während des gesamten Trainings.",
    exercises: [
        { id: 1, name: "Aufwärm-Gehen", description: "Starte mit 5 Minuten lockerem Gehen in einer ruhigen Umgebung, um dich auf das Training einzustimmen und die Muskeln zu aktivieren.", duration: "5", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "park walk" },
        { id: 2, name: "Flottes Gehen", description: "Halte für 20 Minuten ein flottes, aber durchgehend angenehmes Tempo. Es geht darum, Strecke zu machen und die Ausdauer zu trainieren, nicht um Sprints.", duration: "20", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "steady pace" },
        { id: 3, name: "Cool-down", description: "Beende die Einheit mit 3 Minuten sehr langsamem Gehen. Dies hilft, Stoffwechselprodukte aus den Muskeln abzutransportieren und die Regeneration einzuleiten.", duration: "3", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "relaxing stroll" },
    ],
  },
  ...Array.from({ length: 26 }, (_, i) => i + 5).map(day => {
    const isIntervalDay = day % 3 === 0;
    const isChallengeDay = day % 6 === 1;
    const duration = 25 + Math.floor(day / 1.5);
    
    let title = "Energie und Kraft";
    let description = "Fokus auf den Aufbau einer soliden Grundkondition, um längere und intensivere Einheiten vorzubereiten.";
    
    if (day > 20) description = "Fortgeschrittenes kalorienverbrennendes Training zur Maximierung des Gewichtsverlusts und der Fitness.";

    if (isIntervalDay) {
        title = "Kraftintervalle";
        description = "Durch den Wechsel von schnellen und moderaten Phasen wird der Stoffwechsel stark angeregt und die Fettverbrennung optimiert.";
    } else if (isChallengeDay) {
        title = "Tagesherausforderung";
        description = "Eine besondere Herausforderung, um Plateaus zu durchbrechen und neue Reize für Muskulatur und Ausdauer zu setzen.";
    } else if (day % 7 === 0) {
        title = "Wochenfinale";
        description = "Eine längere Einheit zum Abschluss der Woche, die deine bisherigen Fortschritte festigt und die Ausdauer steigert.";
    } else if (day % 4 === 0) {
        title = "Atemkontrolle";
        description = "Heute liegt der Fokus auf der Synchronisierung von Atmung und Bewegung, um die Effizienz zu steigern und die Belastung besser zu bewältigen.";
    } else if (day % 5 === 0) {
        title = "Kalorienverbrennung";
        description = "Ein Training, das darauf ausgelegt ist, durch ein konstant hohes Tempo den Kalorienverbrauch zu maximieren.";
    } else if (day % 2 === 0) {
        title = "Tempo und Rhythmus";
        description = "Finde und halte deinen idealen Geh-Rhythmus, um Energie zu sparen und die Leistung zu verbessern.";
    } else {
        title = "Konzentration";
        description = "Mentales Training: Konzentriere dich auf deine Haltung, deine Schritte und deine Umgebung, um das Beste aus deinem Training herauszuholen.";
    }

    return {
      day: day,
      title: title,
      description: description,
      exercises: [
        { id: 1, name: "Aufwärm-Gehen", description: "Beginne mit einem langsamen, sanften Gehen. Kreise deine Schultern und Arme, um den Oberkörper zu lockern und die Durchblutung zu fördern.", duration: "5", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "morning stretch" },
        { 
          id: 2, 
          name: isIntervalDay ? "Gehintervalle" : (isChallengeDay ? "Steigungsgehen" : "Flottes Tempo"), 
          description: isIntervalDay 
            ? "Wechsle zwischen 3 Minuten flottem Gehen und 1 Minute Power-Walking. Beim Power-Walking die Arme aktiv einsetzen und die Schrittfrequenz erhöhen." 
            : (isChallengeDay ? "Finde einen sanften Hügel oder stelle eine Steigung am Laufband ein. Halte ein konstantes Tempo, während du bergauf gehst, um die Bein- und Gesäßmuskulatur intensiv zu fordern." : "Halte ein starkes, flottes Tempo, das dich fordert, aber nicht überlastet. Deine Atmung sollte tief und kontrolliert sein."),
          duration: `${duration-10}`, 
          repetitions: isIntervalDay ? `ca. ${Math.floor((duration-10)/4)} Sätze` : null, 
          image: "https://placehold.co/600x400.png", 
          imageHint: isIntervalDay ? "fast walk" : (isChallengeDay ? "hill walking" : "brisk pace") 
        },
        { id: 3, name: "Abkühl-Gehen", description: "Verlangsame dein Tempo deutlich und schüttle Arme und Beine locker aus. Dies hilft deinem Körper, sich zu erholen und beugt Muskelkater vor.", duration: "5", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "relaxing walk" },
      ],
    };
  }),
];
