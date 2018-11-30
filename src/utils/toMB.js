// @flow
import roundTo from 'round-to';

// Note: 1 Byte = 0.000001 MB
const toMB = (fileSize: number): string =>
  `${roundTo(parseInt(fileSize, 10) / 1000 / 1000, 2)}MB`;

export default toMB;
