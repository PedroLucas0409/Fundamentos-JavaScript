// Obtém o formulário com o ID "orderForm" do documento HTML e atribui a variável "form"
const form = document.getElementById("orderForm");

// Adiciona um ouvinte de evento para o evento "submit" no formulário
form.addEventListener("submit", function (ev) {
  // Evita que o formulário seja enviado e a página seja recarregada
  ev.preventDefault();

  // Obtém os valores dos campos de entrada do formulário
  const name = document.querySelector("input[name='name']").value;
  const address = document.querySelector("input[name='address']").value;
  const breadType = document.querySelector("select[name='breadType']").value;
  const main = document.querySelector("input[name='main']").value;
  const observations = document.querySelector("textarea[name='observations']").value;

  // Inicializa uma variável para armazenar os itens selecionados da salada
  let salad = "";
  // Seleciona todos os itens de salada que foram marcados e itera sobre eles
  document.querySelectorAll("input[name='salad']:checked").forEach(function (item) {
    // Adiciona cada item selecionado à string "salad" com uma quebra de linha
    salad += " - " + item.value + "\n";
  });

  // Exibe os valores coletados no console para depuração
  console.log({
    name,
    address,
    breadType, 
    main,
    salad,
    observations
  });

  // Exibe uma mensagem de alerta com os detalhes do pedido
  alert(
    "Pedido Realizado!" + "\nNome do cliente: " + name + "\nEndereço de entrega: " + address +
    "\nTipo de pão: " + breadType + "\nRecheio: \n - " + main + "\n" + salad +
    "Observações: " + observations
  );
});
