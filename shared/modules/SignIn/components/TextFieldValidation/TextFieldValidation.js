// @flow

import React from "react";
import styled from "styled-components";
import styles from "./styles";
import type { TextFieldValidationProps } from "../../types";

const Wrapper = styled.div`
  ${styles.wrapper}
`;

const Label = styled.span`
  ${styles.label}
`;

const InputField = styled.input`
  ${styles.input}
`;

export default (props: TextFieldValidationProps) => (
  <Wrapper style={props.style}>
    <Label>{props.label}</Label>
    <InputField
      type={props.secureTextEntry ? 'password' : 'input'}
      onChange={event => props.onTextChange(event.target.value)}
      placeholder={props.placeholder}
      value={props.value}
    />
  </Wrapper>
);
