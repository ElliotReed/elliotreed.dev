/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const React = require("react");
const GlobalContextProvider = require("./src/context/GlobalContextProvider")
  .default;

require("prismjs/themes/prism-tomorrow.css");
require("./src/styles/global.scss");

exports.wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
