import React from 'react';
import BorderCorner from './BorderCorner';
import PropTypes from 'prop-types';
import { borderCornerData } from './borderCornerData';

const Border = ({ children }) => {
  return (
    <>
      <BorderCorner
        grid={borderCornerData.cornerNW.grid}
        shape={borderCornerData.cornerNW.shape}
      />
      <BorderCorner
        grid={borderCornerData.cornerNE.grid}
        shape={borderCornerData.cornerNE.shape}
      />
      <BorderCorner
        grid={borderCornerData.cornerSW.grid}
        shape={borderCornerData.cornerSW.shape}
      />
      <BorderCorner
        grid={borderCornerData.cornerSE.grid}
        shape={borderCornerData.cornerSE.shape}
      />
      <div>{children}</div>
    </>
  );
};

Border.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Border;
