const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, idade) => data
  .species.find((specie) => specie.name.includes(animal))
  .residents.every(({ age }) => age >= idade);

module.exports = getAnimalsOlderThan;
