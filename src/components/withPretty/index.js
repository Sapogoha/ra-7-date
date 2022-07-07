import React from 'react';
import PropTypes from 'prop-types';

import dayjs from 'dayjs';
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

function withPretty(Component) {
  const makePretty = function (props) {
    const prettyDate = dayjs(props.date).fromNow();
    return <Component {...props} date={prettyDate} />;
  };

  const componentName = Component.displayName || Component.name || 'Component';
  makePretty.displayName = `${componentName}Pretty`;

  return makePretty;
}

withPretty.propTypes = {
  date: PropTypes.string.isRequired,
};

export default withPretty;
