// Valor do aluguel/prestação da casa
let moradia = 1200;

// Gasto com supermercado e feira
let alimentacao = 850;

// Combustível, transporte público, etc.
let transporte = 300;

// Passeios, cinema, etc.
let lazer = 450;

// Luz, água, internet, telefone
let contas = 600;

// Mensalidade escolar, cursos
let educacao = 200;

console.log("--- Despesas Familiares Registradas ---");
console.log(`Moradia: R$ ${moradia}`);
console.log(`Alimentação: R$ ${alimentacao}`);
console.log(`Transporte: R$ ${transporte}`);
console.log(`Lazer: R$ ${lazer}`);
console.log(`Contas: R$ ${contas}`);
console.log(`Educação: R$ ${educacao}`);
console.log("--------------------------------------");

// Cálculo do Total de Despesas
let totalDespesas = moradia + alimentacao + transporte + lazer + contas + educacao;

console.log(`Total de Despesas: R$ ${totalDespesas}`);

// --- Cálculo da Média de Despesas ---

// Para calcular a média, precisamos saber quantas "categorias" de despesas temos.
// Neste exemplo, temos 6 categorias.
let numeroDeCategorias = 6;
let mediaDespesas = totalDespesas / numeroDeCategorias;

console.log(`Média de Despesas por Categoria: R$ ${mediaDespesas.toFixed(2)}`); // .toFixed(2) formata para 2 casas decimais