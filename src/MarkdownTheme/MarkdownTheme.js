// @flow

import styled from 'styled-components';
import { darken1, darken2 } from '../utils/darken';
import { type ThemeProps } from '../utils/type.flow';

const MarkdownTheme = styled.div`
  /* Note: font */
  font-family: 'Roboto';
  font-size: ${({ theme }: ThemeProps) => theme.fontSize.h4};

  /* Note: code */
  code,
  pre,
  code *,
  pre * {
    font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New,
      monospace;
    font-size: ${({ theme }: ThemeProps) => theme.fontSize.p};
  }

  /* Note: normalize */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  /* Note: Anchor */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;

    .anchor {
      line-height: 0;
      padding-left: 5px;

      svg {
        visibility: hidden;
        transition: fill cubic-bezier(0.47, 0, 0.75, 0.72) 0.3s;
        height: 18px;
        width: 18px;

        &:hover {
          fill: ${({ theme }: ThemeProps) => darken1(theme.color.primary)};
        }

        &:active {
          fill: ${({ theme }: ThemeProps) => darken2(theme.color.primary)};
        }
      }
    }
  }
  h1:hover .anchor,
  h2:hover .anchor,
  h3:hover .anchor,
  h4:hover .anchor,
  h5:hover .anchor,
  h6:hover .anchor,
  h1 .anchor:focus,
  h2 .anchor:focus,
  h3 .anchor:focus,
  h4 .anchor:focus,
  h5 .anchor:focus,
  h6 .anchor:focus {
    svg {
      visibility: visible;
    }
  }

  h1 {
    font-size: ${({ theme }: ThemeProps) => theme.fontSize.h1};
    border-bottom: 1px solid ${({ theme }: ThemeProps) => theme.color.grayBase};
    padding-bottom: 5px;
    /* Note: for anchor offset */
    padding-top: ${({ theme }: ThemeProps) => theme.height.header};
  }
  h2 {
    font-size: ${({ theme }: ThemeProps) => theme.fontSize.h2};
    border-bottom: 1px solid ${({ theme }: ThemeProps) => theme.color.grayBase};
    padding-bottom: 5px;
    /* Note: for anchor offset */
    padding-top: ${({ theme }: ThemeProps) => theme.height.header};
  }
  h3 {
    font-size: ${({ theme }: ThemeProps) => theme.fontSize.h3};
    /* Note: for anchor offset */
    padding-top: ${({ theme }: ThemeProps) => theme.height.header};
    margin-top: -30px;
  }
  h4 {
    font-size: ${({ theme }: ThemeProps) => theme.fontSize.h4};
    /* Note: for anchor offset */
    padding-top: ${({ theme }: ThemeProps) => theme.height.header};
    margin-top: -40px;
  }
  h5 {
    font-size: ${({ theme }: ThemeProps) => theme.fontSize.h4};
    /* Note: for anchor offset */
    padding-top: ${({ theme }: ThemeProps) => theme.height.header};
    margin-top: ${({ theme }: ThemeProps) => `-${theme.height.header}`};
  }
  h6 {
    font-size: ${({ theme }: ThemeProps) => theme.fontSize.h4};
    /* Note: for anchor offset */
    padding-top: ${({ theme }: ThemeProps) => theme.height.header};
    margin-top: ${({ theme }: ThemeProps) => `-${theme.height.header}`};
  }
  p {
    font-size: ${({ theme }: ThemeProps) => theme.fontSize.h4};
  }
  *:not(li) > p {
    margin-top: 10px;
  }

  small {
    font-size: ${({ theme }: ThemeProps) => theme.fontSize.small};
  }
  b,
  strong {
    font-weight: bold;
  }

  hr {
    margin-top: 50px;
    margin-bottom: -1px;
    height: 1px;
    border: none;
    border-top: 1px solid ${({ theme }: ThemeProps) => theme.color.grayBase};
  }
  hr + h2 {
    border-top: 0;
    margin-top: 0;
  }
  hr + h3,
  hr + h4,
  hr + h5,
  hr + h6 {
    margin-top: 0;
  }

  a {
    color: ${({ theme }: ThemeProps) => theme.color.primary};
    transition: color cubic-bezier(0.47, 0, 0.75, 0.72) 0.3s;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: ${({ theme }: ThemeProps) => darken1(theme.color.primary)};
    }

    &:active {
      color: ${({ theme }: ThemeProps) => darken2(theme.color.primary)};
    }
  }

  img {
    max-width: 100%;
  }

  ol,
  ul {
    padding-left: 1.5em;
    margin-top: 10px;
    margin-bottom: 0;

    li {
      margin-top: 5px;
    }
  }

  table {
    margin-top: 20px;
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    border-radius: 3px;
    overflow: hidden;

    th,
    thead {
      font-weight: bold;
      color: #fff;
      background-color: #abcbdd;
    }

    th,
    td {
      padding: 8px;

      p {
        margin-top: 0;
      }
    }

    thead tr + tr th {
      border-top: 1px solid ${({ theme }: ThemeProps) => theme.color.white};
    }

    thead,
    tbody th,
    tbody td {
      border-left: 1px solid #abcbdd;
      border-right: 1px solid #abcbdd;
    }
    tbody tr:last-child {
      border-bottom: 1px solid #abcbdd;
    }

    tr:nth-child(odd) {
      background-color: ${({ theme }: ThemeProps) => theme.color.grayLight};
    }

    tr:nth-child(2n) {
      background-color: #f5f5f5;
    }
  }

  blockquote {
    border-radius: 3px;
    background-color: rgba(171, 203, 221, 0.2);
    border-left-color: #abcbdd;
    border-left-width: 6px;
    border-left-style: solid;
    padding: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: 0;
    margin-right: 0;

    > p:first-of-type {
      font-weight: bold;
      margin-top: 0;
    }

    > p:nth-of-type(2) {
      margin-top: 0;
    }
  }

  /* Note: code block */
  pre {
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.04);
    border-radius: 3px;

    .operator {
      background-color: transparent;
    }

    &::selection {
      text-shadow: none;
      background-color: default;
    }

    *::selection {
      text-shadow: none;
      background-color: default;
    }
  }
  code {
    white-space: pre-wrap;
    word-break: break-word;
    &::selection {
      text-shadow: none;
      background-color: default;
    }

    *::selection {
      text-shadow: none;
      background-color: default;
    }
  }

  /* Note: disable inline code block in title */
  h1 code,
  h2 code,
  h3 code,
  h4 code,
  h5 code,
  h6 code {
    background-color: inherit;
    color: inherit;
    padding: unset;
    > * {
      background-color: inherit;
      color: inherit;
    }
  }

  /* Note: override inline code block */
  li:not(pre) > code,
  p:not(pre) > code,
  strong:not(pre) > code,
  b:not(pre) > code {
    padding: 0 3px;
    word-break: break-word;
    background-color: rgba(254, 209, 0, 0.4);

    color: inherit;
    * {
      color: inherit;
    }
  }
  a code,
  a strong code {
    padding: 0 3px;
    color: inherit;
    background-color: inherit;

    > * {
      color: inherit;
    }
  }
`;

export default MarkdownTheme;
