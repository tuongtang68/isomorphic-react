// @flow

import React from "react";
import styled from "styled-components";
import RadioButtons from "react-native-radio-buttons";

import type { ScoresProps } from "../../types";
import styles from "./styles";

const Wrapper = styled.View`
  ${styles.wrapper}
`;

const WrapperOption = styled.TouchableWithoutFeedback``;

const ContainerOption = styled.View`
  ${styles.wrapperOption}
`;

const ScoreText = styled.Text`
  ${styles.scoreText}
`;

const renderOption = (option, selected, onSelect, index) => (
  <WrapperOption onPress={onSelect} key={index}>
    <ContainerOption>
      <ScoreText>{option}</ScoreText>
    </ContainerOption>
  </WrapperOption>
);

export default (props: ScoresProps) => (
  <Wrapper style={props.style}>
    <RadioButtons
      options={props.scores}
      onSelection={score => props.submitVote(score)}
      renderOption={renderOption}
      renderContainer={RadioButtons.renderHorizontalContainer}
    />
  </Wrapper>
);
