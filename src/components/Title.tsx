import React, { FC } from 'react';

interface TitleProps {
  title: string;
  id: string;
}

const Top: FC<TitleProps> = ({ title, id }) => (
  <div className="box" id={id}>
    <h2 className="box__title">
      <strong>{title}</strong>
    </h2>
  </div>
);

export default Top;
