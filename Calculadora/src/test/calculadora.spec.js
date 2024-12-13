import { expect } from 'chai';
import { Calculadora } from '../src/calculadora.js';

describe('Calculadora', function() {

  it('deve somar dois números corretamente', function() {
    expect(Calculadora.calcular(2, 3, '+')).to.equal(5);
  });

  it('deve subtrair dois números corretamente', function() {
    expect(Calculadora.calcular(5, 3, '-')).to.equal(2);
  });

  it('deve multiplicar dois números corretamente', function() {
    expect(Calculadora.calcular(2, 3, '*')).to.equal(6);
  });

  it('deve dividir dois números corretamente', function() {
    expect(Calculadora.calcular(6, 3, '/')).to.equal(2);
  });

  it('não deve permitir divisão por zero', function() {
    expect(Calculadora.calcular(6, 0, '/')).to.equal("não é possível dividir por zero");
  });

  it('deve calcular a potência corretamente', function() {
    expect(Calculadora.calcular(2, 3, '**')).to.equal(8);
  });

  it('deve calcular a raiz quadrada corretamente', function() {
    expect(Calculadora.calcular(9, null, 'raiz')).to.equal(3);
  });

  it('deve retornar "operação inválida" para operações desconhecidas', function() {
    expect(Calculadora.calcular(2, 3, 'invalida')).to.equal('operação inválida');
  });
});
