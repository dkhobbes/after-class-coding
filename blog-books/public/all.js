"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BlogTest === undefined) {
  window.BlogTest = {};
}
(function () {
  var ArchiveComponent = function (_React$Component) {
    _inherits(ArchiveComponent, _React$Component);

    function ArchiveComponent() {
      _classCallCheck(this, ArchiveComponent);

      return _possibleConstructorReturn(this, (ArchiveComponent.__proto__ || Object.getPrototypeOf(ArchiveComponent)).call(this));
    }

    _createClass(ArchiveComponent, [{
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
              { id: "eyebrow-nav" },
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  "About"
                ),
                React.createElement(
                  "li",
                  null,
                  "My books"
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/' },
                    "Home"
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { id: "main-nav" },
              React.createElement("div", { id: "logo" }),
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  "New releases"
                ),
                React.createElement(
                  "li",
                  null,
                  "Popular"
                ),
                React.createElement(
                  "li",
                  null,
                  "Categories"
                ),
                React.createElement(
                  "li",
                  null,
                  "Recent Posts"
                ),
                React.createElement(
                  "li",
                  null,
                  "Author Interviews"
                )
              )
            )
          ),
          React.createElement(
            "section",
            null,
            React.createElement(
              "div",
              { className: "tabs" },
              React.createElement(
                ReactRouter.Link,
                { to: '/PostOne' },
                "one"
              )
            ),
            React.createElement(
              "div",
              { className: "tabs" },
              React.createElement(
                ReactRouter.Link,
                { to: '/PostTwo' },
                "two"
              )
            )
          ),
          React.createElement(
            "section",
            null,
            React.createElement(
              "div",
              { className: "tabs" },
              React.createElement(
                ReactRouter.Link,
                { to: '/PostThree' },
                "three"
              )
            ),
            React.createElement(
              "div",
              { className: "tabs" },
              React.createElement(
                ReactRouter.Link,
                { to: '/PostFour' },
                "four"
              )
            )
          ),
          React.createElement(
            "section",
            null,
            React.createElement(
              "div",
              { className: "tabs" },
              React.createElement(
                ReactRouter.Link,
                { to: '/PostFive' },
                "five"
              )
            ),
            React.createElement(
              "div",
              { className: "tabs" },
              React.createElement(
                ReactRouter.Link,
                { to: '/PostFive' },
                "five"
              )
            )
          ),
          React.createElement(
            "section",
            null,
            React.createElement(
              "div",
              { className: "tabs" },
              React.createElement(
                ReactRouter.Link,
                { to: '/PostThree' },
                "three"
              )
            ),
            React.createElement(
              "div",
              { className: "tabs" },
              React.createElement(
                ReactRouter.Link,
                { to: '/PostFour' },
                "four"
              )
            )
          ),
          React.createElement(
            "section",
            null,
            React.createElement(
              "div",
              { className: "tabs" },
              React.createElement(
                ReactRouter.Link,
                { to: '/PostFive' },
                "five"
              )
            ),
            React.createElement(
              "div",
              { className: "tabs" },
              React.createElement(
                ReactRouter.Link,
                { to: '/PostFive' },
                "five"
              )
            )
          ),
          React.createElement(
            "footer",
            null,
            React.createElement(
              "p",
              null,
              "\xA9 copyright 2017 BOOK BLOG"
            )
          )
        );
      }
    }]);

    return ArchiveComponent;
  }(React.Component);

  BlogTest.ArchiveComponent = ArchiveComponent;
})();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BlogTest === undefined) {
  window.BlogTest = {};
}
(function () {
  var BlogPostOneComponent = function (_React$Component) {
    _inherits(BlogPostOneComponent, _React$Component);

    function BlogPostOneComponent() {
      _classCallCheck(this, BlogPostOneComponent);

      return _possibleConstructorReturn(this, (BlogPostOneComponent.__proto__ || Object.getPrototypeOf(BlogPostOneComponent)).call(this));
    }

    _createClass(BlogPostOneComponent, [{
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
              { id: "eyebrow-nav" },
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  "About"
                ),
                React.createElement(
                  "li",
                  null,
                  "My books"
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/' },
                    "Home"
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { id: "main-nav" },
              React.createElement("div", { id: "logo" }),
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  "New releases"
                ),
                React.createElement(
                  "li",
                  null,
                  "Popular"
                ),
                React.createElement(
                  "li",
                  null,
                  "Categories"
                ),
                React.createElement(
                  "li",
                  null,
                  "Recent Posts"
                ),
                React.createElement(
                  "li",
                  null,
                  "Author Interviews"
                )
              )
            )
          ),
          React.createElement(
            "section",
            null,
            React.createElement(
              "div",
              null,
              "example post"
            )
          ),
          React.createElement(
            "footer",
            null,
            React.createElement(
              "p",
              null,
              "\xA9 copyright 2017 BOOK BLOG"
            )
          )
        );
      }
    }]);

    return BlogPostOneComponent;
  }(React.Component);

  BlogTest.BlogPostOneComponent = BlogPostOneComponent;
})();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BlogTest === undefined) {
  window.BlogTest = {};
}
(function () {
  var BlogPostTwoComponent = function (_React$Component) {
    _inherits(BlogPostTwoComponent, _React$Component);

    function BlogPostTwoComponent() {
      _classCallCheck(this, BlogPostTwoComponent);

      return _possibleConstructorReturn(this, (BlogPostTwoComponent.__proto__ || Object.getPrototypeOf(BlogPostTwoComponent)).call(this));
    }

    _createClass(BlogPostTwoComponent, [{
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
              { id: "eyebrow-nav" },
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  "About"
                ),
                React.createElement(
                  "li",
                  null,
                  "My books"
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/' },
                    "Home"
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { id: "main-nav" },
              React.createElement("div", { id: "logo" }),
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  "New releases"
                ),
                React.createElement(
                  "li",
                  null,
                  "Popular"
                ),
                React.createElement(
                  "li",
                  null,
                  "Categories"
                ),
                React.createElement(
                  "li",
                  null,
                  "Recent Posts"
                ),
                React.createElement(
                  "li",
                  null,
                  "Author Interviews"
                )
              )
            )
          ),
          React.createElement(
            "section",
            null,
            React.createElement(
              "div",
              null,
              "example post"
            )
          ),
          React.createElement(
            "footer",
            null,
            React.createElement(
              "p",
              null,
              "\xA9 copyright 2017 BOOK BLOG"
            )
          )
        );
      }
    }]);

    return BlogPostTwoComponent;
  }(React.Component);

  BlogTest.BlogPostTwoComponent = BlogPostTwoComponent;
})();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BlogTest === undefined) {
  window.BlogTest = {};
}
(function () {
  var BlogPostThreeComponent = function (_React$Component) {
    _inherits(BlogPostThreeComponent, _React$Component);

    function BlogPostThreeComponent() {
      _classCallCheck(this, BlogPostThreeComponent);

      return _possibleConstructorReturn(this, (BlogPostThreeComponent.__proto__ || Object.getPrototypeOf(BlogPostThreeComponent)).call(this));
    }

    _createClass(BlogPostThreeComponent, [{
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
              { id: "eyebrow-nav" },
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  "About"
                ),
                React.createElement(
                  "li",
                  null,
                  "My books"
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/' },
                    "Home"
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { id: "main-nav" },
              React.createElement("div", { id: "logo" }),
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  "New releases"
                ),
                React.createElement(
                  "li",
                  null,
                  "Popular"
                ),
                React.createElement(
                  "li",
                  null,
                  "Categories"
                ),
                React.createElement(
                  "li",
                  null,
                  "Recent Posts"
                ),
                React.createElement(
                  "li",
                  null,
                  "Author Interviews"
                )
              )
            )
          ),
          React.createElement(
            "section",
            null,
            React.createElement(
              "div",
              null,
              "example post"
            )
          ),
          React.createElement(
            "footer",
            null,
            React.createElement(
              "p",
              null,
              "\xA9 copyright 2017 BOOK BLOG"
            )
          )
        );
      }
    }]);

    return BlogPostThreeComponent;
  }(React.Component);

  BlogTest.BlogPostThreeComponent = BlogPostThreeComponent;
})();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BlogTest === undefined) {
  window.BlogTest = {};
}
(function () {
  var BlogPostFourComponent = function (_React$Component) {
    _inherits(BlogPostFourComponent, _React$Component);

    function BlogPostFourComponent() {
      _classCallCheck(this, BlogPostFourComponent);

      return _possibleConstructorReturn(this, (BlogPostFourComponent.__proto__ || Object.getPrototypeOf(BlogPostFourComponent)).call(this));
    }

    _createClass(BlogPostFourComponent, [{
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
              { id: "eyebrow-nav" },
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  "About"
                ),
                React.createElement(
                  "li",
                  null,
                  "My books"
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/' },
                    "Home"
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { id: "main-nav" },
              React.createElement("div", { id: "logo" }),
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  "New releases"
                ),
                React.createElement(
                  "li",
                  null,
                  "Popular"
                ),
                React.createElement(
                  "li",
                  null,
                  "Categories"
                ),
                React.createElement(
                  "li",
                  null,
                  "Recent Posts"
                ),
                React.createElement(
                  "li",
                  null,
                  "Author Interviews"
                )
              )
            )
          ),
          React.createElement(
            "section",
            null,
            React.createElement(
              "div",
              null,
              "example post"
            )
          ),
          React.createElement(
            "footer",
            null,
            React.createElement(
              "p",
              null,
              "\xA9 copyright 2017 BOOK BLOG"
            )
          )
        );
      }
    }]);

    return BlogPostFourComponent;
  }(React.Component);

  BlogTest.BlogPostFourComponent = BlogPostFourComponent;
})();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BlogTest === undefined) {
  window.BlogTest = {};
}
(function () {
  var BlogPostFiveComponent = function (_React$Component) {
    _inherits(BlogPostFiveComponent, _React$Component);

    function BlogPostFiveComponent() {
      _classCallCheck(this, BlogPostFiveComponent);

      return _possibleConstructorReturn(this, (BlogPostFiveComponent.__proto__ || Object.getPrototypeOf(BlogPostFiveComponent)).call(this));
    }

    _createClass(BlogPostFiveComponent, [{
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
              { id: "eyebrow-nav" },
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  "About"
                ),
                React.createElement(
                  "li",
                  null,
                  "My books"
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    ReactRouter.Link,
                    { to: '/' },
                    "Home"
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { id: "main-nav" },
              React.createElement("div", { id: "logo" }),
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  "New releases"
                ),
                React.createElement(
                  "li",
                  null,
                  "Popular"
                ),
                React.createElement(
                  "li",
                  null,
                  "Categories"
                ),
                React.createElement(
                  "li",
                  null,
                  "Recent Posts"
                ),
                React.createElement(
                  "li",
                  null,
                  "Author Interviews"
                )
              )
            )
          ),
          React.createElement(
            "section",
            null,
            React.createElement(
              "div",
              null,
              "example post"
            )
          ),
          React.createElement(
            "footer",
            null,
            React.createElement(
              "p",
              null,
              "\xA9 copyright 2017 BOOK BLOG"
            )
          )
        );
      }
    }]);

    return BlogPostFiveComponent;
  }(React.Component);

  BlogTest.BlogPostFiveComponent = BlogPostFiveComponent;
})();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BlogTest === undefined) {
  window.BlogTest = {};
}
(function () {
  var MainPageComponent = function (_React$Component) {
    _inherits(MainPageComponent, _React$Component);

    function MainPageComponent() {
      _classCallCheck(this, MainPageComponent);

      return _possibleConstructorReturn(this, (MainPageComponent.__proto__ || Object.getPrototypeOf(MainPageComponent)).call(this));
    }

    _createClass(MainPageComponent, [{
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
              { id: "eyebrow-nav" },
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  "About"
                ),
                React.createElement(
                  "li",
                  null,
                  "My books"
                )
              )
            ),
            React.createElement(
              "div",
              { id: "main-nav" },
              React.createElement("div", { id: "logo" }),
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  "New releases"
                ),
                React.createElement(
                  "li",
                  null,
                  "Popular"
                ),
                React.createElement(
                  "li",
                  null,
                  "Categories"
                ),
                React.createElement(
                  "li",
                  null,
                  "Recent Posts"
                ),
                React.createElement(
                  "li",
                  null,
                  "Author Interviews"
                )
              )
            )
          ),
          React.createElement(
            "div",
            { id: "home-pic" },
            React.createElement(
              "div",
              { id: "home-pic-title" },
              "Book Blog"
            )
          ),
          React.createElement(
            "section",
            { id: "spacing" },
            React.createElement(
              "div",
              { id: "intro-main" },
              React.createElement(
                "h1",
                null,
                "Welcome to the Book Review Blog"
              ),
              React.createElement(
                "p",
                null,
                "Read the from the recent blog posts on some of the most interesting stories, and characters out there."
              )
            )
          ),
          React.createElement(
            "div",
            { id: "read-title-main" },
            React.createElement(
              "h1",
              null,
              "Blog Posts"
            )
          ),
          React.createElement(
            "section",
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/PostOne' },
              React.createElement(
                "div",
                { className: "tabs tabs-one tabs-img" },
                React.createElement(
                  "div",
                  { className: "blog-pic-title" },
                  "one"
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PostTwo' },
              React.createElement(
                "div",
                { className: "tabs tabs-img" },
                React.createElement(
                  "div",
                  { className: "blog-pic-title" },
                  "two"
                )
              )
            ),
            React.createElement("div", { className: "tabs-bottom tabs-one" }),
            React.createElement("div", { className: "tabs-bottom" })
          ),
          React.createElement(
            "section",
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/PostThree' },
              React.createElement(
                "div",
                { className: "tabs tabs-one tabs-img" },
                React.createElement(
                  "div",
                  { className: "blog-pic-title" },
                  "three"
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PostFour' },
              React.createElement(
                "div",
                { className: "tabs tabs-img" },
                React.createElement(
                  "div",
                  { className: "blog-pic-title" },
                  "four"
                )
              )
            ),
            React.createElement("div", { className: "tabs-bottom tabs-one" }),
            React.createElement("div", { className: "tabs-bottom" })
          ),
          React.createElement(
            "section",
            null,
            React.createElement(
              ReactRouter.Link,
              { to: '/PostFive' },
              React.createElement(
                "div",
                { className: "tabs tabs-one tabs-img" },
                React.createElement(
                  "div",
                  { className: "blog-pic-title" },
                  "five"
                )
              )
            ),
            React.createElement(
              ReactRouter.Link,
              { to: '/PostFive' },
              React.createElement(
                "div",
                { className: "tabs tabs-img" },
                React.createElement(
                  "div",
                  { className: "blog-pic-title" },
                  "six"
                )
              )
            ),
            React.createElement("div", { className: "tabs-bottom tabs-one" }),
            React.createElement("div", { className: "tabs-bottom" })
          ),
          React.createElement(
            "div",
            { id: "read-more-main" },
            React.createElement(
              "h1",
              null,
              "Read more coming soon ..."
            )
          ),
          React.createElement(
            "div",
            { id: "archive-main" },
            React.createElement(
              "h1",
              null,
              "Archive"
            ),
            React.createElement(
              "ul",
              { id: "archive-main-list" },
              React.createElement(
                ReactRouter.Link,
                { to: '/Archive' },
                React.createElement(
                  "li",
                  null,
                  "2017"
                )
              ),
              React.createElement(
                ReactRouter.Link,
                { to: '/Archive' },
                React.createElement(
                  "li",
                  null,
                  "2016"
                )
              ),
              React.createElement(
                ReactRouter.Link,
                { to: '/Archive' },
                React.createElement(
                  "li",
                  null,
                  "2015"
                )
              )
            )
          ),
          React.createElement(
            "div",
            { id: "newsletter-main" },
            React.createElement(
              "div",
              null,
              React.createElement(
                "form",
                null,
                React.createElement(
                  "h1",
                  null,
                  "Get Newsletter"
                ),
                React.createElement("input", { type: "text" }),
                React.createElement(
                  "button",
                  null,
                  "sign up"
                )
              )
            )
          ),
          React.createElement(
            "footer",
            null,
            React.createElement(
              "p",
              null,
              "\xA9 copyright 2017 BOOK BLOG"
            )
          )
        );
      }
    }]);

    return MainPageComponent;
  }(React.Component);

  BlogTest.MainPageComponent = MainPageComponent;
})();
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
            { history: ReactRouter.hashHistory },
            React.createElement(Route, { path: "/", component: BlogTest.MainPageComponent }),
            React.createElement(Route, { path: "/Archive", component: BlogTest.ArchiveComponent }),
            React.createElement(Route, { path: "/PostOne", component: BlogTest.BlogPostOneComponent }),
            React.createElement(Route, { path: "/PostTwo", component: BlogTest.BlogPostTwoComponent }),
            React.createElement(Route, { path: "/PostThree", component: BlogTest.BlogPostThreeComponent }),
            React.createElement(Route, { path: "/PostFour", component: BlogTest.BlogPostFourComponent }),
            React.createElement(Route, { path: "/PostFive", component: BlogTest.BlogPostFiveComponent })
      );

      ReactDOM.render(router, mountNode);
})();
//# sourceMappingURL=all.js.map
