/* 
clique em Clicar ao algum elemento HTML
mousemove Ao mover o cursor do mouse acessa (entra) o elemento
mouseover Ao mover os cursos do mouse dentro do elemento
mouseout Ao mover o cursor para um do elemento
dblclick Ao efetuar do blick duplo (rapido) sobre o elemento
azul Ao perde o foco do elemento, geralmente associado ao elemento HTML
*/

carga = quando carregar
pode elemento guardar dentro de "var" ou "const" ou mesmo "let"
"const" fica dentro do escopo igual a "let"
addEventListener - adiciona todos os métodos - em 2 evento
1 definir o evento (clique, etc) /2º rotina de execuções (exemplo uma seta função) ()=>{}
consultaSeletor precisa usar o "#id" / ".class"

EVENTO ONCLICK

janela. onload = função(){
    const btn1 = documento. consultaSelector(".btn-click" );
    const legP = documento. consultaSeletor(".legenda" );
    const cxTexto = documento. consultaSeletor("#texto" );

    btn1. addEventListener("clique",  ()=>{  

        var.innerHTML escreve no elemento
        legP. interiorHTML += cxTexto. valor; // + concatena

    } );

    btn1. addEventListener("clique",  ()=>{          
    legP. innerHTML=" "; // deixa em branco

    });

    mousemove Ao mover o cursor do mouse acessa (entra) o elemento
    legP. addEventListener("mouseout",  ()=>{
    });

    
/* TROCAR TIPO DE ELEMENTO EX: SENHA PARA TEXTO */

    const trocaSenha = documento. consultaSeletor("#verSenha" );
    const cxSenha = documento. consultaSeletor("#senha" );

    trocaSenha. addEventListener("clique",  ()=>{
getAttribute( ) - pega o tipo do elemento
setAtribute( ) - Atribuir um tipo ao elemento

    se(cxSenha. getAttribute("tipo"= == "senha" ){
        cxSenha. setAttribute("tipo", "texto")
    } mais {
        cxSenha. setAttribute("tipo", "senha" )
    }    
    });

    alterar fundo

    const cxTrocaBg = documento. consultaSeletor("#cxTbg" );
    borrão quando desfocar desparar uma ação

        cxTrocaBg. addEventListener ("borrão", ()=>{
        cxTrocaBg.setAttribute("class", ".corBg");
    });

    //somar valores cx input text

    const valor1 = document.querySelector("#v1");
    const valor2 = document.querySelector("#v2");
    const btnSomar = document.querySelector("#soma");
    const spanResultado = document.querySelector("#resultado");

    btnSomar. addEventListener("clique",  ()=>{
        var cx1 = valor1. valor;
        var cx2 = valor2. valor;
        var r = Número(cx1) + Número(cx2);

        spanResultado. interiorHTML = r;
    });

    EVENTO MODAL
    
    const btnModal = documento. consultaSeletor("#chamarModal" );
    const janelaM = documento. consultaSeletor("#janModal" );
    const closeMod = documento. consultaSeletor("#fechaModal" );
    
    btnModal. addEventListener("clique",  ()=>{
    janelaM. setAttribute("class", "modal"); // set não precisa "." ou "#"
    });

    quando receber 1 clique vai remover o nosso modal
    closeMod. addEventListener("clique",  ()=>{
        janelaM. classList. remover("modal");

    });

}