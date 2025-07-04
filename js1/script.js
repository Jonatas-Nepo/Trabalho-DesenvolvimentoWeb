const name="jaozin";
let idade= 17;
console.log(idade)
entrada(idade);
idade=idade+1;
console.log("E aí "${name}", tu fez "${idade}" anos!");
entrada(idade);
function entrada(idade) {
    if(idade >= 18) {
    console.log("Ta dentro, parça");
}
else {
    console.log("Pode não, menó");
}
}