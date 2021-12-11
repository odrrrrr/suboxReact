import React from 'react';
import styled from 'styled-components';
import useScrollAnimation from '../../../lib/hook/useScrollAnimation';
const LeftPartBlock = styled.div`
  transform: translate3d(-100px, 0, 0);
  .hotSutory {
    font-size: 2rem;
    font-weight: 800;
    span {
      color: #0ff;
    }
  }
  .whatIsSutory {
    margin-top: 1rem;
    div {
      border: 1px solid #0ff;
      border-radius: 10px;
      padding: 1rem;
    }
    div:nth-child(even) {
      background: #0ff;
    }
  }
`;

const LeftPart = () => {
  const scrollAnimation = useScrollAnimation('trans');
  return (
    <LeftPartBlock {...scrollAnimation}>
      <div>
        <div className="hotSutory">
          <span>HOT!</span>슈토리
        </div>
        <span>
          내가 좋아하는 스타에게
          <br /> 팔로우 및 알을 선물해보세요.
        </span>
      </div>
      <div className="whatIsSutory">
        <div>WHAT IS 슈토리?</div>
        <div>HOT! 슈토리</div>
      </div>
    </LeftPartBlock>
  );
};
export default LeftPart;
