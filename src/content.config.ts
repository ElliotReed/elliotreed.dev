import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const validDate = z.coerce.date().refine((d) => !isNaN(d.getTime()), {
    message: "Invalid date",
});

const blog = defineCollection({
    // Load Markdown and MDX files in the `src/content/blog/` directory.
    loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
    // Type-check frontmatter using a schema
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            // Transform string to Date object
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            heroImage: z.optional(image()),
        }),
});

const articles = defineCollection({
    loader: glob({ base: "./src/content/articles", pattern: "**/*.{md,mdx}" }),
    schema: ({ image }) => z.object({
        date: validDate,
        date_updated: validDate.nullable().optional(),
        featured: z.boolean(),
        hero_image: image(),
        hero_image_alt: z.string(),
        hero_image_credit_text: z.string().optional(),
        hero_image_credit_link: z.string().optional(),
        isActive: z.boolean().default(true),
        slug: z.string(),
        title: z.string(),
    }),
});

const portfolio = defineCollection({
    loader: glob({ base: "./src/content/portfolio", pattern: "**/*.{md,mdx}" }),
    schema: ({ image }) => z.object({
        blurb: z.string(),
        date: validDate,
        date_updated: validDate.nullable().optional(),
        title: z.string(),
        hero_image_alt: z.string(),
        hero_image_credit_link: z.string(),
        hero_image_credit_text: z.string(),
        hero_image: image(),
        slug: z.string(),
        isActive: z.boolean(),
        featured: z.boolean(),
    })
});

export const collections = { blog, articles, portfolio };
