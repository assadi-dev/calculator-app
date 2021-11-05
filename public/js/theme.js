const theme_btn = document.querySelectorAll(".selector-indicator");

theme_btn.forEach((theme) => {
  theme.addEventListener("click", selecTheme);
});

function selecTheme() {
  let selected = this.dataset.theme;

  theme_btn.forEach((theme) => {
    theme.classList.remove("selected");
  });
  this.classList.add("selected");
  changeTheme(selected);
}

const changeTheme = (theme) => {
  let body = document.querySelector("body");
  switch (theme) {
    case "theme-one":
      body.classList = "theme-one";

      break;
    case "theme-two":
      body.classList = "theme-two";
      break;
    case "theme-three":
      body.classList = "theme-three";
      break;

    default:
      body.classList = "theme-one";
      break;
  }
};
