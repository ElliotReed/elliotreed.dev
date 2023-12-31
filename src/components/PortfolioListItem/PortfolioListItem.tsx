import * as React from "react";

import * as styles from "./portfolio-list-item.module.scss";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import Heading from "../Heading/Heading";
import Paragraph from "../UI/Paragraph/Paragraph";
import GoToDetailLink from "../GoToDetailLink";

interface PortfolioListItemNode {
  node: {
    frontmatter: {
      blurb: string
      slug: string
      title: string
      tags: string[]
      hero_image: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
      hero_image_alt: string
    }
    excerpt: string
    id: string
  }
  prefixed: boolean
}

export default function PortfolioListItem({ node, prefixed = true }: Readonly<PortfolioListItemNode>) {
  const image = getImage(node.frontmatter.hero_image);
  const prefix = "portfolio";

  return (
    <li
      className={styles.portfolioListItem}>
      {image && (
        <GatsbyImage
          image={image}
          alt={node.frontmatter.hero_image_alt}
        />
      )}
      <div className={styles.portfolioListItem__content}>
        <Heading level={3}>{node.frontmatter.title}</Heading>
        <Heading level={4} size={5}>{node.frontmatter.blurb}</Heading>
        <Paragraph>{node.excerpt}</Paragraph>
        <GoToDetailLink
          to={prefixed
            ? `${prefix}/${node.frontmatter.slug}`
            : `${node.frontmatter.slug}`
          }
        >
          Go To Details
        </GoToDetailLink>
      </div>
    </li>
  );
}