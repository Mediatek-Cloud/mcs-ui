// @flow
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { type ThemeProps } from '../utils/type.flow';

export type Props = { required?: boolean };
type InnerProps = { required?: boolean } & ThemeProps;

const Label: React.ComponentType<Props> = styled.label`
  &::after {
    content: "${({ required }: InnerProps) => (required ? '*' : '')}";
    margin-left: ${({ required }: InnerProps) => (required ? '0.25em' : '0')};
    color: ${({ theme }: InnerProps) => theme.color.error};
  }
`;

Label.displayName = 'Label';
Label.propTypes = {
  required: PropTypes.bool,
};

export default Label;
