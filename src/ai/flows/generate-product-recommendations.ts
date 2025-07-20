'use server';
/**
 * @fileOverview Generates product recommendations based on a given product name.
 *
 * - generateProductRecommendations - A function that generates product recommendations.
 * - GenerateProductRecommendationsInput - The input type for the generateProductRecommendations function.
 * - GenerateProductRecommendationsOutput - The return type for the generateProductRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {Product} from '@/types';
import {z} from 'genkit';

const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  image: z.string(),
  category: z.string(),
});

const GenerateProductRecommendationsInputSchema = z.object({
  productName: z
    .string()
    .describe('The name of the product to generate recommendations for.'),
  productDescription: z
    .string()
    .optional()
    .describe('The description of the product.'),
  productCategory: z
    .string()
    .optional()
    .describe('The category of the product.'),
  products: z.array(ProductSchema).describe('A list of all available products in the store.'),
});

export type GenerateProductRecommendationsInput = z.infer<
  typeof GenerateProductRecommendationsInputSchema
>;

const GenerateProductRecommendationsOutputSchema = z.object({
  recommendations: z
    .array(ProductSchema)
    .describe('A list of recommended products.'),
});

export type GenerateProductRecommendationsOutput = z.infer<
  typeof GenerateProductRecommendationsOutputSchema
>;

export async function generateProductRecommendations(
  input: GenerateProductRecommendationsInput
): Promise<GenerateProductRecommendationsOutput> {
  return generateProductRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProductRecommendationsPrompt',
  input: {schema: GenerateProductRecommendationsInputSchema},
  output: {schema: GenerateProductRecommendationsOutputSchema},
  prompt: `You are an e-commerce expert. A user is viewing a product, and you should suggest other products that they might be interested in.

  Product Name: {{{productName}}}
  {{#if productDescription}}
  Product Description: {{{productDescription}}}
  {{/if}}
  {{#if productCategory}}
  Product Category: {{{productCategory}}}
  {{/if}}

  Here is a list of all available products:
  {{#each products}}
  - ID: {{this.id}}, Name: {{this.name}}, Description: {{this.description}}, Category: {{this.category}}, Price: {{this.price}}, Image: {{this.image}}
  {{/each}}

  Suggest 3 other products from the list that the user might be interested in.
  Return the full product objects for the recommended products, including the image URL.
  Ensure that the output is valid JSON.
`,
});

const generateProductRecommendationsFlow = ai.defineFlow(
  {
    name: 'generateProductRecommendationsFlow',
    inputSchema: GenerateProductRecommendationsInputSchema,
    outputSchema: GenerateProductRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
