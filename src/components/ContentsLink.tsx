import React, { FC } from 'react';

export interface WorkItems {
  title: string;
  link: string;
  icon: string;
  description: string;
  skils: string;
}

interface ContentsLinkProps {
  workItems: WorkItems[];
}

const ContentsLink: FC<ContentsLinkProps> = ({ workItems }) => (
  <div>
    {
      workItems.map((content, index) => (
        <div key={index} className="box">
          <a href={content.link} className="box__link box__link--01">
            <div className="box__wrap">
              <h2 className="box__sub-title">
                {content.title}
              </h2>
              <div className="box__text-area">
                <p className="box__text">{content.description}</p>
              </div>
              <div className="box__text-area">
                <p className="box__text">{content.skils}</p>
              </div>
            </div>
          </a>
        </div>
      ))
    }
  </div>

);

export default ContentsLink;
