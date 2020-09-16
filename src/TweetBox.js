import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core'

function TweetBox () {
  return (
    <div className='tweetBox'>
      <form action=''>
        <div className='tweetBox__input'>
          <Avatar src='https://avatars3.githubusercontent.com/u/26730360?s=460&u=292b31d53597e43d3f903bd9d44c971fd0ba4dd3&v=4' />
          <input placeholder="What's happening?" type='text' />
        </div>
        <input className='tweetBox__imageInput' placeholder="Optional: Enter Image URL" type='text' />
        <Button className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
