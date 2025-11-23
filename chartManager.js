// chartManager.js
let statsChart = null;

export function renderChart(pokemon) {
    const ctx = document.getElementById("statsChart").getContext("2d");

    if (statsChart) {
        statsChart.destroy();
    }

    statsChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed"],
            datasets: [{
                label: pokemon.name + " Stats",
                data: [
                    pokemon.stats.hp,
                    pokemon.stats.attack,
                    pokemon.stats.defense,
                    pokemon.stats.spAttack,
                    pokemon.stats.spDefense,
                    pokemon.stats.speed
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
