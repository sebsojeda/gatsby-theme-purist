import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import MDX from '../MDX';
import SEO from '../SEO';

function Layout({ children }) {
  const data = useStaticQuery(query);
  const { name, social } = data.site.siteMetadata;

  return (
    <MDX>
      <SEO />
      <Container>
        <Header name={name} />
        {children}
        <Footer social={social} />
      </Container>
    </MDX>
  );
}

const query = graphql`
  query SitePluginOptions {
    site {
      siteMetadata {
        name
        social {
          name
          url
        }
      }
    }
  }
`;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - 2rem);

  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }

  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`;

export default Layout;
