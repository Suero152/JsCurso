class SpaceshipWeapon {
    constructor(identifier){
        this.identifier = identifier
        this.shotsLeft = 5
    }

    shoot(){
        if(this.shotsLeft > 0){
            this.shotsLeft -= 1
            console.log('Bang!')
        }else{
            throw new Error('Você está sem munição.')
        }
        
    }

    reload(){
        this.shotsLeft += 5
    }

}

let phoenixWeapon = new SpaceshipWeapon(10)

try{
    phoenixWeapon.shoot()
    phoenixWeapon.shoot()
    phoenixWeapon.shoot()
    phoenixWeapon.shoot()
    phoenixWeapon.shoot()
    phoenixWeapon.shoot()
    // O 'e' é como se fosse as 'e'
}catch(err){
    console.log(err.message)
    phoenixWeapon.reload()
    phoenixWeapon.shoot()
    // Ao final de um try o finnaly é sempre executado se entrar no catch ou não 
} finally{
    console.log('A arma deu bom tiros')
}