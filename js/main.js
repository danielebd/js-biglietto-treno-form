'use strict';




inputButton.addEventListener('click',
    function () {
        //import km da percorrere su js
        const percorso = document.getElementById("km").value;
        console.log('km da percorrere: ' + percorso);

        //import eta su js
        const eta = document.getElementById("age").options.selectedIndex;
        console.log('età passeggero: ' + eta);

        //calcolo prezzo senza sconto
        let prezzo = parseFloat(percorso * 0.21);
        console.log(`${prezzo} €`);

        //calcolo prezzo over 65 e stampa tipo biglietto
        if(eta == 2) {
            prezzo -= prezzo * 0.4;
            //prezzo = prezzo - prezzo * 0.4;
            console.log('prezzo scontato over 65 è di:' + prezzo + '€');
            document.querySelector('#type').innerHTML = 'Biglietto ridotto 40%';
        }
        
        //calcolo prezzo minorenni e stampa tipo biglietto
        else if(eta == 1) {
            prezzo -= prezzo * 0.2;
            //prezzo = prezzo  - prezzo * 0.2;
            console.log('prezzo scontato per i minori 18 è di: ' + prezzo + '€');
            document.querySelector('#type').innerHTML = 'Biglietto ridotto 20%';
        }

        //stampa tipo biglietto 
        else {
            document.querySelector('#type').innerHTML = 'Biglietto Standard';
        }
        
        //rendere prezzo con solo due decimali
        prezzo = prezzo.toFixed(2);

        //stampa perzzo su console
        console.log(prezzo + '€');
        
        //stampa prezzo du ticket
        document.querySelector('#prezzo').innerHTML = prezzo + '€';

        //import su js di nome e cognome
        const name = document.getElementById("name").value;
        console.log('nome passeggero: ' + eta);

        //stampa nome e cognome 
        document.querySelector('#person').innerHTML = name;

        //generatore numero randomico per numero carrozza da 1 a 10
        document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;


        //generatore numero randomico per codice CP da 10000 a 99999
        document.getElementById("cp").innerHTML = Math.floor(Math.random() * 99999) + 10000;

    }
)



