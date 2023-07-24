 // Step 1: Create a function to fetch the JSON data from the file
 async function fetchData() {
    const response = await fetch('https://brotherblazzard.github.io/canvas-content/fruit.json');
    const data = await response.json();
    return data;
  }

  // Step 2: Handle the form submission
  document.getElementById('optionForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form submission

    const formData = new FormData(event.target);
    const selectedValue = formData.get('selectedOption');

    // If the user selects an option other than the default option, fetch data and update the page
    if (selectedValue !== '0') {
      const jsonData = await fetchData();

      // Step 3: Update the web page with the relevant data
      const selectedOption = jsonData[selectedValue - 1]; // Since the array is zero-indexed
      document.getElementById('optionName').innerText = selectedOption.name;
      document.getElementById('optionDescription').innerText = selectedOption.nutritions.carbohydrates;
    } else {
      // If the user selects the default option, clear the data display
      document.getElementById('optionName').innerText = '';
      document.getElementById('optionDescription').innerText = '';
    }
  });