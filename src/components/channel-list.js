import React, { Component } from 'react';
import TwitchChannel from './twitch-channel.js';
import PropTypes from 'prop-types';


const ChannelList = ({arrayOfTwitchers}) => {
  const twitchers = arrayOfTwitchers.map(twitchers =>{
    let active = '';
    if (twitchers.stream != null){
      active = 'active';
    }
    return (
      <li className={"list-group-item " + active} key={twitchers.name}>
        <TwitchChannel twitchers={twitchers.name} />
      </li>
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {twitchers}
    </ul>
  );
};

ChannelList.propTypes = {
  arrayOfTwitchers: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default ChannelList;
