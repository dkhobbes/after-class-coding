if (window.Quiz === undefined) window.Quiz = {};
(function () {
  var WinController = Controller.create({
    render: function() {
      this.el.html('<div class="win"><p>win</p><div class="restart">restart</div></a>');

    }
});

Quiz.WinController = WinController;

})();
