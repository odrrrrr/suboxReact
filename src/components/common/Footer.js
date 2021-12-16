import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import subox_gray from '../../images/subox_gray.png';

const FooterBlock = styled.div`
  background: #fafafa;
  display: flex;
  flex-direction: column;
  padding: 5rem;
  color: #a0a0a0;
  font-size: 14px;
  img {
    width: 150px;
    height: 40px;
  }
  .footer_sub_menu {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  .footer_sub_information {
    line-height: 25px;
  }

  @media (max-width: 1100px) {
    font-size: 12px;
    padding: 2rem;
  }
`;

const LinkStyle = styled(Link)`
  margin-right: 1rem;
`;

const Footer = () => {
  return (
    <FooterBlock>
      <img src={subox_gray} alt="subox_gray" />
      <div className="footer_sub_menu">
        <LinkStyle to="#">서비스 이용약관</LinkStyle>
        <LinkStyle to="#">개인정보 처리방침</LinkStyle>
        <LinkStyle to="#">청소년 보호정책</LinkStyle>
        <LinkStyle to="#">공지사항</LinkStyle>
        <LinkStyle to="#">미디어</LinkStyle>
        <LinkStyle to="#">인재채용</LinkStyle>
        <LinkStyle to="#">FAQ</LinkStyle>
        <LinkStyle to="#">CONTACT</LinkStyle>
      </div>
      <div className="footer_sub_information">
        Song: Arlow & Shiah Maisel ...
        <br />
        주식회사 | 대표이사: | 사업자등록번호 : | 통신판매업 신고번호 :
        <br />
        위치: | 제휴/이벤트 :
        <br />
        Copyright ⓒ 2021 Subox Inc. All rights reserved.
      </div>
    </FooterBlock>
  );
};
export default Footer;
