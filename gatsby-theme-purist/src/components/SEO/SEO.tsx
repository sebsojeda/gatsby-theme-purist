import { useLocation } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import favicon from '../../../static/favicon.png';

function SEO({ title, description, image }: SEOProps) {
  const { href, host, protocol } = useLocation();

  const data = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
  } = data.site.siteMetadata;

  const seo = {
    title: title,
    description: description || defaultDescription,
    image: `${protocol}//${host}${image || '/static/image.png'}`,
    url: href,
  };

  return (
    <Helmet
      defaultTitle={defaultTitle}
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{ lang: 'en' }}
      link={[{ rel: 'icon', href: favicon }]}
      meta={[
        {
          name: 'description',
          content: seo.description,
        },
        {
          property: 'og:title',
          content: seo.title,
        },
        {
          property: 'og:image',
          content: seo.image,
        },
        {
          property: 'og:description',
          content: seo.description,
        },
        {
          property: 'og:url',
          content: seo.url,
        },
        {
          name: 'twitter:title',
          content: seo.title,
        },
        {
          name: 'twitter:image',
          content: seo.image,
        },
        {
          name: 'twitter:description',
          content: seo.description,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ]}
    />
  );
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle
        titleTemplate
        defaultDescription: description
      }
    }
  }
`;

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}

export default SEO;
