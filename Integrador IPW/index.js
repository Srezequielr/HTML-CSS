function inputHandler() {
  input = document.querySelectorAll(".inputAdd");
  console.log(input);

  for (let i = 0; i < input.length; i++) {
    if (input[i].value.trim().length == 0) {
      input[i].setAttribute("style", "background-color: #fd8b8b");
    } else {
      input[i].setAttribute(
        "style",
        "background-color: #b6e7b6; transition: 0.5s"
      );
    }
  }
}
