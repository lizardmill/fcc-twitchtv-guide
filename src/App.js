import React, { Component } from 'react';
import SearchBar from './components/search-bar.js';
import Navigator from './components/navigator.js';
import ChannelList from './components/channel-list.js';
import $ from 'jquery';
import async from 'async';

const listOfTwitchers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"].sort((a,b) => a.toLowerCase() > b.toLowerCase());

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      twitchers: [],
      activeTab: "all",
      term: ""
    };

    async.map(listOfTwitchers, (current_username, callback) => {
      // using jsonp hack/workaround
      $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+ current_username + '?callback=?', function(allTwitcherData) {
        const newTwitcher = {
          ...allTwitcherData,
          "name": current_username
        };
        callback(null, newTwitcher);
      });
    }, (err, allTwitcherData) => {
      if (err) {
        console.error(err);
      }
      this.setState({twitchers: allTwitcherData})
    });

  }

  render() {
    return (
      <div>
        <Navigator onListChange={this.setActiveTab} activeTab={this.state.activeTab}/>
        <SearchBar term={this.state.term} onSearchTermChange={this.setNewSearchTerm} />
        <ChannelList arrayOfTwitchers={this.getFilteredList(this.state.twitchers, this.state.activeTab, this.state.term) } />
      </div>
    );
  }

  setActiveTab = (tabName) => {
    this.setState({activeTab: tabName})
  }

  getFilteredList = (originalList, activeTab, searchString) => {
    let filteredList = [];
    searchString = searchString.toLowerCase()

    if (activeTab == "all") {
      filteredList = originalList;
    } else if (activeTab == "streaming") {
      filteredList = originalList.filter(twitcherObject => twitcherObject.stream);
    } else if (activeTab == "inactive") {
      filteredList = originalList.filter(twitcherObject => !(twitcherObject.stream));
    } else {
      console.error("Error on line activeTab. Received " + activeTab + ": expected 'chicken'" );
      // inside joke. http://torso.me/chicken
    }

    if (searchString.length > 0) {
      filteredList = filteredList.filter(twitcherObject => twitcherObject.name.toLowerCase().includes(searchString));
    }
    return filteredList;
  }

  setNewSearchTerm = (term) => {
    this.setState({term});
  }
}
