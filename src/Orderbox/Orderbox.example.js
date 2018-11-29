// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Orderbox from '.';

class StatefulOrderbox extends React.PureComponent<any, { value: number }> {
  state = { value: 9 };

  onClick = () => {
    const { value } = this.state;

    this.setState({
      value: value === -1 ? 9 : -1,
    });
  };

  render() {
    const { value } = this.state;
    const { onClick } = this;

    return <Orderbox value={value} onClick={onClick} {...this.props} />;
  }
}

storiesOf('Orderbox', module)
  .add(
    'API',
    () => (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {[-1, 0.1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 50, 99, 100].map(value => (
          <Orderbox key={value} value={value} />
        ))}
      </div>
    ),
    {
      info: {
        text:
          'Controlled API with values: `-1, 0.1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 50, 99, 100`',
        inline: true,
      },
    },
  )
  .add('With state', () => <StatefulOrderbox />, {
    info: {
      text: 'default',
      inline: true,
    },
  })
  .add(
    'With size',
    () => <StatefulOrderbox size={24} style={{ fontSize: 14 }} />,
    {
      info: {
        text: 'default',
        inline: true,
      },
    },
  )
  .add(
    'With kind',
    () => (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <StatefulOrderbox kind="default" /> default
        <StatefulOrderbox kind="primary" /> primary
        <StatefulOrderbox kind="success" /> success
        <StatefulOrderbox kind="error" /> error
        <StatefulOrderbox kind="warning" /> warning
      </div>
    ),
    {
      info: {
        text: 'different color',
        inline: true,
      },
    },
  );
