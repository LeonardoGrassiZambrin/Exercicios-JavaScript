// --- Registro das Despesas ---

let despesas = {}; // Objeto para armazenar as despesas

console.log("--- Registro de Despesas Pessoais ---");
console.log("Por favor, informe o valor para cada categoria. Digite 0 se não houver despesa nesta categoria.");

// Solicita o valor para cada categoria de despesa
despesas.moradia = parseFloat(prompt("Valor da Moradia (Aluguel/Prestação): R$ "));
despesas.alimentacao = parseFloat(prompt("Valor da Alimentação (Supermercado/Feira): R$ "));
despesas.transporte = parseFloat(prompt("Valor do Transporte (Combustível/Público): R$ "));
despesas.lazer = parseFloat(prompt("Valor do Lazer (Passeios/Cinema): R$ "));
despesas.contas = parseFloat(prompt("Valor das Contas (Luz, Água, Internet, Telefone): R$ "));
despesas.educacao = parseFloat(prompt("Valor da Educação (Mensalidade/Cursos): R$ "));

console.log("\n--- Despesas Registradas ---");
for (const categoria in despesas) {
  // Verifica se o valor é um número válido antes de exibir
  if (isNaN(despesas[categoria]) || despesas[categoria] < 0) {
    console.log(categoria.charAt(0).toUpperCase() + categoria.slice(1) + ": Valor Inválido.");
    despesas[categoria] = 0; // Define como 0 para não afetar o cálculo
  } else {
    console.log(`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: R$ ${despesas[categoria].toFixed(2)}`);
  }
}

// --- Cálculo do Total de Despesas ---
let totalDespesas = 0;
for (const categoria in despesas) {
  totalDespesas += despesas[categoria];
}

console.log("\n--------------------------------------");
console.log(`Total de Despesas: R$ ${totalDespesas.toFixed(2)}`);