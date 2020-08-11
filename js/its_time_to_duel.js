// Ninja Class
class NinjaCard {

    constructor(ninjaName, ninjaCost, ninjaPower, ninjaResilience = 4) {
        this.name = ninjaName;
        this.cost = ninjaCost;
        this.power = ninjaPower;
        this.resilience = ninjaResilience;
    }

    // Showing stats Method
    showStats() {
        console.log(`
                    Ninja Name:  ${this.name}
                    Ninja Cost:  ${this.cost}
                    Ninja Power:  ${this.power}
                    Ninja Resilience: ${this.resilience}`)
    }

    // Playing a card Method
    playCard(effect) {
        console.log(effect.name, effect.magnitude);
        this[effect.stat] += effect.magnitude;
    }
}

// Effect Card Class
class EffectCard {
    constructor(effectName, effectCost, effectText, effectStat, effectMagnitude) {
        this.name = effectName;
        this.cost = effectCost;
        this.text = effectText;
        this.stat = effectStat;
        this.magnitude = effectMagnitude;
    }
}

let redBeltNinja = new NinjaCard("Red Belt Ninja", 3, 3);
let blackBeltNinja = new NinjaCard("Black Bekt Ninja", 4, 5);

let hardAlgorithm = new EffectCard("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
let unHandledPromisRejection = new EffectCard("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
let pairProgramming = new EffectCard("Pair Programming", 3, "increase target's power by 2", "power", 2);

// Playing out the scenario
redBeltNinja.showStats();
redBeltNinja.playCard(hardAlgorithm);
redBeltNinja.showStats();
redBeltNinja.playCard(unHandledPromisRejection);
redBeltNinja.showStats();
redBeltNinja.playCard(pairProgramming);
redBeltNinja.showStats();

