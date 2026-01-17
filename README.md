Acest proiect reprezintă o aplicație web simplă care afișează un citat random preluat dintr-un API extern. Interfața este gândită ca un mic „dashboard” informativ, în care utilizatorul poate vedea atât citatul, cât și câteva metadate asociate acestuia.





Descriere generală

Aplicația:



&nbsp;	- preia dinamic un citat random de la un API extern (exemplu generic de API de citate);



&nbsp;	- afișează citatul și autorul în interfață;



&nbsp;	- afișează metadate într-un tabel (ID, categorie, lungime citat);



&nbsp;	- permite filtrarea citatelor după un cuvânt cheie introdus de utilizator;



&nbsp;	- tratează erorile și le afișează atât în consolă, cât și în interfață.





Tehnologii folosite:



&nbsp;	- HTML – structură pentru interfață și elementele dinamice din DOM



&nbsp;	- CSS – stilizare și organizare vizuală a componentelor



&nbsp;	- JavaScript (ES6+) – logica aplicației, cereri către API, manipulare DOM



&nbsp;	- async/await pentru gestionarea cererilor asincrone



&nbsp;	- blocuri try/catch pentru tratarea erorilor



&nbsp;	- console.log() pentru urmărirea fluxului de execuție





Cum funcționează aplicația:

&nbsp;	- Utilizatorul poate introduce opțional un cuvânt cheie în câmpul de input (filtru).



&nbsp;	- La apăsarea butonului „Afișează un citat random”, aplicația trimite o cerere către API.



&nbsp;	- Dacă răspunsul este valid:



&nbsp;	- citatul și autorul sunt afișate în zona principală;



&nbsp;	- tabelul de metadate este completat cu ID-ul, categoria și lungimea citatului;



&nbsp;	- eventualele mesaje de eroare sunt ascunse.



&nbsp;	- Dacă apare o eroare (API indisponibil, răspuns invalid etc.):



&nbsp;	- în consolă este afișat un mesaj detaliat de eroare;



&nbsp;	- în interfață este afișat un mesaj clar pentru utilizator;



&nbsp;	- conținutul citatului și tabelul sunt ascunse.





Instrucțiuni de utilizare:



1. Deschide fișierul index.html într-un browser modern.



2\. (Opțional) Introdu un cuvânt cheie în câmpul de filtrare.



3\. Apasă butonul „Afișează un citat random”.



4\. Observă citatul afișat, autorul și metadatele din tabel.



5\. Deschide consola browserului (F12 → Console) pentru a vedea logurile procesului (cerere trimisă, date primite, erori etc.).





Structura proiectului:



&nbsp;	- index.html – structura paginii și elementele UI



&nbsp;	- style.css – stilizarea interfeței și a componentelor



&nbsp;	- script.js – logica aplicației, cereri către API, manipulare DOM

