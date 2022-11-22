import React from 'react';
import { SearchBar } from './index.js';
import { ImEvil2 } from 'react-icons/im';
import { Link } from 'react-router-dom';

const HeaderCont = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <Link to="/">
          <ImEvil2 className="bug" /> Music Youtube
        </Link>
      </h1>
      <SearchBar />
    </header>
  );
};

export default HeaderCont;
