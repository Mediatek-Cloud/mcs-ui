// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import SearchInput from '.';

class StatefulSearchInput extends React.Component<{}, { value: string }> {
  state = { value: '' };

  onChange = e => this.setState({ value: e.target.value });

  onClear = () => this.setState({ value: '' });

  render() {
    const { value } = this.state;
    const { onChange, onClear } = this;

    return (
      <SearchInput
        value={value}
        onChange={onChange}
        onClear={onClear}
        placeholder="Search model"
      />
    );
  }
}

storiesOf('SearchInput', module).add('API', () => <StatefulSearchInput />, {
  info: {
    text: 'with state',
    inline: true,
    source: false,
  },
});
