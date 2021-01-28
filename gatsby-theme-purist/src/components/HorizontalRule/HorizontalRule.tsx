import styled from '@emotion/styled';

const HorizontalRule = styled.div`
  background-color: var(--color-muted);
  height: 0.3rem;
  width: 0.3rem;
  margin: 5rem auto;
  border-radius: 100%;
  position: relative;
  &::before {
    background-color: inherit;
    position: absolute;
    content: '';
    left: -2rem;
    top: 0;
    height: 0.3rem;
    width: 0.3rem;
    border-radius: 100%;
  }
  &::after {
    background-color: inherit;
    position: absolute;
    content: '';
    left: 2rem;
    top: 0;
    height: 0.3rem;
    width: 0.3rem;
    border-radius: 100%;
  }
`;

export default HorizontalRule;
