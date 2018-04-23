document.getElementById("calculate-button").onclick = function() {

	//Coleta de números dentro das caixas de input
	let elem1 = document.getElementById('elem-1');
	let elem2 = document.getElementById('elem-2');

	//Criação de variáveis que armazenam os números das caixas de texto
	let val1 = parseInt(elem1.value);
	let val2 = parseInt(elem2.value);

	//Testando se os valores das caixas de texto são nulos
	if (isNaN(val1)){
		alert('Digite valores nas caixas!');
		document.getElementById('elem-1').focus();
	} else if (isNaN(val2)){
		alert('Digite valores nas caixas!');
		document.getElementById('elem-2').focus();	
	} else {
		//Coletando o tipo de operação desejada e executando a função com as operações
		let choice = document.querySelector('input[name="operation"]:checked');
		let operation = choice.value;
		let operationResult = getResult(val1,val2,operation);
		let resultElement = document.getElementById('result');
		resultElement.innerHTML = operationResult;
	}
}

//Função que retorna o resultado da operação dependendo do operador escolhido
function getResult(x,y,z){	
	if (z ==='+'){
			return x + y;
	}	else if (z ===  '-'){
			return x - y;
	}	else if (z ===  '*'){
			return x * y;
	}	else if (z ===  '/'){
			return x / y;
	}	else if (z === '%'){
			return (x*y)/100;		
	}	else if (z === '^'){
			return (Math.pow(x,y));
	}
}