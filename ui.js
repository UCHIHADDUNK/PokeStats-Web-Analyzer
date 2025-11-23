// ui.js

// Crear cada card del Pokémon
export function createCard(pokemon) {
    return `
        <div class="pokemon-card" data-id="${pokemon.id}">
            <img 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" 
                alt="${pokemon.name}"
                class="pokemon-img"
            >
            <h3>#${pokemon.id} ${pokemon.name}</h3>
            <p>${pokemon.types.join(" / ")}</p>
        </div>
    `;
}

// Mostrar lista completa en pantalla
export function displayPokemonList(list) {
    const container = document.getElementById("pokemonList");

    if (list.length === 0) {
        container.innerHTML = "<p>No hay resultados.</p>";
        return;
    }

    container.innerHTML = list.map(createCard).join("");
}

// Mostrar detalles de un Pokémon seleccionado
export function displayDetails(pokemon) {
    const panel = document.getElementById("detailsContent");

    panel.innerHTML = `
        <img 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
            alt="${pokemon.name}"
            class="details-img"
        >

        <h2>${pokemon.name}</h2>
        <p><strong>Tipos:</strong> ${pokemon.types.join(" / ")}</p>
        <p><strong>Generación:</strong> ${pokemon.generation}</p>

        <h3>Estadísticas:</h3>
        <ul>
            <li>HP: ${pokemon.stats.hp}</li>
            <li>Attack: ${pokemon.stats.attack}</li>
            <li>Defense: ${pokemon.stats.defense}</li>
            <li>Sp. Attack: ${pokemon.stats.spAttack}</li>
            <li>Sp. Defense: ${pokemon.stats.spDefense}</li>
            <li>Speed: ${pokemon.stats.speed}</li>
        </ul>
    `;
}
