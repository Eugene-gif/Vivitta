export function setupResize() {
  const resize = {
    elem: document.documentElement,
    btn: document.querySelector("._resize"),
    icon: {
      min: "icons/min-size.svg",
      max: "icons/max-size.svg",
    },
    action: () => {
      resize.btn.addEventListener("click", () => {
        if (!resize.btn.classList.contains("_resize-on")) {
          resize.fullOn();
        } else {
          resize.fullOff();
        }
      });
    },
    fullOn: () => {
      resize.btn.classList.add("_resize-on");
      resize.btn.children[0].setAttribute("src", resize.icon.min);
      if (
        resize.elem.requestFullscreen ||
        resize.elem.mozRequestFullScreen ||
        resize.elem.webkitRequestFullscreen ||
        resize.elem.msRequestFullscreen
      ) {
        resize.elem.requestFullscreen() ||
          resize.elem.mozRequestFullScreen() ||
          resize.elem.webkitRequestFullscreen() ||
          resize.elem.msRequestFullscreen();
      }
      // console.log("Шарим экран");
    },
    fullOff: () => {
      if (
        document.exitFullscreen ||
        document.mozCancelFullScreen ||
        document.webkitExitFullscreen ||
        document.msExitFullscreen
      ) {
        document.exitFullscreen() ||
          document.mozCancelFullScreen() ||
          document.webkitExitFullscreen() ||
          document.msExitFullscreen();

        resize.btn.classList.remove("_resize-on");
        resize.btn.children[0].setAttribute("src", resize.icon.max);
      }
      // console.log("Уменьшаем экран");
    },
  };

  resize.action();
}
