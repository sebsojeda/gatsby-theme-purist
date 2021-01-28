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
        <Link to="/">
          <Logo />
        </Link>
      </PageWrapper>
    </App>
  );
}

const PageWrapper = styled.div`
  flex-direction: column;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  & > a {
    color: var(--color-text);
    :hover {
      color: var(--color-accent);
    }
  }
`;

export default NotFoundPage;
