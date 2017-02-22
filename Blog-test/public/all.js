"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BlogTest === undefined) {
  window.BlogTest = {};
}
(function () {
  var Archive = function (_React$Component) {
    _inherits(Archive, _React$Component);

    function Archive() {
      _classCallCheck(this, Archive);

      return _possibleConstructorReturn(this, (Archive.__proto__ || Object.getPrototypeOf(Archive)).call(this));
    }

    _createClass(Archive, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          null,
          React.createElement(
            "header",
            null,
            React.createElement(
              "div",
              { className: "nav-tabs" },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                "Home"
              )
            ),
            React.createElement(
              "div",
              { className: "nav-tabs" },
              React.createElement(
                ReactRouter.Link,
                { to: '/locator' },
                "Locator"
              )
            ),
            React.createElement(
              "div",
              { className: "nav-tabs" },
              React.createElement(
                ReactRouter.Link,
                { to: '/abv' },
                "ABV"
              )
            ),
            React.createElement(
              "div",
              { className: "nav-tabs" },
              React.createElement(
                ReactRouter.Link,
                { to: '/ibu' },
                "IBU"
              )
            )
          )
        );
      }
    }]);

    return Archive;
  }(React.Component);

  BlogTest.Archive = Archive;
})();
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";

if (window.BlogTest === undefined) {
      window.BlogTest = {};
}

(function () {
      var mountNode = document.querySelector('#react-root');

      var Router = ReactRouter.Router;
      var Route = ReactRouter.Route;
      var IndexRoute = ReactRouter.IndexRoute;

      var router = React.createElement(
            Router,
            { history: BlogTest.hashHistory },
            React.createElement(Route, { path: "/", component: BlogTest.MainPage }),
            React.createElement(Route, { path: "/Archive", component: BlogTest.Archive }),
            React.createElement(Route, { path: "/PostOne", component: BlogTest.BlogPostOne }),
            React.createElement(Route, { path: "/PostTwo", component: BlogTest.BlogPostTwo }),
            React.createElement(Route, { path: "/PostThree", component: BlogTest.BlogPostThree }),
            React.createElement(Route, { path: "/PostFour", component: BlogTest.BlogPostFour }),
            React.createElement(Route, { path: "/PostFive", component: BlogTest.BlogPostFive })
      );

      ReactDOM.render(router, mountNode);
})();
//# sourceMappingURL=all.js.map
