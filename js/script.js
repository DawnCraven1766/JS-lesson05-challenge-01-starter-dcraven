var button = document.querySelector (".show-cat");
car cat = document.querySelector (".cat");

button.addEventListener("click", function () {
    cat.classList.add ("show");
 if (cat.classList.contains("show")) {
    cat.classList.remove("show");
    button.innerText = "Wait, come back!";
    button.classList.add("disappear");
  } else {
    cat.classList.add("show");
    button.innerText = "Shoo, cat!";
    button.classList.remove("disappear");
  }
});