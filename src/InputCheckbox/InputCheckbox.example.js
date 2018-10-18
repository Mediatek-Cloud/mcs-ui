// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import InputCheckbox from '.';
import Checkbox from '../Checkbox';

class StatefulInputCheckbox extends React.Component<any, { value: boolean }> {
  state = { value: true };

  onChange = (value: boolean) => this.setState(() => ({ value }));

  render() {
    const { value } = this.state;
    const { onChange } = this;

    return <InputCheckbox value={value} onChange={onChange} {...this.props} />;
  }
}

storiesOf('InputCheckbox', module)
  .add(
    'API',
    () => (
      <InputCheckbox value onChange={action('onChange')}>
        Check it
      </InputCheckbox>
    ),
    {
      info: {
        text: 'Controlled API',
        inline: true,
      },
    },
  )
  .add(
    'With state',
    () => (
      <StatefulInputCheckbox>
        Display the device image on scene
      </StatefulInputCheckbox>
    ),
    {
      info: {
        text: '',
        inline: true,
        propTables: [InputCheckbox],
      },
    },
  )
  .add('Without children', () => <StatefulInputCheckbox />, {
    info: {
      text: '',
      inline: true,
    },
  })
  .add(
    'Pass props to Checkbox',
    () => (
      <StatefulInputCheckbox render={value => (value ? 5 : null)}>
        Display the device image on scene
      </StatefulInputCheckbox>
    ),
    {
      info: {
        text: '',
        inline: true,
        propTables: [InputCheckbox, Checkbox],
      },
    },
  )
  .add(
    'With kind props',
    () => (
      <InputCheckbox value onChange={action('onChange')} kind="error">
        Check it
      </InputCheckbox>
    ),
    {
      info: {
        text: '',
        inline: true,
        propTables: [InputCheckbox, Checkbox],
      },
    },
  );
