import styled from '@emotion/styled';
import React from 'react';

export function Table({ children }) {
  return (
    <TableWrapper>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </TableWrapper>
  );
}

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const ChildrenWrapper = styled.table`
  margin: 0 auto;
`;

export const TableHeader = styled.th`
  padding: 0.5rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--color-muted);
    opacity: 0.15;
    box-sizing: border-box;
    top: 0;
    left: 0;
    z-index: -999;
  }
`;

export const TableData = styled.td`
  padding: 0.75rem;
`;

export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: var(--color-gray);
  }
`;
