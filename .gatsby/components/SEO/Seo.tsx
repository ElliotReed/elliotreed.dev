import * as React from "react";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

interface SEOProps {
  author?: string
  description?: string
  pathname?: string
  siteUrl?: string
  title?: string
}

const Seo: React.FC<React.PropsWithChildren<SEOProps>> = ({
  author,
  description,
  pathname,
  siteUrl,
  title,
  children,
}) => {
  // const { title: defaultTitle, description: defaultDescription, image, twitterUsername } = useSiteMetadata()
  const {
    title: defaultTitle,
    description: defaultDescription,
    author: defaultAuthor,
    siteUrl: defaultSiteUrl,
  } = useSiteMetadata();

  const seo = {
    author: author ?? defaultAuthor,
    description: description ?? defaultDescription,
    title: title ?? defaultTitle,
    url: `${siteUrl}${pathname ?? defaultSiteUrl}`,
    // image: `${siteUrl}${image}`,
    // twitterUsername,
  }

  return (
    <>
      <html lang="en-US" />
      <meta name='author' content={seo.author} />
      <meta name="description" content={seo.description} />
      {/* <meta name="image" content={seo.image} /> */}
      {/* <meta name="twitter:card" content="summary_large_image" /> */}
      {/* <meta name="twitter:title" content={seo.title} /> */}
      {/* <meta name="twitter:url" content={seo.url} /> */}
      {/* <meta name="twitter:description" content={seo.description} /> */}
      {/* <meta name="twitter:image" content={seo.image} /> */}
      {/* <meta name="twitter:creator" content={seo.twitterUsername} /> */}
      {/* <link id="favicon-icon" rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" /> */}
      {children}
      <title>{seo.title}</title>
    </>
  )
}

export default Seo;