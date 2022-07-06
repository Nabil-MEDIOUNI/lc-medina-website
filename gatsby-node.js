// This is called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/our-products/)) {
    // eslint-disable-next-line no-param-reassign
    page.matchPath = '/our-products/*';

    // Update the page.
    createPage(page);
  }
};
