import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Img, { GatsbyImageProps } from 'gatsby-image';
import React from 'react';

function ArticleDiscovery({ previous, next }: ArticleDiscoveryProps) {
  return (
    <React.Fragment>
      <SectionName>More Articles</SectionName>
      <Grid>
        {previous && (
          <GridColumn gridColumnStart={1}>
            <Wrapper to={previous.fields.slug}>
              <Image
                fluid={
                  previous.frontmatter.featuredImage?.childImageSharp.fluid
                }
              />
              <Title>{previous.frontmatter.title}</Title>
              <Excerpt>{previous.excerpt}</Excerpt>
              <Subtitle>
                {previous.frontmatter.date} &middot; {previous.timeToRead} min
                read
              </Subtitle>
            </Wrapper>
          </GridColumn>
        )}
        {next && (
          <GridColumn gridColumnStart={2}>
            <Wrapper to={next.fields.slug}>
              <Image
                fluid={next.frontmatter.featuredImage?.childImageSharp.fluid}
              />
              <Title>{next.frontmatter.title}</Title>
              <Excerpt>{next.excerpt}</Excerpt>
              <Subtitle>
                {next.frontmatter.date} &middot; {next.timeToRead} min read
              </Subtitle>
            </Wrapper>
          </GridColumn>
        )}
      </Grid>
    </React.Fragment>
  );
}

interface ArticleDiscoveryProps {
  previous?: any;
  next?: any;
}

interface GridColumnProps {
  gridColumnStart: number;
}

const SectionName = styled.div`
  color: var(--color-muted);
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  &::after {
    background-color: var(--color-muted);
    content: '';
    width: 100%;
    height: 1px;
    margin: 0.5rem 0 0 3rem;
  }
`;

const Grid = styled.section`
  display: grid;
  gap: 1rem;
  margin: 5rem auto;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const GridColumn = styled.div<GridColumnProps>`
  grid-column-start: ${(p) => p.gridColumnStart};
`;

const Excerpt = styled.div`
  color: var(--color-muted);
  line-height: 1.25rem;
  padding: 1rem 0 0.5rem 0;
`;

const Image = styled(Img)<GatsbyImageProps>`
  object-fit: cover;
  height: 16.5rem;
  border-radius: 0.375rem;
`;

const Title = styled.h3`
  display: block;
  font-size: 1.5rem;
  line-height: 2rem;
  padding-top: 1rem;
  font-family: var(--font-serif);
`;

const Subtitle = styled.div`
  color: var(--color-muted);
  padding-top: 0.25rem;
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

export default ArticleDiscovery;
