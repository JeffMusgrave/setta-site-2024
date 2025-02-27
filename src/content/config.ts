import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Required fields
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    date: z.date(),
    
    // Optional fields with defaults
    lastModified: z.date().optional(),
    author: z.string().default("Setta Team"),
    tags: z.array(z.string()).default([]),
    
    // Featured image - structured object approach
    featuredImage: z.object({
      src: z.string(), // Path to the image relative to blog post or assets/img/blog/
      alt: z.string(), // Alt text for the image
      width: z.number().optional(), // Optional width
      height: z.number().optional(), // Optional height
    }).optional(),
    
    // Legacy support for the old image field (string URL) - marked as deprecated
    image: z.string().optional(),
    
    // Display options
    hideFeaturedImageInPost: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  'blog': blogCollection,
};