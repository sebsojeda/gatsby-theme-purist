import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import fonts from '../themes/fonts';

function Articles({ data }) {
  return (
    <Layout>
      <SEO title="Articles" />
      <ArticlesWrapper>
        {data.allMdx.group
          .sort((a, b) => +b.fieldValue - +a.fieldValue)
          .map(({ fieldValue, edges }) => {
            return (
              <React.Fragment key={fieldValue}>
                <Year>{fieldValue}</Year>
                <Titles>
                  {edges.map(({ node }) => {
                    const { title, date } = node.frontmatter;
                    const { slug } = node.fields;
                    return (
                      <li key={node.id}>
                        <span>{date}</span>
                        <LinkWrapper>
                          <Link to={slug}>{title}</Link>
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
  query AllPosts {
    allMdx(
      filter: {
        fileAbsolutePath: { regex: "/content/" }
        frontmatter: { draft: { ne: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      group(field: fields___year) {
        fieldValue
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MM/DD/YY")
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

const LinkWrapper = styled.span`
  margin-left: 1rem;
  box-shadow: 0 2px 0;
  font-family: ${fonts.serif};
  &:hover {
    color: var(--color-accent);
  }
  a {
    color: inherit;
    text-decoration: none;
  }
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
