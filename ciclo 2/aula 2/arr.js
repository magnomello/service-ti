/* 
 MATRIZES
*/

começa de 0 a infinito
var frutas = ["Uva", "Banana", "Pera", "Manga"]; // var frutas = Array(); - equivalentes! 1º + usada
console. log('Quantidade do Array:  ${frutas. comprimento}  frutas:  ${frutas[0]}); // comprimento = tamanho do array

var frutas2 = ["Abacaxi", "Maça", "Laranja"];

var todasAsFrutas = frutas. concat(frutas2);

console. log(frutas);
console. log(todasAsFrutas);

indexOf() Procura por um elemento específico no array e retorna a sua posição;
var retornoIndexOf = todasAsFrutas. indexOf("Pera");
console. log(retornoIndexOf); // 0 - 1 - 2

juntar() Junta todso os elementos de uma matriz em uma sequência

var stringDeArray = todasAsFrutas. juntar(); // junta tds como frutas
console. log(stringDeArray );

push() Insere um novo elemento no final do array / pode inserir + de 1

var outroLista = ["Bola", "Peteca"];
var novaLista = outroLista. push("Boneca", "Capivara");

console. log(novaLista);
console. log(outraLista);
console. log(outraLista[3]);

pop () Remover o último elemento da matriz

console. log(outraLista. pop(); // removeu a Capivara, que é o ultimo
console. log(outraLista);

reverso() Inverter a ordem dos elementos do array

console. log(outraLista. reverter());

shift() Remover o primeiro elemento da matriz

var removedorPrimeiro = ["fusca", "variante"];
removedorPrimeiro. turno(); // usar antes do console!
console. log(removedorPrimeiro.  mudança());

sort () Ordena os elementos do array em ordem crescente

var alfa = [4, 6, 7, 2];  // ordena crescente
alfa. tipo(); // usar antes do console!
console. log(alfa);

toString() Converte uma matriz em string e retorna esa string = "join"

unshift () Insere um novo elemento no início da matriz

alfa. unshift(9);
console. log(alfa);
alfa. classificar();
console. log(alfa);

emenda() Corta a matriz em determinado ponto - quebra de matriz
elimina restante do array a partir de certo ponto

var f = ["Uva", "Banana", "Pera", "Manga"];
var idx = f. indexOf("Banana"); // retorna o índice do array
console. log(idx);
console. log(f. emenda(idx, 2)); // nº = quantidade a tirar 
console. log(f);


matrizes de objetos

[] criação de array / objeto {}, {} ....

var dados = [
    {nome: "Felipe"},
    {nome: "Mello"}
]

/* 
console.log(dados[0].nome); 0 = 1º posição
console.log(dados[1].nome); 1 = 2º posição
 */

função Pessoa2(nome, sobrenome, idade, doc=[]){ // doc "=" []
    isso. nome = nome;
    isso. sobrenome = sobrenome;
    isso. idade = idade;
    isso. doc = {// colocando matrizes ao invés de nºs fixos 
        rg : doc[0],
        CPF : doc[1]
    }
}

var pessoa2 = novo Pessoa2("Felipe" ," , ", " , ", ["22", "555")) ; // [rg, cpf]
console. log("Nome: " + pessoa2. nome + ", CPF: " + pessoa2. doutor. CPF);
console. log("Nome: " + pessoa2. nome + ", CPF: " + pessoa2. doutor. rg);