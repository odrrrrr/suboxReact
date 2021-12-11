import React from 'react';
import styled from 'styled-components';
import useScrollAnimation from '../../../lib/hook/useScrollAnimation';

const TopPartBlock = styled.div`
  transform: scale(0.7);
  padding-top: 5rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  div:nth-child(1) {
    font-weight: 800;
    font-size: 2rem;
    padding-bottom: 1rem;
  }
  div:nth-child(2) {
    font-weight: 1;
    font-size: 20px;
  }
  @media (max-width: 1100px) {
    div:nth-child(1) {
      font-weight: 800;
      font-size: 1.5rem;
    }
    div:nth-child(2) {
      font-weight: 1;
      font-size: 15px;
    }
  }
`;

const TopPart = () => {
  const scrollAnimation = useScrollAnimation('scale');
  return (
    <TopPartBlock {...scrollAnimation}>
      <div>
        <span>믿을 수 있으니까, 안전하니까</span>
      </div>

      <div>
        <span>
          블록체인 저작권으로 내 노래를 누구보다 안전하게 지킬 수 있습니다.
        </span>
      </div>
    </TopPartBlock>
  );
};
export default TopPart;
