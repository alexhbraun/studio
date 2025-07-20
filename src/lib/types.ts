export interface WorkoutExercise {
  id: number;
  name: string;
  description: string;
  duration: string;
  repetitions: string | null;
  image: string;
  imageHint: string;
}

export interface WorkoutDay {
  day: number;
  title: string;
  exercises: WorkoutExercise[];
}
