/* eslint react/no-danger: 0 */
// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

export type Props = {|
  html: string,
|};

const HTML = ({ html }: Props) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

HTML.displayName = 'HTML';
HTML.propTypes = {
  html: PropTypes.string,
};

export default React.memo(HTML);
