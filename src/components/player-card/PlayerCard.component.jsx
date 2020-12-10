import React from 'react';
import {Container} from './PlayerCard.styles';

export default function PlayerCard({ children, ...restProps }) {
  console.log("Inside player card", children)
  return (
    <Container>
    </Container>
  );
};
