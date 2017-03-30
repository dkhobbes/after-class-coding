if (window.Quiz === undefined) window.Quiz = {};

(function() {

  var FailController = Controller.create({
    render: function() {
      this.el.html('<div class="fail"><p>fail</p><div class="restart">restart</div></a>');
    }
  });

  Quiz.FailController = FailController;

})();
