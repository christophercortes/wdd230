function loadJson() {
    fetch("https://brotherblazzard.github.io/canvas-content/fruit.json")
    .then(response => response.json())
    .then(data => {
        const selectOptions = document.querySelectorAll("select");

        for(let i = 0; i < selectOptions.length; i++) {
            for(let j = 0; j < data.length; j++) {
                const option = document.createElement("option");
                option.value = data[j].id;
                option.text = data[j].name;
                selectOptions[i].appendChild(option);
            }
        }
     })
    .catch(error => console.error("Error loading JSON:", error));
}

//loadJson();

function submitBtn(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const tel = formData.get("phone");
    const option1 = formData.get("optionSelection");
    const option2 = formData.get("optionSelection2");
    const option3 = formData.get("optionSelection3");
    const texarea = formData.get("textarea");


    const outputForms = document.getElementById("output");
    outputForms.innerHTML = 
    `<p><strong>Name:</strong> ${name}</p> 
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${tel}</p>
    <p><strong>First Fruit:</strong> ${option1}</p>
    <p><strong>Option 2:</strong> ${option2}</p>
    <p><strong>Option 3:</strong> ${option3}</p>
    <p><strong>Information:</strong> ${texarea}</p>`;
}

const Form = document.getElementById("inputForm");
Form.addEventListener("submit", submitBtn);

const orderDate = new Date();
const dateType = orderDate.toLocaleDateString("en-US", {
    year: "numeric", month: "long", day:"numeric",
});

const orderDateFormat = document.getElementById("orderDateDisplay");
orderDateFormat.innerHTML = `<p><strong>Order Date:</strong> ${dateType}</p>`;

loadJson();