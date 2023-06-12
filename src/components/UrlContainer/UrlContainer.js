import React from 'react';
import './UrlContainer.css';
import UrlCard from '../UrlCard/UrlCard';
import PropTypes from 'prop-types';

const UrlContainer = urlList => {
  const urlEls = urlList.urls.map(url => {
    return (
      <UrlCard
        id={url.id}
        key={url.id}
        long_url={url.long_url}
        short_url={url.short_url}
        title={url.title}
      />
    )
  });

  return (
    <section className='urlContainer'>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;

UrlContainer.propTypes = {
  urlList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      key: PropTypes.number.isRequired,
      long_url: PropTypes.string.isRequired,
      short_url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  )
}