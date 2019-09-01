import React, { FC } from 'react';

export interface ContactItems {
  title: string;
  link: string;
  icon: string;
}

interface ContactProps {
  contactItems: ContactItems[];
}

const Work: FC<ContactProps> = ({ contactItems }) => (
  <>
    {
      contactItems.map((contact, index) => (
        <div className="box" key={index}>
          <a
            className={`box__link box__link--sns box__link--${contact.icon}`}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="box__sns-title">
              {contact.title}
            </p>
          </a>
        </div>
      ))
    }
  </>
);

export default Work;
