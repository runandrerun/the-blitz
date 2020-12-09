import styled from 'styled-components/macro';

export const Section = styled.section`
  display: flex;
  padding: 1.5rem;

  @media (max-width: 1000px) {
    padding: .5rem;
  }
`;

export const InnerWrap = styled.div`
  background-color: #aec6cf;
  width: 100%;
  height: 100vh;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
`;
