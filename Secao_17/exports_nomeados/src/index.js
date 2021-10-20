// Estamos importando o export de spaceship.js dentro da variável Spaceship
import Spaceship from './spaceship'
import armamentKind from './armaments'

const spaceship = new Spaceship('Oreus', 'Suero', armamentKind.Laser, "Shields")
console.log(spaceship)
