const laserDefenses = ["Escudos Defletores", 'Arma Anti-Laser']
const steelDefenses = ["Escudos de aço."]

// Estamos utilizando o export nomeado para exportar tudo que queremos dentro de um export.
// Agora vamos renomear com a syntax "AS"
export {laserDefenses as laserDef, steelDefenses}
export default ["Escudo Repulsor"]