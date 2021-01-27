import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import App from '../components/App';
import Logo from '../components/Logo';
import SEO from '../components/SEO';

function NotFoundPage() {
  return (
    <App>
      <SEO title="404 Not Found" />
      <PageWrapper>
        <div>This page isn't available. Sorry about that.</div>
        <div>Try searching for something else.</div>
        <SearchWrapper>
          <Link to="/">
            <Logo />
          </Link>
        </SearchWrapper>
      </PageWrapper>
    </App>
  );
}

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  a {
    color: inherit;
  }
  & > * {
    margin: 0 1rem;
  }
  a:hover {
    color: var(--color-accent);
  }
`;

const PageWrapper = styled.div`
  flex-direction: column;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export default NotFoundPage;
