class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getInfo(){
        return console.log(`Name: ${this.name}. Age: ${this.age}.`)
    }
}

class Car{
    constructor(licensePlate,brand,model,year){
        this.owner = null;
        this.licensePlate = licensePlate;
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    assignOwner(human){
        if (human.age > 17) {
            this.owner = human;
        } 
        else {
            console.log(`Owner must be over 17 years old.`);
        }
    }
    getInfo(){
        console.log('Information about the car:');
        console.log(`License plate: ${this.licensePlate}, brand: ${this.brand}, model: ${this.model}, year: ${this.year}`);
        if (this.owner!==null) {
            console.log('Information about the owner:');
            this.owner.getInfo();
        } 
        else {
            console.log('Owner not assigned.');
        }
    }

}
const human1 = new Human('Oleg', 25);
const human2 = new Human('Nazar', 17);
const human3 = new Human('Eva', 22);

const car1 = new Car('BH1267BH', 'Mazda', 'Miata', 2018);
const car2 = new Car('BA3412BA', 'Honda', 'Civic', 2020);
const car3 = new Car('AH5631HX', 'Ford', 'Focus', 2015);

car1.assignOwner(human1);
car2.assignOwner(human2);
car3.assignOwner(human3);

car1.getInfo();
car2.getInfo();
car3.getInfo();