import React from 'react';
import styled from 'styled-components';
import Responsive from '../../common/Responsive';
import LeftPart from './LeftPart';
import RightPart from './RightPart';

const Bn2Block = styled.div`
  background: #0ff;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const Wrapper = styled(Responsive)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Bn2 = () => {
  return (
    <Bn2Block>
      <Wrapper>
        <LeftPart />
        <RightPart />
      </Wrapper>
    </Bn2Block>
  );
};
export default Bn2;
