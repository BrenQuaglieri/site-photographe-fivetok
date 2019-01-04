var app = {
  $menuElement: $('.mobilemenu'),
  $openMenu: $('.open-menu'),
  $closeMenu: $('.close-menu'),
  $greetings: ['Bienvenue', 'Bienvenido', 'Welcome', 'benvenuto'],
  init: function() {
    app.initMenuActionsEventListeners(),
    //getRandom(greetings),
    //app.greet(),
    setTimeout(app.greet, 5000);
  },
  initMenuActionsEventListeners: function () {
    $('.open-menu').on(
      'click',
      app.handleOpenMenuClickEvent
    ),
    $('.close-menu').on(
      'click',
      app.handleCloseMenuClickEvent
    );
  },
  handleOpenMenuClickEvent: function (event) {
    app.$menuElement.removeClass('mobilemenu--closing'),
    app.$menuElement.addClass('mobilemenu--visible'),
    app.$menuElement.addClass('mobilemenu--opening'),
    app.$openMenu.addClass('mobilemenu--hidden'),
    app.$closeMenu.addClass('close-menu--visible')
  },
  handleCloseMenuClickEvent: function (event) {
    app.$menuElement.removeClass('mobilemenu--opening'),
    app.$menuElement.addClass('mobilemenu--closing'),
    setTimeout(app.closeMenu, 0500),
    app.$openMenu.removeClass('mobilemenu--hidden'),
    app.$closeMenu.removeClass('close-menu--visible')
  },
  /*greet: function (greeting) {

  },*/
  closeMenu: function () {
    app.$menuElement.removeClass('mobilemenu--visible');
  },
  getRandom: function (arr) {
    return arr[math.floor(Math.random()*arr.length)];
  },
  greet: function () {
  $( ".sidebar" ).append("<div>" + app.$greetings[1] + "</div>");
  }
};
$(app.init);
