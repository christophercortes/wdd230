const todayDisplay = document.querySelector("#today");
const visitsDisplay = document.querySelector("#visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = "Hello!";
}
numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

todayDisplay.textContent = Date.now();