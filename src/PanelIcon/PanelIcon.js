// @flow
import styled from 'styled-components';
import { type ThemeProps } from '../utils/type.flow';

const PanelIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }: ThemeProps) => theme.height.header};
  height: ${({ theme }: ThemeProps) => theme.height.header};
  background-color: ${({ theme }: ThemeProps) => theme.color.primary};
  border-radius: 3px;
  font-size: 24px;
  color: ${({ theme }: ThemeProps) => theme.color.white};

  > svg {
    fill: ${({ theme }: ThemeProps) => theme.color.white};
  }
`;
PanelIcon.displayName = 'PanelIcon';

export default PanelIcon;
