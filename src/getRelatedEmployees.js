const { employees } = require('../data/zoo_data');

const isManager = (paramId) => employees
  .some((employee) => employee.managers
    .find((manager) => manager === paramId));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const result = employees.filter(({ managers }) => managers
    .find((manager) => manager === managerId))
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);

  return result;
};

module.exports = { isManager, getRelatedEmployees };
