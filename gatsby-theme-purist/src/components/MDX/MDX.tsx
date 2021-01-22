import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import Anchor from '../Anchor';
import Blockquote from '../Blockquote';
import Code from '../Code';
import Emphasis from '../Emphasis';
import { H1, H2, H3, H4, H5, H6 } from '../Heading';
import HorizontalRule from '../HorizontalRule';
import InlineCode from '../InlineCode';
import { ListItem, OrderedList, UnorderedList } from '../List';
import Strong from '../Strong';
import { Table, TableData, TableHeader, TableRow } from '../Table';
import Wrapper from '../Wrapper';

const components = {
  h1: (props) => <H1 {...props} />,
  h2: (props) => <H2 {...props} />,
  h3: (props) => <H3 {...props} />,
  h4: (props) => <H4 {...props} />,
  h5: (props) => <H5 {...props} />,
  h6: (props) => <H6 {...props} />,
  blockquote: (props) => <Blockquote {...props} />,
  ul: (props) => <UnorderedList {...props} />,
  ol: (props) => <OrderedList {...props} />,
  li: (props) => <ListItem {...props} />,
  table: (props) => <Table {...props} />,
  tr: (props) => <TableRow {...props} />,
  th: (props) => <TableHeader {...props} />,
  td: (props) => <TableData {...props} />,
  code: (props) => <Code {...props} />,
  em: (props) => <Emphasis {...props} />,
  strong: (props) => <Strong {...props} />,
  inlineCode: (props) => <InlineCode {...props} />,
  hr: (props) => <HorizontalRule {...props} />,
  a: (props) => <Anchor {...props} />,
  wrapper: (props) => <Wrapper {...props} />,
  pre: (props) => <div {...props} />,
};

function MDX({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}

export default MDX;
