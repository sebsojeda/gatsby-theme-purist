import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import App from '../components/App';
import Logo from '../components/Logo';
import Search from '../components/Search';
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
          <Search />
        </SearchWrapper>
      </PageWrapper>
    </App>
  );
}

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
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
