'use strict';


const eta = document.getElementById("age").value;

inputButton.addEventListener('click',
    function () {
        const percorso = document.getElementById("km").value;
        document.getElementById("inputButton").innerHTML = percorso;
        console.log('km da percorrere: ' + percorso);
    }
)



console.log('età passeggero: ' + eta);