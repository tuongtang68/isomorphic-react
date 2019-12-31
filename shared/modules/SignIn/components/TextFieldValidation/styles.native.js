// @flow

import { css } from "styled-components";

export default {
  wrapper: css`
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `,

  label: css`
    color: darkgray;
    font-size: 18px;
    margin-bottom: 5px;
  `,

  inputField: css`
    font-size: 18px;
    padding-left: 2px;
    padding-right: 2px;
    border-bottom-width: 0.5px;
    border-bottom-color: gray;
    width: 300px;
  `
};
