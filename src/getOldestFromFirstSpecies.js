const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const foundSpecie = data.employees
    .find((employee) => employee.id === id).responsibleFor
    .find((specie) => specie);

  const oldestFound = data.species
    .find((specie) => specie.id === foundSpecie).residents
    .reduce((acc, resident) => ((acc.age > resident
      .age) ? acc : resident));

  return Object.values(oldestFound);
};

module.exports = getOldestFromFirstSpecies;
