import React from 'react';
import {HeaderContainer} from '../../containers';
import {Section, InnerWrap} from './Home.styles';

export default function Home() {
  return (
    <Section id="home">
      <InnerWrap>
        <HeaderContainer />
      </InnerWrap>
    </Section>
  );
};
