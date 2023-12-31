import * as React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";

import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";

import Heading from "../../components/Heading/Heading";
import MaxWidthContainer from "../../components/MaxWidthContainer";
import PhotoCredit from "../../components/PhotoCredit";
import Seo from "../../components/SEO/Seo";

import * as styles from "./portfolio-detail.module.scss";

interface PortfolioData {
  mdx: {
    frontmatter: {
      blurb: string
      title: string
      hero_image_alt: string
      hero_image_credit_link: string
      hero_image_credit_text: string
      hero_image: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
  }
}

export default function PortfolioDetail({ data: { mdx: { frontmatter } }, children }: Readonly<PageProps<PortfolioData>>) {
  const image = getImage(frontmatter.hero_image);

  return (
    <main className={styles.portfolioDetail}>
      <MaxWidthContainer>
        {image && (<GatsbyImage
          image={image}
          alt={frontmatter.hero_image_alt}
        />)
        }
        <PhotoCredit
          link={frontmatter.hero_image_credit_link}
          text={frontmatter.hero_image_credit_text}
        />

        <Heading level={1}>
          {frontmatter.title}
        </Heading>

        <Heading level={2} size={4}>
          {frontmatter.blurb}
        </Heading>

        {children}
      </MaxWidthContainer>
    </main >
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        blurb
        title
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;


export const Head: HeadFC<string> = () => (
  <Seo title="Portfolio | Elliot Reed | Developer" />
)