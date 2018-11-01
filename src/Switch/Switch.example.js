// @flow
import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { kind as themeKind } from '../utils/theme';
import { type Props } from './Switch';
import Switch from '.';

const withState = Component =>
  class WithStateComponent extends React.Component<
    Props,
    { checked: boolean },
  > {
    state = { checked: false };

    onClick = () => {
      action('click');

      this.setState(({ checked }) => ({ checked: !checked }));
    };

    render() {
      const { checked } = this.state;
      return (
        <Component {...this.props} onClick={this.onClick} checked={checked} />
      );
    }
  };

const StyledSwitch = withState(
  styled(Switch)`
    background-color: ${({ checked }: Props) =>
      checked ? 'steelblue' : 'aliceblue'};

    &::after {
      background-color: ${({ checked }: Props) =>
        checked ? 'aliceblue' : 'cornflowerblue'};
    }
  `,
);

const ScaledSwitch = withState(
  styled(Switch)`
    transform: scale(0.48);
  `,
);

storiesOf('Switch', module)
  .add(
    'API',
    () => (
      <div>
        <Switch />
        <Switch checked />
      </div>
    ),
    {
      info: {
        text: 'Switch is a controlled component.',
        inline: true,
      },
    },
  )
  .add(
    'With kind props',
    () => (
      <div>
        {Object.keys(themeKind).map(kind => (
          <Switch key={kind} checked kind={kind} />
        ))}
      </div>
    ),
    {
      info: {
        text: 'kind="primary"',
        inline: true,
      },
    },
  )
  .add(
    'Stateful switch',
    () => {
      const Simple = withState(Switch);
      return <Simple />;
    },
    {
      info: {
        text: 'Control switch with state',
        inline: true,
        propTables: false,
      },
    },
  )
  .add('Overriding style', () => <StyledSwitch />, {
    info: {
      text: 'Override CSS using styled-components',
      inline: true,
      propTables: false,
    },
  })
  .add('With scaling', () => <ScaledSwitch kind="primary" />, {
    info: {
      text: 'transform: scale(0.48) for mobile',
      inline: true,
      propTables: false,
    },
  });
