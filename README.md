Acest proiect reprezintă o aplicație web simplă care afișează un citat random preluat dintr-un API extern. Interfața este gândită ca un mic „dashboard” informativ, în care utilizatorul poate vedea atât citatul, cât și câteva metadate asociate acestuia.





Descriere generală

Aplicația:



 	- preia dinamic un citat random de la un API extern (exemplu generic de API de citate);



 	- afișează citatul și autorul în interfață;



 	- afișează metadate într-un tabel (ID, categorie, lungime citat);



 	- permite filtrarea citatelor după un cuvânt cheie introdus de utilizator;



 	- tratează erorile și le afișează atât în consolă, cât și în interfață.





Tehnologii folosite:



 	- HTML – structură pentru interfață și elementele dinamice din DOM



 	- CSS – stilizare și organizare vizuală a componentelor



 	- JavaScript (ES6+) – logica aplicației, cereri către API, manipulare DOM



 	- async/await pentru gestionarea cererilor asincrone



 	- blocuri try/catch pentru tratarea erorilor



 	- console.log() pentru urmărirea fluxului de execuție





Cum funcționează aplicația:

 	- Utilizatorul poate introduce opțional un cuvânt cheie în câmpul de input (filtru).



 	- La apăsarea butonului „Afișează un citat random”, aplicația trimite o cerere către API.



 	- Dacă răspunsul este valid:



 	- citatul și autorul sunt afișate în zona principală;



 	- tabelul de metadate este completat cu ID-ul, categoria și lungimea citatului;



 	- eventualele mesaje de eroare sunt ascunse.



 	- Dacă apare o eroare (API indisponibil, răspuns invalid etc.):



 	- în consolă este afișat un mesaj detaliat de eroare;



 	- în interfață este afișat un mesaj clar pentru utilizator;



 	- conținutul citatului și tabelul sunt ascunse.





Instrucțiuni de utilizare:



1. Deschide fișierul index.html într-un browser modern.



2\. (Opțional) Introdu un cuvânt cheie în câmpul de filtrare.



3\. Apasă butonul „Afișează un citat random”.



4\. Observă citatul afișat, autorul și metadatele din tabel.



5\. Deschide consola browserului (F12 → Console) pentru a vedea logurile procesului (cerere trimisă, date primite, erori etc.).





Structura proiectului:



 	- index.html – structura paginii și elementele UI



 	- style.css – stilizarea interfeței și a componentelor



 	- script.js – logica aplicației, cereri către API, manipulare DOM







(Actualizare pentru diferențierea branch-urilor.)

