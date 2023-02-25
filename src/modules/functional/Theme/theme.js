export function setupTheme() {
  const theme = {
    btn: document.querySelector("._theme-btn"),
    icon: {
      sun: "icons/sun.svg",
      moon: "icons/moon.svg",
    },
    currentTheme: localStorage.getItem("theme"),
    currentIcon: localStorage.getItem("icon"),
    action: () => {
      if (theme.currentTheme === "dark") {
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
        theme.btn.children[0].setAttribute("src", theme.icon.sun);
      } else {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        theme.btn.children[0].setAttribute("src", theme.icon.moon);
      }

      theme.btn.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")) {
          theme.currentTheme = "dark";
          theme.btn.children[0].setAttribute("src", theme.icon.sun);
          console.log("Меняем тему на темную");
        } else {
          theme.currentTheme = "light";
          theme.btn.children[0].setAttribute("src", theme.icon.moon);
          console.log("Меняем тему на светлую");
        }

        localStorage.setItem("theme", theme.currentTheme);
      });

      document.body.style.display = "block";
    }
  }

  theme.action();
}