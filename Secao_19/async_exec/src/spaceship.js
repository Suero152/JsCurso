class Spaceship {
    constructor(name, maxCapacity, currentCharge, shield) {
      this.name = name
      this.maxCapacity = maxCapacity
      this.currentCharge = currentCharge
      this.shield = shield
    }
  
    currentPercentCharge() {
      return this.currentCharge * 100 / this.maxCapacity
    }
  }
  
  export default Spaceship