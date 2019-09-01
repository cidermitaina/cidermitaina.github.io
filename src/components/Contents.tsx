import React, { FC } from 'react';

export interface ContentItems {
  content1: string;
  content2: string;
}

interface ContentsProps {
  title: string;
  contentItems: ContentItems[];
}

const Contents: FC<ContentsProps> = ({ title, contentItems }) => (
  <div className="box">
    <div className="box__wrap">
      <h2 className="box__sub-title">
        {title}
      </h2>
      {contentItems.map((content, index) => (
        <div key={index} className="box__text-area">
          <p className="box__text">{content.content1}</p>
          <p className="box__text">{content.content2}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Contents;
