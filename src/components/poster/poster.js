import React, { useState, useEffect } from 'react'
import findEventTitle from './findEventTitle/findEventTitle'

const Poster = ({eventName}) => {
  const [posterImage, setPosterImage] = useState(null)

  useEffect(() => {
    const url = `https://en.wikipedia.org/api/rest_v1/page/media-list/${eventName}?redirect=false`
    fetch(url, {
      method: 'GET',
      headers: {
        Accept:
          'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Media/1.3.1"',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosterImage(data.items[0].srcset[2].src)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [eventName])

  return (
    <div>{posterImage && <img src={posterImage} alt="UFC 274 Poster" />}</div>
  )
}

export default Poster
