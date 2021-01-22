import styled from '@emotion/styled';

export const OrderedList = styled.ol`
  list-style-type: decimal;
  padding-inline-start: 1.25rem;
  & > * {
    margin: 1.5rem 0;
  }
  & > *:first-of-type {
    margin-top: 0;
  }
  & > *:last-of-type {
    margin-bottom: 0;
  }
`;

export const UnorderedList = styled.ul`
  list-style-type: '→ ';
  padding-inline-start: 1.25rem;
  & > * {
    margin: 1.5rem 0;
  }
  & > *:first-of-type {
    margin-top: 0;
  }
  & > *:last-of-type {
    margin-bottom: 0;
  }
`;

export const ListItem = styled.li`
  padding-left: 1rem;
  &::marker {
    color: var(--color-accent);
  }
`;
