// ### Simulador de carrera de coches

// Pautas:
// - Crea una clase `Car` con propiedades como posición, velocidad y nombre.
// - Implementa un método para actualizar la posición de cada coche en cada "turno".
// - Utiliza un bucle para simular la carrera hasta que un coche llegue a la meta.

// Datos iniciales:

// ```javascript
// const cars = [
//   { name: "Car A", position: 0, speed: 120 },
//   { name: "Car B", position: 0, speed: 130 },
//   { name: "Car C", position: 0, speed: 125 }
// ];

// const raceDistance = 1000; // metros
// ```



class Car {
    constructor(name, speed) {
        this.name = name;
        this.position = 0;
        this.speed = speed;
    }
    move() {
        this.position += this.speed;
    }
}

const cars = [
    new Car("Car A", 120),
    new Car("Car B", 130),
    new Car("Car C", 125)
];

const raceDistance = 1000; // metros



function startRace(cars, raceDistance) {
    let raceFinished = false;

    while (!raceFinished) {
        cars.forEach(car => {
            car.move();
            console.log(`El auto ${car.name} se movió ${car.position} metros.`);
    
        if (car.position >= raceDistance) {
        raceFinished = true;
        console.log(`La carrera ha finalizado. ${car.name} ha llegado a la meta.`);
        }
        }
        );
    }
}

startRace(cars, raceDistance);