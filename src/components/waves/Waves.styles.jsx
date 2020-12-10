import styled from 'styled-components/macro';

export const WaveWrap = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
`;

export const InnerWaveWrap = styled.div`
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 100%;
  background: blueviolet;
  &:nth-of-type(1) {
    z-index: 15;
    opacity: 0.5;
  }

  &:nth-of-type(2) {
    z-index: 10;
    opacity: 0.7;
  }

  &:nth-of-type(3) {
    z-index: 5;
  }
`;
export const Wave = styled.div`
  background-repeat: repeat no-repeat;
  position: absolute;
  left: 0;
  width: 200%;
  height: 100%;
  background-position: 0 bottom;
  transform-origin: center bottom;
  &:nth-of-type(1) {
    z-index: 15;
    opacity: 0.5;
    background-image: url("../../_assets/img/waves/1.png");
    -webkit-background-size: 50% 80px;
    background-size: 50% 80px;
    animation: animate 12s linear infinite;
  }

  &:nth-of-type(2) {
    z-index: 10;
    opacity: 0.7;
    background-image: url("../../_assets/img/waves/2.png");
    -webkit-background-size: 50% 100px;
    background-size: 50% 100px;
    animation: animate 12s linear infinite;
  }

  &:nth-of-type(3) {
    z-index: 5;
    background-image: url("../../_assets/img/waves/3.png");
    -webkit-background-size: 50% 80px;
    background-size: 50% 80px;
    animation: animate 12s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: translateX(0) translateZ(0) scaleY(1);
    }
    50% {
      transform: translateX(-25%) translateZ(0) scaleY(0.5);
    }
    100% {
      transform: translateX(-50%) translateZ(0) scaleY(1);
    }
  }
`;
