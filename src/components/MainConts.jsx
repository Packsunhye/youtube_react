import React, { useEffect, useState } from 'react';
import { fetchAPI } from '../utils/fetchAPI';
import { Category, Video } from './index';

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState('PlayList');
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectCategory}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [selectCategory]);

  return (
    <main id="main">
      <aside id="aside">
        <Category
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </aside>
      <section id="constents">
        <h2>
          <em>{selectCategory}</em> 유튜브
        </h2>
        <Video videos={videos} />
      </section>
    </main>
  );
};

export default MainConts;
