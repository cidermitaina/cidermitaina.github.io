import React, { FC } from 'react';

interface TopProps {
  title: string;
}

const Top: FC<TopProps> = ({ title }) => (
  <div className="box" id="top">
    <h1 className="box__top-title">
      {title}
    </h1>
  </div>
);

export default Top;
