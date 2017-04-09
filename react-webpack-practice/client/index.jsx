import React from 'react';
import { render } from 'react-dom';

import Header from './js/header.jsx';

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return (
      <div>
        <Header />

        <p className="center">This is a sample paragraph.</p>
        <p className="center">This is a sample paragraph.</p>
        <p className="center">This is a sample paragraph.</p>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
