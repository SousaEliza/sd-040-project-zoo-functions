const { employees, species } = require('../data/zoo_data');

function getAnimalNames(array) {
  return array.map((animalCode) => species
    .find((specie) => specie.id === animalCode).name);
}

function getAnimalLocation(array) {
  return array.map((animalCode) => species
    .find((specie) => specie.id === animalCode).location);
}

function getAllEmployees() {
  return employees
    .map(({ id, firstName, lastName, responsibleFor }) => {
      const resposta = {
        id,
        fullName: `${firstName} ${lastName}`,
        species: getAnimalNames(responsibleFor),
        locations: getAnimalLocation(responsibleFor),
      };
      return resposta;
    });
}

function coverageById(id) {
  const objFound = employees.find((employee) => employee.id === id);
  if (typeof objFound === 'object') {
    return {
      id: objFound.id,
      fullName: `${objFound.firstName} ${objFound.lastName}`,
      species: getAnimalNames(objFound.responsibleFor),
      locations: getAnimalLocation(objFound.responsibleFor),
    };
  }
  return undefined;
}

function coverageByName(name) {
  const objFound = employees
    .find((employee) => (name === employee.firstName || name === employee.lastName));
  if (typeof objFound === 'object') {
    return {
      id: objFound.id,
      fullName: `${objFound.firstName} ${objFound.lastName}`,
      species: getAnimalNames(objFound.responsibleFor),
      locations: getAnimalLocation(objFound.responsibleFor),
    };
  }
}

const getEmployeesCoverage = (info) => {
  if (typeof info !== 'object') return getAllEmployees();
  let objReturn;
  if (info.id) {
    objReturn = coverageById(info.id);
    if (objReturn === undefined) {
      throw new Error('Informações inválidas');
    }
  }
  if (info.name) {
    objReturn = coverageByName(info.name);
  }
  return objReturn;
};
// console.log(getEmployeesCoverage({ name: 'Nigel' }));
// console.log(getEmployeesCoverage({ id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1' }));
// console.log(getEmployeesCoverage({ id: 'c5b83cb3-a451-49e2-ac45-e7e1' }));
console.log(getEmployeesCoverage());
console.log(getEmployeesCoverage({ name: 'Eliza' }));
console.log(getEmployeesCoverage({ name: 'Bethea' }));

module.exports = getEmployeesCoverage;
