import React from 'react';
import styled from 'styled-components';
import Responsive from '../../common/Responsive';
import LeftPart from './LeftPart';
import RightPart from './RightPart';

const IntroBlock = styled(Responsive)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 5rem;
  background: white;
`;

const Intro = ({ onPlayingBtn, introPlayState }) => {
  return (
    <IntroBlock>
      <LeftPart onPlayingBtn={onPlayingBtn} introPlayState={introPlayState} />

      <RightPart introPlayState={introPlayState} />
    </IntroBlock>
  );
};
export default Intro;
