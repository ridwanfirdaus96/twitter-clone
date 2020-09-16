import React from 'react'
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import RepeatIcon from '@material-ui/icons/Repeat'
import PublishIcon from '@material-ui/icons/Publish'
import './Post.css'

function Post ({ displayName, username, verified, timestamp, text, image, avatar }) {
  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar src='https://avatars3.githubusercontent.com/u/26730360?s=460&u=292b31d53597e43d3f903bd9d44c971fd0ba4dd3&v=4' />
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='headerText'>
            <h3>Ridwan Firdaus{' '} 
              <span className='post__headerSpecial'>
                <VerifiedUserIcon className='post__badge' />@ridwanfirdaus96
              </span>
            </h3>
          </div>
          <div className='post__headerDescription'>
            <p>I challenge you to build a twitter clone with react js</p>
          </div>
        </div>
        <img src='https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif' alt='' />
        <div className='post__footer'>
          <ChatBubbleOutlineIcon fontSize='small' />
          <RepeatIcon fontSize='small' />
          <FavoriteBorderIcon fontSize='small' />
          <PublishIcon fontSize='small' />
        </div>
      </div>
    </div>
  )
}

export default Post
