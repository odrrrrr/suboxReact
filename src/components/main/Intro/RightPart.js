import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import introImage from '../../../images/introImage.png';
import useScrollAnimation from '../../../lib/hook/useScrollAnimation';
const imageRotate = keyframes`
    from {
      transform:rotate(0deg);
    }
    to {
      transform:rotate(360deg);
    }`;

const RightPartBlock = styled.div`
  transform: scale(0.7);
  img {
    width: 100%;
    height: 505px;
    object-fit: contain;
    ${(props) =>
      props.introPlayState &&
      css`
        animation: ${imageRotate} 7s infinite cubic-bezier(0, 0, 0, 0);
      `};
  }

  @media (max-width: 1100px) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;

const RightPart = ({ introPlayState }) => {
  const scrollAnimation = useScrollAnimation('scale');
  return (
    <RightPartBlock introPlayState={introPlayState} {...scrollAnimation}>
      <img src={introImage} alt="introImage" />
    </RightPartBlock>
  );
};
export default RightPart;
