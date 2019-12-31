// @flow

import {css} from "styled-components";
import {Dimensions} from "react-native";

const {width} = Dimensions.get('window');

export default {
  container: css`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `,

  inputRow: css`
    margin-bottom: 30px;
    margin-left: 20px;
    margin-right: 20px;
  `,

  header: css`
    background-color: deepskyblue;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 50px;
    width: ${width};
  `,

  title: css`
    color: white;
    font-size: 22px;
  `,

  btnSignIn: css`
    color: white;
    font-size: 20px;
  `
};
