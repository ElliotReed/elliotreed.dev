import { IGatsbyImageData } from "gatsby-plugin-image"

export interface PortfolioNode {
  frontmatter: {
    blurb: string
    featured: boolean
    hero_image: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
    hero_image_alt: string
    slug: string
    tags: string[]
    title: string
  }
  excerpt: string
  id: string
}