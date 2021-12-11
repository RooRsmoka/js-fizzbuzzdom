// Consegna:
// Programma che stampa in console i numeri da 1 a 100.
// MILESTONE 1 (su Console)
// Stampo "Fizz" ai numeri multipli di 3.
// Stampo "Buzz" ai numeri multipli di 5.
// Stampo "FizzBuzz" ai numeri che sono multipli sia di 3 che di 5.
// MILESTONE 2
// Dato un container nel DOM, appendo un elemento html con il numero o la stringa.
// MILESTONE 3
// Applico uno stile diverso a seconda del valore dell'indice 
// (multiplo di 3, multiplo di 5 o multiplo di 3 e 5)
const containerHtml = document.querySelector('.container');


for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        containerHtml.innerHTML += `<div class="box box-red">${'FizzBuzz'}</div>`;
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        containerHtml.innerHTML += `<div class="box box-green">${'Fizz'}</div>`;
        console.log('Fizz');
    } else if (i % 5 === 0) {
        containerHtml.innerHTML += `<div class="box box-yellow">${'Buzz'}</div>`;
        console.log('Buzz');
    } else {
        containerHtml.innerHTML += `<div class="box box-blue">${i}</div>`;
        console.log(i);
    }
};