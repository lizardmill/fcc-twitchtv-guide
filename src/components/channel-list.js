import React, { Component } from 'react';
import TwitchChannel from './twitch-channel.js';
import PropTypes from 'prop-types';

const liStyle = {
  borderTopLeftRadius: "0",
  borderTopRightRadius: "0"
}

const ChannelList = ({arrayOfTwitchers}) => {
  const twitchers = arrayOfTwitchers.map(twitchers =>{
    let active = '';
    console.log(twitchers);
    // if (twitchers.stream != null){
    //   active = 'active';
    // }
    return (
      <li className={"list-group-item " + active} key={twitchers.name} style={liStyle}>
        <TwitchChannel twitcher={twitchers} />
      </li>

    );
  });

  return (
    <ul className="list-group">
      {twitchers}
    </ul>
  );
};

ChannelList.propTypes = {
  arrayOfTwitchers: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default ChannelList;
