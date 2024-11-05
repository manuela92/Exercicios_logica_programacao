area = parseFloat(prompt("Qual o tamanho da área a ser pintada, em metros quadrados?"));
cobertura = area/3;
lata = cobertura/18; 
total_lata = Math.ceil(lata)
valor = total_lata*80;

console.log("Você precisará de", total_lata, "latas de tinta, que custarão no total R$", valor)