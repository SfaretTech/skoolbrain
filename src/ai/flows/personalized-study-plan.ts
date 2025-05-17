'use server';
/**
 * @fileOverview A personalized study plan AI agent.
 *
 * - generatePersonalizedStudyPlan - A function that handles the personalized study plan generation process.
 * - PersonalizedStudyPlanInput - The input type for the generatePersonalizedStudyPlan function.
 * - PersonalizedStudyPlanOutput - The return type for the generatePersonalizedStudyPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedStudyPlanInputSchema = z.object({
  quizHistory: z
    .string()
    .describe(
      'A string containing the quiz history and performance trends of the student.'
    ),
  studentId: z.string().describe('The ID of the student.'),
});
export type PersonalizedStudyPlanInput = z.infer<typeof PersonalizedStudyPlanInputSchema>;

const PersonalizedStudyPlanOutputSchema = z.object({
  studyPlan: z.string().describe('The personalized study plan for the student.'),
});
export type PersonalizedStudyPlanOutput = z.infer<typeof PersonalizedStudyPlanOutputSchema>;

export async function generatePersonalizedStudyPlan(input: PersonalizedStudyPlanInput): Promise<PersonalizedStudyPlanOutput> {
  return personalizedStudyPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedStudyPlanPrompt',
  input: {schema: PersonalizedStudyPlanInputSchema},
  output: {schema: PersonalizedStudyPlanOutputSchema},
  prompt: `You are an AI study assistant that provides personalized study recommendations based on a student's quiz history and performance trends.

  Analyze the quiz history and performance trends provided below and generate a study plan that focuses on areas where the student needs the most improvement.

  Quiz History and Performance Trends: {{{quizHistory}}}

  Study Plan:`,
});

const personalizedStudyPlanFlow = ai.defineFlow(
  {
    name: 'personalizedStudyPlanFlow',
    inputSchema: PersonalizedStudyPlanInputSchema,
    outputSchema: PersonalizedStudyPlanOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
