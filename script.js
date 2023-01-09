class Ninja{
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 10;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    
    sayName(){
        return this.nombre;
    }
    drinkSake(){
        return this.salud += 10;
    }
    showStats(){
        console.log(`Nombre: ${this.sayName()} Fuerza: ${this.fuerza} Velocidad: ${this.velocidad} Salud: ${this.drinkSake()}`)
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

