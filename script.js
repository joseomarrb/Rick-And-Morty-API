//Variables
const APIURL = 'https://rickandmortyapi.com/api/character';

//Funciones
async function personajesAPI() {
    try {
        const response = await fetch(APIURL);
        const { results } = await response.json();
        for (let i = 0; i < results.length; i++) {
            mostrarPersonajes(results[i]);
        }
    } catch (error) {
        console.error(error);
    }
}

const mostrarPersonajes = (personajes) => {
    const { name, status, image, species } = personajes;
    const main = document.querySelector('#container');
    const card = document.createElement('ARTICLE');
    card.classList.add('card');

    const cardImageContainer = document.createElement('DIV');
    cardImageContainer.classList.add('card-image');

    const cardImage = document.createElement('IMG');
    cardImage.src = image;
    cardImageContainer.appendChild(cardImage);

    const cardContent = document.createElement('DIV');
    cardContent.classList.add('card-content');

    const cardName = document.createElement('H4');
    cardName.textContent = name;

    const cardStatus = document.createElement('P');
    cardStatus.textContent = status;
    if (status == 'Alive') cardStatus.style.color = 'green';
    else if (status == "unknown") cardStatus.style.color = 'gray';
    else cardStatus.style.color = 'red';

    const cardSpecie = document.createElement('SPAN');
    cardSpecie.classList.add('category');
    cardSpecie.textContent = species;

    cardContent.appendChild(cardSpecie);
    cardContent.appendChild(cardName);
    cardContent.appendChild(cardStatus);

    card.appendChild(cardImageContainer);
    card.appendChild(cardContent);

    main.appendChild(card);
};

//Eventos
document.addEventListener('DOMContentLoaded', personajesAPI);
