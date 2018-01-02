import React from 'react';

const TwitchChannel = ({twitcher}) => {
  let statusIcon = 'far fa-times-circle';
  let streamingInfo = '';
  let channelLink = 'http://www.twitch.tv/' + twitcher.name;;

  if (twitcher.stream != null){
    statusIcon = 'fas fa-play-circle';
    streamingInfo = twitcher.stream.channel.status;
  }


  const pStyle = {
    fontSize: ".75rem",
    fontStyle: "italic",
    color: "#939393",
    marginBottom: "0"
  }

  return (
    <div className="media-body">

      <div className="media-heading">

        <a href={channelLink} target="_blank">{twitcher.name}</a> <div class="float-right"><i class={statusIcon}></i></div>
        {streamingInfo &&
        <p style={pStyle}>
          {streamingInfo}
        </p>
        }

      </div>

    </div>
  );
};

export default TwitchChannel;
