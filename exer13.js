const jogosps2 = ["Maçã", "Banana", "Laranja", "Uva"];

console.log("\n")

console.log("A primeira fruta é:", jogosps2[0], "\n"); 
console.log("A terceira fruta é:", jogosps2[2], '\n'); 


console.log("O array tem", jogosps2.length, "jogosps2. \n"); 


jogosps2.push("Morango");
console.log("O array agora é:", jogosps2, "\n");


jogosps2.pop();
console.log("O array após remover o último elemento:", jogosps2, "\n");



console.log("Lista de jogosps2: \n");
for (let i = 0; i < jogosps2.length; i++) {
  console.log(jogosps2[i], "\n");
}