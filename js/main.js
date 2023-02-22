'use strict';




inputButton.addEventListener('click',
    function () {
        const percorso = document.getElementById("km").value;
        document.getElementById("km").innerHTML = percorso;
        console.log('km da percorrere: ' + percorso);

        const eta = document.getElementById("age").value;
        document.getElementById('age').innerHTML = eta;
        console.log('età passeggero: ' + eta);
    }
)



