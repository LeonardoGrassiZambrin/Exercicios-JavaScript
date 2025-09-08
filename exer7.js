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
    const mediaIdade = somaIdade / 4
    return mediaIdade;


console.log(idade);
console.log(mediaIdade);}

