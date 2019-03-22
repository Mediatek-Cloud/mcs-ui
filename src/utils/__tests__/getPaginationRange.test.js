// @flow
import getPaginationRange from '../getPaginationRange';

it('should return correct range', () => {
  expect(getPaginationRange({ pages: 1, value: 1 })).toMatchInlineSnapshot(`
Array [
  1,
]
`);

  expect(getPaginationRange({ pages: 2, value: 1 })).toMatchInlineSnapshot(`
Array [
  1,
  2,
]
`);
  expect(getPaginationRange({ pages: 2, value: 2 })).toMatchInlineSnapshot(`
Array [
  1,
  2,
]
`);

  expect(getPaginationRange({ pages: 5, value: 1 })).toMatchInlineSnapshot(`
Array [
  1,
  2,
  3,
  4,
  5,
]
`);
  expect(getPaginationRange({ pages: 5, value: 2 })).toMatchInlineSnapshot(`
Array [
  1,
  2,
  3,
  4,
  5,
]
`);
  expect(getPaginationRange({ pages: 5, value: 3 })).toMatchInlineSnapshot(`
Array [
  1,
  2,
  3,
  4,
  5,
]
`);
  expect(getPaginationRange({ pages: 5, value: 4 })).toMatchInlineSnapshot(`
Array [
  1,
  2,
  3,
  4,
  5,
]
`);
  expect(getPaginationRange({ pages: 5, value: 5 })).toMatchInlineSnapshot(`
Array [
  1,
  2,
  3,
  4,
  5,
]
`);

  expect(getPaginationRange({ pages: 10, value: 1 })).toMatchInlineSnapshot(`
Array [
  1,
  2,
  3,
  4,
  5,
]
`);
  expect(getPaginationRange({ pages: 10, value: 3 })).toMatchInlineSnapshot(`
Array [
  1,
  2,
  3,
  4,
  5,
]
`);
  expect(getPaginationRange({ pages: 10, value: 4 })).toMatchInlineSnapshot(`
Array [
  2,
  3,
  4,
  5,
  6,
]
`);
  expect(getPaginationRange({ pages: 10, value: 7 })).toMatchInlineSnapshot(`
Array [
  5,
  6,
  7,
  8,
  9,
]
`);
  expect(getPaginationRange({ pages: 10, value: 10 })).toMatchInlineSnapshot(`
Array [
  6,
  7,
  8,
  9,
  10,
]
`);
});
