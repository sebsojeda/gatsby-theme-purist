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
import { graphql, useStaticQuery } from 'gatsby';
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
  const { site } = useStaticQuery(query);

  return (
    <Wrapper>
      <span>
        &copy; {new Date().getFullYear()} {site.siteMetadata.name}
      </span>
      <IconsWrapper>
        {social.map((data) => (
          <SocialIcon key={data.url} href={data.url}>
            {components[data.name]
              ? components[data.name]({ height: '20' })
              : components.default({ height: '20' })}
          </SocialIcon>
        ))}
      </IconsWrapper>
    </Wrapper>
  );
}

const query = graphql`
  query {
    site {
      siteMetadata {
        name
      }
    }
  }
`;

interface FooterProps {
  social: { name: string; url: string }[];
}

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4.5rem;
  & > * + * {
    margin-left: 1.5rem;
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

const Wrapper = styled.footer`
  border-top: 1px solid var(--color-muted);
  font-size: 1.125rem;
  line-height: 1.75rem;
  padding: 4rem 0 5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  color: var(--color-muted);
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - 3rem);
  max-width: 65rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export default Footer;
