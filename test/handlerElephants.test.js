const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se a função retorna o valor esperado', () => {
    // Testa se handlerElephants é uma função.
    expect(typeof handlerElephants).toBe('function');
    // Testa se a função handlerElephants retorna "undefined" quando não recebe nenhum parâmetro.
    expect(handlerElephants()).toBeUndefined();
    // Testa se a função retorna um valor numérico único quando recebe o parâmetro "count".
    expect(typeof handlerElephants('count')).toMatch(/number/);
    // Testa se a função retorna o valor 4 quando recebe o parâmetro "count".
    expect(handlerElephants('count')).toEqual(4);
    // Testa se a função retorna um array de strings quando recebe o parâmetro "names".
    expect(handlerElephants('names')).toStrictEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    // Testa se a função um array contendo o nome Jefferson ao receber o parâmetro "names".
    const elephantsNames = handlerElephants('names');
    expect(elephantsNames[3]).toMatch(/Jefferson/);
    expect(handlerElephants('names')).toContain('Jefferson');
    // Testa se o retorno da função é o valor 10.5 quando recebe o parâmetro averageAge.
    expect(handlerElephants('averageAge')).toBe(10.5);
    // Testa se a função retorna a localização correta ao receber o parâmetro "location".
    const location = handlerElephants('location');
    expect(location).toMatch(/NW/);
    // Testa se a função retorna um array quando recebe o parâmetro "availability".
    expect(typeof handlerElephants('availability')).toBe('object');
    expect(handlerElephants('availability')).toStrictEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    // Testa se o array retornado pela função ao receber o parâmetro "availability" contém quatro itens.
    expect(handlerElephants('availability')).toHaveLength(4);
    // Testa se a função retorna valores diferentes quando recebe parâmetros distintos entre si.
    expect(handlerElephants('names')).not.toBeUndefined();
    expect(handlerElephants('names')).not.toBeNull();
    // Testa se a função retorna null ao receber valores aleatórios como parâmetro.
    expect(handlerElephants('qualquercoisa')).toBeNull();
  });
});
