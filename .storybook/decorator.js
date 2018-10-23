// @flow
import * as React from 'react';
// $FlowFixMe
import { ThemeProvider, createGlobalStyle } from 'styled-components';
// $FlowFixMe
import normalize from 'polished/lib/mixins/normalize';
import { theme as defaultTheme } from '../src/index';
import { type ThemeProps } from '../src/utils/type.flow';

const GlobalStyles = createGlobalStyle`
  ${normalize()}

  * {
    box-sizing: border-box;
  }

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
        <div id="snapshot">{renderStory()}</div>
      </React.Fragment>
    </ThemeProvider>
  );
}
