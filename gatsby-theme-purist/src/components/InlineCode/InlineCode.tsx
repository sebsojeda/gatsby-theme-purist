import styled from '@emotion/styled';

const InlineCode = styled.code`
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  font-family: var(--font-monospace);
  position: relative;
  &::after {
    opacity: 0.15;
    content: '';
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    border-radius: 0.25rem;
    background-color: var(--prism-inline-code);
  }
`;

export default InlineCode;
