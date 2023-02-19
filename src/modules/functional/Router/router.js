export function setupRouter() {
  const router = {
    btns: document.querySelectorAll("._btn"),
    contents: document.querySelectorAll("._content"),
    moving: function (buttons, contents) {
      buttons.forEach((btn) => {
        btn.addEventListener("click", (event) => {
          let data = event.target.dataset.btn;
          contents.forEach((content) => {
            if (content.dataset.content === data) {
              document.querySelectorAll("._show").forEach((el) => {
                el.classList.remove("_show");
                document.body.classList.remove("_lock");
              });
              document.querySelectorAll("._close").forEach((el) => {
                el.classList.remove("_close");
              });
              content.classList.add("_show");
              window.scrollTo(0, 0);
            }
          });
        });
      });
    },
  };

  router.moving(router.btns, router.contents);
}
