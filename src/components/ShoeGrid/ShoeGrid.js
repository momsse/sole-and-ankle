import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShowCardContainer key={shoe.slug}>
          <ShoeCard {...shoe} />
        </ShowCardContainer>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: -16px;
`;

const ShowCardContainer = styled.div`
  flex: 1 1 100%;
  padding: 16px;

  @media (min-width: 700px) {
    flex-basis: 50%;
  }
  
  @media (min-width: 1000px) {
    flex-basis: ${100/3}%;
  }

  @media (min-width: 1200px) {
    flex-basis: 25%;
  }
`


export default ShoeGrid;
