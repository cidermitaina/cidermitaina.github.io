import React, { FC } from 'react';

export interface WorkItems {
  title: string;
  link: string;
  icon: string;
  description: string;
  skils: string;
}

interface WorkProps {
  workItems: WorkItems[];
}

const Work: FC<WorkProps> = ({ workItems }) => (
  <>
    {
      workItems.map((work, index) => (
        <div className="box" key={index}>
          <a href={work.link} className={`box__link box__link--${work.icon}`}>
            <div className="box__wrap">
              <h2 className="box__sub-title">
                {work.title}
              </h2>
              <div className="box__text-area">
                <p className="box__text">{work.description}</p>
              </div>
              <div className="box__text-area">
                <p className="box__text">{work.skils}</p>
              </div>
            </div>
          </a>
        </div>
      ))
    }
  </>
);

export default Work;
