// @flow
import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { darken1, darken2, darken3 } from '../utils/darken';
import { kind } from '../utils/theme';
import { IconLoading, IconCalendar } from '../Icons';
import Spin from '../Spin';
import Button from '.';

const Container: React.ComponentType<*> = styled.div`
  > * {
    margin: 5px;
  }
`;

const CenterContainer: React.ComponentType<*> = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const KindContainer = () => (
  <Container>
    {Object.keys(kind).map(key => (
      <Button key={key} kind={key} onClick={action(`Kind ${key}`)}>
        {key}
      </Button>
    ))}
  </Container>
);

const customTheme = {
  color: {
    default: '#FAFAFA',
    primary: '#2196F3',
    success: '#4CAF50',
    error: '#F44336',
    warning: '#FF9800',
    black: '#000000',
    grayDark: '#999A94',
    grayBase: '#D1D2D3',
    grayLight: '#FAFAFA',
    white: '#FFFFFF',
  },
  base: {
    bodyBackground: '#F1F2F7',
    textColor: '#353630',
  },
  fontSize: {
    p: '16px',
    h4: '18px',
    h3: '22px',
    h2: '26px',
    h1: '34px',
  },
};

const TomatoButton = styled(Button)`
  font-size: 56px;
  color: #ffffff;
  border-radius: 6px;
  border-color: ${darken3('tomato')};
  background-color: tomato;
  min-height: 80px;

  &:hover {
    background-color: ${darken1('tomato')};
  }

  &:active {
    background-color: ${darken2('tomato')};
  }
`;

storiesOf('Button', module)
  .add('API', () => <Button>button</Button>, {
    info: {
      text: 'Default min-width',
      inline: true,
      source: false,
    },
  })
  .add(
    'With block props',
    () => (
      <Container>
        <Button>Button</Button>
        <Button>Simple button</Button>
        <Button block>block</Button>
      </Container>
    ),
    {
      info: {
        text: 'Different size in order: min-width: 80px / auto / 100%.',
        inline: true,
        source: false,
      },
    },
  )
  .add('With kind props', () => <KindContainer />, {
    info: {
      text: '使用內建 kind props 樣式。',
      inline: true,
      source: false,
      propTables: [],
    },
  })
  .add(
    'With square props',
    () => (
      <Container>
        <Button square>A</Button>
        <Button square kind="default">
          <IconCalendar />
        </Button>
      </Container>
    ),
    {
      info: {
        text: '方',
        inline: true,
        source: false,
      },
    },
  )
  .add(
    'With round props',
    () => (
      <Container>
        <Button round>A</Button>
        <Button round kind="default">
          <IconCalendar />
        </Button>
      </Container>
    ),
    {
      info: {
        text: '圓',
        inline: true,
        source: false,
      },
    },
  )
  .add(
    'With size props',
    () => (
      <Container>
        <Button size="small">Btn</Button>
        <Button size="small" kind="default">
          Small Button
        </Button>
      </Container>
    ),
    {
      info: {
        text: '小 (min-width: 40px)',
        inline: true,
        source: false,
      },
    },
  )
  .add('With active props', () => <Button active>Active</Button>, {
    info: {
      text: '',
      inline: true,
      source: false,
    },
  })
  .add('With disabled props', () => <Button disabled>Disabled</Button>, {
    info: {
      text: '',
      inline: true,
      source: false,
    },
  })
  .add(
    'With icon inside',
    () => (
      <Button>
        <CenterContainer>
          <Spin>
            <IconLoading size={14} />
          </Spin>
          &nbsp;Loading ...
        </CenterContainer>
      </Button>
    ),
    {
      info: {
        text: 'loading',
        inline: true,
        source: false,
      },
    },
  )
  .add(
    'With theme provider (Material)',
    () => (
      <ThemeProvider theme={customTheme}>
        <KindContainer />
      </ThemeProvider>
    ),
    {
      info: {
        text: '使用全局的 theme 來調整色調。',
        inline: true,
        source: false,
        propTables: [],
      },
    },
  )
  .add(
    'Overriding style',
    () => (
      <TomatoButton onClick={action('clicked')}>Overriding style</TomatoButton>
    ),
    {
      info: {
        text: '使用 styled-components 來覆蓋 css。',
        inline: true,
        source: false,
        propTables: [],
      },
    },
  )
  .add(
    'With as props',
    () => (
      <Button onClick={action('clicked a')} as="a">
        I am {'<a>'} tag.
      </Button>
    ),
    {
      info: {
        text: '使用 a tag。',
        inline: true,
        source: false,
      },
    },
  )
  .add(
    'With as props - Input submit',
    () => (
      <Button
        onClick={action('clicked input')}
        as="input"
        type="submit"
        value="Input Submit"
        block
      />
    ),
    {
      info: {
        text: '',
        // inline: true, source: false,
      },
    },
  );
