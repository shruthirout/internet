let nameSpan = document.querySelector('.name');
let inputName = document.querySelector('#inputName')

const setName = () => {
    nameSpan.textContent = inputName.value;
}