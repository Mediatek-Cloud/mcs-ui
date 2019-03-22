// @flow
import * as R from 'ramda';

const getPaginationRange = ({
  pages,
  value,
}: {
  pages: number,
  value: number,
}): Array<number> => {
  if (pages <= 5) {
    return R.range(1, pages + 1);
  }

  // Note: get neighborhood
  const range = R.range(value - 2, value + 2 + 1);

  const head = range[0];
  if (head <= 0) {
    return range.map(n => n - head + 1);
  }

  const last = range[range.length - 1];
  if (last > pages) {
    const diff = last - pages;
    return range.map(n => n - diff);
  }

  return range;
};

export default getPaginationRange;
