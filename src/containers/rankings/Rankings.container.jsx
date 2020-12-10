import React, {useContext} from 'react';
import {Container} from './Rankings.styles';
import {PlayerCard} from '../../components';
import {RankingsContext} from '../../context';

export default function RankingsContainer() {
  const {rankingsList} = useContext(RankingsContext);
  return (
    <Container id="rankings-container">
      {
        rankingsList.map((player) => {
          return (
          <PlayerCard key={player}>
            {player}
          </PlayerCard>
          )
        })
      }
    </Container>
  );
};
