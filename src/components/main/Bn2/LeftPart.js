import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import liveFun from '../../../images/liveFun.png';
import useScrollAnimation from '../../../lib/hook/useScrollAnimation';
const LeftPartBlock = styled.div`
  transform-origin: 100% 50%;
  transform: scale(0.7);
  .sub1 {
    font-size: 2rem;
    font-weight: 700;
  }

  .sub2 {
    font-weight: 1;
  }
  img {
    width: 150px;
    height: 100px;
    object-fit: contain;
  }
  @media (max-width: 760px) {
    .sub1 {
      font-size: 20px;
    }
    .sub2 {
      line-height: 2rem;
    }
  }
`;

const LeftPart = () => {
  const scrollAnimation = useScrollAnimation('scale');
  return (
    <LeftPartBlock {...scrollAnimation}>
      <div className="sub1">
        New!
        <br />
        라이브도 즐겨보세요.
        <br />
      </div>
      <div className="sub2">
        슈박스에서는 좋아하는 스타와 팬이 자유롭게 소통할 수 있어요.
        <br />
        지금 당장 즐기러 가보세요!
      </div>
      <Link to="/download">
        <img src={liveFun} alt="liveFun" />
      </Link>
    </LeftPartBlock>
  );
};
export default LeftPart;
