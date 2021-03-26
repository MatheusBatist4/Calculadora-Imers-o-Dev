var primeiroValor = parseFloat(prompt("Digite o primeiro valor: "))

var segundoValor = parseFloat(prompt("Digite o segundo valor: "))

var escolha = prompt("O que deseja fazer? 1-Para adição, 2-Para subtração, 3-Para divisão ou 4-Para multiplicação")

if (escolha == 1) {
    var resultado = primeiroValor + segundoValor
    document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
}else if (escolha == 2) {
  var resultado = primeiroValor - segundoValor
  document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
}else if (escolha == 3){
  var resultado = primeiroValor / segundoValor
  document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
}else if (escolha == 4){
  var resultado = primeiroValor * segundoValor
  document.write("<h2>" + primeiroValor + " * " + segundoValor + " = " + resultado + "</h2>")
}else{
        alert("Opção inválida")
    }
