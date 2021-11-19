alert("A seguir pediremos algumas informações para a decolagem.")

pilotName = prompt("Poderia me dizer seu nome, piloto?")

let velocity = 0

naveVelocity = prompt("Em que velocidade você gostaria de acelerar a nave? ( Limite 100km )")
naveVelocityConfirm = confirm("Tem certeza que gostaria de acelerar a nave em " + naveVelocity + " km/h?")

// Switch poderia ser usado mas não causaria muito impacto no formato ou tamanho do código.

if (naveVelocityConfirm) {    
    velocity = naveVelocity
    if (velocity <= 0) {
        alert("A nave está parada, considere aumentar a velocidade")
    }
    else if (velocity >= 100) {
        alert("Estamos acelerando a nave na velocidade " + velocity + ". Isso é considerado uma velocidade perigosa, controle automático forçado.")
        velocity = 60
    }
    else if (velocity > 80 && velocity < 100) {
        alert("Estamos acelerando a nave na velocidade " + velocity + ". Isso é considerado uma velocidade quase perigosa considere diminuir.")
    }
    else if (velocity >= 50) {
        alert("Estamos acelerando a nave na velocidade " + velocity + ". Isso é considerado uma boa a se manter.")
    }
    else {
        alert("Estamos acelerando a nave na velocidade " + velocity + ". Isso é considerado uma velocidade lenta.")
    }

    alert("A nave está na velocidade " + velocity + " km/s com o piloto " + pilotName)
}

else {
    alert("A nave não decolou.")
} 