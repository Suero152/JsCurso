// Estamos importando o export de spaceship.js dentro da variável Spaceship
import Spaceship from './spaceship'
import armamentKind from './armaments'
// Utilizando o import nomeado.
import { laserDefenses, steelDefenses } from './defenses'

const spaceship = new Spaceship('Oreus', 'Suero', armamentKind.laser, laserDefenses)
console.log(spaceship)
