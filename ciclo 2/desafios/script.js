var nome = prompt("Digite seu Nome");
 var numero = prompt(nome + " Digite um numero para comparar com 'n'");
var n = Matemática. rodada(Matemática. aleatório() * (50 - 1));
numero = parseInt(numero );
var bolea = (numero === n);
var soma = numero + n;
var subtra = numero - n;
var divs = numero%n;
var quadrad = numero**2;
função verificNome(){	
	se(tipo(nome) === typeof(String())){	
		documento. escrever("O nome que você digitou é uma String <br>");
		alerta("uma string foi enviado")	
	}mais{
		documento. escrever("você digitou um numero inteiro <br>")
	}
}
função verificNumero(){	
	se(typeof(numero) === typeof(String())){
		documento. escrever("O numero que você digitou é uma String <br>");	
	}mais{
		documento. escrever("você digitou um numero inteiro<br>")
		alerta("a string sera convertida para numero ")
	}
}
verificNome();
verificNumero();
documento. escrever("1.Seja bem vindo...: " + nome + "<br>");
documento. escrever("2.Você digitou o numero...: "+ "("+ numero +")" + "<br>");
documento. escrever("3.O retorno da comparação booleana é...: " + bolea + "<br>");
documento. escrever("4.A soma dos valores é...: " + soma + "<br>");
documento. escrever("5.A subtração dos valores é...: " + subtra + "<br>");
documento. escrever("6.O resto da divsão é...: " + divs + "<br>");
documento. escrever("7.O quadrado do numero digitado é...: " + quadrad + "<br>");