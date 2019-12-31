// @flow

import React from "react";
import styled from "styled-components";
import TextFieldValidation from "../TextFieldValidation";
import styles from "./styles";
import type { SignInProps } from "../../types";

const EmailInput = styled(TextFieldValidation)``;

const PasswordInput = styled(TextFieldValidation)``;

const Wrapper = styled.div`
  ${styles.wrapper}
`;

const Header = styled.div``;

const Title = styled.h1``;

const ButtonLogin = styled.input`
  ${styles.btnSignIn}
`;
export default (props: SignInProps) => (
  <Wrapper>
    <Header>
      <Title>Sign In</Title>
    </Header>
    <EmailInput
      style={{ marginTop: 100, marginBottom: 10 }}
      onTextChange={props.onEmailTextChange}
      label="Email"
      placeholder="Enter your email"
    />
    <PasswordInput
      style={{ marginBottom: 10 }}
      onTextChange={props.onPasswordTextChange}
      label="Password"
      secureTextEntry={true}
      placeholder="Enter your password"
    />
    <ButtonLogin
      type="button"
      value="Sign In"
      onClick={() => {
        props.postSignIn(props.email, props.password);
      }}
    />
  </Wrapper>
);
