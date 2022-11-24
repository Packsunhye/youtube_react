import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchAPI } from '../utils/fetchAPI';
import { Video, Category } from './index';

const SearchConts = () => {
  const [selectCategory, setSelectCategory] = useState('PlayList');
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectCategory}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [selectCategory]);

  return (
    <>
      <div className="search__inner">
        <aside id="aside">
          <Category
            selectCategory={selectCategory}
            setSelectCategory={setSelectCategory}
          />
        </aside>
        <div className="search__cont">
          <div className="result">
            <em>" {searchTerm} "</em>를 검색하였습니다 :3
          </div>
          <div className="sub">
            <Video videos={videos} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchConts;
