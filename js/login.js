const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');

const validadeInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');  
    } else{
        button.setAttribute('disabled', '');
    }

}

const heandleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html';
}

input.addEventListener('input', validadeInput);
form.addEventListener('submit', heandleSubmit);