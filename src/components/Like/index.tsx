import React, { FC } from 'react';
import Icon from '../Icon';
import Contents, { ContentItems } from '../Contents';

const Like: FC = () => {
  const contentItems: ContentItems[] = [
    {
      content1: 'Music',
      content2: 'dream-pop / indie-rock / shoegaze / electro / electronica /  lofi hiphop /',
    },
    {
      content1: 'Game',
      content2: 'Retro game（GB / GBA / PS / PS2）',
    },
    {
      content1: 'Book',
      content2: '',
    },
  ];

  return (
    <>
      <Icon icon="fa-heart-o" />
      <Contents title="Like" contentItems={contentItems} />
    </>
  );
}

export default Like;
