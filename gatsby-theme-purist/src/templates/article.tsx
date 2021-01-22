import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Img, { GatsbyImageProps } from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import ArticleDiscovery from '../components/ArticleDiscovery';
import HorizontalRule from '../components/HorizontalRule';
import Layout from '../components/Layout';
import Popover from '../components/Popover';
import SEO from '../components/SEO';
import fonts from '../themes/fonts';

function Article({ data, pageContext }) {
  const { body, timeToRead, frontmatter } = data.mdx;
  const hasMorePosts = pageContext.previous || pageContext.next;

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        image={frontmatter.featuredImage?.childImageSharp.fluid.src}
        description={frontmatter.title}
      />
      <TitleWrapper>
        <Title>{frontmatter.title}</Title>
        <Subtitle>
          {frontmatter.date} &middot; {timeToRead} min read
        </Subtitle>
        <HorizontalRule />
        <TitleImage fluid={frontmatter.featuredImage?.childImageSharp.fluid} />
      </TitleWrapper>
      <Popover>
        <MDXRenderer>{body}</MDXRenderer>
      </Popover>
      {hasMorePosts && (
        <React.Fragment>
          <HorizontalRule />
          <ArticleDiscovery
            previous={pageContext.previous}
            next={pageContext.next}
          />
        </React.Fragment>
      )}
    </Layout>
  );
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const TitleWrapper = styled.div`
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 5rem;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-family: ${fonts.serif};
`;

const Subtitle = styled.div`
  margin-top: 1.25rem;
  margin-bottom: 5rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: var(--color-muted);
`;

const TitleImage = styled(Img)<GatsbyImageProps>`
  object-fit: cover;
  margin-top: 5rem;
  max-height: 40rem;
  border-radius: 0.375rem;
`;

export default Article;
