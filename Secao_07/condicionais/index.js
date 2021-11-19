let velocity = 50

if (velocity < 50) {
    console.log("Estamos em uma velocidade lenta.")
} else if (velocity < 100) {
    console.log("Estamos numa velocidade aceitável.")
} else {
    console.log("Estamos em velocidade de risco.")
}

// Outra forma
(velocity > 100) ? console.log("Maior que 100") : console.log("Menor que 100")