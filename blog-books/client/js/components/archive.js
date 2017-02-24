if (window.BlogTest === undefined) {window.BlogTest = {}; }
(function() {
  class ArchiveComponent extends React.Component {
    constructor() {
      super();
    }

    render(){
      return <div>
        <header>
          <div id="eyebrow-nav">
          <ul>
            <li>About</li>
            <li>My books</li>
          </ul>
        </div>
        <div id="main-nav">
          <div id="logo"></div>
          <ul>
            <li>New releases</li>
            <li>Popular</li>
            <li>Categories</li>
            <li>Recent Posts</li>
            <li>Author Interviews</li>
          </ul>
          </div>
        </header>
        <section>
          <div className="tabs"><ReactRouter.Link to={'/PostOne'}>Post One</ReactRouter.Link></div>
          <div className="tabs"><ReactRouter.Link to={'/PostTwo'}>Post Two</ReactRouter.Link></div>
          <div className="tabs"><ReactRouter.Link to={'/PostThree'}>Post Three</ReactRouter.Link></div>
          <div className="tabs"><ReactRouter.Link to={'/PostFour'}>Post Four</ReactRouter.Link></div>
          <div className="tabs"><ReactRouter.Link to={'/PostFive'}>Post Five</ReactRouter.Link></div>
        </section>

      </div>
    }
  }

  BlogTest.ArchiveComponent = ArchiveComponent;
})();
