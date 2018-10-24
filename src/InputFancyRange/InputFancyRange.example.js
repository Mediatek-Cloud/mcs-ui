// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import InputFancyRange from '.';

class StatefulInputFancyRange extends React.Component<{}, { value: number }> {
  state = { value: 2 };

  onChange = (e: any) => this.setState({ value: parseFloat(e.target.value) });

  render() {
    const { value } = this.state;
    const { onChange } = this;

    return (
      <InputFancyRange
        value={value}
        min={1}
        max={10}
        step={0.1}
        onChange={onChange}
      />
    );
  }
}

storiesOf('InputFancyRange', module)
  .add(
    'API',
    () => (
      <React.Fragment>
        MAX: min=0 max=100
        <InputFancyRange value={0} min={0} max={100} readOnly />
        <InputFancyRange value={10} min={0} max={100} readOnly />
        <InputFancyRange value={20} min={0} max={100} readOnly />
        <InputFancyRange value={30} min={0} max={100} readOnly />
        <InputFancyRange value={40} min={0} max={100} readOnly />
        <InputFancyRange value={50} min={0} max={100} readOnly />
        <InputFancyRange value={60} min={0} max={100} readOnly />
        <InputFancyRange value={70} min={0} max={100} readOnly />
        <InputFancyRange value={80} min={0} max={100} readOnly />
        <InputFancyRange value={90} min={0} max={100} readOnly />
        <InputFancyRange value={100} min={0} max={100} readOnly />
        MAX: min=1 max=10 step=0.1
        <InputFancyRange value={1} min={1} max={10} step={0.1} readOnly />
        <InputFancyRange value={2} min={1} max={10} step={0.1} readOnly />
        <InputFancyRange value={3} min={1} max={10} step={0.1} readOnly />
        <InputFancyRange value={4} min={1} max={10} step={0.1} readOnly />
        <InputFancyRange value={5} min={1} max={10} step={0.1} readOnly />
        <InputFancyRange value={6} min={1} max={10} step={0.1} readOnly />
        <InputFancyRange value={7} min={1} max={10} step={0.1} readOnly />
        <InputFancyRange value={8} min={1} max={10} step={0.1} readOnly />
        <InputFancyRange value={9} min={1} max={10} step={0.1} readOnly />
        <InputFancyRange value={10} min={1} max={10} step={0.1} readOnly />
      </React.Fragment>
    ),
    {
      info: {
        text: '',
        inline: true,
        source: false,
      },
    },
  )
  .add('with state', () => <StatefulInputFancyRange />, {
    info: {
      text: '',
      inline: true,
      source: false,
    },
  });
