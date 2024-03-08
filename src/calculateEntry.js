const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const child = entrants.filter((visitante) => visitante.age < 18).reduce((acc) => acc + 1, 0);
  const adult = entrants
    .filter((visitante) => visitante.age >= 18 && visitante.age < 50)
    .reduce((acc) => acc + 1, 0);
  const senior = entrants.filter((visitante) => visitante.age >= 50).reduce((acc) => acc + 1, 0);
  return {
    child,
    adult,
    senior,
  };
};

const calculateEntry = (entrants) => {
  const fatores = [];
  if (!entrants) {
    return 0;
  }
  const entradas = countEntrants(entrants);
  if (!entradas) {
    return 0;
  }
  fatores.push(entradas, data.prices);
  return fatores.reduce((total, key) => {
    const result = (total.child * key.child) + (total
      .adult * key.adult) + (total.senior * key.senior);
    return Number(result.toFixed(2));
  });
};

module.exports = { calculateEntry, countEntrants };
