import * as React from "react";
import { HeadFC, HeadProps, PageProps, graphql } from "gatsby";

import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";

import Heading from "../../../components/Heading/Heading";
import MaxWidthContainer from "../../../components/MaxWidthContainer";
import PhotoCredit from "../../../components/PhotoCredit";
import Seo from "../../../components/SEO/Seo";

import * as styles from "../../portfolio/portfolio-detail.module.scss";

interface ClientPortfolioData {
  mdx: {
    frontmatter: {
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

export default function ClientPortfolioDetail({ data: { mdx: { frontmatter } }, children }: Readonly<PageProps<ClientPortfolioData>>) {
  const image = getImage(frontmatter.hero_image);

  return (
    <main className={styles.portfolioDetail}>
      <MaxWidthContainer>
        {image && (
          <GatsbyImage
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
        {children}
      </MaxWidthContainer>
    </main >
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
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


export const Head = (props: HeadProps<ClientPortfolioData>) => (
  <Seo title={`${props.data.mdx.frontmatter.title} | Elliot Reed | Developer`} />)