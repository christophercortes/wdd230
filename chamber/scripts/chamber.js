function toggleMenu() {
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

document.getElementById('currentdate'). textContent = document.lastModified;
const year = new Date();
document.getElementById('year'). textContent = new Date().getFullYear('en-US', year);