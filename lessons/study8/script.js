// If...Else

let hora = 19;

if (hora > 6 && hora < 12) {
    console.log("bom dia!");
}
else if (hora >= 12 && hora < 18) {
console.log("boa tarde!");
}
else {
    console.log("boa noite!");
}

// Switch Case

let tituloPessoa = 'lorde';

switch (tituloPessoa) {
    case 'plebeu':
        console.log('você é uma pessoa da plebe.');
        break;
    
    case 'cavaleiro' :
        console.log('você é da baixa nobreza.');
        break;
    
    case 'lorde' :
        console.log('você é da alta nobreza.');
        break;
        
    default:
        console.log('você é uma pessoa forasteira.');
        break;
}