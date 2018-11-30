// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { compose, pure } from 'recompose';
import Dropzone from 'react-dnd-dropzone';
import InputFiles from 'react-input-files';
import Spin from '../Spin';
import A from '../A';
import P from '../P';
import { IconLoading, IconDone, IconFileOutline } from '../Icons';
import withSubmittingState, {
  type InjectedProps as WithSubmittingStateInjectedProps,
} from '../HoCs/withSubmittingState';
import { type SetSubmitting } from '../utils/type.flow';
import toMB from '../utils/toMB';
import {
  Container,
  FileNameDisplay,
  FileLoadingIcon,
  TextOverflow,
} from './styled-components';

export type Props = {
  value: ?File,
  onFileChange: (File, setSubmitting: SetSubmitting) => void | Promise<void>,
  placeholder?: string,
  browse?: string,
  dot?: string,
  accept?: string,
};
type InnerProps = Props & WithSubmittingStateInjectedProps;

export class PureFileDropzone extends React.PureComponent<InnerProps> {
  static propTypes = {
    value: PropTypes.shape({
      name: PropTypes.string,
      size: PropTypes.number,
    }),
    onFileChange: PropTypes.func.isRequired, // (File, setSubmitting: SetSubmitting) => void | Promise<void>
    placeholder: PropTypes.string,
    browse: PropTypes.string,
    dot: PropTypes.string,
    accept: PropTypes.string,
  };

  static defaultProps = {
    placeholder: 'Drag & drop your file here or ',
    browse: 'browse',
    dot: '.',
    accept: '*',
  };

  onFileChange = ([file]: Array<File>) => {
    const { onFileChange, setSubmitting } = this.props;
    onFileChange(file, setSubmitting);
  };

  render() {
    const {
      value,
      isSubmitting,
      placeholder,
      browse,
      dot,
      accept,
    } = this.props;
    const { onFileChange } = this;

    return (
      <React.Fragment>
        <Dropzone
          onDrop={onFileChange}
          render={({ canDrop }) => (
            <Container canDrop={canDrop}>
              <div>
                {placeholder}
                <InputFiles onChange={onFileChange} accept={accept}>
                  <A>{browse}</A>
                </InputFiles>
                {dot}
              </div>
            </Container>
          )}
        />

        {value && (
          <FileNameDisplay>
            <div>
              <IconFileOutline width={18} height={18} />
              <TextOverflow>{value.name}</TextOverflow>
            </div>
            <div>
              <P color="grayDark">{toMB(value.size)}</P>
              <FileLoadingIcon isLoading={isSubmitting}>
                {isSubmitting ? (
                  <Spin>
                    <IconLoading width={18} height={18} />
                  </Spin>
                ) : (
                  <IconDone width={18} height={18} />
                )}
              </FileLoadingIcon>
            </div>
          </FileNameDisplay>
        )}
      </React.Fragment>
    );
  }
}

const enhance = compose(
  pure,
  withSubmittingState,
);
const FileDropzone: React.ComponentType<Props> = enhance(PureFileDropzone);
FileDropzone.displayName = 'FileDropzone';

export default FileDropzone;
