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
      <Header name={name} />
      <Container>{children}</Container>
      <Footer social={social} />
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
  margin: 12rem auto 0 auto;
  width: calc(100% - 3rem);
  max-width: 46rem;
  @media (min-width: 1024px) {
    max-width: 65rem;
  }
  @media (min-width: 768px) {
    margin-top: 8.15rem;
  }
`;

export default Layout;
