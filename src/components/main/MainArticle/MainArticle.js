import React from 'react';
import styled from 'styled-components';
import Responsive from '../../common/Responsive';
import BottomPart from './BottomPart';
import TopPart from './TopPart';
import articleImg from '../../../images/main_article_background.png';

const MainArticleBlock = styled.div`
  background: url(${articleImg}) 0% 20% no-repeat;
  background-size: cover;
`;

const Wrapper = styled(Responsive)``;

const MainArticle = () => {
  return (
    <MainArticleBlock>
      <Wrapper>
        <TopPart />
      </Wrapper>
      <BottomPart />
    </MainArticleBlock>
  );
};
export default MainArticle;
