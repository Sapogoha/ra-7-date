import React from 'react';
import PropTypes from 'prop-types';

import DateTime from '../DateTime';
import withPretty from '../withPretty';

function VideoItem({ date, url }) {
  const DateTimePretty = withPretty(DateTime);

  return (
    <div className="video">
      <iframe
        src={url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <DateTimePretty date={date} />
    </div>
  );
}

VideoItem.propTypes = {
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default VideoItem;
