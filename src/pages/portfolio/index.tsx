import * as React from "react";
import { HeadFC, PageProps, graphql } from 'gatsby';

import { IGatsbyImageData } from "gatsby-plugin-image";

import { PortfolioNode } from "../../interfaces/PortfolioNode";

import Heading from "../../components/Heading/Heading";
import MaxWidthContainer from "../../components/MaxWidthContainer";
import Paragraph from "../../components/UI/Paragraph/Paragraph";
import PortfolioList from "../../components/PortfolioList";
import PortfolioListItem from "../../components/PortfolioListItem";
import { Seo } from "../../components/SEO/Seo";

import * as styles from "./portfolio.module.scss";

interface PortfolioData {
  allMdx: {
    nodes: {
      filter(arg0: (node: PortfolioNode) => boolean): []
      map(arg0: (node: PortfolioNode) => React.JSX.Element): undefined;
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
        title: string
      }
      excerpt: string
      id: string
    }
  }
}

export default function PortfolioPage({ data: { allMdx: { nodes } } }: Readonly<PageProps<PortfolioData>>) {
  return (
    <MaxWidthContainer>
      <main className={styles.organization}>
        <Heading level={1}>Portfolio</Heading>

        <Paragraph>
          A selection of projects I have built.
        </Paragraph>

        <Heading level={2}>Featured</Heading>
        <PortfolioList>
          {nodes.filter((node: PortfolioNode) => node.frontmatter.featured === true).map((node: PortfolioNode) => (
            <PortfolioListItem key={node.id} node={node} prefixed={false} />
          ))}
        </PortfolioList>

        <Heading level={2}>Projects</Heading>
        <PortfolioList>
          {nodes.filter((node: PortfolioNode) => node.frontmatter.featured === false).map((node: PortfolioNode) => (
            <PortfolioListItem key={node.id} node={node} prefixed={false} />
          ))}
        </PortfolioList>
      </main>
    </MaxWidthContainer>
  );
}

export const query = graphql`
query {
  allMdx(
    filter: {frontmatter: {isActive: {eq: true}}, fields: {source: {eq: "portfolio"}}}
    sort: {frontmatter: {title: ASC}}
  ) {
    nodes {
      frontmatter {
        blurb
        featured
        hero_image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        hero_image_alt
        slug
        title
      }
      excerpt(pruneLength: 100)
      id
    }
  }
}
`;


export const Head: HeadFC<string> = () => (
  <Seo title="Hire Elliot Reed | Developer" />
)