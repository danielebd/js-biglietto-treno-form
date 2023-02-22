'use strict';




inputButton.addEventListener('click',
    function () {
        const percorso = document.getElementById("km").value;
        console.log('km da percorrere: ' + percorso);

        const eta = document.getElementById("age").options.selectedIndex;
        console.log('età passeggero: ' + eta);

        let prezzo = parseFloat(percorso * 0.21);
        console.log(`${prezzo} €`);

        if(eta == 2) {
            prezzo -= prezzo * 0.4;
            //prezzo = prezzo - prezzo * 0.4;
            console.log('prezzo scontato over 65 è di:' + prezzo + '€');
        }
        
        else if(eta == 1) {
            prezzo -= prezzo * 0.2;
            //prezzo = prezzo  - prezzo * 0.2;
            console.log('prezzo scontato per i minori 18 è di: ' + prezzo + '€');
        }
        
        
        prezzo = prezzo.toFixed(2);
        console.log(prezzo + '€');
        
    }
)



