/* Fazendo sem parâmetros
const doubleVelocity = () => {
  
} */

const doubleVelocity = (velocity) => {
    return velocity * 2
}

// OU

const doubleVelocity = velocity => velocity * 2
// Caso tenha só uma linha

console.log(doubleVelocity(60))