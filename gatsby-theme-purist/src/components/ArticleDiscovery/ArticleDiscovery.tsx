import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import fonts from '../../themes/fonts';

function ArticleDiscovery({ previous, next }: ArticleDiscoveryProps) {
  return (
    <ArticleDiscoveryWrapper>
      {previous && (
        <PreviousWrapper>
          <Label>Older:</Label>
          <ArticleDate>{previous.frontmatter.date}</ArticleDate>
          <Title>
            <Link to={previous.fields.slug}>{previous.frontmatter.title}</Link>
          </Title>
        </PreviousWrapper>
      )}
      {next && (
        <NextWrapper>
          <Label>Newer:</Label>
          <ArticleDate>{next.frontmatter.date}</ArticleDate>
          <Title>
            <Link to={next.fields.slug}>{next.frontmatter.title}</Link>
          </Title>
        </NextWrapper>
      )}
    </ArticleDiscoveryWrapper>
  );
}

interface ArticleDiscoveryProps {
  previous?: any;
  next?: any;
}

const ArticleDiscoveryWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 5rem auto;
  max-width: 48rem;
`;

const Label = styled.div`
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

const ArticleDate = styled.div`
  margin: 0.75rem 0 0.25rem 0;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: var(--color-muted);
`;

const Title = styled.h4`
  font-size: 1.5rem;
  line-height: 2rem;
  font-family: ${fonts.serif};
  display: inline-block;
  box-shadow: 0 2px 0;
  box-sizing: border-box;
  a {
    color: inherit;
    text-decoration: none;
  }
  &:hover {
    color: var(--color-accent);
  }
`;

const PreviousWrapper = styled.div`
  grid-column-start: 1;
  text-align: left;
`;

const NextWrapper = styled.div`
  grid-column-start: 2;
  text-align: right;
`;

export default ArticleDiscovery;
