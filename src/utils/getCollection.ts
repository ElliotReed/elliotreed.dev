import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export const articles = await getCollection("articles", ({ data }) => data.isActive);

export const portfolioPieces = await getCollection("portfolio", ({ data }) => data.isActive);


