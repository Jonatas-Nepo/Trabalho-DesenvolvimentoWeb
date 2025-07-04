let botao = document.querySelector("#botao");
botao.style.backgroundColor = "blue";
let q=false;
let contador = 0;
botao.addEventListener("mouseover", e => {
    if(q==false){
    botao.style.backgroundColor = "green";
}});

botao.addEventListener("mouseout", e => {
    if(q==false){

    botao.style.backgroundColor = "blue";
}});

botao.addEventListener("click", e => {
    contador++;
    if(contador> 9 ){
       
    botao.style.backgroundColor = "red";
    botao.innerHTML = "quebrei!";
    q=true;}
  
});
