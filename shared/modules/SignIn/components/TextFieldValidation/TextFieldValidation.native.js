// @flow

import React from "react";
import styled from "styled-components";
import type { TextFieldValidationProps } from "../../types";
import styles from "./styles";

const Wrapper = styled.View`
  ${styles.wrapper}
`;

const Label = styled.Text`
  ${styles.label}
`;

const InputField = styled.TextInput`
  ${styles.inputField}
`;

export default (props: TextFieldValidationProps) => {
  return (
    <Wrapper style={props.style}>
      <Label>{props.label}</Label>
      <InputField
        autoCapitalize='none'
        secureTextEntry={props.secureTextEntry}
        onChangeText={text => props.onTextChange(text)}
        placeholder={props.placeholder}
        value={props.value}
      />
    </Wrapper>
  );
};
