// Ninja Assignment, Create a Ninja Class with attributes, and methods

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
/* Part 2: Extend Ninja assignment -> Super Ninja Assignment. Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, 
and 10 strength by default. In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. 
Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.
*/
class Sensei extends Ninja {
    constructor(name) {
        super(name, 200, 10, 10);
        this.wisdom = 10;
    
    }
    speakWisdom() {
        return super.drinkSake() + console.log("No one can make you feel inferior without your consent.");
    }
    // showStats() {
    //     console.log(`
    //                 Sensei Name:  ${this.name}
    //                 Sensei Health:  ${this.health}
    //                 Sensei Speed:  ${this.speed}
    //                 Sensei Strength: ${this.strength}
    //                 Sensei Wisdom: ${this.wisdom}`)
    // }
}

let ninja = new Ninja("Keyrow", 100);
ninja.showStats();
ninja.drinkSake();
ninja.showStats();
let sensei = new Sensei("Master Splinter");
sensei.showStats();
sensei.speakWisdom();
sensei.showStats();

