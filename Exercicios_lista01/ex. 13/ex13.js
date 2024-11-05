altura = parseFloat(prompt("Informe sua altura: "));
sexo = prompt("Informe seu sexo: 1 - masculino, 2 - feminino ");

if(sexo == 1){
    pesoIdealm =  (72.7*altura)-58;
    console.log("Seu peso ideal é", pesoIdealm, "kg");
    peso = parseFloat(prompt("Informe seu peso: "));
    if(peso==pesoIdealm){
        console.log("Você está dentro do peso ideal.");
    }else if(peso<pesoIdealm){
        console.log("Você está abaixo do peso ideal.");
    }else{
        console.log("Você está acima do peso ideal.");
    }
}else if(sexo == 2){
    pesoIdealf = (61.2*altura)-44.7
    console.log("Seu peso ideal é", pesoIdealf, "kg")
    peso = parseFloat(prompt("Informe seu peso: "))
    if(peso==pesoIdealf){
        console.log("Você está dentro do peso ideal.")
    }else if(peso<pesoIdealf){
        console.log("Você está abaixo do peso ideal.")
    }else{
        console.log("Você está acima do peso ideal.")
    }
}else{
    alert("Sexo não informado corretamente")
}


