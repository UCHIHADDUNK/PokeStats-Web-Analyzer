// dataLoader.js
export async function loadPokemonData() {
    const response = await fetch("pokemonData_transformed.json");
    return await response.json();
}
