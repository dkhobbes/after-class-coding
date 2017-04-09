import React from 'react';

class Header extends React.Component {

constructor() {
  super();
  console.log('firing constructor');

  this.state= {
    currentClass:'start-state'
  };
}

toggle(){
  if(this.state.currentClass === 'on-state'){
    this.setState({
      currentClass: 'start-state'
    });
  }
  else {
    this.setState({
      currentClass: 'on-state'
    });
  }
}

  render () {
    return (
      <header>
        <h1>Welcome Header!</h1>
        <div className={this.state.currentClass} onClick={() => {this.toggle(); }}>Click this to toggle in React</div>
      </header>
    );
  }
}

module.exports = Header;
