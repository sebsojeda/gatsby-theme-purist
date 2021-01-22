import styled from '@emotion/styled';

const Anchor = styled.a<AnchorProps>`
  text-decoration: none;
  transition: box-shadow 0.3s ease;
  color: ${({ muted }) =>
    muted ? 'var(--color-muted)' : 'var(--color-accent)'};

  &:hover {
    box-shadow: 0 2px 0
      ${({ muted }) => (muted ? 'var(--color-muted)' : 'var(--color-accent)')};
  }
`;

interface AnchorProps {
  muted?: boolean;
}

export default Anchor;
