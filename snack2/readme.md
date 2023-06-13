## SNACK 2 ##

--

Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
Per preparare l'aula di un nuovo corso, dobbiamo svolgere una serie di operazioni
1. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
2.Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
3.  dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo ES (Marco della Rovere => MARCO DELLA ROVERE);

--

- Creo l'array **students**.
- Utilizzando il metodo **filter** creo un nuovo array che contenga solo gli studenti con voto maggiore di 70.
- Utilizzando lo stesso metodo e aggiungendo un **and** alla callbackfunction precedente inserisco solo gli studenti con voto maggiore di 70 e id maggiore di 120. 
- Utilizzando il metodo **map** creo un nuovo array dove verranno inseriti i nomi degli studenti in maiuscolo usando la sintassi **toUpperCase()**.  