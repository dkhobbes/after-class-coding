if (window.Quiz === undefined) window.Quiz = {};
(function () {
  var WinController = Controller.create({
    render: function() {
      this.el.html('<div class="win"><p>win</p><button>restart</button></a>');

    }
});

Quiz.WinController = WinController;

})();
