// @flow

import { css } from "styled-components";

export default {
  scrollableWrapper: css`
    overflow: scroll;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 300px;
  `,

  wrapper: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    border: 1px solid darkblue;
  `,

  header: css`
    background-color: deepskyblue;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
  `,

  column: css`
    flex: 0.5;
    justify-content: center;
    align-items: center;
    color: white;
  `,

  title: css`
    font-size: 20px;
    color: red;
  `
};
