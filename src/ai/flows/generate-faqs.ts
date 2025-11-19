'use server';

/**
 * @fileOverview FAQ generator flow.
 *
 * - generateFAQs - A function that generates FAQs for the company.
 * - GenerateFAQsInput - The input type for the generateFAQs function (empty object).
 * - GenerateFAQsOutput - The return type for the generateFAQs function (string of FAQs).
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFAQsInputSchema = z.object({});
export type GenerateFAQsInput = z.infer<typeof GenerateFAQsInputSchema>;

const GenerateFAQsOutputSchema = z.object({
  faqs: z.string().describe('A list of frequently asked questions.'),
});
export type GenerateFAQsOutput = z.infer<typeof GenerateFAQsOutputSchema>;

export async function generateFAQs(input: GenerateFAQsInput): Promise<GenerateFAQsOutput> {
  return generateFAQsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFAQsPrompt',
  input: {schema: GenerateFAQsInputSchema},
  output: {schema: GenerateFAQsOutputSchema},
  prompt: `You are an expert in generating frequently asked questions (FAQs) for companies. Generate a list of FAQs for NeuraForge, a startup that provides AI agents development, workflow automations, data cleaning and visualization, WordPress and Shopify e-commerce store creation, and machine learning models. Include questions about the services offered, the tools used, and who the competitors are, as well as other relevant questions that would help customers understand the company.

Return the FAQs as a string.
`,
});

const generateFAQsFlow = ai.defineFlow(
  {
    name: 'generateFAQsFlow',
    inputSchema: GenerateFAQsInputSchema,
    outputSchema: GenerateFAQsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
