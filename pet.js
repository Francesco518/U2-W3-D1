class housePet {
  constructor(petName, ownerName, species, breed) {
    (this.petName = petName), (this.ownerName = ownerName);
    this.species = species;
    this.breed = breed;
  }
}

const petList = [];
const form = document.getElementById("pet-form");
const elementList = document.getElementById("pet-list");
const resetButton = document.getElementById("reset-button");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const petName = form.petName.value;
  const ownerName = form.ownerName.value;
  const species = form.species.value;
  const breed = form.breed.value;

  const newPet = new Pet(petName, ownerName, species, breed);
  petList.push(newPet);
  renderPetList();
  form.reset();
});

resetButton.addEventListener("click", function () {
  petList.length = 0;
  renderPetList();
});

function renderPetList() {
  elementList.innerHTML = "";
  petList.forEach((pet, index) => {
    const listAnimals = document.createElement("li");
    listAnimals.textContent = `Pet Name: ${pet.petName}, Owner Name: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
    elementList.appendChild(listAnimals);
  });
}
