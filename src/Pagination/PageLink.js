// @flow
import * as React from 'react';
import styled from 'styled-components';
import { darken2, darken3 } from '../utils/darken';
import { type ThemeProps } from '../utils/type.flow';

export type Props = {
  to: number,
  onClick: number => void,
  disabled?: boolean,
  active?: boolean,
};
export type SquareButtonTextProps = {
  disabled: boolean,
  active: boolean,
};

export const SquareButtonText: React.ComponentType<SquareButtonTextProps> = styled.div`
  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ active, theme }: SquareButtonTextProps & ThemeProps) =>
    active ? darken3(theme.color.primary) : 'transparent'};
  transition: border-color cubic-bezier(0.47, 0, 0.75, 0.72) 0.3s;
  background-color: ${({ active, theme }: SquareButtonTextProps & ThemeProps) =>
    active ? darken2(theme.color.primary) : 'unset'};
  color: ${({
    active,
    disabled,
    theme,
  }: SquareButtonTextProps & ThemeProps) => {
    if (disabled) return theme.color.grayBase;
    if (active) return theme.color.white;
    return theme.color.primary;
  }};
  cursor: ${({ disabled }: SquareButtonTextProps & ThemeProps) =>
    disabled ? 'unset' : 'pointer'};

  &:hover {
    border-color: ${({
      active,
      disabled,
      theme,
    }: SquareButtonTextProps & ThemeProps) => {
      if (disabled) return 'transparent';
      if (active) return darken3(theme.color.primary);
      return theme.color.primary;
    }};
  }
`;

const PageLink = ({
  to,
  onClick,
  disabled = false,
  active = false,
  ...otherProps
}: Props) => {
  const onClickableClick = React.useCallback(() => {
    if (!disabled) {
      onClick(to);
    }
  });

  return (
    <SquareButtonText
      {...otherProps}
      disabled={disabled}
      onClick={onClickableClick}
      active={active}
    />
  );
};

export default React.memo<Props>(PageLink);
