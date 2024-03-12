const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('Verifica se getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  test('Verifica se getOpeningHours retorna um objeto com os horários de todos os dias da semana ao receber nenhum valor como parâmetro', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  test('Verifica se getOpeningHours retorna uma mensagem ao receber valores válidos como parâmetros', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toMatch('The zoo is closed');
    expect(getOpeningHours('Tuesday', '09:00-AM')).toMatch('The zoo is open');
    expect(getOpeningHours('Wednesday', '09:00-PM')).toMatch('The zoo is closed');
  });
});
