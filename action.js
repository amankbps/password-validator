let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let pass = "amankbps";

let isvalid = () => {
  return pass == input.value;
};
btn.addEventListener("click", () => {
  if (isvalid()) {
    btn.textContent = "loged in";
    btn.style.backgroundColor = "#9bc400";
  }
  else 
  {
      btn.textContent = "incorrect";
      btn.style.backgroundColor = "red";
      alert("password is incorrect");
  }
});