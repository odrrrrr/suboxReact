import React from 'react';
import styled from 'styled-components';
import instagram from '../../../images/instagram.png';
import facebook from '../../../images/facebook.png';
import naverblog from '../../../images/naverblog.png';
import youtube from '../../../images/youtube.png';
import useScrollAnimation from '../../../lib/hook/useScrollAnimation';

const RightPartBlock = styled.div`
  flex-basis: 40%;
  transform-origin: -50% 0%;
  transform: scale(0.7);
  span {
    font-size: 2rem;
    font-weight: 900;
  }
  p {
    line-height: 2;
  }
  img {
    height: 60px;
  }

  @media (max-width: 1100px) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  @media (max-width: 760px) {
    span {
      text-align: center;
      font-size: 20px;
    }
  }
`;

const RightPart = () => {
  const scrollAnimation = useScrollAnimation('scale');
  return (
    <RightPartBlock {...scrollAnimation}>
      <span>
        지금 이 순간,
        <br /> 좀 더 새로워진 음악문화를
        <br /> 느껴보세요.
      </span>
      <p>
        슈박스를 통해 창작 아티스트들과 소통하세요.
        <br />
        고품질의 음악 서비스를 즐길수 있습니다.
        <br />더 넓은 음악세계에서 성장해보세요.
      </p>
      <div>
        <img src={instagram} alt="instagram" />
        <img src={facebook} alt="facebook" />
        <img src={naverblog} alt="naverblog" />
        <img src={youtube} alt="youtube" />
      </div>
    </RightPartBlock>
  );
};
export default RightPart;
