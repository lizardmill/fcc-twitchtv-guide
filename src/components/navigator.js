import React, { Component } from 'react';
import PropTypes from 'prop-types';


const ulStyle = {
  borderBottomStyle:"none"
}

const Navigator = ({onListChange, activeTab}) => {

  const navigatorTabList = ['all', 'streaming', 'inactive'];

  let aStyle = {};

  const navigatorTab = navigatorTabList.map(tabName => {
    let active = "";
    if (tabName === activeTab) {
      active = "active";
      aStyle = {
        width: "7.1rem",
        backgroundColor: "white"
      }
    } else if (tabName === 'all'){
      aStyle = {
        width: "7.1rem",
        backgroundColor: "#D17070"
      }
    } else if (tabName === 'streaming'){
      aStyle = {
        width: "7.1rem",
        backgroundColor: "#A281EA"
      }
    } else if (tabName === 'inactive'){
      aStyle = {
        width: "7.2rem",
        backgroundColor: "darkseagreen"
      }
    }


    return (
      <li className="nav-item" key={tabName}>
        <a className={"nav-link " + active }
          onClick={() => onListChange(tabName)}
          data-toggle="tab" style={aStyle}>
          {tabName}
        </a>
      </li>
    );
  });

  return (
    <div>
      <ul className="nav nav-tabs" role="tab-list" style={ulStyle}>
        {navigatorTab}
      </ul>
    </div>
  )
};

Navigator.propTypes = {
  onListChange: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired
};

export default Navigator;
