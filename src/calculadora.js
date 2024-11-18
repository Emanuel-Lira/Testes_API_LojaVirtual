class Calculadora {
 
  static somar(numero1, numero2) {
    return numero1 + numero2;
  }

  
  static subtrair(numero1, numero2) {
    return numero1 - numero2;
  }

  static multiplicar(numero1, numero2) {
    return numero1 * numero2;
  }
  
  static dividir(numero1, numero2) {
    if (numero2 === 0) {
      return "não é possível dividir por zero";
    }
    return numero1 / numero2;
  }
  
  static potencia(numero1, numero2) {
    return numero1 ** numero2;
  }
  
  static raiz(numero1) {
    return numero1**0.5;
  }

  
  static calcular(numero1, numero2, operacao) {
    switch (operacao) {
      case "+":
        return Calculadora.somar(numero1, numero2);
      case "-":
        return Calculadora.subtrair(numero1, numero2);
      case "*":
        return Calculadora.multiplicar(numero1, numero2);
      case "/":
        return Calculadora.dividir(numero1, numero2);
      case "**":
        return Calculadora.potencia(numero1, numero2);
      case "raiz":
        return Calculadora.raiz(numero1);
      default:
        return 'operação inválida';
    }
  }
}

export { Calculadora }; // Exporte a classe
