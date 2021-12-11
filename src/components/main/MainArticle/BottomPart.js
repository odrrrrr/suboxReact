import React from 'react';
import styled, { css } from 'styled-components';
import slide_1 from '../../../images/main_article_slide_1.png';
import slide_2 from '../../../images/main_article_slide_2.png';
import slide_3 from '../../../images/main_article_slide_3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import useScrollAnimation from '../../../lib/hook/useScrollAnimation';
SwiperCore.use([Pagination, Autoplay]);

const BottomPartBlock = styled.div`
margin-top:3rem;
padding-bottom:3rem;
  .pagination {
    display: flex;
    justify-content: center;
    padding: 1rem;
    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      background: gray;
      opacity: 1;
      margin-left: 10px;
      border-radius: 5px;
    }
    .swiper-pagination-bullet-active {
      width: 50px;
      transition: width 0.5s;
      border-radius: 5px;
      background: white;
      border: 1px solid transparent;
    }
  }
  .join {
    display: flex;
    justify-content: center;
    align-items:center;
    margin:0 auto;
    width:200px;
    padding 12px;
    margin-top:2rem;
    transform:scale(0.7);
    background:white;
    border-radius:7px;
    button{
      border:0;
      background:white;
      
    }

    
`;

const ImgBox = styled.div`
  width: 100%;
  height: 400px;

  ${(props) =>
    props.img &&
    css`
      background: url(${props.img}) no-repeat;
      background-size: 100% 100%;
      border-radius: 7px;
    `}
`;

const Slide = ({ img }) => {
  return <ImgBox img={img} />;
};

const BottomPart = () => {
  const scrollAnimation = useScrollAnimation('scale');
  const imgNum = [slide_1, slide_2, slide_3];
  return (
    <BottomPartBlock>
      <Swiper
        loop={true}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          0: {
            spaceBetween: 0,
            slidesPerView: 1,
          },

          760: {
            spaceBetween: 10,
            slidesPerView: 2,
          },
          1100: {
            spaceBetween: 50,
            slidesPerView: 3,
          },
        }}
        pagination={{ el: '.pagination', clickable: true }}
      >
        {imgNum.map((img, index) => (
          <SwiperSlide key={index}>
            <Slide img={img} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="pagination" />
      <div className="join" {...scrollAnimation}>
        <button>지금 바로 참여하기</button>
      </div>
    </BottomPartBlock>
  );
};
export default BottomPart;
