import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Navigator = ({onListChange, activeTab}) => {

  const navigatorTabList = ['all', 'streaming', 'inactive'];

  const navigatorTab = navigatorTabList.map(tabName => {
    let active = "";
    if (tabName === activeTab) {
      active = "active";
    }
    return (
      <li className="nav-item" key={tabName}>
        <a className={"nav-link " + active } onClick={() => onListChange(tabName)} data-toggle="tab">{tabName}</a>
      </li>
    );
  });

  return (
    <div>
      <ul className="nav nav-tabs" role="tab-list">
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
