// @flow
import toMB from '../toMB';

it('should return corrent toMB', () => {
  expect(toMB(1000)).toBe('0MB');
  expect(toMB(1000000)).toBe('1MB');
  expect(toMB(1450000)).toBe('1.45MB');
  expect(toMB(1454000)).toBe('1.45MB');
  expect(toMB(1455000)).toBe('1.46MB');
});
