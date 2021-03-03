import { graphql, useStaticQuery } from 'gatsby';
import rangeParser from 'parse-numeric-range';

function copyToClipboard(text: string) {
  const textarea = document.createElement('textarea');

  textarea.value = text;
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';

  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand('copy');

  document.body.removeChild(textarea);
}

function calculateLinesToHighlight(meta: string) {
  const regex = /{([\d,-]+)}/;

  if (!regex.test(meta)) {
    return () => false;
  }

  const lineNumbers = rangeParser(regex.exec(meta)[1]);
  return (index: number) => lineNumbers.includes(index + 1);
}

function kebabCase(str: string) {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g)
    .filter(Boolean)
    .map((x) => x.toLowerCase())
    .join('-');
}

function useBasePath() {
  const data = useStaticQuery(graphql`
    query {
      allSitePlugin(filter: { name: { eq: "gatsby-theme-purist" } }) {
        nodes {
          pluginOptions {
            basePath
          }
        }
      }
    }
  `);

  return data.allSitePlugin.nodes[0]?.pluginOptions?.basePath || '/';
}

export { copyToClipboard, calculateLinesToHighlight, kebabCase, useBasePath };
