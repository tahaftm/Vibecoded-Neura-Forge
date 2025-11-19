'use server';
/**
 * @fileOverview Generates random neon robot images reflecting automation and machine learning themes.
 *
 * - generateRobots - A function that returns a data URI containing a generated image of a robot.
 * - GenerateRobotsOutput - The return type for the generateRobots function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateRobotsOutputSchema = z.object({
  robotDataUri: z
    .string()
    .describe("A data URI of a neon robot image. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
});

export type GenerateRobotsOutput = z.infer<typeof GenerateRobotsOutputSchema>;

export async function generateRobots(): Promise<GenerateRobotsOutput> {
  return generateRobotsFlow();
}

const generateRobotsFlow = ai.defineFlow(
  {
    name: 'generateRobotsFlow',
    outputSchema: GenerateRobotsOutputSchema,
  },
  async () => {
    const {media} = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: `Generate an image of a neon robot reflecting automation and machine learning themes.`,
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate robot image.');
    }

    return {robotDataUri: media.url};
  }
);
