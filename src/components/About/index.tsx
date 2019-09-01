import React, { FC } from 'react';
import Title from '../Title';
import Image from '../Image';
import Icon from '../Icon';
import Contents, { ContentItems } from '../Contents';

import logo from '../../cidermitaina.jpg';

const About: FC = () => {
  const contentItems: ContentItems[] = [
    {
      content1: 'Shiho Ishitoko',
      content2: '1992.07.18',
    },
    {
      content1: '2015-Banker',
      content2: '2016-Front-end engineer',
    },
  ];

  return (
    <>
      <Title title="About" id="#about" />
      <Image src={logo} alt="cidermitaina" />
      <Icon icon="fa-user-circle" />
      <Contents title="My name is" contentItems={contentItems} />
    </>
  );
}

export default About;
