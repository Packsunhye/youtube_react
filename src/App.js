import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  HeaderCont,
  MainConts,
  VideoConts,
  ChannelConts,
  SearchConts,
} from './components';

// import MainConts from './components/MainConts'
// import VideoConts from './components/VideoConts'
// import ChannelConts from './components/ChannelConts'
// import SearchConts from './components/SearchConts'

const App = () => {
  return (
    <BrowserRouter>
      <HeaderCont />
      <Routes>
        <Route path="/" element={<MainConts />}></Route>
        <Route path="/video/:id" element={<VideoConts />}></Route>
        <Route path="/channel/:id" element={<ChannelConts />}></Route>
        <Route path="/search/:keyword" element={<SearchConts />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
