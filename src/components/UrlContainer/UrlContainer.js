import React from 'react';
import './UrlContainer.css';
import UrlCard from '../UrlCard/UrlCard';

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
