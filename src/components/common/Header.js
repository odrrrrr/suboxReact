import React, { useState } from 'react';
import styled from 'styled-components';
import subox from '../../images/subox.png';
import Responsive from './Responsive';
import { GiHamburgerMenu } from 'react-icons/gi';

const HeaderBlock = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  img {
    width: 156px;
    height: 44px;
    object-fit: cover;
  }
  .pc_menu {
    display: flex;
    flex-basis: 55%;
    justify-content: space-between;
  }
  .mobile_menu_btn {
    display: none;
    border: 0;
    background: white;
  }
  .mobile_menu {
    display: none;
    width: 90%;
    z-index: 100;
    position: absolute;
    top: 50px;
    background: gray;
  }
  p {
    font-weight: 1;
  }
  @media (max-width: 1100px) {
    flex-direction: row;
    position: fixed;
    background: white;
    z-index: 100;
    .pc_menu {
      display: none;
    }
    p {
      display: none;
    }
    .mobile_menu_btn {
      display: block;
    }
    .mobile_menu {
      display: block;
    }
  }
`;

const Spacer = styled.div`
  height: 3rem;
  background: white;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickMenu = () => {
    return setIsOpen(!isOpen);
  };
  return (
    <>
      <HeaderBlock>
        <img src={subox} alt="subox" />
        <div className="pc_menu">
          <span>ABOUT SUBOX</span>
          <span>SUBOX ARTISTS</span>
          <span>SERVICE</span>
          <span>MEDIA</span>
          <span>DOWNLOAD</span>
          <span>CONTACT</span>
        </div>
        <button className="mobile_menu_btn" onClick={onClickMenu}>
          <GiHamburgerMenu size="30" />
        </button>
        {isOpen && (
          <div className="mobile_menu">
            <ul>ABOUT SUBOX</ul>
            <ul>SUBOX ARTISTS</ul>
            <ul>SERVICE</ul>
            <ul>MEDIA</ul>
            <ul>DOWNLOAD</ul>
            <ul>CONTACT</ul>
          </div>
        )}
        <p>한국어ㆍ</p>
      </HeaderBlock>
      <Spacer />
    </>
  );
};
export default Header;
