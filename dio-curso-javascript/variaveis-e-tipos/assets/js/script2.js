var saida2 = document.getElementById('saida2');
var vetor = [1, 3, 4, 6, 8, 33, 23, 60];


wordBtn.addEventListener('click', modificaArray = (array) => {
    for(var i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            array[i] = 0;
        }
    }
    saida2.append(vetor);
});

modificaArray(vetor);
