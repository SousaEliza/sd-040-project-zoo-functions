const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }
  return data.employees.find((employee) => employee
    .firstName.includes(employeeName) || employee.lastName
    .includes(employeeName));
};

module.exports = getEmployeeByName;
