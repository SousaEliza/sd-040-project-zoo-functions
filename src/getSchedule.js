const { species, hours } = require('../data/zoo_data');

// Função que retorna os animais disponíveis para visitação conforme a data pesquisada
const getAvailableAnimals = (paramday) => species
  .filter((specie) => specie.availability
    .includes(paramday))// filtra pela disponibilidade para a data
  .map((availableOne) => availableOne.name);// retorno apenas o nome do animal

// Função que fornece os horários de funcionamento do zoo
function getOfficeHours(paramday) {
  const workinOurs = () => Object.entries(hours)
    .find((index) => index.includes(paramday)).find((elemento) => typeof elemento === 'object');
  return `Open from ${workinOurs().open}am until ${workinOurs().close}pm`;
}
// Função que retorna todo o cronograma do zoo
const zooSchedule = () => Object.keys(hours).reduce((acc, currday) => ({
  ...acc,
  [currday]: {
    officeHour: currday === 'Monday' ? 'CLOSED' : getOfficeHours(currday),
    exhibition: currday === 'Monday' ? 'The zoo will be closed!' : getAvailableAnimals(currday),
  },
}), {});

// Função que retorna todos os dados de um animal do zoo
const residentsSchedule = (paranimal) => species
  .find((specie) => specie
    .name === paranimal);

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) { // Se nada for digitado, retorno todos os dados de cronogramado zoo
    return zooSchedule();
  }
  if (Object.keys(hours).includes(scheduleTarget)) { // Verifico se o parâmetro é igual as informações armazenadas no objeto hours
    return { // Entrando na condição, retorno um objeto contendo os dados para o dia
      [scheduleTarget]: zooSchedule()[scheduleTarget],
    };
  }
  const daysOfExhibition = residentsSchedule(scheduleTarget);
  if (daysOfExhibition !== undefined) {
    return daysOfExhibition.availability;// retorno somente a informação necessária sobre o animal
  }
  return zooSchedule();// Caso o parâmetro não seja encontrado na base de dados, retorno todo o cronograma do zoo
}

module.exports = getSchedule;
