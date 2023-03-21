import { useEffect, useState } from 'react'
import {
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share'

import {
  FacebookIcon,
  RedditIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share'

const ShareButtons = ({picksShareUrl, updated}) => {
  const [url, setUrl] = useState(picksShareUrl)
  useEffect(() => {
    console.log(url)
  },updated)
  return (
    <div>
      <FacebookShareButton url={url}>
        <FacebookIcon size={40} />
      </FacebookShareButton>
      <RedditShareButton url={url}>
        <RedditIcon size={40} />
      </RedditShareButton>
      <TwitterShareButton url={url} media={url}>
        <TwitterIcon size={40} />
      </TwitterShareButton>
      <WhatsappShareButton url={url} media={url}>
        <WhatsappIcon size={40} />
      </WhatsappShareButton>
    </div>
  )
}

export default ShareButtons
