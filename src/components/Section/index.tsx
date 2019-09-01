import React, { FC } from 'react';
import Top from '../Top';
import Menu from '../Menu';
import About from '../About';
import Like from '../Like';
import Skill from '../Skill';
import Works from '../Works';
import Contact from '../Contacts';
import EmptyBox from '../EmptyBox';

import './index.scss';

const Contents: FC = () => {
  return (
    <section className="contents">
      <Top title="cidermitaina.github.io" />
      <Menu />
      <About />
      <Like />
      <Skill />
      <Works />
      <Contact />
      <EmptyBox />
    </section>
  );
}

export default Contents;
