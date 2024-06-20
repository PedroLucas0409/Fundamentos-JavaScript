const input = document.getElementById("input");

document.getElementById("value").addEventListener("click", function () {
  input.value = input.value === "" ? "Hello World!" : "";

  console.log(input.value);
  console.log(input.getAttribute("value"));
});

document.getElementById("type").addEventListener("click", function () {
  input.type = input.type !== "radio" ? "radio" : "text";
  //   input.setAttribute("type", "radio");
});

document.getElementById("placeholder").addEventListener("click", function () {
  input.placeholder = "Digite Algo...";
});

document.getElementById("disable").addEventListener("click", function () {
  var input = document.getElementById("input"); // Obter o elemento input
  input.disabled = !input.disabled; // Alternar entre habilitado e desabilitado
  // input.setAttribute('disabled', !input.disabled)
});


document.getElementById('data').addEventListener("click", function(){
    const data = input.dataset.somethingElse
    console.log(`O valor do atributo data-something-else é : ${data}`)
    input.dataset.somethingElse = 'Algum outro valor'
    console.log(`O valor do atributo data-something-else agora é : ${input.dataset.somethingElse}`)
})