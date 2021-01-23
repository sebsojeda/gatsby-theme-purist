import { Copy } from '@emotion-icons/boxicons-regular';
import styled from '@emotion/styled';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import React, { useState } from 'react';
import theme from '../../theme';
import prism from '../../theme/prism';
import { calculateLinesToHighlight, copyToClipboard } from '../../utils';
import { useTheme } from '../ThemeContext';

function Code({ className, metastring, children }: CodeProps) {
  const language = className?.replace(/language-/, '') || 'text';
  const { colorMode } = useTheme();
  const shouldHighlightLine = calculateLinesToHighlight(metastring);
  const [copied, setCopied] = useState(false);

  const handleCopyCode = (e) => {
    e.preventDefault();
    setCopied(true);
    copyToClipboard(children as string);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <React.Fragment>
      <Wrapper>
        <LanguageName style={{ ...prism[colorMode]?.plain }}>
          {language}
        </LanguageName>
        <CopyWrapper
          href="javascript:void(0)"
          copied={copied}
          style={{ ...prism[colorMode]?.highlight }}
          onClick={handleCopyCode}
        >
          {copied ? 'Copied' : <CopyIcon size="1.25rem" />}
        </CopyWrapper>
      </Wrapper>
      <div className="gatsby-highlight">
        <Highlight
          {...defaultProps}
          code={children as string}
          language={language as Language}
          theme={colorMode && { ...prism[colorMode] }}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <CodeWrapper className={className} style={{ ...style }}>
              {tokens.map((line, index) => {
                const lineProps = getLineProps({ line, key: index });

                return (
                  <CodeLine
                    key={index}
                    highlight={shouldHighlightLine(index)}
                    highlightStyles={{ ...prism[colorMode]?.highlight }}
                    {...lineProps}
                  >
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </CodeLine>
                );
              })}
            </CodeWrapper>
          )}
        </Highlight>
      </div>
    </React.Fragment>
  );
}

interface CodeProps {
  metastring?: string;
  className?: string;
  children?: React.ReactNode;
}

interface CodeLineProps {
  highlight: boolean;
  highlightStyles: {
    backgroundColor: string;
    borderColor: string;
  };
}

interface CopyWrapperProps {
  copied: boolean;
}

const CopyWrapper = styled.a<CopyWrapperProps>`
  text-decoration: none;
  color: inherit;
  position: absolute;
  border-radius: 0.375rem;
  padding: 0.5rem;
  top: 0.5rem;
  right: 0.5rem;
  opacity: ${({ copied }) => (copied ? 1 : 0.25)};
  font-family: ${theme.fonts.monospace};
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;

const CopyIcon = styled(Copy)`
  &:hover {
    cursor: pointer;
  }
`;

const CodeLine = styled.div<CodeLineProps>`
  background-color: ${({ highlight, highlightStyles }) =>
    highlight && highlightStyles.backgroundColor};
  margin: ${({ highlight }) => (highlight ? '0 -1.5rem' : 'initial')};
  padding: ${({ highlight }) =>
    highlight ? '0 calc(1.5rem - 2px)' : 'initial'};
  box-sizing: border-box;
  border-left: solid 2px
    ${({ highlight, highlightStyles }) =>
      highlight ? highlightStyles.borderColor : 'initial'};
`;

const Wrapper = styled.div`
  position: relative;
`;

const LanguageName = styled.div`
  position: absolute;
  right: 2rem;
  top: -1.75rem;
  padding: 0.75rem;
  border-radius: 0.25rem 0.25rem 0 0;
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1rem;
  user-select: none;
  font-family: ${theme.fonts.monospace};
  color: var(--color-muted);
`;

const CodeWrapper = styled.pre`
  user-select: none;
  float: left;
  min-width: calc(100% - 3rem);
  padding: 1.5rem;
  font-family: ${theme.fonts.monospace};
  & > * {
    display: flex;
  }
  & > *:last-of-type {
    height: 0;
  }
`;

export default Code;
