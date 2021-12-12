import React from 'react';
import styled from 'styled-components';
import phone from '../../../images/phone.png';
import useScrollAnimation from '../../../lib/hook/useScrollAnimation';
const LeftPartBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 60%;
  transform-origin: 100% 0%;
  transform: scale(0.7);
  img {
    width: 100%;
    height: 400px;
    object-fit: contain;
  }
  @media (max-width: 760px) {
    img {
      height: 300px;
    }
  }
`;

const LeftPart = () => {
  const scrollAnimation = useScrollAnimation('scale');
  return (
    <LeftPartBlock {...scrollAnimation}>
      <img src={phone} alt="phone" />
    </LeftPartBlock>
  );
};
export default LeftPart;
