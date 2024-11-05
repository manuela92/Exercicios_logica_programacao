salarioh = parseFloat(prompt("Quanto você ganha por hora? "));
hora = parseFloat(prompt("Quantas horas você trabalha por mês?"));

salariobruto = salarioh*hora

inss = salariobruto*0.08

sind = salariobruto*0.05

ir= salariobruto*0.11

salarioliq = [(salariobruto - ir)- inss]-sind

console.log("Seu salário bruto é: R$", salariobruto);
console.log("Deste valor, é descontado para o INSS R$", inss);
console.log("E para o Sindicato R$", sind);
console.log("Resultando no salário liquido de R$", salarioliq)
