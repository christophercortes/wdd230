const options = {month: 'numeric', day: 'numeric', year: 'numeric'};
document.getElementById('currentdate'). textContent = new Date().toLocaleTimeString('en-US', options);

const year = new Date();
document.getElementById('year'). textContent = new Date().getFullYear('en-US', year);