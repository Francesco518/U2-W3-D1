class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  static whoIsOlder(userA, userB) {
    const ageCompare = userA.age - userB.age;
    const comparisons = [
      userA.firstName + " and " + userB.firstName + " are the same age ",
      userA.firstName + " is younger than " + userB.firstName,
      userA.firstName + " is older than " + userB.firstName,
    ];
    return comparisons[Math.sign(ageCompare) * -1];
  }
}

const nameAndSurname = new User("Luke", "Skywalker", 20, "Tatooine");
console.log(nameAndSurname);
const secondPerson = new User("Han", "Solo", 32, "Corellia");

const result = User.whoIsOlder(nameAndSurname, secondPerson);
console.log(result);

class Pet {
  constructor(petName, ownerName, species, breed) {
    (this.petName = petName), (this.ownerName = ownerName);
    this.species = species;
    this.breed = breed;
  }
  isTheSameOwner(dataToCompare) {
    return this.ownerName === dataToCompare.ownerName;
  }
}

const animals = [
  new Pet("Stardust", "Paul", "dog", "labrador"),
  new Pet("Buckbeak", "John", "cat", "ragdoll"),
];

console.log(animals[0].isTheSameOwner(animals[1]));
