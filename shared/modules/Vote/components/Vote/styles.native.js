// @flow
import { css } from "styled-components";
import { Dimensions } from 'react-native';

const {width} = Dimensions.get('window');

export default {
  wrapper: css`
    flex: 1;
  `,

  container: css`
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  `,

  scoreSection: css`
    height: 300px;
    width: ${width};
  `,

  btnSubmit: css`
    color: white;
    font-size: 18px;
  `,

  header: css`
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: deepskyblue;
    flex-direction: row;
    width: ${width};
  `,

  title: css`
    color: white;
    font-size: 20px;
  `
};
