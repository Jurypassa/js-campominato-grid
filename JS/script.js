// Consegna 
// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:

// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// const easy = document.getElementById("easy").value;
// console.log(easy);
// const hard = document.getElementById("hard").value;
// console.log(hard);
// const crazy = document.getElementById("crazy").value;
// console.log(crazy);
let play = document.getElementById("play");


play.addEventListener ("click", function(){

    const select = document.getElementById("select").value;

    switch (select){
        case easy:
            console.log("aaa");
            break;
        case hard:
            console.log("bbb");
            break;
        case crazy:
            console.log("ccc");
    }
})


// play.addEventListener("click", function(){
//     if (easy){
//         console.log("aaaa");
//     }else if (hard){
//         console.log("bbbb");
//     }else{
//         console.log("cccc");
//     }
// })