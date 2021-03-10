import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';
import Img, { GatsbyImageProps } from 'gatsby-image';
import path from 'path';
import React from 'react';
import Layout from '../components/Layout';
import { useBasePath } from '../utils';

function HomePage({ data }) {
  const { heading, subHeading } = data.site.siteMetadata.hero;
  const articles = data.latestArticles.edges;
  const basePath = useBasePath();

  return (
    <Layout>
      <Banner>
        <Heading>{heading}</Heading>
        {subHeading && <SubHeading><div dangerouslySetInnerHTML={{ __html: subHeading }} /></SubHeading>}
      </Banner>
      {!!articles.length && (
        <>
          <Label>Latest Articles</Label>
          <ArticlesWrapper>
            {articles.map(({ node }) => (
              <Wrapper key={node.fields.slug} to={node.fields.slug}>
                <Image
                  fluid={node.frontmatter.featuredImage?.childImageSharp.fluid}
                />
                <Title>{node.frontmatter.title}</Title>
                <Excerpt>{node.excerpt}</Excerpt>
                <Subtitle>
                  {node.frontmatter.date} &middot; {node.timeToRead} min read
                </Subtitle>
              </Wrapper>
            ))}
          </ArticlesWrapper>
          <ArticlesLink to={path.join('/', basePath, 'articles')}>
            All Articles →
          </ArticlesLink>
        </>
      )}
    </Layout>
  );
}

export const pageQuery = graphql`
  query Index($contentPath: String!, $featuredArticleLimit: Int!) {
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
        fileAbsolutePath: { regex: $contentPath }
        fields: { draft: { ne: true } }
      }
      limit: $featuredArticleLimit
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
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

const Excerpt = styled.div`
  color: var(--color-muted);
  padding: 1rem 0 0.5rem 0;
  line-height: 1.25rem;
`;

const Image = styled(Img)<GatsbyImageProps>`
  object-fit: cover;
  height: 16.5rem;
  border-radius: 0.375rem;
`;

const Title = styled.h3`
  display: inline-block;
  font-size: 1.5rem;
  line-height: 2rem;
  padding-top: 1rem;
  font-family: var(--font-serif);
`;

const Subtitle = styled.div`
  color: var(--color-muted);
  font-size: 1rem;
  opacity: 0.5;
`;

const Wrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: var(--color-accent);
    & .gatsby-image-wrapper {
      transition: all 0.2s linear;
      transform: translateY(-1px);
      box-shadow: 0 8px 25px var(--color-hover);
    }
  }
`;

const Banner = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 10rem;
`;

const Heading = styled.h1`
  font-family: var(--font-serif);
  font-size: 3rem;
  line-height: 3.5rem;

  @media (min-width: 768px) {
    font-size: 3.75rem;
    line-height: 4rem;
  }
`;

const SubHeading = styled.h2`
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin-top: 0.5rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  a {
    text-decoration: none;
    color: var(--color-text);
    box-shadow: 0 2px 0 var(--color-text);
    transition: color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    &:hover {
      color: var(--color-accent);
      box-shadow: 0 2px 0 var(--color-accent);
    }
  }
`;

const Label = styled.h3`
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin-bottom: 1.5rem;
`;

const ArticlesWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  & > * + * {
    margin-top: 1.25rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    & > * {
      margin-top: 0;
    }
  }
`;

const ArticlesLink = styled(Link)`
  margin-top: 4rem;
  margin-bottom: 6rem;
  display: inline-block;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: inherit;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: var(--color-accent);
  }
`;

export default HomePage;
