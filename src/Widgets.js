import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed'
import SearchIcon from '@material-ui/icons/Search'
import './Widgets.css'

function Widgets () {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon' />
        <input placeholder='Search Twitter' type='text' />
      </div>
      <div className="widgets__widgetContainer">
        
      </div>
    </div>
  )
}

export default Widgets
