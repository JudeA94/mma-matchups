import React, { useState, useEffect } from 'react'

function Poster({eventName}) {
  const [posterImageURL, setPosterImageURL] = useState(null)

  useEffect(() => {
    const title = eventName.replace(/\s+/g, "_");
    const url = `https://en.wikipedia.org/api/rest_v1/page/media-list/${title}?redirect=false`
    fetch(url, {
      method: 'GET',
      headers: {
        Accept:
          'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Media/1.3.1"',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosterImageURL(data.items[0].srcset[2].src)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div>{posterImageURL && <img src={posterImageURL} alt={`${eventName} + poster`} />}</div>
  )
}

export default Poster
