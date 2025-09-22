const frutas = ["Maçã", "Banana", "Laranja", "Uva"];

console.log("\n")

console.log("A primeira fruta é:", frutas[0], "\n"); 
console.log("A terceira fruta é:", frutas[2], '\n'); 


console.log("O array tem", frutas.length, "frutas. \n"); 


frutas.push("Morango");
console.log("O array agora é:", frutas, "\n");


frutas.pop();
console.log("O array após remover o último elemento:", frutas, "\n");



console.log("Lista de frutas: \n");
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i], "\n");
}


console.log("Lista de frutas com forEach: \n");
frutas.forEach(fruta => {
  console.log(fruta, "\n");
});