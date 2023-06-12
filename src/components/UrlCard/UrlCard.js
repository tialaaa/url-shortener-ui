import React from 'react';
import './UrlCard.css';
import PropTypes from 'prop-types';

const UrlCard = ({ title, short_url, long_url }) => {
  return (
    <div className="url">
      <h3>{title}</h3>
      <a href={short_url} target="blank">{short_url}</a>
      <p>{long_url}</p>
    </div>
  )
}

export default UrlCard;

UrlCard.propTypes = {
  title: PropTypes.string.isRequired,
  short_url: PropTypes.string.isRequired,
  long_url: PropTypes.string.isRequired,
}