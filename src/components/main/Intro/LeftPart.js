import React from 'react';
import styled from 'styled-components';
import playbtn from '../../../images/playbtn.png';
import stopbtn from '../../../images/stopbtn.png';
import googleplay from '../../../images/googleplay.png';
import appstore from '../../../images/appstore.png';
import useScrollAnimation from '../../../lib/hook/useScrollAnimation';
const LeftPartBlock = styled.div`
  display: flex;
  flex-direction: column;
  transform: translate3d(-50px, 0, 0);
  span:nth-child(1) {
    font-size: 3rem;
    font-weight: 200;
  }
  span:nth-child(2) {
    font-size: 10rem;
    font-weight: 800;
    line-height: 1;
    color: #00ffff;
  }
  button {
    border: 0;
    background: white;

    &:active {
      transform: translateY(5px);
    }
  }

  p {
    background: black;
    padding: 1rem;
    border-radius: 2rem;
    color: white;
    &:hover {
      transform: translateX(10px);
    }
  }

  .subox {
  }

  .btns {
    display: flex;
    padding-top: 1rem;
    img {
      width: 180px;
      height: 65px;
    }
  }

  @media (max-width: 1100px) {
    span:nth-child(1) {
      font-size: 2rem;
      font-weight: 200;
    }
    span:nth-child(2) {
      font-size: 6rem;
      font-weight: 800;
      line-height: 1;
      color: #00ffff;
    }
    .btns {
      img {
        width: 50%;
        object-fit: contain;
      }
    }
  }
`;

const LeftPart = ({ onPlayingBtn, introPlayState }) => {
  const scrollAnimation = useScrollAnimation('trans');
  return (
    <LeftPartBlock {...scrollAnimation}>
      <span>모두의 뮤직 미디어</span>
      <span>SUBOX</span>
      <div className="btns">
        {introPlayState === false ? (
          <>
            <button name="introPlayState" onClick={onPlayingBtn}>
              <img
                name="introPlayState"
                style={{ width: '54px', height: '54px' }}
                src={playbtn}
                alt="playbtn"
              />
            </button>
          </>
        ) : (
          <>
            <button name="introPlayState" onClick={onPlayingBtn}>
              <img
                name="introPlayState"
                style={{ width: '54px', height: '54px' }}
                src={stopbtn}
                alt="stopbtn"
              />
            </button>
          </>
        )}
        <p>웹 서비스 개발중...</p>
      </div>

      <div className="btns">
        <img src={googleplay} alt="googleplay" />
        <img src={appstore} alt="appstore" />
      </div>
    </LeftPartBlock>
  );
};
export default LeftPart;
