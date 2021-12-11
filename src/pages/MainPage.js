import React from 'react';
import Footer from '../components/common/Footer';
import HeaderContainer from '../containers/common/HeaderContainer';
import Bn1Container from '../containers/main/Bn1Container';
import Bn2Container from '../containers/main/Bn2Container';
import IntroContainer from '../containers/main/IntroContainer';
import MainArticleContainer from '../containers/main/MainArticleContainer';
import SblockContainer from '../containers/main/SblockContainer';
import SutoryContainer from '../containers/main/SutoryContainer';

const MainPage = () => {
  return (
    <>
      <HeaderContainer />
      <IntroContainer />
      <Bn1Container />
      <SutoryContainer />
      <Bn2Container />
      <SblockContainer />
      <MainArticleContainer />
      <Footer />
    </>
  );
};
export default MainPage;
