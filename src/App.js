import React, { useState } from 'react';
import './App.css';

import VideoList from './components/VideoList';

import data from './data';

function App() {
  const [list, setList] = useState(data);

  return <VideoList list={list} />;
}

export default App;
