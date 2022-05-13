// creo il prompt per la scelta dell utente
let sceltaUtente = prompt("Scegli fra: facile, medio, difficile");
console.log(sceltaUtente);

// collego myDiv all all'id grid
let myDiv = document.getElementById("grid");


function myElementCreate(){

    let elementoDiv = document.createElement("div");

    elementoDiv.className = " square";

    return elementoDiv;
}

if(sceltaUtente === "facile"){

    for (let i = 0; i < 49; i++){

        let divEl = myElementCreate();
    
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
    
        divEl.addEventListener('click',
        
            function(){
                this.className += " clickedaqua";
            }
        )
    
        myDiv.append(divEl);
    }

} else {

    for (let i = 0; i < 100; i++){

        let divEl = myElementCreate();
    
        divEl.addEventListener('click',
        
            function(){
                this.className += " clickedaqua";
            }
        )
    
        myDiv.append(divEl);
    }

}
