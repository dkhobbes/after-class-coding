import React from 'react';

class Header extends React.Component {

  render () {
    return (
      <header>
        <h1>Welcome Header!</h1>
        <div className="toggle">toggle</div>
      </header>
    );
  }
}

module.exports = Header;
