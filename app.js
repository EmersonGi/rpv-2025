const emailInput = document.querySelector("#email");
const emailErro =
  document.querySelector(
    "#emailErro"
  ); /* Guarde o input e o locar onde vou mostrar o erro */

emailInput.addEventListener(
  "blur",
  function () {}
); /* Adicionei um ouvinte de evento para quando o usuário sair do campo de email */

/* addEventListener recebe dois parâmetros: o tipo de evento e uma função */

const email =
emailInput.addEventListener("blur", function () {
  const email = emailInput.value.trim();

  if (
    email.includes("@gmail") ||
    email.includes("@hotmail") ||
    email.includes("@outlook")
  ) {
    emailErro.textContent = "Use um email corporativo";
  } else {
    emailErro.textContent = "";
  }
});

const senhaInput = document.querySelector("#senha");
const forca = document.querySelector("#forcaSenha");

senhaInput.addEventListener("input", function () {
  const senha = senhaInput.value;

  if (senha.length < 6) {
    forca.textContent = "Fraca";
    forca.style.color = "red";
  } else if (senha.length < 10) {
    forca.textContent = "Média";
    forca.style.color = "orange";
  } else {
    forca.textContent = "Forte";
    forca.style.color = "green";
  }
});

const cepInput = document.querySelector("#cep");

cepInput.addEventListener("blur", function () {
  const cep = cepInput.value;

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
});
const sobre = document.querySelector("#sobre");
const contador = document.querySelector("#contador");

sobre.addEventListener("input", function () {
  contador.textContent = `${sobre.value.length}/500`;
});
