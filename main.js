const btn = document.querySelector("#alert");

function clickMe() {
  alert("You Click Btn");
}

btn.addEventListener("click", clickMe);
