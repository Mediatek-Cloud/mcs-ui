// @flow
import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import theme from '../utils/theme';
import StatusLight from '.';

const StyledStatusLight = styled(StatusLight)`
  width: 100px;
`;

storiesOf('StatusLight', module)
  .add('API', () => <StatusLight />, {
    info: {
      text: 'default',
      inline: true,
    },
  })
  .add(
    'With color props',
    () => (
      <div>
        {Object.keys(theme.color).map(key => (
          <div key={key}>
            <StatusLight color={key} />
            {key}
          </div>
        ))}
      </div>
    ),
    {
      info: {
        text: '',
        inline: true,
      },
    },
  )
  .add('Custom width', () => <StyledStatusLight color="warning" />, {
    info: {
      text: 'With width: 100px',
      inline: true,
    },
  });
