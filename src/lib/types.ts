export interface WorkoutExercise {
  id: number;
  name: string;
  description: string;
  duration: string;
  repetitions: string | null;
}

export interface WorkoutDay {
  day: number;
  title:string;
  description: string;
  exercises: WorkoutExercise[];
}

export interface UserProfile {
  name: string;
  currentWeight: number;
  goalWeight: number;
}
