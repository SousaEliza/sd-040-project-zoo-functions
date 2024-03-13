const { species } = require('../data/zoo_data');

function filterByLocation(location) {
  return species
    .filter((specie) => specie
      .location === location);
}

function filterBySex(sex, residents) {
  return sex ? residents
    .filter((resident) => resident
      .sex === sex) : residents;
}

function getAnimalNames(includeNames, sorted, key, residents) {
  if (includeNames) {
    const residentNames = residents.map((resident) => resident.name);
    if (sorted) {
      residentNames.sort((a, b) => a.localeCompare(b));
    }
    return { [key]: residentNames };
  }
  return key;
}

const getAnimalMap = (options = {}) => {
  const locations = ['NE', 'NW', 'SE', 'SW'];
  return locations.reduce((acc, location) => {
    acc[location] = filterByLocation(location)
      .map((specie) => {
        const residents = filterBySex(options.sex, specie.residents);
        return getAnimalNames(options.includeNames, options.sorted, specie.name, residents);
      });
    return acc;
  }, {});
};

module.exports = getAnimalMap;
