// creo il prompt per la scelta dell utente
let sceltaUtente = prompt("Scegli fra: facile, medio, difficile, impossibile");
console.log(sceltaUtente);

// collego myDiv all all'id grid
let myDiv = document.getElementById("grid");

// funzione che crea un elemento div
function myElementCreate(){

    let elementoDiv = document.createElement("div");

    return elementoDiv;
}

if (sceltaUtente === "facile") {

    for (let i = 0; i < 49; i++){

        let divEl = myElementCreate();

        divEl.className = " square1";
    
        divEl.addEventListener('click',
        
            function(){
                this.className += " clickedaqua";
            }
        )
    
        myDiv.append(divEl);
    }

} else if (sceltaUtente === "medio") {

    for (let i = 0; i < 64; i++){

        let divEl = myElementCreate();

        divEl.className = " square2";
    
        divEl.addEventListener('click',
        
            function(){
                this.className += " clickedaqua";
            }
        )
    
        myDiv.append(divEl);
    }

} else if (sceltaUtente === "difficile") {

    for (let i = 0; i < 100; i++){

        let divEl = myElementCreate();

        divEl.className = " square3";
    
        divEl.addEventListener('click',
        
            function(){
                this.className += " clickedaqua";
            }
        )
    
        myDiv.append(divEl);
    }

} else {

    for (let i = 0; i < 400; i++){

        let divEl = myElementCreate();

        divEl.className = " square4";
    
        divEl.addEventListener('click',
        
            function(){
                this.className += " clickedaqua";
            }
        )
    
        myDiv.append(divEl);
    }

}
