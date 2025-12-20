'use server';

/**
 * @fileOverview A flow for providing an AI-powered assistant on the landing page.
 *
 * - aiHelpfulAssistant - A function that handles the AI assistant process.
 * - AIHelpfulAssistantInput - The input type for the aiHelpfulAssistant function.
 * - AIHelpfulAssistantOutput - The return type for the aiHelpfulAssistant function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AIHelpfulAssistantInputSchema = z.object({
  query: z.string().describe('The user query for the AI assistant.'),
});
export type AIHelpfulAssistantInput = z.infer<typeof AIHelpfulAssistantInputSchema>;

const AIHelpfulAssistantOutputSchema = z.object({
  response: z.string().describe('The response from the AI assistant.'),
});
export type AIHelpfulAssistantOutput = z.infer<typeof AIHelpfulAssistantOutputSchema>;

export async function aiHelpfulAssistant(input: AIHelpfulAssistantInput): Promise<AIHelpfulAssistantOutput> {
  return aiHelpfulAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiHelpfulAssistantPrompt',
  input: { schema: AIHelpfulAssistantInputSchema },
  output: { schema: AIHelpfulAssistantOutputSchema },
  prompt: `You are a helpful AI assistant on the Respondechat landing page. Answer questions about Respondechat.

User query: {{{query}}}`,
});

const aiHelpfulAssistantFlow = ai.defineFlow(
  {
    name: 'aiHelpfulAssistantFlow',
    inputSchema: AIHelpfulAssistantInputSchema,
    outputSchema: AIHelpfulAssistantOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);
