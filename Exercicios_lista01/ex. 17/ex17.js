area = parseFloat(prompt("Qual o tamanho da área a ser pintada, em metros quadrados?"));
cobertura = area/6;

lata = cobertura/18; 
total_lata = Math.ceil(lata)
valor_lata = total_lata*80;
console.log("Você precisará de", total_lata, "latas de tinta de 18L, que custarão no total R$", valor_lata)

galao = cobertura/3.6; 
total_galao = Math.ceil(galao)
valor_galao = total_galao*25;
console.log("Você precisará de", total_galao, "galões de tinta de 3.6L, que custarão no total R$", valor_galao)

