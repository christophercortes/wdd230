const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const currentValue = input.value;
    input.value = "";

    const listElement = document.createElement("li");
    const spanElement = document.createElement("span");
    const buttonElement = document.createElement("button");

    listElement.appendChild(spanElement);
    spanElement.textContent = currentValue;
    listElement.appendChild(buttonElement);
    buttonElement.textContent = "❌";
    list.appendChild(listElement);

    buttonElement.addEventListener("click", () => {
        list.removeChild(listElement);
    });

      input.focus();
});