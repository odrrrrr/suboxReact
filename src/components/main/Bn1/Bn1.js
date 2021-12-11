import React from 'react';
import styled from 'styled-components';
import Responsive from '../../common/Responsive';
import LeftPart from './LeftPart';
import RightPart from './RightPart';

const Bn1Block = styled.div`
  background: #0ff;
`;

const Wrapper = styled(Responsive)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
`;
const Bn1 = () => {
  return (
    <Bn1Block>
      <Wrapper>
        <LeftPart />
        <RightPart />
      </Wrapper>
    </Bn1Block>
  );
};
export default Bn1;
