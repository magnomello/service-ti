/* objetos*/

function Pessoa(nome, sobrenome,idade){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
}


var ps1 = Pessoa("Rafhael", "Da Silva", 7); //construtor
console.log("nome" +ps1 nome +" " + ps1.sobrenome+ "idade" +ps1 idade)

var ps2 = new Pessoa ("maria");
console.log("Pessao2 - nome " +ps2.nome+" " +ps2.sobrenome);

var ObjPessoa = { rg : '7767' ,cpf: '8989'}
console.log("RG:"+ objPessoa.rg );

function Pessoa2(nome, sobrenome,idade){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
	this.doc = {
		rg:'777'
		cpf:'8989'
	}
}

var pessoa2 = new Pessoa2("rafhael");

console.log.(`nome ${pessoa2.nome} - Rg: ${pessoa2.doc.rg}`);
