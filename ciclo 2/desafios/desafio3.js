janela. onload = () => {

    Caixa de texto
    const txtValor1 = documento. consultaSeletor("#txtValor1" );
    const txtValor2 = documento. consultaSeletor("#txtValor2" );
    const txtResultado = documento. consultaSeletor("#txtResultado" );

    Buttom
    const btnResultado = documento. consultaSeletor("#btnResultado" );

    Função
    btnResultado. addEventListener('clique',  () => {
        var vlr1 = Número(txtValor1. valor);
        var vlr2 = Número(txtValor2. valor);
        var vlrResultado = Número(txtResultado. valor);

        var resultado = vlr1 + vlr2;

        var sucesso = resultado === vlrResultado ? verdade : falso;

        se (sucesso &e resultado != 0) {
            alerta("Valor Correto!");
        }
        mais {
            alerta("Valor Incorreto");
        }
    });
};