MILESTONE 1
html:
- inseriemnto di un button per avvio programma
- inserimento input type number per l'inserimento dei km da percorrere
- inserimento del tag select (menu a tendina) a cui andremo a inserire le opzioni minorenne - maggiorenne - over 65
js:
- 'use strict' per limitare la liberta di programmazzione
- creare elemento per inserimento kilometraggio da percorrere da collegare a input type number in html
- creare elemento per inserimento età passeggero da collegare al tag select in html
- calcolo prezzo senza applicazione sconto
- calcolo prezzo sulle fasce di età così da applicare la scontistica nel caso in cui il passeggero rientri nelle categorie agevolate
- utilizzare .toFixed(2) per formattare prezzo finale con massimo due decimali, per indicare i centesimi sul prezzo
- stampare prezzo finale della tratta su console

MILESTONE 2
HTML: 
- sviluppo del blocco di 'calcolo il prezzo del tuo biglietto' : 
raw1 - 1 input type text , 1 input type Number, 1 select. 
raw2 - 1 btn e un btn (reset).

- sviluppo del blocco di 'il tuo biglietto' :
raw1 - h2
raw2 - 1container che andrà ad ospitare i box nel cui cotenuto saranno inseriti i dettagli del ticket fra cui: nome passeggero, offerta, carrozza, codice CP e costo biglietto

CSS (come da esempio)
- inserire colori di font e sfondi
- inserire il font
- rendere flex i blocchi interessati
- utilizzare justify-content e align quando necessario

JS: 
- al click riportare i valori compilati, nome e cognome, del blocco superiore nello scompartimento del blocco inferiore.
- nel blocco inferiore definire:
se il biglietto è standard oppure ridotto (over 65 - minorenni)
la carrozza
codice CP
costo biglietto (denifito dal prgramma precedentemente realizzaato)
