module.exports = {
  siteMetadata: {
    name: 'Purist',
    defaultTitle: 'Purist: Creating content',
    titleTemplate: '%s • Purist: Creating content',
    description: 'A simple way to create content with Gatsby',
    hero: {
      heading: 'Welcome to Purist.',
      subHeading: 'A simple way to create content with Gatsby',
    },
    social: [
      {
        name: 'twitter',
        url: 'https://twitter.com/sebsojeda',
      },
      {
        name: 'github',
        url: 'https://github.com/sebsojeda/gatsby-theme-purist',
      },
    ],
  },
  plugins: [
    {
      resolve:'gatsby-theme-purist',
      options: {
        contentBase: 'content',
        basePath: '/',
        featuredArticleLimit: 2,
      },
    },
  ],
};
