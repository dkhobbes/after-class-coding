var mountNode = document.querySelector('#react-root');

class AppComponent extends React.Component {
  render() {
    return <div>
      <header>
        <div className="margin_1"></div>
        <div className="margin_2"></div>
      </header>
    </div>;
  }
}

ReactDOM.render(<AppComponent />, mountNode);
