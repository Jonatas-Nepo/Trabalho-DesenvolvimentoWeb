const campo1 = document.getElementById("campo1");
const campo2 = document.getElementById("campo2");
const conta = document.getElementById("conta");
const botao = document.getElementById("igual");
const result = document.getElementById("resultado");

botao.addEventListener("click", calcula);
function calcula(){
    const valor1 = parseInt(campo1.value);
    const valor2 = parseInt(campo2.value);


const op = document.getElementById("conta").value;
if(op =="soma"){
    result.innerHTML = valor1 + valor2;
}
if(op =="subtracao"){        
    result.innerHTML = valor1 - valor2;
}
if(op =="multiplicacao"){
    result.innerHTML = valor1 * valor2;
}   
if(op =="divisao"){      
    result.innerHTML = valor1 / valor2;
}   
}