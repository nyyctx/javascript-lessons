//Operadores Aritméticos
    // +, -, *, /, %, **
        let salario = 1200;
        console.log(salario);
    // ++ --
        console.log(++salario);
//Operadores de Atribuição
    // =, +=, -=,
        let valorEspada = 2000;
        const moeda = 100;
        valorEspada -= moeda;
        console.log(valorEspada);
//Operadores de Comparação
    // ===, ==
    console.log('1'===1);
    console.log ('1'==1);
//Operadores Lógicos
    // AND (&&), retorna 'true' se ambos operandos forem verdadeiros
        let foiPajem = true;
        let foiEscudeiro = true;
        let tornarCavaleiro = foiPajem && foiEscudeiro;
        console.log(tornarCavaleiro);
    //OR (||), retorna 'true' se um dos operandos for verdadeiro
        let podeLutar = true;
        let ehNobre = false;
        let homemArmas = podeLutar || ehNobre;
        console.log(homemArmas);
    //NOT (!), retorna o contrário do operando
        let cavaleiro = !homemArmas;
        console.log(cavaleiro);
//Operadores Ternários
    // Se a pessoa tiver honras, é um 'Nobre', senão, é um 'Plebeu'
        let honras = 1;
        let titulo = honras >= 1 ? 'Nobre' : 'Plebeu';
        console.log(titulo);
//Comparações não-booleanas
    //Falsy —> undefined, null, 0, false, '', NaN
    //Truthy —> o resto