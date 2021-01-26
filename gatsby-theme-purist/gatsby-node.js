const fs = require('fs');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onPreBootstrap = ({ reporter }) => {
  if (!fs.existsSync('content')) {
    reporter.info(`creating the 'content' directory`);
    fs.mkdirSync('content', { recursive: true });
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
  `;
  createTypes(typeDefs);
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode, trailingSlash: false });
    actions.createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    const date = new Date(node.frontmatter.date);
    actions.createNodeField({
      node,
      name: 'year',
      value: date.getFullYear(),
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
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
          fileAbsolutePath: { regex: "/content/" }
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
