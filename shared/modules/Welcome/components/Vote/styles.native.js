// @flow

import { css } from "styled-components";

export default {
  wrapper: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 1
  `,

  timeText: css`
    color: blueviolet;
    font-size: 18px;
    text-align: center;
    flex: 0.5;
  `,

  scoreText: css`
    color: coral;
    font-size: 18px;
    text-align: center;
    flex: 0.5
  `
};
