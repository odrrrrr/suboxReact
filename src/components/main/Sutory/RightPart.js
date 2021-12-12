import React, { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import sutory_slide_1 from '../../../images/sutory_slide_1.png';
import sutory_slide_2 from '../../../images/sutory_slide_2.png';
import sutory_slide_3 from '../../../images/sutory_slide_3.png';
import sutory_slide_4 from '../../../images/sutory_slide_4.png';
import useScrollAnimation from '../../../lib/hook/useScrollAnimation';
const slideAni = keyframes`
    0%{
      trainsition: 1s;
        transform:translateY(0%);
    }
    25%{
        transform:translateY(-100%);
    }
    50%{
        transform:translateY(-200%);
    }
    75%{
        transform:translateY(-300%);
    }

    100%{
      
        transform:translateY(-400%);
    }
    
}
    `;

const RightPartBlock = styled.div`
  transform-origin: 50% 50%;
  transform: scale(0.7);
  z-index: -1;
  .scroll {
    animation: ${slideAni} 10s infinite;
  }

  @media (max-width: 1100px) {
    margin-top: 3rem;
    overflow: hidden;
    .scroll {
      width: 100%;
      img {
        width: 100%;
        height: 150px;
        object-fit: contain;
        border: 0;
      }
    }
  }
`;

const Img = styled.img`
  width: 500px;
  height: inherit;
  object-fit: cover;
  border: 1px solid black;
  border-radius: 1rem;
`;

const SliderContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Slide = ({ img }) => {
  return <Img src={img} alt="a" />;
};

const RightPart = () => {
  const slideRef = useRef(null);
  const scrollAnimation = useScrollAnimation('scale');
  const slideNum = [
    sutory_slide_1,
    sutory_slide_2,
    sutory_slide_3,
    sutory_slide_4,
  ];

  useEffect(() => {
    const SliderFocus = slideRef.current;
    const SliderClone = SliderFocus.children[0].cloneNode(true);
    const SliderClone2 = SliderFocus.children[3].cloneNode(true);
    SliderFocus.appendChild(SliderClone);
    SliderFocus.insertBefore(SliderClone2, SliderFocus.children[0]);
  });

  return (
    <>
      <RightPartBlock {...scrollAnimation}>
        <audio />
        <SliderContainer className="scroll" ref={slideRef}>
          {slideNum.map((slide, index) => (
            <Slide img={slide} key={index} />
          ))}
        </SliderContainer>
      </RightPartBlock>
    </>
  );
};
export default RightPart;
