import styled from '@emotion/styled';

export const OrderedList = styled.ol`
  list-style-type: decimal;
  padding-inline-start: 1.25rem;
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: 1.5rem;
  }
`;

export const UnorderedList = styled.ul`
  list-style-type: '→ ';
  padding-inline-start: 1.25rem;
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: 1.5rem;
  }
`;

export const ListItem = styled.li`
  padding-left: 1rem;
  &::marker {
    color: var(--color-accent);
  }
`;
