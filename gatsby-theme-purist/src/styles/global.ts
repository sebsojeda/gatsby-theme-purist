import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const global = css`
  ${emotionReset}

  /*
   * Set global styles
   */
  body {
    transition: color 0.2s ease-in-out;
    transition: background-color 0.2s ease-in-out;
    color: var(--color-text);
    background-color: var(--color-background);
    font-family: var(--font-sans);
  }
  .footnotes ol {
    margin: 2.5rem 0;
  }
  .footnote-ref {
    vertical-align: super;
    font-size: 1rem;
  }

  /*
   * Fix syntax line highlighting
   * see https://github.com/FormidableLabs/prism-react-renderer
   */
  .gatsby-highlight {
    margin: 1.75rem 0;
    overflow: auto;
    border-radius: 0.375rem;
  }

  /*
   * Fix box shadow for images
   * see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-image
   */
  .gatsby-resp-image-background-image,
  .gatsby-resp-image-image,
  .gatsby-resp-image-link {
    border-radius: 0.375rem;
    &:hover {
      box-shadow: none !important;
    }
  }
  .gatsby-image-wrapper {
    border-radius: 0.375rem;
    box-shadow: 0 7px 18px var(--color-hover);
  }

  /*
   * Custom header anchor styles
   * see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-autolink-headers
   */
  .anchor {
    color: var(--color-text) !important;
    padding: 0 0.25rem;
    &:hover {
      box-shadow: none !important;
    }
  }
`;

export default global;
