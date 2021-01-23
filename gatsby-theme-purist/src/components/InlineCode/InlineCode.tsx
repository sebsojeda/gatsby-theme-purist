import styled from '@emotion/styled';
import theme from '../../theme';

const InlineCode = styled.code`
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  font-family: ${theme.fonts.monospace};
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
    background-color: var(--color-muted);
    z-index: -999;
  }
`;

export default InlineCode;
