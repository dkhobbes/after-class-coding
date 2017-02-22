if (window.BlogTest === undefined) {window.BlogTest = {}; }

(function() {
var mountNode = document.querySelector('#react-root');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var router = <Router history={BlogTest.hashHistory}>
      <Route path="/" component={BlogTest.MainPage} />
      <Route path="/Archive" component={BlogTest.Archive} />
      <Route path="/PostOne" component={BlogTest.BlogPostOne} />
      <Route path="/PostTwo" component={BlogTest.BlogPostTwo} />
      <Route path="/PostThree" component={BlogTest.BlogPostThree} />
      <Route path="/PostFour" component={BlogTest.BlogPostFour} />
      <Route path="/PostFive" component={BlogTest.BlogPostFive} />
    </Router>;

ReactDOM.render(router, mountNode);
})();
