import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <div className="search">
      <label className="glass" htmlFor="searchInput">
        <FiSearch />
      </label>
      <input
        type="text"
        id="searchInput"
        className="input__search"
        placeholder="좋아하는 음악을 검색하세요 :3"
        title="검색"
      />
    </div>
  );
};

export default SearchBar;
