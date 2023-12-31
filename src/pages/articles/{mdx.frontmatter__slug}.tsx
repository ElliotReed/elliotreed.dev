import * as React from "react";
import { HeadProps, PageProps, graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";

import DatePostedUpdated from "../../components/DatePostedUpdated";
import Heading from "../../components/Heading/Heading";
import MaxWidthContainer from "../../components/MaxWidthContainer";
import PhotoCredit from "../../components/PhotoCredit";
import Seo from "../../components/SEO/Seo";

import * as styles from "./article.module.scss";

interface ArticleData {
  mdx: {
    frontmatter: {
      date: string
      date_updated: string
      hero_image_alt: string
      hero_image_credit_link: string
      hero_image_credit_text: string
      hero_image: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
      title: string
    }
  }
}

export default function Article({ data: { mdx: { frontmatter } }, children }: Readonly<PageProps<ArticleData>>) {
  const image = getImage(frontmatter.hero_image);

  return (
    <main>
      <MaxWidthContainer>
        <article className={styles.article}>
          {image && (
            <GatsbyImage
              alt={frontmatter.hero_image_alt}
              className={styles.article__hero}
              image={image}
            />
          )}
          <PhotoCredit
            link={frontmatter.hero_image_credit_link}
            text={frontmatter.hero_image_credit_text}
          />

          <Heading level={1}>
            {frontmatter.title}
          </Heading>

          <DatePostedUpdated date_posted={frontmatter.date} date_updated={frontmatter.date_updated} />

          {children}
        </article>
      </MaxWidthContainer>
    </main>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        date_updated(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        title
      }
    }
  }
`;

export const Head = ({ data: { mdx: { frontmatter } } }: HeadProps<ArticleData>) => <Seo title={`${frontmatter.title} | Article | Elliot Reed | Developer`} />