
const list = document.querySelector('#list')
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const currValue = input.value;
    input.value = '';
    const liElement = document.createElement('li');
    const listText = document.createElement('span');
    const deleButton = document.createElement('button');
    liElement.appendChild(listText);
    listText.textContent = currValue;
    liElement.appendChild(deleButton);
    deleButton.textContent = '❌';
    list.appendChild(liElement);
    deleButton.addEventListener('click', () => {
        list.removeChild(liElement);
    });

    input.focus();
});