import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import App from '../components/App';
import SEO from '../components/SEO';

function NotFoundPage() {
  return (
    <App>
      <SEO title="404 Not Found" />
      <PageWrapper>
        <Title>Not Found</Title>
        <Subtitle>Try searching for something else.</Subtitle>
        <HomeLink>
          <Link to="/">&larr; Go Home</Link>
        </HomeLink>
      </PageWrapper>
    </App>
  );
}

const Title = styled.div`
  font-size: 5rem;
  line-height: 4.25rem;
  margin-bottom: 1rem;
  color: var(--color-text-header);
`;

const Subtitle = styled.div`
  font-size: 1.5rem;
`;

const HomeLink = styled.div`
  & > a {
    text-decoration: none;
    color: var(--color-header);
  }
`;

const PageWrapper = styled.div`
  flex-direction: column;
  height: 100vh;
  display: flex;
  margin: 5rem;
  & > * + * {
    margin-top: 1rem;
  }
`;

export default NotFoundPage;
