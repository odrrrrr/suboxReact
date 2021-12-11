import React from 'react';
import styled from 'styled-components';
import Responsive from '../../common/Responsive';
import LeftPart from './LeftPart';
import RightPart from './RightPart';

const SutoryBlock = styled(Responsive)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const Sutory = () => {
  return (
    <SutoryBlock>
      <LeftPart />
      <RightPart />
    </SutoryBlock>
  );
};
export default Sutory;
