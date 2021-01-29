import { InfoCircle } from '@emotion-icons/boxicons-regular';
import styled from '@emotion/styled';
import React from 'react';

function Blockquote({ children }) {
  return (
    <Wrapper>
      <InfoIcon size="24" />
      <Children>{children}</Children>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  padding: 1.5rem;
  border-radius: 0 0.375rem 0.375rem 0.125rem;
  border-left: 4px solid var(--color-info);
  background-color: var(--color-info-background);
  margin: 0;
  @media (min-width: 1120px) {
    margin: 0 -1.5rem;
  }
`;

const InfoIcon = styled(InfoCircle)`
  position: absolute;
  background-color: var(--color-background);
  border-radius: 100%;
  color: var(--color-info);
  padding: 0.75rem;
  top: calc(0rem - 1.5rem);
  left: calc(0rem - 1.5rem);
`;

const Children = styled.blockquote`
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: 1.5rem;
  }
`;

export default Blockquote;
