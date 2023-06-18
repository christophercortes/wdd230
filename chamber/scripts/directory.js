const file = "scripts/data.json";

async function getMembersData() {
    const response = await fetch(file);
    const data = await response.json();
    displayMembers(data.members);
}

getMembersData();

const displayMembers = (members) => {
    const cards = document.querySelector("div.cards");

    members.forEach((member) => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let phone = document.createElement("p");
        let address = document.createElement("p");
        let website = document.createElement("a");
        let membership = document.createElement("p");
        let picture = document.createElement("img");

        name.textContent = `${member.companyName}`;
        phone.textContent = `Phone Number: ${member.phoneNumber}`;
        address.textContent = `${member.address}`;
        website.textContent = `${member.websiteUrl}`;        
        membership.textContent = `${member.membershipLevel}`;

        picture.setAttribute("src", member.imageUrl);
        picture.setAttribute("loading", "lazy");
        website.setAttribute("href", `${member.websiteUrl}`);


        card.appendChild(picture);
        card.appendChild(name);
        card.appendChild(phone);
        card.appendChild(address);        
        card.appendChild(membership);
        card.appendChild(website);
        

        cards.appendChild(card);
    })
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("div.cards");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 
function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}