import React, { FC } from 'react';

interface ImageProps {
  src: string;
  alt: string;
}

const Image: FC<ImageProps> = ({ src, alt }) => (
  <div className="box">
    <div className="box__img">
      <img src={src} className="App-logo" alt={alt} />
    </div>
  </div>
);

export default Image;
