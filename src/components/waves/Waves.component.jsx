import React from 'react';
import {WaveWrap, InnerWaveWrap, Wave} from './Waves.styles';

export default function Waves() {
  return (
    <WaveWrap>
      <InnerWaveWrap>
        <Wave />
      </InnerWaveWrap>
      <InnerWaveWrap>
        <Wave />
      </InnerWaveWrap>
      <InnerWaveWrap>
        <Wave />
      </InnerWaveWrap>
    </WaveWrap>
  );
};
