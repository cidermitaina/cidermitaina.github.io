import React, { FC } from 'react';

interface IconProps {
  icon: string;
}

const Icon: FC<IconProps> = ({ icon }) => (
  <div className="box">
    <div className="box__icon">
      <i className={`fa ${icon}`} aria-hidden="true"></i>
    </div>
  </div>
);

export default Icon;
