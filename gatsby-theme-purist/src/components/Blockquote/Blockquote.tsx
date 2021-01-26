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
`;

const InfoIcon = styled(InfoCircle)`
  position: absolute;
  background-color: var(--color-background);
  border-radius: 9999px;
  color: var(--color-info);
  padding: 0.75rem;
  top: calc(0rem - 1.5rem);
  left: calc(0rem - 1.5rem);
`;

const Children = styled.blockquote`
  & > * {
    margin: 2.5rem auto;
  }
  & > *:first-of-type {
    margin-top: 0;
  }
  & > *:last-of-type {
    margin-bottom: 0;
  }
`;

export default Blockquote;
