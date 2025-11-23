// filters.js

export function applyFilters(allPokemon) {
    const searchText = document.getElementById("search").value.toLowerCase();
    const typeSelected = document.getElementById("typeFilter").value;
    const genSelected = document.getElementById("generationFilter").value;

    const statSelected = document.getElementById("statSelect").value;
    const statMin = parseInt(document.getElementById("statMin").value);
    const statMax = parseInt(document.getElementById("statMax").value);

    return allPokemon.filter(p => {

        // FILTRO NOMBRE
        const matchName = p.name.toLowerCase().includes(searchText);

        // FILTRO TIPO
        const matchType = typeSelected === "" || p.types.includes(typeSelected);

        // FILTRO GENERACIÓN
        const matchGen = genSelected === "" || p.generation == genSelected;

        // FILTRO DE STATS
        let matchStat = true;

        if (statSelected !== "") {
            const value = p.stats[statSelected];

            if (!isNaN(statMin) && value < statMin) matchStat = false;
            if (!isNaN(statMax) && value > statMax) matchStat = false;
        }

        // MODO AND (todo debe cumplirse)
        return matchName && matchType && matchGen && matchStat;
    });
}

// Cargar tipos dinámicamente
export function loadTypeOptions(allPokemon) {
    const typeSet = new Set();
    allPokemon.forEach(p => p.types.forEach(t => typeSet.add(t)));

    const typeSelect = document.getElementById("typeFilter");

    typeSet.forEach(type => {
        const option = document.createElement("option");
        option.value = type;
        option.textContent = type;
        typeSelect.appendChild(option);
    });
}

export function sortPokemon(list, stat, order = "asc") {
    if (!stat) return list; // si no hay stat seleccionada, regresamos la lista normal

    return [...list].sort((a, b) => {
        let valA = stat === "total"
            ? Object.values(a.stats).reduce((x, y) => x + y)
            : a.stats[stat];

        let valB = stat === "total"
            ? Object.values(b.stats).reduce((x, y) => x + y)
            : b.stats[stat];

        return order === "asc" ? valA - valB : valB - valA;
    });
}
