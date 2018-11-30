// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FileDropzone from '.';

class StatefulFileDropzone extends React.PureComponent<*, { file: ?File }> {
  state = { file: null };

  componentWillUnmount() {
    if (this.timeoutID) clearTimeout(this.timeoutID);
  }

  onFileChange = (file, setFileUploading) => {
    this.setState({ file });
    action('onFileChange')(file);

    setFileUploading(true);
    this.timeoutID = setTimeout(() => {
      setFileUploading(false);
    }, 2000);
  };

  timeoutID: TimeoutID;

  render() {
    const { file } = this.state;
    const { onFileChange } = this;

    return <FileDropzone value={file} onFileChange={onFileChange} />;
  }
}

storiesOf('FileDropzone', module)
  .add(
    'API',
    () => <FileDropzone value={null} onFileChange={action('onFileChange')} />,
    {
      info: {
        text: 'default',
        inline: true,
      },
    },
  )
  .add(
    'With custom text',
    () => (
      <FileDropzone
        value={null}
        onFileChange={action('onFileChange')}
        placeholder="請選擇您的檔案"
        browse="瀏覽"
        dot="。"
        accept="*"
      />
    ),
    {
      info: {
        text: 'default',
        inline: true,
      },
    },
  )
  .add(
    'With file value',
    () => (
      <FileDropzone
        // $FlowFixMe
        value={{
          name: 'text.txt',
          size: 12000,
        }}
        onFileChange={action('onFileChange')}
      />
    ),
    {
      info: {
        text: 'default',
        inline: true,
      },
    },
  )
  .add('With state', () => <StatefulFileDropzone />, {
    info: {
      text: 'default',
      inline: true,
    },
  });
