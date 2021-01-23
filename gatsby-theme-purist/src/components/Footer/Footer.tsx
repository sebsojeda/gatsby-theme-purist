import styled from '@emotion/styled';
import React from 'react';
import Anchor from '../Anchor';
import HorizontalRule from '../HorizontalRule';

function Footer({ social }: FooterProps) {
  return (
    <React.Fragment>
      <HorizontalRule />
      <FooterWrapper>
        <span>&lt;/&gt; with ❤</span>
        {social.map((data) => (
          <React.Fragment key={data.url}>
            <span>&nbsp;&middot;&nbsp;</span>
            <Anchor key={data.name} href={data.url} muted>
              {data.name}
            </Anchor>
          </React.Fragment>
        ))}
      </FooterWrapper>
    </React.Fragment>
  );
}

interface FooterProps {
  social: { name: string; url: string }[];
}

const FooterWrapper = styled.footer`
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin: 2.5rem auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: var(--color-muted);
`;

export default Footer;
