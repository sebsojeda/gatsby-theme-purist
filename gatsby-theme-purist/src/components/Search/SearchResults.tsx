import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';

function SearchResults({ results, query, onResultClick }: SearchResultsProps) {
  return (
    <SearchResultsWrapper>
      {!!results.length ? (
        results.map((page, i) => (
          <Link key={i} to={page.slug} onClick={onResultClick}>
            {page.title}
          </Link>
        ))
      ) : (
        <div>{`No results for '${query}'`}</div>
      )}
    </SearchResultsWrapper>
  );
}

const SearchResultsWrapper = styled.div`
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  border-radius: 0 0 24px 24px;
  border: 1px solid var(--color-text);
  border-top: none;
  padding: 1.25rem 0;

  & > * {
    padding: 0.5rem 0.75rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    text-decoration: none;
    color: inherit;
    position: relative;
  }

  & > *:hover {
    position: relative;
    &::after {
      background-color: var(--color-muted);
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -9999;
      opacity: 0.15;
    }
  }
`;

interface SearchResultsProps {
  results: any[];
  query: string;
  onResultClick: (e) => void;
}

export default SearchResults;
