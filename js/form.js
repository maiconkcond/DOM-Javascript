var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault();

	//Pega identificador do form
	var form = document.querySelector("#form-add");

	//Obtem o fomulario
	var paciente = obtemPacientedoFormulario(form);

	//Cria o paciente
	var PacienteTR = montaTr(paciente);

	var erros = validaPaciente(paciente);
		if (erros.length > 0) {
	    exibeMensagensDeErro(erros);
	    return;
	  }

	//Pega identificado da tabela
	var tabela = document.querySelector("#tabela-pacientes")

	//Adiciona o novo paciente na tabela
	tabela.appendChild(PacienteTR)

	//Limpa o formulario
	form.reset();

	var mensagensErro = document.querySelector("#mensagem-erro");
  mensagensErro.innerHTML = "";

});

function obtemPacientedoFormulario(form){
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}
	return paciente;
}

function montaTr(paciente){
	var PacienteTR = document.createElement("tr");
	PacienteTR.classList.add("paciente");

	PacienteTR.appendChild(montaTd(paciente.nome, "info-nome"));
	PacienteTR.appendChild(montaTd(paciente.peso, "info-peso"));
	PacienteTR.appendChild(montaTd(paciente.altura, "info-altura"));
	PacienteTR.appendChild(montaTd(paciente.gordura, "info-gordura"))
	PacienteTR.appendChild(montaTd(calculaImc(paciente.peso, paciente.altura), "info-imc"));

	return PacienteTR;
}

function montaTd(dados, classe){
	var td = document.createElement("td");
	td.textContent = dados;
	td.classList.add(classe);

	return td;
}

function validaPaciente(paciente){
	var erros = [];

	if (paciente.nome.length == 0){
		erros.push("O nome não deve estar vazio (em branco)");
	}

	if (!validaPeso(paciente.peso)){
		erros.push("Peso é inválido");
	}

	if (!validaAltura(paciente.altura)){
		erros.push("Altura é inválida")
	}

	if (paciente.gordura.length == 0){
		erros.push("A gordura não deve estar vazio (em branco)");
	}

	if (paciente.altura.length == 0 ){
		erros.push("A altura não deve estar vazio (em branco)");
	}

	if (paciente.peso.length == 0){
		erros.push("O peso não deve estar vazio (em branco)");
	}

	return erros;
}

function exibeMensagensDeErro(erros){
	var ul = document.querySelector("#mensagem-erro");
	ul.innerHTML = "";
	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});

}
