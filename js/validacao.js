/* Função Validar */
function validar() {
  // pegando o valor do nome pelos names
  var Nome = document.getElementById("Nome");
  var Email = document.getElementById("Email");
  var Senha = document.getElementById("Senha");
  var Plantacoes = document.getElementById("Plantacoes");
  var Cpf = document.getElementById("Cpf");
  
  // verificar se o nome está vazio
  if ( Nome.value == "") {
    alert("Nome não informado");

    // Deixa o input com o focus
    nome.focus();
    // retorna a função e não olha as outras linhas
    return;
  }
  
  if (Email.value == "") {
    alert("E-mail não informado");
    email.focus();
    return;
  }
  if (Senha.value == "") {
    alert("Senha não informada");
    senha.focus();
    return;
  }
  if (Cpf.value == "") {
    alert("Cpf não informado");
    telefone.focus();
    return;
  }
  
  if (Plantacoes.value == "") {
    alert("Suas Plantações não informado");
    sexo.focus();
    return;
  }
  alert("Formulário enviado!");
  // envia o formulário
  //formulario.submit();
}

function validarLogin() {
  // pegando o valor do nome pelos names
  var Nome = document.getElementById("nome_login");
  var Senha = document.getElementById("email_senha");
  
  // verificar se o nome está vazio
  if ( Nome.value == "") {
    alert("Nome não informado");

    // Deixa o input com o focus
    nome.focus();
    // retorna a função e não olha as outras linhas
    return;
  }
  
  if (Senha.value == "") {
    alert("Senha não informada");
    senha.focus();
    return;
  }
  alert("Formulário enviado!");
  // envia o formulário
  //formulario.submit();
}
import React from "react";
import { Field } from "formik";

const EmailField = () => {
  return <Field name="email" placeholder="Type your email" />;
};

const NomeField = () => {
  return <Field name="taxid" placeholder="Type your Nome" />;
};

const CpfField = () => {
  return <Field name="phone" placeholder="Type your Cpf" />;
};

const PlantaçõesField = () => {
  return <Field as="textarea" name="address" placeholder="Type your Plantações" />;
};
const SenhaField = () => {
  return <Field as="textarea" name="address" placeholder="Type your Senha" />;
};


