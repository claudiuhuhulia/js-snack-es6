## SNACK 1 ##

--

Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip. Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell'ospite e posto occupato.
Generiamo e stampiamo in console la lista per i segnaposto.

--

- Inserisco in una costante **invitatesNames** l'array con i nomi degli invitati.
- Creo una nuova costante **invitateDescription** nella quale andrò ad inserire il posto a tavolo e il nome del tavolo.
    - utilizzando il metodo **Map** e di conseguenza la **callback function** che creerà l'oggetto del nuovo array, inserisco come parametri l'elemento per avere il nome dell'invitato e l'index number per avere il posto a tavola.  