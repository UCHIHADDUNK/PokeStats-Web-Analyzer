// app.js
import { loadPokemonData } from "./dataLoader.js";
import { displayPokemonList, displayDetails } from "./ui.js";
import { renderChart } from "./chartManager.js";
import { applyFilters, loadTypeOptions, sortPokemon } from "./filters.js";

let allPokemon = [];

/* ------------------------------------------------
   FUNCIÓN QUE ACTUALIZA LA LISTA COMPLETA
--------------------------------------------------- */
function updateList() {
    // 1) Filtrar
    let filtered = applyFilters(allPokemon);

    // 2) Ordenar
    const statSort = document.getElementById("sortStat").value;
    const orderSort = document.getElementById("sortOrder").value;

    filtered = sortPokemon(filtered, statSort, orderSort);

    // 3) Mostrar en pantalla
    displayPokemonList(filtered);
}

/* ------------------------------------------------
   INICIALIZACIÓN
--------------------------------------------------- */
async function init() {
    // Cargar datos
    allPokemon = await loadPokemonData();

    // Tipos dinámicos
    loadTypeOptions(allPokemon);

    // Mostrar todo al inicio
    displayPokemonList(allPokemon);

    // Click en tarjetas para mostrar detalles + gráfica
    document.getElementById("pokemonList").addEventListener("click", (e) => {
        const card = e.target.closest(".pokemon-card");
        if (!card) return;

        const id = parseInt(card.dataset.id);
        const selected = allPokemon.find(p => p.id === id);

        displayDetails(selected);
        renderChart(selected);
    });

    /* -------------------------
       LISTENERS DE FILTROS
    -------------------------- */
    document.getElementById("search").addEventListener("input", updateList);
    document.getElementById("typeFilter").addEventListener("change", updateList);
    document.getElementById("generationFilter").addEventListener("change", updateList);

    document.getElementById("statSelect").addEventListener("change", updateList);
    document.getElementById("statMin").addEventListener("input", updateList);
    document.getElementById("statMax").addEventListener("input", updateList);

    /* -------------------------
       LISTENERS DE ORDENAMIENTO
    -------------------------- */
    document.getElementById("sortStat").addEventListener("change", updateList);
    document.getElementById("sortOrder").addEventListener("change", updateList);

    /* -------------------------
       BOTÓN LIMPIAR FILTROS
    -------------------------- */
    document.getElementById("clearFilters").addEventListener("click", () => {
        // vaciar inputs
        document.getElementById("search").value = "";
        document.getElementById("statMin").value = "";
        document.getElementById("statMax").value = "";

        // restaurar selects
        document.getElementById("typeFilter").value = "";
        document.getElementById("generationFilter").value = "";
        document.getElementById("statSelect").value = "";
        document.getElementById("sortStat").value = "";
        document.getElementById("sortOrder").value = "asc";

        // recargar lista completa
        displayPokemonList(allPokemon);
    });
}

init();
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const btn = document.getElementById("darkModeToggle");
    if (document.body.classList.contains("dark")) {
        btn.textContent = "☀️";
    } else {
        btn.textContent = "🌙";
    }
});

document.getElementById("typeChartBtn").addEventListener("click", () => {
    window.location.href = "types.html";
});
