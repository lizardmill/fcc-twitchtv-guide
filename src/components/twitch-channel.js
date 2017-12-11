import React from 'react';

const TwitchChannel = ({twitchers}) => {
  return (
    <div className="media-body">
      <div className="media-heading">
        {twitchers}
      </div>
    </div>
  );
};

export default TwitchChannel;
