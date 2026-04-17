export function getExcerpt(body: string, length = 200) {
    return body
        .replace(/^---[\s\S]*?---/, '')        // strip frontmatter
        .replace(/^import\s+.*$/gm, '')         // strip import statements
        .replace(/#{1,6}\s/g, '')               // strip headings
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // strip md links, keep label
        .replace(/[*_`>\[\]!]/g, '')            // strip markdown syntax
        .replace(/\n+/g, ' ')
        .trim()
        .slice(0, length) + '...';
}