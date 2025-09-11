const idade = {
    felipe: 16,
    emanoel: 15,
    henrique: 15,
    leonardo: 17
 };
 

function CalcularMedia(idades) {
    const somaIdade =   idades.felipe +
        idades.emanoel +
        idades.henrique +
        idades.leonardo
    const vazar  = somaIdade / 4
    return vazar;
}

console.log(idade);
console.log(CalcularMedia(idade));