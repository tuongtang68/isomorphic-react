// @flow
import React from "react";
import styled from "styled-components";
import Button from "react-native-button";

import TextFieldValidation from "../TextFieldValidation";
import styles from "./styles";
import type { SignInProps } from "../../types";

const EmailInput = styled(TextFieldValidation)`
  ${styles.inputRow};
  margin-top: 100px;
`;

const PasswordInput = styled(TextFieldValidation)`
  ${styles.inputRow}
`;

const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

const KeyboardView = styled.KeyboardAvoidingView`
  ${styles.container}
`;

const Header = styled.View`
  ${styles.header}
`;

const Title = styled.Text`
  ${styles.title}
`;

const ButtonLogin = styled(Button)`
  ${styles.btnSignIn}
`;

export default (props: SignInProps) => (
  <Wrapper>
    <KeyboardView behavior="padding" enabled>
      <Header>
        <Title>Sign In</Title>
      </Header>
      <EmailInput
        onTextChange={props.onEmailTextChange}
        label="Email"
        placeholder="Enter your email"
      />
      <PasswordInput
        onTextChange={props.onPasswordTextChange}
        label="Password"
        secureTextEntry={true}
        placeholder="Enter your password"
      />
      <ButtonLogin
        containerStyle={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          width: 100,
          backgroundColor: "green",
          marginTop: 10,
          height: 50
        }}
        onPress={() => props.postSignIn(props.email, props.password)}
      >
        Sign In
      </ButtonLogin>
    </KeyboardView>
  </Wrapper>
);
