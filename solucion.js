const notas = {
    4: "Exceeds proficiency",
    3: "Demonstrates profiencicy",
    2: "Approaches profiencicy",
    1: "Falls well below profiencicy",
    0: ["Lacks all proficiency", "No attempt made"]
}



let ingresoNota = prompt("Por favor ingresa su nota");
for (const key in notas) {
    if (ingresoNota === key) {
        console.log(notas[key]);
    }
}