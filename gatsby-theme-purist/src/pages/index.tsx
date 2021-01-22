import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';
import Img, { GatsbyImageProps } from 'gatsby-image';
import React from 'react';
import Layout from '../components/Layout';
import fonts from '../themes/fonts';

function HomePage({ data }) {
  const { heading, subHeading } = data.site.siteMetadata.hero;
  const articles = data.latestArticles.edges;

  return (
    <Layout>
      <BannerWrapper>
        <BannerHeading>{heading}</BannerHeading>
        {subHeading && <BannerSubHeading>{subHeading}</BannerSubHeading>}
      </BannerWrapper>
      {!!articles.length && (
        <>
          <ArticlesLabel>Latest Articles</ArticlesLabel>
          <ArticlesWrapper>
            {articles.map(({ node }) => (
              <CardWrapper key={node.fields.slug}>
                <Link to={node.fields.slug}>
                  <CardImage
                    fluid={
                      node.frontmatter.featuredImage?.childImageSharp.fluid
                    }
                  />
                  <CardTitle>{node.frontmatter.title}</CardTitle>
                </Link>
              </CardWrapper>
            ))}
          </ArticlesWrapper>
          <ArticlesLinkWrapper>
            <Link to="/articles">All Articles →</Link>
          </ArticlesLinkWrapper>
        </>
      )}
    </Layout>
  );
}

export const pageQuery = graphql`
  query Index {
    site {
      siteMetadata {
        hero {
          heading
          subHeading
        }
      }
    }
    latestArticles: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/content/" }
        frontmatter: { draft: { ne: true } }
      }
      limit: 2
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

const CardImage = styled(Img)<GatsbyImageProps>`
  object-fit: cover;
  height: 20rem;
  border-radius: 0.375rem;
`;

const CardTitle = styled.h3`
  display: inline-block;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  font-family: ${fonts.serif};
  &:hover {
    color: var(--color-accent);
  }
`;

const CardWrapper = styled.article`
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const BannerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10rem 0;
`;

const BannerHeading = styled.h1`
  font-family: ${fonts.serif};
  font-size: 2.25rem;
  line-height: 2.5rem;

  @media (min-width: 768px) {
    font-size: 3.75rem;
    line-height: 1;
  }
`;

const BannerSubHeading = styled.h2`
  font-size: 1.5rem;
  line-height: 2rem;
`;

const ArticlesLabel = styled.h3`
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 1.5rem;
`;

const ArticlesWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const ArticlesLinkWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 6rem;
  display: inline-block;
  font-size: 1.25rem;
  line-height: 1.75rem;
  box-shadow: 0 2px 0;

  &:hover {
    color: var(--color-accent);
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default HomePage;
