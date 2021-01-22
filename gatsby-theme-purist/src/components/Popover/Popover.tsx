import { Linkedin, Twitter } from '@emotion-icons/boxicons-logos';
import { Copy } from '@emotion-icons/boxicons-regular';
import styled from '@emotion/styled';
import { useLocation } from '@reach/router';
import React, { useEffect, useState } from 'react';
import { copyToClipboard } from '../../utils';

function Popover({ children }) {
  const { protocol, host, pathname } = useLocation();
  const [state, setState] = useState({
    x: 0,
    y: 0,
    text: '',
    hidden: true,
    isOnPopover: false,
  });

  useEffect(() => {
    const popover = document.getElementById('popover');
    const content = document.getElementById('popover-content');

    popover.addEventListener('mouseenter', () => {
      setState((prevState) => ({ ...prevState, isOnPopover: true }));
    });

    popover.addEventListener('mouseleave', () =>
      setState((prevState) => ({ ...prevState, isOnPopover: false })),
    );

    document.addEventListener('mousedown', () =>
      setState((prevState) => {
        const selection = window.getSelection();

        if (prevState.isOnPopover) {
          return prevState;
        }

        selection.empty();
        return { ...prevState, hidden: true };
      }),
    );

    document.addEventListener('mouseup', () => {
      setState((prevState) => {
        const selection = window.getSelection();

        if (prevState.isOnPopover) {
          selection.empty();
          return { ...prevState, hidden: true };
        }

        if (
          selection.toString() !== '' &&
          content.contains(selection.anchorNode) &&
          content.contains(selection.focusNode)
        ) {
          const range = selection.getRangeAt(0);
          const selectionRect = range.getBoundingClientRect();
          const popoverRect = popover.getBoundingClientRect();

          const positionY = () => selectionRect.y + window.pageYOffset;
          const positionX = () => {
            if (popoverRect.width + selectionRect.x > window.innerWidth) {
              return selectionRect.x - popoverRect.width;
            }
            return selectionRect.x;
          };

          return {
            ...prevState,
            x: positionX(),
            y: positionY(),
            text: selection.toString(),
            hidden: false,
          };
        }

        return prevState;
      });
    });

    return () => {
      document.removeEventListener('mouseup', null);
      document.removeEventListener('mousedown', null);
      popover.removeEventListener('mouseenter', null);
      popover.removeEventListener('mouseleave', null);
    };
  }, []);

  const getLocation = () => `${protocol}//${host}${pathname}`;

  const getTweetText = () => {
    const maxTweetLength = 280;
    const linkPart = ` — ${getLocation()}`;
    let textPart = state.text;

    if ((textPart + linkPart).length >= maxTweetLength) {
      const maxTextLength = maxTweetLength - linkPart.length;
      textPart = textPart.substring(0, maxTextLength - 3) + '...';
    }

    return `${textPart}${linkPart}`;
  };

  return (
    <React.Fragment>
      <PopoverWrapper
        x={state.x}
        y={state.y}
        hidden={state.hidden}
        id="popover"
      >
        <a
          target="_blank"
          rel="noopener"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            getTweetText(),
          )}`}
        >
          <TwitterIcon size="1.25rem" />
        </a>
        <a
          target="_blank"
          rel="noopener"
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            getLocation(),
          )}`}
        >
          <LinkedinIcon size="1.25rem" />
        </a>
        <CopyIcon size="1.25rem" onClick={() => copyToClipboard(state.text)} />
      </PopoverWrapper>

      <div id="popover-content">{children}</div>
    </React.Fragment>
  );
}

interface PopoverProps {
  x: number;
  y: number;
}

const PopoverWrapper = styled.div<PopoverProps>`
  display: flex;
  position: absolute;
  padding: 0.5rem;
  border-radius: 0.375rem;
  z-index: 9999;
  background: #0a0a0a;
  left: ${({ x, hidden }) => (hidden ? -99999 : x)}px;
  top: calc(${({ y }) => y}px - 3.25rem);
  & > * {
    padding: 0.25rem;
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
