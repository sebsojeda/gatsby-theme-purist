import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';

function ArticleDiscovery({ previous, next }: ArticleDiscoveryProps) {
  return (
    <React.Fragment>
      <FooterBorder>More Articles</FooterBorder>
      <ArticleDiscoveryWrapper>
        {previous && (
          <PreviousWrapper to={previous.fields.slug}>
            <Label>Previous:</Label>
            <Title>{previous.frontmatter.title}</Title>
            <Subtitle>
              {previous.frontmatter.date} &middot; {previous.timeToRead} min
              read
            </Subtitle>
          </PreviousWrapper>
        )}
        {next && (
          <NextWrapper to={next.fields.slug}>
            <Label>Next:</Label>
            <Title>{next.frontmatter.title}</Title>
            <Subtitle>
              {next.frontmatter.date} &middot; {next.timeToRead} min read
            </Subtitle>
          </NextWrapper>
        )}
      </ArticleDiscoveryWrapper>
    </React.Fragment>
  );
}

interface ArticleDiscoveryProps {
  previous?: any;
  next?: any;
}

const FooterBorder = styled.div`
  margin-bottom: 5rem;
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

const ArticleDiscoveryWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 0 auto 5rem auto;
  max-width: 48rem;
`;

const Label = styled.div`
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: var(--color-text);
`;

const Subtitle = styled.div`
  margin-top: 0.5rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: var(--color-muted);
  font-size: 1rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  font-family: var(--font-serif);
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
`;

const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: var(--color-accent);
  }
`;

const PreviousWrapper = styled(LinkWrapper)`
  grid-column-start: 1;
  text-align: left;
`;

const NextWrapper = styled(LinkWrapper)`
  grid-column-start: 2;
  text-align: right;
`;

export default ArticleDiscovery;
