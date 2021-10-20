// Estamos importando o export de spaceship.js dentro da variável Spaceship
import Spaceship from './spaceship'
import armamentKind from './armaments'
// Renomeando o import.
import { laserDef as laserD} from './defenses'

const spaceship = new Spaceship('Oreus', 'Suero', armamentKind.laser, laserD)
console.log(spaceship)
