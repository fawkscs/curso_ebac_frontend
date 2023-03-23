$(document).ready(function () {
	// Adicione a máscara para o campo de telefone
	$('#telefone').mask('(00) 00000-0000');

	// Adicione a máscara para o campo de CPF
	$('#cpf').mask('000.000.000-00');

	// Adicione a máscara para o campo de CEP
	$('#cep').mask('00000-000');
});

function mostrarDados() {
	const nome = document.getElementById("nome").value;
	const email = document.getElementById("email").value;
	const telefone = document.getElementById("telefone").value;
	const cpf = document.getElementById("cpf").value;
	const endereco = document.getElementById("endereco").value;
	const cep = document.getElementById("cep").value;
	alert("Nome: " + nome + "\nE-mail: " + email + "\n" +
		"Telefone" + telefone + "\nCPF" + cpf + "\n" +
		"Endereço: " + endereco + "\nCEP: " + cep);
}