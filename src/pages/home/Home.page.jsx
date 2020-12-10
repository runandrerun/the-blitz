import React, { useState, useEffect } from 'react';
import {HeaderContainer} from '../../containers';
// import {Waves} from '../../components';
import {Section, InnerWrap} from './Home.styles';
import {RankingsContext} from '../../context';
import {fetchRankings} from '../../adapters';

export default function Home() {
  const [rankingsList, setRankingsList] = useState([]);
  useEffect(() => {
    fetchRankings()
    .then(rankings => {
      console.log(rankings)
      // setRankingsList(rankings)
    });
  }, []);
  return (
    <Section id="home">
      <InnerWrap>
        <HeaderContainer />

      </InnerWrap>
      <RankingsContext.Provider value={{ rankingsList, setRankingsList }}>
      </RankingsContext.Provider>
    </Section>
  );
};
