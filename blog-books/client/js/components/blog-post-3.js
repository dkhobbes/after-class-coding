if (window.BlogTest === undefined) {window.BlogTest = {}; }
(function() {
  class BlogPostThreeComponent extends React.Component {
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
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </div>
        </header>
      </div>
    }
  }

  BlogTest.BlogPostThreeComponent = BlogPostThreeComponent;
})();
