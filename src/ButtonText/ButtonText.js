// @flow
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { type ThemeProps, type ComponentType } from '../utils/type.flow';

export type Props = {
  active?: boolean,
};
type InnerProps = {
  active: boolean,
} & ThemeProps;

const ButtonText: ComponentType<Props> = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0 5px;
  height: ${({ theme }: InnerProps) => theme.height.small};
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  transition: border-color cubic-bezier(0.47, 0, 0.75, 0.72) 0.3s;
  background-color: ${({ active, theme }: InnerProps) =>
    active ? theme.color.primary : 'unset'};
  color: ${({ active, theme }: InnerProps) =>
    active ? theme.color.white : theme.color.primary};
  cursor: pointer;

  &:hover {
    border-color: ${({ active, theme }: InnerProps) =>
      active ? 'transparent' : theme.color.grayBase};
  }
`;
ButtonText.displayName = 'ButtonText';
ButtonText.propTypes = {
  active: PropTypes.bool,
};

export default ButtonText;
