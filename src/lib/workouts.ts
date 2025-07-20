import type { WorkoutDay } from './types';

export const workouts: WorkoutDay[] = [
  {
    day: 1,
    title: "Foundation Walk",
    exercises: [
      { id: 1, name: "Warm-up Walk", description: "Start with a slow, gentle walk to get your muscles ready.", duration: "5 minutes", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "gentle walk" },
      { id: 2, name: "Brisk Pace", description: "Increase your speed to a brisk walk. You should still be able to hold a conversation.", duration: "15 minutes", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "brisk walk" },
      { id: 3, name: "Cool-down Walk", description: "Slow down your pace to let your heart rate return to normal.", duration: "5 minutes", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "slow walk" },
    ],
  },
  {
    day: 2,
    title: "Steady Steps",
    exercises: [
      { id: 1, name: "Warm-up Walk", description: "A gentle 5-minute walk to begin.", duration: "5 minutes", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "path walking" },
      { id: 2, name: "Steady Brisk Walk", description: "Maintain a consistent brisk pace throughout.", duration: "20 minutes", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "consistent pace" },
      { id: 3, name: "Cool-down & Stretch", description: "End with a slow walk and light leg stretches.", duration: "5 minutes", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "stretching outdoors" },
    ],
  },
  {
    day: 3,
    title: "Interval Introduction",
    exercises: [
      { id: 1, name: "Warm-up", description: "Easy walk for 5 minutes.", duration: "5 minutes", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "sunrise walk" },
      { id: 2, name: "Walking Intervals", description: "Alternate between 2 minutes of brisk walking and 1 minute of faster-paced walking.", duration: "15 minutes", repetitions: "5 sets", image: "https://placehold.co/600x400.png", imageHint: "interval training" },
      { id: 3, name: "Cool-down", description: "Slow walk to finish.", duration: "5 minutes", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "sunset walk" },
    ],
  },
  // ... Repeat similar structure for days 4-30
  ...Array.from({ length: 27 }, (_, i) => i + 4).map(day => {
    const isIntervalDay = day % 3 === 0;
    const isHillDay = day % 5 === 0;
    const duration = 15 + Math.floor(day / 2);

    let title = "Endurance Builder";
    if (isIntervalDay) title = "Speed Intervals";
    if (isHillDay) title = "Hill Challenge";
    if (day > 25) title = "Peak Performance";

    return {
      day: day,
      title: title,
      exercises: [
        { id: 1, name: "Warm-up Walk", description: "Start with a slow, gentle walk.", duration: "5 minutes", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "morning stretch" },
        { 
          id: 2, 
          name: isIntervalDay ? "Walking Intervals" : (isHillDay ? "Incline Walking" : "Brisk Pace"), 
          description: isIntervalDay 
            ? "Alternate between 3 minutes of brisk walking and 1 minute of power walking." 
            : (isHillDay ? "Find a gentle hill or use a treadmill incline. Walk up and down." : "Maintain a strong, brisk pace."),
          duration: `${duration} minutes`, 
          repetitions: isIntervalDay ? `${Math.floor(duration/4)} sets` : null, 
          image: "https://placehold.co/600x400.png", 
          imageHint: isIntervalDay ? "fast walk" : (isHillDay ? "hill walking" : "brisk pace") 
        },
        { id: 3, name: "Cool-down Walk", description: "Slow your pace to finish.", duration: "5 minutes", repetitions: null, image: "https://placehold.co/600x400.png", imageHint: "relaxing walk" },
      ],
    };
  }),
];
