//number of visits
const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = "This is your first visit. 😃 Welcome!";
}
numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

//date math
const msToDays = 84600000;
const theDateToday = new Date();

const todayElement = document.querySelector("today");

const today = Date.now();

if (theDateToday.getMonth() == 11 &&
theDateToday.getDate() >
25) {

}
todayElement.textContent = today; 