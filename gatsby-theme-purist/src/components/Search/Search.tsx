import { Search as SearchIcon, X } from '@emotion-icons/boxicons-regular';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { searchStore } from '../../utils';
import SearchResults from './SearchResults';

function Search({ limit }: SearchProps) {
  const [state, setState] = useState({
    results: [],
    query: '',
    showResults: true,
  });

  const handleSearch = (e) => {
    const query = e.target.value;
    const results = searchStore(query, limit);
    setState((prevState) => ({ ...prevState, results, query }));
  };

  return (
    <Wrapper>
      <OutsideClickHandler
        onOutsideClick={() =>
          setState((prevState) => ({ ...prevState, showResults: false }))
        }
      >
        <InputWrapper rounded={!!!state.query || !state.showResults}>
          <SearchIcon size="20" />
          <Input
            type="text"
            aria-label="search"
            onFocus={() =>
              setState((prevState) => ({ ...prevState, showResults: true }))
            }
            onChange={handleSearch}
            value={state.query}
            spellCheck="false"
          />
          <CloseIcon
            size="24"
            onClick={() =>
              setState((prevState) => ({ ...prevState, query: '' }))
            }
            hidden={!!!state.query}
          />
        </InputWrapper>
        {!!state.query && state.showResults && (
          <SearchResults
            query={state.query}
            results={state.results}
            onResultClick={() =>
              setState((prevState) => ({ ...prevState, query: '' }))
            }
          />
        )}
      </OutsideClickHandler>
    </Wrapper>
  );
}

interface InputWrapperProps {
  rounded?: boolean;
}

interface CloseIconProps {
  hidden?: boolean;
}

interface SearchProps {
  limit?: number;
}

const CloseIcon = styled(X)<CloseIconProps>`
  visibility: ${(p) => (p.hidden ? 'hidden' : 'visible')};
  &:hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: block;
`;

const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 0.75rem;
  border: 1px solid var(--color-text);
  border-radius: ${(p) => (p.rounded ? '24px' : '24px 24px 0 0')};
`;

const Input = styled.input`
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin: 0.5rem;
  background: transparent;
  border: none;
  color: inherit;

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;

export default Search;
