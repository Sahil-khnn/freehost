const txtInput = document.querySelector(".inputs input");
const checkBtn = document.querySelector(".inputs button");
const infoTxt = document.querySelector(".info-txt");
let filterTxt;

checkBtn.addEventListener("click", () => {
  let reverseTxt = filterTxt.split("").reverse().join("");
  infoTxt.style.display = "block";
  if (reverseTxt != filterTxt) {
    return (infoTxt.innerHTML = `Not a palindrome`);
  }
  infoTxt.innerHTML = `Palindrome`;
});

txtInput.addEventListener("keyup", () => {
  // removing spaces and other special characters from the input field
  filterTxt = txtInput.value.replace(/[^A-Z0-9]/gi, "");
  if (filterTxt) {
    return checkBtn.classList.add("active");
  }
  checkBtn.classList.remove("active");
  infoTxt.style.display = "none";
});
