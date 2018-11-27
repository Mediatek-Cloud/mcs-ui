// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ImageDropzone from '.';

storiesOf('ImageDropzone', module)
  .add(
    'API',
    () => <ImageDropzone onDrop={files => action('onDrop')(files)} />,
    {
      info: {
        text: 'default',
        inline: true,
      },
    },
  )
  .add(
    'With children',
    () => (
      <ImageDropzone onDrop={files => action('onDrop')(files)}>
        Drop an image here to upload !
      </ImageDropzone>
    ),
    {
      info: {
        text: 'default',
        inline: true,
      },
    },
  )
  .add(
    'With isLoading',
    () => (
      <ImageDropzone onDrop={files => action('onDrop')(files)} isLoading>
        Drop an image here to upload !
      </ImageDropzone>
    ),
    {
      info: {
        text: 'isLoading',
        inline: true,
      },
    },
  )
  .add(
    'With src',
    () => (
      <ImageDropzone
        onDrop={files => action('onDrop')(files)}
        src="//img.mediatek.com/350/mtk.linkit/productBanner.png"
      >
        Drop an image here to upload !
      </ImageDropzone>
    ),
    {
      info: {
        text: 'src image',
        inline: true,
      },
    },
  );
