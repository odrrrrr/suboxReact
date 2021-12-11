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
    width: 469px;
    height: 400px;
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
