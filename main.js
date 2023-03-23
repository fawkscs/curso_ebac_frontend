$(document).ready(function() {
	// Adicionar tarefa
	$('#add-task').on('click', function(e) {
		e.preventDefault(); // Evita que a página seja recarregada ao clicar no botão
		
		// Pega o valor do campo de texto
		var task = $('#task-input').val();
		
		// Adiciona a tarefa na lista
		$('#task-list').append('<li>' + task + '</li>');
		
		// Limpa o campo de texto
		$('#task-input').val('');
	});
	
	// Marcar tarefa como concluída
	$('#task-list').on('click', 'li', function() {
		$(this).toggleClass('completed');
	});
});