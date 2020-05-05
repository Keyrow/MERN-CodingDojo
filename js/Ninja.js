// Ninja Assignment, Create a Ninja Class with attributes, and methods
// By: Song Kim

class Ninja {

    constructor(NinjaName, NinjaHealth, NinjaSpeed = 3, NinjaStrength = 3) {
        this.name = NinjaName;
        this.health = NinjaHealth;
        this.speed = NinjaSpeed;
        this.strength = NinjaStrength;
    }
    // sayName() {
    //     console.log("Ninja Name: " + this.name);
    // }
    // sayHealth() {
    //     console.log("Ninja Health: " + this.health);
    // }
    // saySpeed() {
    //     console.log("Ninja Speed: " + this.speed);
    // }
    // sayStrength() {
    //     console.log("Ninja Strength: " + this.strength);
    // }
    showStats() {
        console.log(`
                    Ninja Name:  ${this.name}
                    Ninja Health:  ${this.health}
                    Ninja Speed:  ${this.speed}
                    Ninja Strength: ${this.strength}`)
    }
    drinkSake() {
        console.log("Ninja drinks sake...Adding 10HP to Ninja...")
        this.health += 10;
    }
}

let ninja = new Ninja("Keyrow", 100);
ninja.showStats();
ninja.drinkSake();
ninja.showStats();


