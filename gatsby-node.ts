/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
import type { GatsbyNode } from "gatsby";

export const onCreatePage: GatsbyNode['onCreatePage'] = ({ page, actions }) => {
  const { createPage } = actions

  if (!page.context) return;

  if (page.path.match(/design/)) {
    page.context.layout = "design";
    createPage(page);
  }
}
