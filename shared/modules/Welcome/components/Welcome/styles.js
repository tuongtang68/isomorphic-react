import { css } from "styled-components";

export default {
  wrapper: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `,

  title: css`
    color: red;
  `,

  footer: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  btnVote: css`
    width: 100px;
    height: 40px;
    background-color: green;
    color: white;
    border: 0;
    margin-bottom: 5px;
  `
};
