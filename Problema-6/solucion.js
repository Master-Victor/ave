const searchInput = document.getElementById('search');
const searchButton = document.getElementById('searchBtn');
const pokemonData = document.getElementById('pokemonData');

searchButton.addEventListener('click', searchPokemon);

async function searchPokemon() {
    const searchTerm = searchInput.value.trim();
    if (!searchTerm) return;

    try {
        const pokemon = await getPokemonData(searchTerm.toLowerCase());
        displayPokemonData(pokemon);
    } catch (error) {
        showError('Pokémon no encontrado');
    }
}

async function getPokemonData(searchTerm) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
    if (!response.ok) {
        throw new Error('Pokémon no encontrado');
    }
    const data = await response.json();
    return data;
}

function displayPokemonData(pokemon) {
    const name = pokemon.name;
    const number = pokemon.id;
    const types = pokemon.types.map(type => type.type.name);
    const weight = pokemon.weight / 10; // Convertir a kilogramos
    const height = pokemon.height / 10; // Convertir a metros
    const image = pokemon.sprites.front_default;

    const html = `
        <div class="pokemon-info"><b>Nombre:</b> ${name}</div>
        <div class="pokemon-info"><b>Número:</b> ${number}</div>
        <div class="pokemon-info"><b>Tipo:</b> ${types.join(', ')}</div>
        <div class="pokemon-info"><b>Peso:</b> ${weight} kg</div>
        <div class="pokemon-info"><b>Altura:</b> ${height} m</div>
        <img class="pokemon-image" src="${image}" alt="${name}">
    `;

    pokemonData.innerHTML = html;
}

function showError(message) {
    pokemonData.innerHTML = `<div class="error">${message}</div>`;
}
