/* eslint react/no-danger: 0 */
// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { compose, pure } from 'recompose';

export type Props = {|
  html: string,
|};

const PureHTML = ({ html }: Props) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

const enhance = compose(pure);
const HTML: React.ComponentType<Props> = enhance(PureHTML);
HTML.displayName = 'HTML';
HTML.propTypes = {
  html: PropTypes.string,
};

export default HTML;
