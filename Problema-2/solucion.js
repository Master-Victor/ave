const urlType = 'https://pokeapi.co/api/v2/type/';

/**
 * 
 * @param {*} searchType String a buscar en la API
 * @returns retorna un entero con la cantidad de pokemons que tiene el tipo buscado
 */

async function totalPokemonsTypeCount(searchType) {

    try {
        const avalebleTypes = await fetch(urlType);
        const avalebleTypesJson = await avalebleTypes.json();
        const avalebleTypesResults = avalebleTypesJson.results.filter(type => type.name === searchType);
        if (avalebleTypesResults.length > 0) {
            const count = await fetch(avalebleTypesResults[0].url);
            const countJson = await count.json();
            console.log(`El tipo ${searchType} tiene ${countJson.pokemon.length} pokemons`);
            return countJson.pokemon.length;
        } else {
            console.log('No se encontro el tipo de pokemon: ' + searchType);
            return null;
        }
    } catch (error) {
        console.log(error);
    }

}

totalPokemonsTypeCount('fire');