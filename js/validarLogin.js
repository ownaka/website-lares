const form = document.querySelector("#form");
const nameInput = document.querySelector("#nome");
const cnpjInput = document.querySelector("#cnpj");
const emailInput = document.querySelector("#email");
const telefoneInput = document.querySelector("#telefone");
const senhaInput = document.querySelector("#senha");
const confirmesenhaInput = document.querySelector("#confirme_senha");

form.addEventListener("submit", (event) =>{
  event.preventDefault();

    if(nameInput.value === ""){
      alert("Preencha o seu nome.");
      return;
    }

    if(!validacnpj(cnpjInput.value, 14)){
      alert("CNPJ inválido.");
      return;
    }

    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
      alert("Preencha o seu email.");
      return;
    }

    if(telefoneInput.value === ""){
      alert("Preencha com o seu número.");
      return;
    }

    if (!validaSenha(senhaInput.value, 6)){
      alert("Sua senha precisa ter no mínimo 6 dígitos.");
      return;
    }

    if(confirmesenhaInput.value === ""){
      alert("Confirme sua senha.");
      return;
    }

    form.submit();
});

function isEmailValid(email){

  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

  if(emailRegex.teste(email)){
    return true;
  }

  return false;
}

function validaSenha(senha, minDigits){
  if(senha.length >= minDigits){
     return true;
  }
 
  return false;
 }

function validacnpj(cnpj, minDigits){
  if(cnpj.length === minDigits){
     return true;
  }
 
  return false;
 }