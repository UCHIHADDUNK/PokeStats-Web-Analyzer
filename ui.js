// ui.js

/* ============================================================
   CREAR CARD DE POKÉMON
============================================================ */
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

/* ============================================================
   MOSTRAR LISTA COMPLETA EN PANTALLA
============================================================ */
export function displayPokemonList(list) {
    const container = document.getElementById("pokemonList");

    if (!list || list.length === 0) {
        container.innerHTML = "<p>No hay resultados.</p>";
        return;
    }

    container.innerHTML = list.map(createCard).join("");
}

/* ============================================================
   MOSTRAR DETALLES + SONIDO AUTOMÁTICO
============================================================ */
export function displayDetails(pokemon) {
    const panel = document.getElementById("detailsContent");

    // Normalizar nombre para reproducir el "cry"
    const cleanName = pokemon.name
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");  // Mr. Mime → mrmime

    const cryUrl = `https://play.pokemonshowdown.com/audio/cries/${cleanName}.ogg`;

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

        <button id="playCryBtn" class="cry-btn">🔊 Reproducir sonido</button>

        <audio id="pokeCry" src="${cryUrl}"></audio>
    `;

    /* ---------------------------------------------
       MANEJO DE AUDIO
    ---------------------------------------------- */
    const audio = document.getElementById("pokeCry");

    // 🔥 SONIDO AUTOMÁTICO
    audio.volume = 0.85;
    audio.currentTime = 0;
    audio.play().catch(() => {
        console.warn("Autoplay bloqueado por el navegador.");
    });

    // 🔊 Botón manual
    document.getElementById("playCryBtn").addEventListener("click", () => {
        audio.currentTime = 0;
        audio.play();
    });
}
