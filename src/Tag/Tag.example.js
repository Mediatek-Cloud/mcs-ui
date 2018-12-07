// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Tag from '.';

const TagWrapper: React.ComponentType<*> = styled.div`
  > * + * {
    margin-left: 5px;
  }
`;

storiesOf('Tag', module)
  .add('API', () => <Tag>common</Tag>, {
    info: {
      text: '',
      inline: true,
      source: false,
    },
  })
  .add(
    'multiple tags',
    () => (
      <TagWrapper>
        <Tag>common</Tag>
        <Tag>p80</Tag>
      </TagWrapper>
    ),
    {
      info: {
        text: '',
        inline: true,
        source: false,
      },
    },
  );
