// @flow

import { css } from "styled-components";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default {
  container: css`
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `,

  headLine: css`
    margin-left: 0;
    margin-right: 0;
    margin-top: 60px;
    padding-left: 10px;
    padding-right: 10px;
    align-items: center;
  `,

  title: css`
    color: red;
    font-size: 28px;
    text-align: center;
  `,

  paragraph: css`
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,

  plainText: css`
    color: black;
    font-size: 18px;
  `,

  hyperText: css`
    color: blue;
  `,

  listVotes: css`
    border-width: 1px;
    border-color: darkblue;
    height: 300px;
    width: ${width - 40};
  `,

  footer: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  btnVote: css`
    font-size: 20px;
    color: white;
  `
};
