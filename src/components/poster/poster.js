import React, { useState, useEffect } from 'react'

const Poster = ({eventName}) => {
  const SerpApi = require('google-search-results-nodejs');
  const search = new SerpApi.GoogleSearch("d3953621f721fd3b8c17c31058f293152611798d1bb88381df15e522e94a87b0");
  const [posterImage, setPosterImage] = useState(null)

  const getPosterImgSrc = (searchQuery) => {
    const params = {
      q: searchQuery + " poster",
      tbm: "isch",
      ijn: "0"
    };
    console.log(params.q)
    const callback = function(data) {
      return data["images_results"][0].original;
    };
    search.json(params, callback);
  }

  useEffect(() => {
    const source = getPosterImgSrc(eventName)
    setPosterImage(source)
  }, [eventName])

  return (
    <div>{posterImage && <img src={posterImage} alt="UFC 274 Poster" />}</div>
  )
}

export default Poster
