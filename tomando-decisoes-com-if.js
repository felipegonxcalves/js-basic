var n1 = 3,
    n2 = 5;

if (n1 > n2) {
    console.log('N1 é maior');
} else {
    console.log('N1 é menor');
}

n1 > n2 ? console.log('N1 é maior') : console.log('N1 é menor');

var bigger = n1 > n2 ? n1 : n2; // Desta forma ele retorna o valor e atribui a variável.