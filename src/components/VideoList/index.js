import React from 'react';
import PropTypes from 'prop-types';

import VideoItem from '../VideoItem';

function VideoList({ list }) {
  return list.map((item) => (
    <VideoItem key={item.url} url={item.url} date={item.date} />
  ));
}

VideoList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default VideoList;
