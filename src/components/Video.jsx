import React from 'react';
import { VideoCard, Loader } from './index';

const Video = ({ videos, layout }) => {
  if (!videos?.length) return <Loader />;

  return (
    <article className={`videos__inner ${layout}`}>
      {videos.map((items, index) => (
        <VideoCard key={index} video={items} />
      ))}
    </article>
  );
};

export default Video;
