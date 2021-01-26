import { Linkedin, Twitter } from '@emotion-icons/boxicons-logos';
import { Copy } from '@emotion-icons/boxicons-regular';
import styled from '@emotion/styled';
import { useLocation } from '@reach/router';
import React, { useState } from 'react';
import Wrapper from 'react-text-selection-popover';
import { copyToClipboard } from '../../utils';

function Popover({ selectionRef }: PopoverProps) {
  const { protocol, host, pathname } = useLocation();
  const getLocation = () => `${protocol}//${host}${pathname}`;
  const [selection, setSelection] = useState('');

  const getTweetText = () => {
    const maxTweetLength = 280;
    const linkPart = ` — ${getLocation()}`;
    let textPart = selection;

    if ((textPart + linkPart).length >= maxTweetLength) {
      const maxTextLength = maxTweetLength - linkPart.length;
      textPart = textPart.substring(0, maxTextLength - 3) + '...';
    }

    return `${textPart}${linkPart}`;
  };

  return (
    <Wrapper
      selectionRef={selectionRef}
      onTextSelect={() => setSelection(document.getSelection().toString())}
    >
      <PopoverWrapper>
        <a
          target="_blank"
          rel="noopener"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            getTweetText(),
          )}`}
        >
          <TwitterIcon size="20" />
        </a>
        <a
          target="_blank"
          rel="noopener"
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            getLocation(),
          )}`}
        >
          <LinkedinIcon size="20" />
        </a>
        <CopyIcon size="20" onMouseDown={() => copyToClipboard(selection)} />
      </PopoverWrapper>
    </Wrapper>
  );
}

interface PopoverProps {
  selectionRef: React.MutableRefObject<any>;
}

const PopoverWrapper = styled.div`
  display: flex;
  padding: 0.5rem;
  border-radius: 0.375rem;
  z-index: 9999;
  background: #0a0a0a;
  & > * {
    padding: 0.25rem;
  }
  & > *:hover {
    cursor: pointer;
  }
`;

const LinkedinIcon = styled(Linkedin)`
  color: #fff;
`;

const CopyIcon = styled(Copy)`
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;

const TwitterIcon = styled(Twitter)`
  color: #fff;
`;

export default Popover;
export { PopoverWrapper };
