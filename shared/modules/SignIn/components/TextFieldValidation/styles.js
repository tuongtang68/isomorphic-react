// @flow

import {css} from "styled-components";

export default {
  wrapper: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `,

  label: css`
    margin-bottom: 8px;
  `,

  input: css`
    width: 300px;
    height: 40px;
    padding-left: 3px;
  `
};
