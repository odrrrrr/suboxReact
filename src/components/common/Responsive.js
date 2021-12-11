import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1280px;
  margin: 0 auto;

  @media (max-width: 1280px) {
    width: 100%;
  }
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};
export default Responsive;
