const form = document.getElementById("meuForm");
      const mensagem = document.getElementById("mensagem");

      form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio do formulário

        const campoA = Number(document.getElementById("campoA").value);
        const campoB = Number(document.getElementById("campoB").value);

        if (campoB > campoA) {
          mensagem.innerHTML = 'Formulário válido!';
          mensagem.classList.remove("mensagem-invalida");
          mensagem.classList.add("mensagem-valida");
        } else {
          mensagem.innerHTML = 'Formulário inválido: campo B deve ser maior que campo A.';
          mensagem.classList.remove("mensagem-valida");
          mensagem.classList.add("mensagem-invalida");
        }
      });