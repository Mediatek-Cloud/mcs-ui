// @flow
import PropTypes from 'prop-types';
import styled, { type ReactComponentFunctional } from 'styled-components';
import Panel, { type Props as PanelProps } from '../Panel/Panel';
import { type ThemeProps } from '../utils/type.flow';

export const MAX_WIDTH = 618;

export type Props = { width?: number } & PanelProps;
type InnerProps = { width: number } & ThemeProps;

const ResponsivePanel: ReactComponentFunctional<Props> = styled(Panel)`
  max-width: ${({ width }: InnerProps) => width}px;
  margin: auto; /* Note: center by default and top for overflow, ref: https://goo.gl/3i1sSD */

  > header {
    display: flex;
    align-items: center;
    padding-left: 20px;
  }

  > footer {
    display: flex;
    justify-content: center;

    > * + * {
      margin-left: 10px;
    }
  }
`;

ResponsivePanel.displayName = 'ResponsivePanel';
ResponsivePanel.propTypes = {
  width: PropTypes.number,
};
ResponsivePanel.defaultProps = {
  width: MAX_WIDTH,
};

export default ResponsivePanel;
