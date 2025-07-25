// src/ai/flows/generate-motivational-message.ts
'use server';

/**
 * @fileOverview Generates personalized motivational messages using AI based on user workout progress and fitness goals.
 *
 * - generateMotivationalMessage - A function that generates a motivational message.
 * - MotivationalMessageInput - The input type for the generateMotivationalMessage function.
 * - MotivationalMessageOutput - The return type for the generateMotivationalMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MotivationalMessageInputSchema = z.object({
  progressPercentage: z
    .number()
    .describe(
      'The percentage of workout days completed by the user (0 to 100).'
    ),
  fitnessGoal: z
    .string()
    .describe(
      "The user's fitness goal, e.g., 'lose weight', 'increase endurance', 'improve overall health'."
    ),
  preferences: z
    .string()
    .describe(
      'The user provided preferences on the style of the message.'
    ).optional(),
});
export type MotivationalMessageInput = z.infer<typeof MotivationalMessageInputSchema>;

const MotivationalMessageOutputSchema = z.object({
  message: z.string().describe('El mensaje motivacional personalizado en español. Debe ser una oración corta, inspiradora y similar a una cita.'),
});
export type MotivationalMessageOutput = z.infer<typeof MotivationalMessageOutputSchema>;

export async function generateMotivationalMessage(
  input: MotivationalMessageInput
): Promise<MotivationalMessageOutput> {
  return generateMotivationalMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'motivationalMessagePrompt',
  input: {schema: MotivationalMessageInputSchema},
  output: {schema: MotivationalMessageOutputSchema},
  prompt: `Eres un entrenador motivacional de IA. Crea un mensaje motivacional personalizado para el usuario en español. El mensaje debe ser corto, inspirador y al estilo de una cita.

Progreso del entrenamiento: {{progressPercentage}}%
Objetivo de fitness: {{fitnessGoal}}
Estilo preferido por el usuario: {{preferences}}

Mensaje:`,
});

const generateMotivationalMessageFlow = ai.defineFlow(
  {
    name: 'generateMotivationalMessageFlow',
    inputSchema: MotivationalMessageInputSchema,
    outputSchema: MotivationalMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
