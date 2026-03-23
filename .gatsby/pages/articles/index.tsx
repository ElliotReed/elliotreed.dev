import * as React from "react";
import { graphql, HeadFC, Link, PageProps } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

import DatePostedUpdated from "../../components/DatePostedUpdated";
import GoToDetailLink from "../../components/GoToDetailLink";
import Heading from "../../components/Heading/Heading";
import MaxWidthContainer from "../../components/MaxWidthContainer";
import Paragraph from "../../components/UI/Paragraph/Paragraph";
import Seo from "../../components/SEO/Seo";

import * as styles from "./articles.module.scss";

type ArticleData = {
  allMdx: {
    nodes: {
      map(arg0: (node: any) => React.JSX.Element): React.ReactNode;
      frontmatter: {
        date: string
        date_updated: string
        featured: boolean
        hero_image_alt: string
        hero_image: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData
          }
        }
        slug: string
        title: string
      }
      excerpt: string
      id: string
    }
  }
}
export default function ArticlesPage({ data: { allMdx: { nodes } } }: Readonly<PageProps<ArticleData>>) {

  return (
    <main className={styles.articles}>
      <MaxWidthContainer>
        <Heading level={1}>Articles</Heading>
        <ul className={styles.articles__list}>

          {nodes.map((node) => (
            <li key={node.id}>
              <article className={styles.articlesArticle}>
                <Link
                  to={node.frontmatter.slug}
                  className={styles.articlesArticle__imageLink}
                >
                  {node.frontmatter.hero_image && (
                    <GatsbyImage
                      image={node.frontmatter.hero_image && getImage(node.frontmatter.hero_image)}
                      alt={node.frontmatter.hero_image_alt}
                      imgClassName={styles.articlesArticle__image}
                    />
                  )}
                </Link>

                <div className={styles.articlesArticle__content}>
                  <Heading level={2}>{node.frontmatter.title}</Heading>

                  <DatePostedUpdated date_posted={node.frontmatter.date} date_updated={node.frontmatter.date_updated} />

                  <Paragraph>{node.excerpt}...</Paragraph>

                  <GoToDetailLink to={node.frontmatter.slug}>
                    Read Article
                  </GoToDetailLink>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </MaxWidthContainer>
    </main>
  );
}

export const query = graphql`
query  {
  allMdx(
    filter: {
      fields: {
        source: {eq: "articles"}
        }
      frontmatter: {
        isActive: {eq: true}
        }
      }
    sort: {frontmatter: {date: DESC}}
    )
    {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        date_updated(formatString: "MMMM D, YYYY")
        featured
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        slug
        title
    }
      excerpt
      id
    }
  }
}
`

export const Head: HeadFC<string> = () => (
  <Seo title="Articles | Elliot Reed | Developer" />
);