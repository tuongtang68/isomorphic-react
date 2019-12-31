// @flow

import React from "react";
import styled from "styled-components";
import type { WelcomeProps } from "../../types";
import styles from "./styles";
import ListVotes from "../ListVotes";

const Wrapper = styled.div`
  ${styles.wrapper}
`;
const Headline = styled.div``;
const Title = styled.h1`
  ${styles.title}
`;
const Paragraph = styled.p``;

const PlainText = styled.span``;

const HyperText = styled.a``;

const ListVotesSection = styled(ListVotes)``;

const VoteButton = styled.input`
  ${styles.btnVote}
`;

const FooterSection = styled.div`
  ${styles.footer}
`;

class Welcome extends React.Component<WelcomeProps> {
  componentDidMount(): * {
    console.log("mount");
    console.log(this.props.credential);
    if (this.props.credential !== null) {
      this.props.fetchVotes(this.props.credential.uid);
    }
  }

  render() {
    return (
      <Wrapper>
        <Headline>
          <Title>Welcome to Isomorphic React</Title>
        </Headline>
        {this.props.credential === null && (
          <Paragraph>
            <PlainText>Please </PlainText>
            <HyperText href="/sign-in">sign in</HyperText>
            <PlainText> to access the Application</PlainText>
          </Paragraph>
        )}
        {this.props.credential !== null &&
          this.props.votes !== undefined &&
          this.props.votes !== null && (
            <ListVotesSection
              style={{
                width: 400,
                height: 400,
                marginBottom: 20
              }}
              votes={this.props.votes}
            />
          )}
        {this.props.credential !== null && (
          <FooterSection>
            <VoteButton
              type="button"
              onClick={this.props.goToVote}
              value="Go to Vote"
            />
            <HyperText onClick={this.props.signOut} href="">Sign Out</HyperText>
          </FooterSection>
        )}
      </Wrapper>
    );
  }
}

export default Welcome;
