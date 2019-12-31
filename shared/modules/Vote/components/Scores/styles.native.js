// @flow

import {css} from "styled-components";

export default {
  wrapper: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  wrapperOption: css`
   width: 50px;
   height: 50px; 
   background-color: yellow;
   justify-content: center;
   align-items: center;
   border: 1px;
   border-color: gray;
   border-radius: 25px;
   margin-right: 2px;
  `,

  scoreText: css`
  color: black;
  font-size: 28px;
`
};
