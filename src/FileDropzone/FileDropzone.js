// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dnd-dropzone';
import InputFiles from 'react-input-files';
import Spin from '../Spin';
import A from '../A';
import P from '../P';
import { IconLoading, IconDone, IconFileOutline } from '../Icons';
import useSubmittingState from '../hooks/useSubmittingState';
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
  placeholder: string,
  browse: string,
  dot: string,
  accept: string,
  height: number,
};

const HEIGHT: number = 120;

const FileDropzone = ({
  value,
  onFileChange,
  placeholder,
  browse,
  dot,
  accept,
  height,
}: Props) => {
  const { isSubmitting, setSubmitting } = useSubmittingState();
  const onFileChangeMemo = React.useCallback(
    ([file]: Array<File>) => {
      onFileChange(file, setSubmitting);
    },
    [onFileChange, setSubmitting],
  );

  return (
    <React.Fragment>
      <Dropzone
        onDrop={onFileChangeMemo}
        render={({ canDrop }) => (
          <Container canDrop={canDrop} height={height}>
            <div>
              {placeholder}
              <InputFiles onChange={onFileChangeMemo} accept={accept}>
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
};

FileDropzone.displayName = 'FileDropzone';
FileDropzone.propTypes = {
  value: PropTypes.shape({
    name: PropTypes.string,
    size: PropTypes.number,
  }),
  onFileChange: PropTypes.func.isRequired, // (File, setSubmitting: SetSubmitting) => void | Promise<void>
  placeholder: PropTypes.string,
  browse: PropTypes.string,
  dot: PropTypes.string,
  accept: PropTypes.string,
  height: PropTypes.number,
};
FileDropzone.defaultProps = {
  placeholder: 'Drag & drop your file here or ',
  browse: 'browse',
  dot: '.',
  accept: '*',
  height: HEIGHT,
};

export default FileDropzone;
