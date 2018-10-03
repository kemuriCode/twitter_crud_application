const form = document.querySelector('form');
const loadingElement = document.querySelector('.loader');

loadingElement.style.display = 'none';

form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');

    const user = {
        name,
            content
    };
    console.log(user);

    form.style.display = 'none'
    loadingElement.style.display = '';



});