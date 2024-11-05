arquivo = prompt("Qual o tamanho do arquivo em MB?");
velocidade = prompt("E qual a velocidade da Internet em Mbps?");

tempodld = (arquivo/velocidade)/60;
console.log("O tempo aproximado de download desse arquivo é", tempodld, "minutos")