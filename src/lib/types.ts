export interface WorkoutExercise {
  id: number;
  name: string;
  description: string;
  duration: string;
  repetitions: string | null;
  calories: number;
  steps: number;
}

export interface WorkoutDay {
  day: number;
  title:string;
  description: string;
  calories: number;
  steps: number;
  exercises: WorkoutExercise[];
}

export interface UserProfile {
  name: string;
  currentWeight: number;
  goalWeight: number;
}
