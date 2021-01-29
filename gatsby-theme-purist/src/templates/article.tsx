import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Img, { GatsbyImageProps } from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { useRef } from 'react';
import ArticleDiscovery from '../components/ArticleDiscovery';
import Layout from '../components/Layout';
import Popover from '../components/Popover';
import SEO from '../components/SEO';

function Article({ data, pageContext }) {
  const { body, timeToRead, frontmatter } = data.mdx;
  const hasMorePosts = pageContext.previous || pageContext.next;
  const selectionRef = useRef(null);

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
        <TitleImage fluid={frontmatter.featuredImage?.childImageSharp.fluid} />
      </TitleWrapper>
      <div ref={selectionRef}>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      <Popover selectionRef={selectionRef} />
      {hasMorePosts && (
        <ArticleDiscovery
          previous={pageContext.previous}
          next={pageContext.next}
        />
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
        date(formatString: "MMMM Do, YYYY")
        title
        featuredImage {
          childImageSharp {
            fluid(quality: 100) {
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
  margin-bottom: 5rem;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-family: var(--font-serif);
  @media (min-width: 768px) {
    font-size: 3rem;
    line-height: 3.5rem;
  }
`;

const Subtitle = styled.div`
  padding-top: 1.25rem;
  margin-bottom: 8rem;
  color: var(--color-muted);
`;

const TitleImage = styled(Img)<GatsbyImageProps>`
  object-fit: cover;
  width: 100%;
  max-height: 45rem;
  margin: 0 auto;
`;

export default Article;
