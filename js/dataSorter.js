const submitButton = document.querySelector(".data__btn");
const arrayInput = document.querySelector("[input-data]");
const inputText = document.querySelector(".data__input");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const arrayOfData = arrayInput.value.split("").filter((value) => value != "," && value !== " " && !isNaN(+value)).map((value) => +value);
  const sortValue = arrayOfData.sort((a,b) => a - b);
  console.log(sortValue);
  inputText.value = sortValue
});