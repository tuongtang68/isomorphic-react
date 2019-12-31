// @flow

import { css } from "styled-components";

export default {
  wrapper: css`
    display: flex;
    flex-direction: column;
  `,

  scrollableWrapper: css`
    flex: 1;
  `,

  header: css`
    display: flex;
    background-color: deepskyblue;
    flex-direction: row;
    justify-content: flex-start;
    height: 40px;
    align-items: center;
  `,

  column: css`
    justify-content: center;
    align-items: center;
    display: flex;
    flex: 0.5;
  `,

  columnText: css`
    font-size: 18px;
    color: white;
  `,

  vote: css`
    flex: 1;
  `,

  title: css`
    text-align: center;
    color: red;
    font-size: 20px;
  `
};
