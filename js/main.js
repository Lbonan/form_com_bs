$(document).ready(function () {
  $("#telefone").mask("(00) 00000-0000");
  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
    },
    messages: {
      nome: "Por favor, insira o seu nome completo",
      email: "Por favor, insira seu  e-mail completo",
      telefone: "Por favor, insira o seu número de telefone",
    },
    submitHandler: function (form) {
      $("#mensagem-erro").text("");
      $("#alerta-error").hide();
    },
    invalidHandler: function (e, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        let mensagemDeError = `Existem ${camposIncorretos} campos incorretos`;
        $("#mensagem-error").text(mensagemDeError);
        $("#alerta-error").show();
      }
    },
  });
});
