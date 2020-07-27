for (var i = 0; i < 5; i++) {
    console.log(i);

    if(i === 2) {
        break; // Finaliza a repetição
    }
}

for (var x = 0; x < 5; x++) {
    if(x === 2) {
        continue; // Pula a repetição para o outro laço
    }

    console.log(x);
}