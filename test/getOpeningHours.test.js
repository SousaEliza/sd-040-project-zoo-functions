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
  test('Verifica se getOpeningHours retorna a mensagem "The day must be valid. Example: Monday" quando recebe valores inválidos como parâmetro', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError('The day must be valid. Example: Monday');
    expect(() => getOpeningHours('F', '09:00-AM')).toThrowError('The day must be valid. Example: Monday');
  });
  test('Verifica se getOpeningHours retorna uma mensagem quando recebe valores inválidos como parâmetro', () => {
    expect(() => getOpeningHours('Thursday', '17:00')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrowError('The hour should represent a number');
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrowError('The minutes should represent a number');
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrowError('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrowError('The minutes must be between 0 and 59');
  });
});
