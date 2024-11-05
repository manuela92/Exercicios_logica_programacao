pesopeixe = parseFloat(prompt("Peso do peixe: "));

if(pesopeixe>50){
    excesso = pesopeixe-50
    multa = excesso*4
    console.log("Há um excesso de", excesso, "kg no peso")
    console.log("O valor da multa será: R$", multa)
}else{
    console.log("Há um excesso de ZEROkg no peso")
    console.log("O valor da multa será: R$ ZERO")
}
