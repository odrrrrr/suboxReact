import React from 'react';
import styled from 'styled-components';
import grid_1 from '../../../images/grid_1.png';
import grid_2 from '../../../images/grid_2.png';
import grid_3 from '../../../images/grid_3.png';
import grid_4 from '../../../images/grid_4.png';
import grid_5 from '../../../images/grid_5.png';
import grid_6 from '../../../images/grid_6.png';
import { Grid } from '@material-ui/core';
import useScrollAnimation from '../../../lib/hook/useScrollAnimation';
const RightPartBlock = styled.div`
  transform: scale(0.7, 0.9);
  width: 100%;
  .gridBox {
    display: flex;
    justify-content: flex-end;
  }
  img {
    width: 150px;
    height: 150px;
    object-fit: contain;
  }

  @media (max-width: 1100px) {
    .gridBox {
      justify-content: center;
      align-items: center;
      .img {
        width: 100%;
      }
    }
  }
`;

const RightPart = () => {
  const scrollAnimation = useScrollAnimation('scale');
  const grid_img = [grid_1, grid_2, grid_3, grid_4, grid_5, grid_6];
  return (
    <RightPartBlock {...scrollAnimation}>
      <div className="gridBox">
        <Grid item xs={6}>
          {grid_img.map((img, index) => (
            <img src={img} alt="img" key={index} />
          ))}
        </Grid>
      </div>
    </RightPartBlock>
  );
};
export default RightPart;
