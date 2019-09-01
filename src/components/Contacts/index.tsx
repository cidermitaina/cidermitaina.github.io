import React, { FC } from 'react';
import Title from '../Title';
import Contact, { ContactItems } from './Contact';

const Works: FC = () => {

  const contactItems: ContactItems[] = [
    {
      title: 'Twiiter',
      link: 'https://twitter.com/cidermitaina',
      icon: 'twitter',
    },
    {
      title: 'Instagram',
      link: 'https://www.instagram.com/stsiiii/',
      icon: 'instagram',
    },
    {
      title: 'Github',
      link: 'https://github.com/cidermitaina',
      icon: 'github',
    },
    {
      title: 'Blog',
      link: 'http://cidermitaina.hatenablog.com/',
      icon: 'blog',
    },
  ]

  return (
    <>
      <Title title="Contact" id="#contact" />
      <Contact contactItems={contactItems} />
    </>
  );
}

export default Works;
