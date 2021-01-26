import styled from '@emotion/styled';

const Anchor = styled.a`
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  color: var(--color-accent);
  &:hover {
    box-shadow: 0 2px 0 var(--color-accent);
  }
`;

export default Anchor;
