/*
	estrutura de condições e operadores
	lógicos
	==
	===
	!=
	!==
	<
	>
	<=
	>=
*/
/*
var v1=1;
var v2=1;
se (v1==v2) {
    console.log("Sim é verdade");
} outra coisa {
    console.log("Isto é falso")
}*/

(====) identico
/*
var v3=1;
var v4;
se(v3 == v4){
 console.log ("V3 é exatamente igual a V4");
} outra coisa {
 console.log ("V3 não é igual a V4");
    console.log(v4);
}
*/
/*
var v3=1;
var v4=1;
se (v3 === v4){
 console.log ("V3 é exatamente igual a V4");
} outra coisa {
 console.log ("V3 não é igual a V4");
    console.log(typeof(v3)) ;
}
*/

(!=) diferente
/*var v5=1;
var v6=0;
console.log(v6);*/

/*se (v5 != v6){
 console.log ("V5 é diferente de V6");
} outra coisa {
    console.log("São iguais");
}*/

(!==) Estritamente diferente
/*var v7;
var v8;
se(v7 !== v8){
    console.log("Exatamente diferente")
} outra coisa {
    console.log("São iguais")
}
*/

/*///(<) menor que
var va=200;
var vb=400;
se (va < vb){
    console.log ("Sim va é menor que vb");
}*/

(<) menor que
/*var va=400;
var vb=400;
se(va>vb){
 console.log ("Sim va é maior que vb")
}*/

(<=) menor ou igual que
/*var vc=399;
var vd=399;
se (vc <= vd){
    console.log("Vc=" +vc+ "é menor ou igual a vd="+vd);
}*/

(>=) maior ou igual que
/*var ve=400;
var vf=400;
se(ve >= vf){
    console.log("ve="+ve+"é maior ou igual a vf="+vf);
}*/

/*operador lógico, compara duas ou mais situações
E ecodo por lógico (&&) E comercial
OU "OU" lógico (||) tubo/tubo
NÃO "negação" lógico (!) console exclamação*/

&& Todas as condições precisam ser atendidas
/*var a=0;
var b=0;
se(a==0 && b==0){
    console.log("verdadeiro");
} outra coisa {
    console.log("falso");
}*/

//|| Alguma das condições precisa ser atendidas
/*var c=0;
var d=0;
se (c===1 || d===1){
    console.log("Ok");
} else{
 console.log("! Ok")
}
*/
//! sinal de negação

/*var s= 1;
se(!typeof(s){{
 console.log("Não é uma corda");
} else{
 console.log("É uma corda");
    console.log(typeof(s));
}*/

Interruptor

/*var op=10;
switch(op){
 caso 1:
 alerta ("Estou sendo enviado pelo caso 1");
 quebrar;
 caso 2:
 console.log("Cai dentro do caso 2");
 quebrar;
 caso 3:
 console.log("Cai dentro do caso 3");
 inadimplência:
        console.log("Nenhuma das opções");
 quebrar; 
}*/