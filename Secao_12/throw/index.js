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

}

let Phoenix = new SpaceshipWeapon(10)
Phoenix.shoot()
Phoenix.shoot()
Phoenix.shoot()
Phoenix.shoot()
Phoenix.shoot()
Phoenix.shoot()
