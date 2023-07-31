const urlBase = 'https://pokeapi.co/api/v2'
const urlType = `${urlBase}/type`;
const urlPokemon = `${urlBase}/pokemon`;

/**
 * 
 * @param {*} searchType String a buscar en la API
 * @returns retorna un entero con la cantidad de pokemons que tiene el tipo buscado
 */
//item 1
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

/**
 * 
 * @param {*} searchType String a buscar en la API
 * @returns retorna un array con los pokemons que tiene el tipo buscado
 */
//adicional item 2
async function totalPokemonsType(searchType) {

    try {
        const avalebleTypes = await fetch(urlType);
        const avalebleTypesJson = await avalebleTypes.json();
        const avalebleTypesResults = avalebleTypesJson.results.filter(type => type.name === searchType);
        if (avalebleTypesResults.length > 0) {
            const count = await fetch(avalebleTypesResults[0].url);
            const countJson = await count.json();
            console.log(`El tipo ${searchType} tiene ${countJson.pokemon.length} pokemons`);
            return countJson.pokemon;
        } else {
            console.log('No se encontro el tipo de pokemon: ' + searchType);
            return null;
        }
    } catch (error) {
        console.log(error);
    }

}
//item 2
async function twoPokemonsTypes(type1, type2) {
    try {
        const pokemonsType1 = await totalPokemonsType(type1);
        const pokemonsType2 = await totalPokemonsType(type2);
        const pokemons = pokemonsType1.filter(pokemonData => pokemonsType2.map(p => p.pokemon.name).includes(pokemonData.pokemon.name));
        console.log("pokemons correspondientes:", pokemons);
        return pokemons;
    } catch (error) {
        console.log(error);
        return null;
    }

}
/**
 * 
 * @param {*} pokemonName String con el nombre del pokemon a buscar
 * @returns retorna un entero con el id del pokemon buscado
 */
//item 3
async function searchPokemon(pokemonName) {
    try {
        const pokemon = await fetch(`${urlPokemon}/${pokemonName}`);
        const pokemonJson = await pokemon.json();
        console.log("pokemon encontrado", pokemonName, "id: ", pokemonJson.id);
        return pokemonJson.id;
    } catch (error) {
        console.log(error);
        return null;
    }
}
/**
 * 
 * @param {*} id Numero entero con el id del pokemon a buscar
 * @returns retorna con array con los stats del pokemon buscado
 */
//item 4
async function searchStatsPokemonById(id) {
    try {
        const pokemon = await fetch(`${urlPokemon}/${id}`);
        const pokemonJson = await pokemon.json();
        console.log("pokemon encontrado", pokemonJson.name, "stats: ", pokemonJson.stats);
        return pokemonJson.stats;
    } catch (error) {
        console.log(error);
        return null;
    }

}
//adicional item 5 y item 6
async function searchPokemonById(id) {
    try {
        const pokemon = await fetch(`${urlPokemon}/${id}`);
        const pokemonJson = await pokemon.json();
        //console.log("pokemon encontrado", pokemonJson.name, "stats: ", pokemonJson.stats);
        return pokemonJson;
    } catch (error) {
        console.log(error);
        return null;
    }

}
//item 5
/**
 * 
 * @param {*} arrayPokemonIds Array con ids de pokemons a buscar
 * @param {*} ordernamientoPorPeso String que puede ser 'ASC' o 'DESC' para ordenar el array de pokemons por peso
 * @returns retorna un array de objetos con los datos de los pokemons buscados ordenados por peso
 */
async function searchArrayPokemon(arrayPokemonIds, ordernamientoPorPeso) {
    try {
        const promises = arrayPokemonIds.map(async (id) => {
            const response = await searchPokemonById(id);
            return {
              nombre: response.name,
              peso: response.weight,
              tipo: response.types.map((t) => t.type.name),
            };
          });
      
          const result = await Promise.all(promises);
          console.log(result.sort( (a, b) => ordernamientoPorPeso === 'ASC' ? a.peso - b.peso : b.peso - a.peso ));
          return result.sort( (a, b) => ordernamientoPorPeso === 'ASC' ? a.peso - b.peso : b.peso - a.peso );
    } catch (error) {
        console.log(error);
    }
}
//item 6
/**
 * 
 * @param {*} id Numero entero con el id del pokemon a buscar
 * @param {*} type tipo de pokemon a buscar
 * @returns booleano que indica si el pokemon buscado tiene el tipo buscado
 */
async function searchPokemonByIdAndType(id, type){
    try{
        const pokemon = await searchPokemonById(id);
        const pokemonType = pokemon.types.map(t => t.type.name);
        console.log(pokemonType.includes(type))
        return pokemonType.includes(type);
    }catch(error){
        console.log(error);
    }
}
//item 1
// totalPokemonsTypeCount('fire')
//item 2
// twoPokemonsTypes('normal', 'poison');
//item 3
// searchPokemon('pikachu');
//item 4
//searchStatsPokemonById(25);
//item 5
//searchArrayPokemon([25, 26, 27, 28, 29, 30], 'DESC');
//item 6
//searchPokemonByIdAndType(25, 'electric');
 