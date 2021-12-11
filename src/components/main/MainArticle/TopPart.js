import React from 'react';
import styled from 'styled-components';
import useScrollAnimation from '../../../lib/hook/useScrollAnimation';
const TopPartBlock = styled.div`
  transform: scale(0.7);
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;

  div:nth-child(1) span {
    font-weight: 800;
    font-size: 2rem;
  }
  @media (max-width: 1100px) {
    div:nth-child(1) span {
      font-weight: 800;
      font-size: 1.5rem;
    }
    div:nth-child(2) span {
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
        <span>모두가 아티스트가 될 수 있는 공간, 슈박스</span>
      </div>
      <br />
      <div>
        <span>매일 새롭게 업데이트되는 음악과, 라이브를 즐기세요.</span>
        <br />
      </div>
      <div>
        <span>자유롭게 아티스트와 팬이 되어 즐겨보세요.</span>
      </div>
    </TopPartBlock>
  );
};
export default TopPart;
