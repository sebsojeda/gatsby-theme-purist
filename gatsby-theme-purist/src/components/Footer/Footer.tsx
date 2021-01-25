import {
  Behance,
  Codepen,
  DevTo,
  Discord,
  Dribbble,
  Facebook,
  Flickr,
  Github,
  Instagram,
  Linkedin,
  Medium,
  Patreon,
  Paypal,
  Reddit,
  Snapchat,
  StackOverflow,
  Tumblr,
  Twitch,
  Twitter,
  Unsplash,
  Youtube,
} from '@emotion-icons/boxicons-logos';
import { Globe } from '@emotion-icons/boxicons-regular';
import styled from '@emotion/styled';
import React from 'react';

const components = {
  behance: (props) => <Behance {...props} />,
  codePen: (props) => <Codepen {...props} />,
  devTo: (props) => <DevTo {...props} />,
  discord: (props) => <Discord {...props} />,
  dribble: (props) => <Dribbble {...props} />,
  facebook: (props) => <Facebook {...props} />,
  flickr: (props) => <Flickr {...props} />,
  github: (props) => <Github {...props} />,
  instagram: (props) => <Instagram {...props} />,
  linkedin: (props) => <Linkedin {...props} />,
  medium: (props) => <Medium {...props} />,
  patreon: (props) => <Patreon {...props} />,
  paypal: (props) => <Paypal {...props} />,
  reddit: (props) => <Reddit {...props} />,
  snapchat: (props) => <Snapchat {...props} />,
  stackOverflow: (props) => <StackOverflow {...props} />,
  tumblr: (props) => <Tumblr {...props} />,
  twitch: (props) => <Twitch {...props} />,
  twitter: (props) => <Twitter {...props} />,
  unsplash: (props) => <Unsplash {...props} />,
  youtube: (props) => <Youtube {...props} />,
  default: (props) => <Globe {...props} />,
};

function Footer({ social }: FooterProps) {
  return (
    <FooterWrapper>
      <span>&copy; {new Date().getFullYear()}</span>
      <IconsWrapper>
        {social.map((data) => (
          <React.Fragment key={data.url}>
            <SocialIcon key={data.url} href={data.url}>
              {components[data.name]
                ? components[data.name]({ height: '1.25rem' })
                : components.default({ height: '1.25rem' })}
            </SocialIcon>
          </React.Fragment>
        ))}
      </IconsWrapper>
    </FooterWrapper>
  );
}

interface FooterProps {
  social: { name: string; url: string }[];
}

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4.5rem;
  & > * {
    margin-left: 1.5rem;
    &:first-of-type {
      margin-left: 0;
    }
  }
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const SocialIcon = styled.a`
  color: var(--color-muted);
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: var(--color-text);
  }
`;

const FooterWrapper = styled.footer`
  border-top: 1px solid var(--color-muted);
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin: 0 auto 5rem auto;
  padding-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  color: var(--color-muted);
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export default Footer;
