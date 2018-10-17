// @flow
import * as React from 'react';
// $FlowFixMe
import { ThemeProvider, createGlobalStyle } from 'styled-components';
// $FlowFixMe
import normalize from 'polished/lib/mixins/normalize';
import defaultTheme from '../src/utils/theme';
import { type ThemeProps } from '../src/utils/type.flow';

const GlobalStyles = createGlobalStyle`
  ${normalize()}

  html {
    font-size: ${({ theme }: ThemeProps) => theme.base.fontSize};
    line-height: ${({ theme }: ThemeProps) => theme.base.lineHeight};
  }

  body {
    background-color: ${({ theme }: ThemeProps) =>
      theme.base.bodyBackgroundColor};
    color: ${({ theme }: ThemeProps) => theme.base.bodyColor};
    padding: 30px;
  }
`;

export default function(
  renderStory: () => React.Element<*> | Array<React.Element<*>>,
) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <React.Fragment>
        <GlobalStyles />
        {renderStory()}
      </React.Fragment>
    </ThemeProvider>
  );
}
