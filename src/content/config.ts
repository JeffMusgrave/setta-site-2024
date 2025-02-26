import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  // The image helper is provided as a parameter to this function
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    lastModified: z.date().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featuredImage: z.object({
      src: z.string(),
      alt: z.string(),
      width: z.number().optional(),
      height: z.number().optional(),
    }).optional(),
    hideFeaturedImageInPost: z.boolean().optional(),
    // Use the image helper from the parameter
    image: image().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  'blog': blogCollection,
};