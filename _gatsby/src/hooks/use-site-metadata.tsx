import { graphql, useStaticQuery } from "gatsby";

type ReturnValue = {
  site: {
    siteMetadata: {
      author: string
      description: string
      // image: string
      siteUrl: string
      title: string
      // twitterUsername: string
    }
  }
}

export const useSiteMetadata = () => {
  const data = useStaticQuery<ReturnValue>(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          # image
          siteUrl
          title
          # twitterUsername
        }
      }
    }
  `)

  return data.site.siteMetadata
}