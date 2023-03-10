import React, { useState, useEffect } from 'react'

function Poster() {
  const [posterImage, setPosterImage] = useState(null)

  useEffect(() => {
    // Make a GET request to the UFC 274 event page
    const title = 'UFC_Fight_Night:_Yan_vs._Dvalishvili'
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
        console.log(data.items[0].srcset[2].src)
        setPosterImage(data.items[0].srcset[2].src)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div>{posterImage && <img src={posterImage} alt="UFC 274 Poster" />}</div>
  )
}

export default Poster
