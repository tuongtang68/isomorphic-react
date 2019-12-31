// @flow
import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { withRouter } from "react-router";
import Button from "react-native-button";

import styles from "./styles";
import type { WelcomeProps } from "../../types";
import ListVotes from "../ListVotes";

const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

const Container = styled.View`
  ${styles.container}
`;

const HeadLine = styled.View`
  ${styles.headLine}
`;

const Title = styled.Text`
  ${styles.title}
`;

const Paragraph = styled.View`
  ${styles.paragraph}
`;

const PlainText = styled.Text`
  ${styles.plainText}
`;

const HyperText = styled.Text`
  ${styles.hyperText}
`;

const ListVotesSection = styled(ListVotes)`
  ${styles.listVotes}
`;

const VoteButton = styled(Button)`
  ${styles.btnVote}
`;

const FooterSection = styled.View`
  ${styles.footer}
`;

const TouchableText = withRouter(({ history, content, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(history)}>
      <HyperText>{content}</HyperText>
    </TouchableOpacity>
  );
});

type WelcomeState = {};

class Welcome extends React.Component<WelcomeProps, WelcomeState> {
  componentDidMount(): * {
    if (this.props.credential !== null) {
      this.props.fetchVotes(this.props.credential.uid);
    }
  }

  render() {
    return (
      <Wrapper>
        <Container>
          <HeadLine>
            <Title>Welcome to Isomorphic React</Title>
          </HeadLine>
          {this.props.credential === null && (
            <Paragraph>
              <PlainText>Please </PlainText>
              <TouchableText
                onPress={history => history.push("/sign-in")}
                content="sign in"
              />
              <PlainText> to access the Application</PlainText>
            </Paragraph>
          )}
          {this.props.credential !== null &&
            this.props.votes !== undefined &&
            this.props.votes !== null && (
              <ListVotesSection votes={this.props.votes} />
            )}
          {this.props.credential !== null && (
            <FooterSection>
              <VoteButton
                onPress={this.props.goToVote}
                containerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 40,
                backgroundColor: 'green',
                width: 120,
              }}>Go to Vote</VoteButton>
              <TouchableText
                onPress={(history) => this.props.signOut(history)}
                content="Sign Out"
              />
            </FooterSection>
          )}
        </Container>
      </Wrapper>
    );
  }
}

export default Welcome;
