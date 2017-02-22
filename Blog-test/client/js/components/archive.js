if (window.BlogTest === undefined) {window.BlogTest = {}; }
(function() {
  class Archive extends React.Component {
    constructor() {
      super();
    }

    render(){
      return <div>
        <header>
          <div className="nav-tabs"><ReactRouter.Link to={'/'}>Home</ReactRouter.Link></div>
          <div className="nav-tabs"><ReactRouter.Link to={'/locator'}>Locator</ReactRouter.Link></div>
          <div className="nav-tabs"><ReactRouter.Link to={'/abv'}>ABV</ReactRouter.Link></div>
          <div className="nav-tabs"><ReactRouter.Link to={'/ibu'}>IBU</ReactRouter.Link></div>
        </header>
      </div>
    }
  }

  BlogTest.Archive = Archive;
})();
