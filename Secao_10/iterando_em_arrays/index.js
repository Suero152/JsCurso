let hitchedSpaceships = ['Demeter', 'Darwin', 'Supernova', 'Phoenix', 'Puller']

hitchedSpaceships.forEach(function(currentSpaceship, index){
    console.log('Nave: ' + currentSpaceship + '\nÍndice: ' + index)

})

let upCasedSpacehips = hitchedSpaceships.map(function(currentSpaceship){
    let upcased = currentSpaceship.toUpperCase()
    return upcased
})

console.log(upCasedSpacehips)

let withSevenChars = hitchedSpaceships.filter(element => element.length >= 7)

console.log(withSevenChars)

withSevenChars = hitchedSpaceships.find(element => element.length >= 7)

console.log(withSevenChars)