// @flow
import * as React from 'react';
import * as R from 'ramda';
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronFirst,
  IconChevronLast,
  IconMoreHoriz,
} from '../Icons';
import { Container } from './styled-components';
import PageLink from './PageLink';
import getPaginationRange from '../utils/getPaginationRange';

export type Props = {
  pages: number, // Total number of pages.
  value: number, // Current page
  onChange: (page: number) => void,
};

const Pagination = ({ pages, value, onChange, ...otherProps }: Props) => {
  const range = React.useMemo(() => getPaginationRange({ pages, value }), [
    pages,
    value,
  ]);
  const isFirstPage = React.useMemo(() => value === 1, [value]);
  const isLastPage = React.useMemo(() => value === pages, [pages, value]);
  const isFirstPageIncluded = React.useMemo(() => R.head(range) === 1, [range]);
  const isLastPageIncluded = React.useMemo(() => R.last(range) === pages, [
    range,
    pages,
  ]);

  return (
    <Container {...otherProps}>
      <PageLink to={1} onClick={onChange} disabled={isFirstPage}>
        <IconChevronFirst height={24} width={24} />
      </PageLink>
      <PageLink to={value - 1} onClick={onChange} disabled={isFirstPage}>
        <IconChevronLeft height={24} width={24} />
      </PageLink>

      {!isFirstPageIncluded && (
        <PageLink to={0} disabled onClick={onChange}>
          <IconMoreHoriz height={24} width={24} />
        </PageLink>
      )}
      {range.map(n => (
        <PageLink key={n} to={n} active={value === n} onClick={onChange}>
          {n}
        </PageLink>
      ))}
      {!isLastPageIncluded && (
        <PageLink to={0} disabled onClick={onChange}>
          <IconMoreHoriz height={24} width={24} />
        </PageLink>
      )}

      <PageLink to={value + 1} onClick={onChange} disabled={isLastPage}>
        <IconChevronRight height={24} width={24} />
      </PageLink>
      <PageLink to={pages} onClick={onChange} disabled={isLastPage}>
        <IconChevronLast height={24} width={24} />
      </PageLink>
    </Container>
  );
};

export default React.memo<Props>(Pagination);
