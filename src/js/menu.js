export function setupMenu() {
  const menu = {
    openBtn: document.querySelector(".header__btn"),
    closeBtns: document.querySelectorAll("._close"),
    nav: document.querySelector(".header__nav"),
    overlay: document.querySelector(".header__overlay"),
    body: document.querySelector('body'),
    toggler: function() {
      menu.openBtn.classList.toggle('_close');
      menu.nav.classList.toggle('_show');
      menu.overlay.classList.toggle('_show');
      menu.body.classList.toggle('_lock');
    },
    action: function () { 
      menu.openBtn.addEventListener('click', menu.toggler);
      menu.overlay.addEventListener("click", menu.toggler);
    },
  };
  menu.action();
}
