if (window.BlogTest === undefined) {window.BlogTest = {}; }
(function() {
  class MainPageComponent extends React.Component {
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
        <div id="home-pic">
          <div id="home-pic-title">Book Blog</div>
        </div>

        <section>
          <div id="intro-main">
          <h1>Welcome to the Book Review Blog</h1>
          <p>Read the from the recent blog posts on some of the most interesting stories, and characters out there.</p>
          </div>
        </section>
        <section>
          <div className="tabs"><ReactRouter.Link to={'/PostOne'}>one</ReactRouter.Link></div>
          <div className="tabs"><ReactRouter.Link to={'/PostTwo'}>two</ReactRouter.Link></div>
        </section>
        <section>
          <div className="tabs"><ReactRouter.Link to={'/PostThree'}>three</ReactRouter.Link></div>
          <div className="tabs"><ReactRouter.Link to={'/PostFour'}>four</ReactRouter.Link></div>
        </section>
        <section>
          <div className="tabs"><ReactRouter.Link to={'/PostFive'}>five</ReactRouter.Link></div>
          <div className="tabs"><ReactRouter.Link to={'/PostFive'}>five</ReactRouter.Link></div>
        </section>
        <div id="read-more-main">
          <h1>Read more coming soon ...</h1>
        </div>

        <section>
          <div id="archive-main">
            <h1><ReactRouter.Link to={'/Archive'}>Archive</ReactRouter.Link></h1>
            <ul>
              <li>2017</li>
              <li>2016</li>
              <li>2015</li>
            </ul>
          </div>
        </section>

        <div id="newsletter-main">
          <div>
          <form>
            <h1>Get Newsletter</h1>
            <input type="text" />
            <button>sign up</button>
          </form>
          </div>
        </div>

        <footer>
          <p>© copyright 2017 BOOK BLOG</p>
        </footer>
      </div>
    }
  }

  BlogTest.MainPageComponent = MainPageComponent;
})();
