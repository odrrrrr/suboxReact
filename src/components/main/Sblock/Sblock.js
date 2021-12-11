import React from 'react';
import styled from 'styled-components';
import Responsive from '../../common/Responsive';
import BottomPart from './BottomPart';
import TopPart from './TopPart';

const SblockBlock = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
`;

const Wrapper = styled(Responsive)``;
const Sblock = () => {
  return (
    <SblockBlock>
      <Wrapper>
        <TopPart />
      </Wrapper>
      <BottomPart />
    </SblockBlock>
  );
};
export default Sblock;
