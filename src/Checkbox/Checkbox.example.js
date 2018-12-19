// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import theme from '../utils/theme';
import { IconPlay } from '../Icons';
import IconCheck from '../IconCheck';
import Checkbox from '.';

class StatefulCheckbox extends React.PureComponent<any, { value: boolean }> {
  state = { value: true };

  onClick = () => {
    this.setState(({ value }) => ({ value: !value }));
  };

  render() {
    const { value } = this.state;
    const { onClick } = this;

    return <Checkbox value={value} onClick={onClick} {...this.props} />;
  }
}

storiesOf('Checkbox', module)
  .add(
    'API',
    () => (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Checkbox value />
        <Checkbox value={false} />
      </div>
    ),
    {
      info: {
        text: 'Controlled API',
        inline: true,
        source: false,
      },
    },
  )
  .add('With state', () => <StatefulCheckbox />, {
    info: {
      text: '',
      inline: true,
      source: false,
      propTables: [Checkbox],
    },
  })
  .add(
    'With size props',
    () => (
      <StatefulCheckbox
        size={24}
        render={(value: boolean): React.Node =>
          value ? <IconCheck width={14} height={14} /> : null
        }
      />
    ),
    {
      info: {
        text: 'custom size',
        inline: true,
        source: false,
        propTables: [Checkbox],
      },
    },
  )
  .add(
    'With kind props',
    () => (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <StatefulCheckbox kind="default" /> default
        <StatefulCheckbox kind="primary" /> primary
        <StatefulCheckbox kind="success" /> success
        <StatefulCheckbox kind="error" /> error
        <StatefulCheckbox kind="warning" /> warning
      </div>
    ),
    {
      info: {
        text: 'custom color',
        inline: true,
        source: false,
        propTables: [Checkbox],
      },
    },
  )
  .add(
    'With custom theme color for kind props',
    () => (
      <ThemeProvider
        theme={{
          ...theme,
          color: {
            ...theme.color,
            '#9056ff': '#9056ff',
            '#1576af': '#1576af',
            '#ab6a32': '#ab6a32',
          },
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <StatefulCheckbox kind="default" /> default
          <StatefulCheckbox kind="primary" /> primary
          <StatefulCheckbox kind="success" /> success
          <StatefulCheckbox kind="error" /> error
          <StatefulCheckbox kind="#9056ff" /> #9056ff
          <StatefulCheckbox kind="#1576af" /> #1576af
          <StatefulCheckbox kind="#ab6a32" /> #ab6a32
        </div>
      </ThemeProvider>
    ),
    {
      info: {
        text: 'custom color',
        inline: true,
        source: false,
        propTables: [Checkbox],
      },
    },
  )
  .add(
    'With render props',
    () => (
      <React.Fragment>
        <StatefulCheckbox
          render={(value: boolean): React.Node => (value ? <IconPlay /> : null)}
        />
        <StatefulCheckbox
          render={(value: boolean): React.Node => (value ? '好' : null)}
        />
        <StatefulCheckbox
          render={(value: boolean): React.Node => (value ? 'a' : null)}
        />
        <StatefulCheckbox
          render={(value: boolean): React.Node => (value ? '3' : null)}
        />
      </React.Fragment>
    ),
    {
      info: {
        text: 'custom icon',
        inline: true,
        source: false,
        propTables: [Checkbox],
      },
    },
  )
  .add(
    'With disabled props',
    () => (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <StatefulCheckbox kind="default" disabled /> default
          <StatefulCheckbox kind="primary" disabled /> primary
          <StatefulCheckbox kind="success" disabled /> success
          <StatefulCheckbox kind="error" disabled /> error
          <Checkbox value={false} disabled onClick={action('onClick')} />
          unchecked
        </React.Fragment>
      </ThemeProvider>
    ),
    {
      info: {
        text: 'custom icon',
        inline: true,
        source: false,
        propTables: [Checkbox],
      },
    },
  );
