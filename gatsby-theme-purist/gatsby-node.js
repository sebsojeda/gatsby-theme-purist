const path = require('path');
const fs = require('fs');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onPreBootstrap = ({ reporter }, themeOptions) => {
  const contentBase = themeOptions.contentBase || 'content';
  if (!fs.existsSync(contentBase)) {
    reporter.info(`creating the '${contentBase}' directory`);
    fs.mkdirSync(path.join(contentBase, 'articles'), { recursive: true });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type SiteSiteMetadata implements Node {
      hero: Hero!
      social: [Social!]
    }

    type Hero implements Node {
      heading: String!
      subHeading: String
    }

    type Social implements Node {
      name: String
      url: String!
    }

    type SitePluginPluginOptions implements Node {
      contentBase: String
      basePath: String
    }
  `;
  createTypes(typeDefs);
};

exports.onCreateNode = ({ node, getNode, actions }, themeOptions) => {
  if (node.internal.type === 'Mdx') {
    const basePath = themeOptions.basePath || '/';

    const slug = createFilePath({
      node,
      getNode,
      trailingSlash: false,
    });
    actions.createNodeField({
      node,
      name: 'slug',
      value: path.join('/', basePath, slug),
    });

    const date = new Date(node.frontmatter.date);
    actions.createNodeField({
      node,
      name: 'year',
      value: date.getFullYear(),
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }, themeOptions) => {
  const contentBase = themeOptions.contentBase || 'content';
  const basePath = themeOptions.basePath || '/';

  actions.createPage({
    path: path.join('/', basePath),
    component: require.resolve('./src/templates/home.tsx'),
  });

  actions.createPage({
    path: path.join('/', basePath, 'articles'),
    component: require.resolve('./src/templates/articles.tsx'),
  });

  /* https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-sharp/src/fragments.js */
  const GatsbyImageSharpFluid = `
      base64
      aspectRatio
      src
      srcSet
      sizes
  `;

  const query = await graphql(`
    query {
      allMdx(
        filter: {
          fileAbsolutePath: { regex: "/${path.join(contentBase, 'articles')}/" }
          fields: { draft: { ne: true } }
        }
        limit: 1000
        sort: { fields: [frontmatter___date], order: ASC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            timeToRead
            excerpt
            frontmatter {
              title
              date(formatString: "MMMM Do, YYYY")
              featuredImage {
                childImageSharp {
                  fluid(quality: 100) {
                    ${GatsbyImageSharpFluid}
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  if (query.errors) {
    reporter.panicOnBuild('Error while loading query', query.errors);
  }

  const articles = query.data.allMdx.edges;

  articles.forEach(({ node }, index) => {
    const { slug } = node.fields;
    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/article.tsx'),
      context: {
        slug,
        previous: index === 0 ? undefined : articles[index - 1].node,
        next:
          index === articles.length - 1 ? undefined : articles[index + 1].node,
      },
    });
  });
};
