class Animal {
  constructor(species) {
    this._species = species; // Use a private property for species
  }

  get species() {
    return this._species; // Getter for the species property
  }

  makeSound() {
    console.log(`The ${this._species} makes a sound`); // Logs the sound of the animal
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof"); // Logs "woof" for a dog
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr"); // Logs "purr" for a cat
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
