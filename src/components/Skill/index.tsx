import React, { FC } from 'react';
import Icon from '../Icon';
import Contents, { ContentItems } from '../Contents';

const Like: FC = () => {
  const contentItems: ContentItems[] = [
    {
      content1: 'HTML / CSS / Sass / SCSS / PostCSS / JavaScript / jQuery / PHP / WordPress / gulp / git /',
      content2: '',
    },
  ];

  return (
    <>
      <Icon icon="fa-code" />
      <Contents title="Skill" contentItems={contentItems} />
    </>
  );
}

export default Like;
