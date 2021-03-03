import { Copy } from '@emotion-icons/boxicons-regular';
import styled from '@emotion/styled';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import React, { useState } from 'react';
import prism from '../../theme/prism';
import { calculateLinesToHighlight, copyToClipboard } from '../../utils';

function Code({ className, metastring, children }: CodeProps) {
  const language = className?.replace(/language-/, '') || 'text';
  const shouldHighlightLine = calculateLinesToHighlight(metastring);
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    setCopied(true);
    copyToClipboard(children as string);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Wrapper>
      <LanguageName>{language}</LanguageName>
      <CopyButton copied={copied} onClick={handleCopyCode}>
        {copied ? 'Copied' : <CopyIcon size="20" />}
      </CopyButton>
      <Pre>
        <Highlight
          {...defaultProps}
          code={children as string}
          language={language as Language}
          theme={prism}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <CodeWrapper className={className} style={{ ...style }}>
              {tokens.map((line, index) => {
                const lineProps = getLineProps({ line, key: index });

                return (
                  <CodeLine
                    key={index}
                    highlight={shouldHighlightLine(index)}
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
      </Pre>
    </Wrapper>
  );
}

interface CodeProps {
  metastring?: string;
  className?: string;
  children?: React.ReactNode;
}

interface CodeLineProps {
  highlight: boolean;
}

interface CopyButtonProps {
  copied: boolean;
}

const CopyButton = styled.button<CopyButtonProps>`
  border: none;
  text-decoration: none;
  color: var(--prism-text);
  background-color: var(--prism-highlight);
  position: absolute;
  border-radius: 0.375rem;
  padding: 0.5rem;
  top: 0.75rem;
  right: 0;
  opacity: ${(p) => (p.copied ? 1 : 0.25)};
  font-family: var(--font-monospace);
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
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
  background-color: ${(p) =>
    p.highlight ? 'var(--prism-highlight)' : 'initial'};
  margin: ${(p) => (p.highlight ? '0 -1.5rem' : 'initial')};
  padding: ${(p) => (p.highlight ? '0 calc(1.5rem - 2px)' : 'initial')};
  box-sizing: border-box;
  border-left: solid 2px
    ${(p) => (p.highlight ? 'var(--prism-border)' : 'initial')};
`;

const Wrapper = styled.div`
  position: relative;
`;

const LanguageName = styled.div`
  position: absolute;
  right: 0;
  top: -2rem;
  padding: 0.75rem;
  border-radius: 0.25rem 0.25rem 0 0;
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1rem;
  user-select: none;
  font-family: var(--font-monospace);
  background-color: var(--prism-background);
  color: var(--color-muted);
`;

const Pre = styled.pre`
  margin: 1.75rem -1.5rem;
  overflow: auto;
  border-radius: 0.375rem;
  background-color: var(--prism-background);
`;

const CodeWrapper = styled.code`
  float: left;
  min-width: calc(100% - 3rem);
  padding: 1.5rem;
  font-family: var(--font-monospace);
  & > div:last-of-type {
    height: 0;
  }
`;

export default Code;
