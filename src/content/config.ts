import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    lastModified: z.date().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    // Featured image for thumbnails and OG images
    featuredImage: z.object({
      src: z.string(), // Path to the image relative to src/assets/img/blog/
      alt: z.string(), // Alt text for the image
      width: z.number().optional(), // Optional width (defaults to natural size)
      height: z.number().optional(), // Optional height (defaults to natural size)
    }).optional(),
    // Optional property to hide featured image on post page (but still use for thumbnails/OG)
    hideFeaturedImageInPost: z.boolean().optional(),
    // Legacy support for the old image field (string URL)
    image: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  'blog': blogCollection,
};