if (window.BlogTest === undefined) {window.BlogTest = {}; }
(function() {
  class BlogPostTwoComponent extends React.Component {
    constructor() {
      super();
    }

    render(){
      return <div>
        <header>
          <div id="eyebrow-nav">
            <ul>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div id="main-nav">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </header>
      </div>
    }
  }

  BlogTest.BlogPostTwoComponent = BlogPostTwoComponent;
})();
