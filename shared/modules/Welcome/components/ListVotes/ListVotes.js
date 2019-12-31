// @flow
import React from "react";
import styled from "styled-components";
import styles from "./styles";
import Vote from "../Vote";
import type { ListVotesProps } from "../../types";

const ScrollableWrapper = styled.div`
  ${styles.scrollableWrapper}
`;

const Wrapper = styled.div`
  ${styles.wrapper}
`;

const Header = styled.div`
  ${styles.header}
`;

const Column = styled.div`
  ${styles.column}
`;

const ColumnText = styled.span`
  ${styles.columnText}
`;

const VoteRow = styled(Vote)`
  ${styles.vote}
`;

const Title = styled.span`
  ${styles.title}
`;
export default (props: ListVotesProps) => (
  <Wrapper style={props.style}>
    <Title>Your votes are below</Title>
    <Header>
      <Column>
        <ColumnText>Vote At</ColumnText>
      </Column>
      <Column>
        <ColumnText>Score</ColumnText>
      </Column>
    </Header>
    <ScrollableWrapper>
      {props.votes.map((vote, idx) => (
        <VoteRow key={`vote_${idx}`} vote={vote} />
      ))}
    </ScrollableWrapper>
  </Wrapper>
);
