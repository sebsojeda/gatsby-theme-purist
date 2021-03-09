import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

function Articles({ data }) {
  return (
    <Layout>
      <SEO title="Articles" />
      <ArticlesWrapper>
        {data.allMdx.group
          .sort((a, b) => +b.year - +a.year)
          .map(({ year, edges }) => {
            return (
              <React.Fragment key={year}>
                <Year>{year}</Year>
                <Titles>
                  {edges.map(({ node }) => {
                    const { title, date } = node.frontmatter;
                    const { slug } = node.fields;
                    return (
                      <li key={node.id}>
                        <LinkWrapper to={slug}>
                          <Title>{title}</Title>
                          <Excerpt>{node.excerpt}</Excerpt>
                          <Subtitle>
                            {date} &middot; {node.timeToRead} min read
                          </Subtitle>
                        </LinkWrapper>
                      </li>
                    );
                  })}
                </Titles>
              </React.Fragment>
            );
          })}
      </ArticlesWrapper>
    </Layout>
  );
}

export const pageQuery = graphql`
  query AllPosts($contentPath: String!) {
    allMdx(
      filter: {
        fileAbsolutePath: { regex: $contentPath }
        fields: { draft: { ne: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      group(field: fields___year) {
        year: fieldValue
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
            }
          }
        }
      }
    }
  }
`;

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 2.5rem 0 6rem 0;

  @media (min-width: 640px) {
    grid-template-columns: 25% 50%;
  }
`;

const LinkWrapper = styled(Link)`
  display: inline-block;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: inherit;
  &:hover {
    color: var(--color-accent);
  }
`;

const Title = styled.div`
  font-family: var(--font-serif);
`;

const Excerpt = styled.div`
  color: var(--color-muted);
  font-size: 1rem;
  margin: 1rem 0;
`;

const Subtitle = styled.div`
  font-size: 1rem;
  color: var(--color-muted);
  margin-bottom: 1rem;
  opacity: 0.5;
`;

const Titles = styled.ul`
  font-size: 1.25rem;
  line-height: 1.75rem;

  & > * {
    margin: 1rem 0;
  }
  & > *:first-of-type {
    margin-top: 0;
  }
  & > *:last-of-type {
    margin-bottom: 0;
  }
`;

const Year = styled.h4`
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin-bottom: 2rem;

  @media (min-width: 640px) {
    margin-bottom: 0;
  }
`;

export default Articles;
