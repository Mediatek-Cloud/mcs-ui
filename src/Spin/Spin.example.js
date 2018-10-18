// @flow
import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Spin from '.';

const ContentWrapper: React.ComponentType<*> = styled.div`
  display: inline-block;
`;

storiesOf('Spin', module).add(
  'API',
  () => (
    <Spin>
      <ContentWrapper>Content</ContentWrapper>
    </Spin>
  ),
  {
    info: {
      text: `Content with display: inline-block;
  SVG Icon 請使用偶數（Safari）
`,
      inline: true,
      source: false,
    },
  },
);
