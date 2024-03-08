const { species } = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    return species
      .reduce((acc, specie) => ({ ...acc,
        [specie.name]: specie.residents
          .length }), {});
  }
  let result;
  if (!animal.sex) {
    result = species.find(({ name }) => animal
      .species.includes(name)).residents;
  } else {
    result = species.find(({ name }) => animal
      .species.includes(name)).residents.filter((resident) => animal.sex === resident.sex);
  }
  return result.reduce((acc) => (acc + 1), 0);
};

module.exports = countAnimals;
