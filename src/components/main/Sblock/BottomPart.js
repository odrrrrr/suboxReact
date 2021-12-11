import React from 'react';
import styled, { css } from 'styled-components';
import grid_1 from '../../../images/grid_1.png';
import grid_2 from '../../../images/grid_2.png';
import grid_3 from '../../../images/grid_3.png';
import grid_4 from '../../../images/grid_4.png';
import grid_5 from '../../../images/grid_5.png';
import grid_6 from '../../../images/grid_6.png';
import gird_7 from '../../../images/sutory_slide_1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.scss';

SwiperCore.use([Autoplay]);

const BottomPartBlock = styled.div`
  .slideContainer {
    background: linear-gradient(white 50%, #0ff 50%);
  }
`;

const ImgBox = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 1rem;
  box-shadow: 5px 5px 10px 3px gray;
  &:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  font-size: 3rem;
  color: white;

  ${(props) =>
    props.img &&
    css`
      background-image: url(${props.img});
      background-size: cover;
    `}
`;

const Slide = ({ img, slideNumber }) => {
  return <ImgBox img={img}>#{slideNumber}</ImgBox>;
};

const BottomPart = () => {
  const imgNum = [grid_1, grid_2, grid_3, grid_4, grid_5, grid_6, gird_7];

  return (
    <BottomPartBlock>
      <div className="slideContainer">
        <Swiper
          className="banner"
          spaceBetween={1}
          slidesPerView={6}
          slidesOffsetBefore={12}
          slidesOffsetAfter={12}
          breakpoints={{
            0: {
              spaceBetween: 8,
              slidesPerView: 2,
            },
            760: {
              spaceBetween: 8,
              slidesPerView: 3,
            },

            1100: {
              spaceBetween: 1,
              slidesPerView: 5,
              slidesOffsetBefore: 48,
            },
            1650: {
              spaceBetween: 1,
              slidesPerView: 7,
              slidesOffsetBefore: 48,
            },
          }}
          loop={true}
          autoplay={{ delay: 1500 }}
        >
          {imgNum.map((img, index) => (
            <SwiperSlide key={index}>
              <Slide img={img} slideNumber={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </BottomPartBlock>
  );
};
export default BottomPart;
