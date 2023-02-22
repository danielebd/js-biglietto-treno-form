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
            document.querySelector('#type').innerHTML = 'Biglietto ridotto 40%';
        }
        
        else if(eta == 1) {
            prezzo -= prezzo * 0.2;
            //prezzo = prezzo  - prezzo * 0.2;
            console.log('prezzo scontato per i minori 18 è di: ' + prezzo + '€');
            document.querySelector('#type').innerHTML = 'Biglietto ridotto 20%';
        }

        else {
            document.querySelector('#type').innerHTML = 'Biglietto Standard';
        }
        
        
        prezzo = prezzo.toFixed(2);
        console.log(prezzo + '€');
        
        document.querySelector('#prezzo').innerHTML = prezzo + '€';

        const name = document.getElementById("name").value;
        console.log('nome passeggero: ' + eta);

        document.querySelector('#person').innerHTML = name;

        document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;

        document.getElementById("cp").innerHTML = Math.floor(Math.random() * 99999) + 10000;

    }
)



//document.querySelector('').innerHTML = 'ELEMENTI';