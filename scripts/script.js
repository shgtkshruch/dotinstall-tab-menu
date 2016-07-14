'use strict';

(function () {
  'use strict';

  var menuItems = document.getElementsByClassName('tab-menu__link');
  var contents = document.getElementsByClassName('tab-content');

  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function (e) {
      e.preventDefault();

      for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].className = 'tab-menu__link';
      }

      this.className = 'tab-menu__link active';

      for (var i = 0; i < contents.length; i++) {
        contents[i].className = 'tab-content';
      }

      document.getElementById(this.dataset.id).className = 'tab-content active';
    });
  }
})();