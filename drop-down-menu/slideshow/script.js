(function () {
  var counter = 0,

    $items = document.querySelectorAll('.slideshow figure'),
    numItems = $items.length;

    var showCurrent = function() {
      var itemShown = Math.abs(counter%numItems);

      [].forEach.call( $items, function(el){
        el.classList.remove('show');
      });

      $items[itemShown].classList.add('show');
    };

    document.querySelector('.next').addEventListener('click', function() {
      counter++;
      showCurrent();
    }, false);

    document.querySelector('.prev').addEventListener('click', function() {
      counter--;
      showCurrent();
    }, false);

})();
