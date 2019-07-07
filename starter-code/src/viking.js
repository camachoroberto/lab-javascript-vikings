// Soldier
class Soldier {
    constructor(healthArg, strengthArg) {
        this.health = healthArg;
        this.strength = strengthArg;
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(nameArg, healthArg, strengthArg) {
        super(healthArg, strengthArg);
        this.name = nameArg;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(healthArg, strengthArg) {
        super(healthArg, strengthArg)
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }

    vikingAttack() {
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSaxon = this.saxonArmy[randomSaxonIndex];

        console.log("Saxon", randomSaxon);
        randomSaxon.receiveDamage(randomViking.attack());
        console.log("apos ataque", randomSaxon);
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex);
            return "A Saxon has died in combat"
        }
    }

    saxonAttack(){
        let randomSaxonIndex=Math.floor(Math.random()*this.saxonArmy.length);
        let randomVikingIndex=Math.floor(Math.random()*this.vikingArmy.length);
        let randomViking=this.vikingArmy[randomVikingIndex];
        let randomSaxon=this.saxonArmy[randomSaxonIndex];

        console.log("este eh o Viking", randomViking);
        let damageDone=randomSaxon.attack();
        randomViking.receiveDamage(damageDone);
        console.log("apos ataque", randomViking);
        if(randomViking.health<=0){
            this.vikingArmy.splice(randomVikingIndex);
            return "A viking has died in combat"
        }
        return `${randomViking.name} has received ${damageDone} points of damage`
    }
    showStatus(){
        if(!this.vikingArmy.length){
            return "Saxons have fought for their lives and survive another day..."
        }
        if(!this.saxonArmy.length){
            return "Vikings have won the war of the century!"
        }
        if(this.saxonArmy.length>0 && this.vikingArmy.length>0){
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}