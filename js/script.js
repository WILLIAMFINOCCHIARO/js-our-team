// Ciao ragazzi, esercizio di oggi: Our Team
// nome repo: js-our-team
// Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
// Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo tutte le card del nostro team.
// BONUS: Utilizziamo poi gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team.
// Consigli del giorno: Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice. console.log() è nostro amico.
// Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
// Buon lavoro e buon divertimento con gli oggetti! :laptop_parrot:

// Creo l'array di oggetti. OK
// Eseguo un ciclo in maniera tale da passare per ogni elemento dell'Array ed estrapolare gli oggetti
// estrapolo gli elementi dell'oggetto.
// creo le classi da creare all'interno del ciclo
// (  attraverso il backtrick template o attraverso il create Element) in maniera tale da creare le classi per ogni oggetto dell'array
// inserisci gli elementi estrapolati all'interno di una classe creata precedentemente
// Seleziono il container in cui mettere le classi
// inserisce le classi create nel container creato precedentemente


// creo l'array di oggetti

const teamCards = [
   { 
  "Nome" :"Angela Carroll",
  "Ruolo" :"Chief Editor",
  "Immagine":"img/angela-caroll-chief-editor.jpg"
   },

  { 
    "Nome" :"Walter Gordon",
    "Ruolo" :"Office Manager",
    "Immagine":"img/walter-gordon-office-manager.jpg"
    },
    
  { 
    "Nome" :"Angela Lopez",
    "Ruolo" :"Social Media Manager",
    "Immagine":"img/angela-lopez-social-media-manager.jpg"
    },

  { 
    "Nome" :"Scott Estrada",
    "Ruolo" :"Developer",
    "Immagine":"img/scott-estrada-developer.jpg"
    },

  { 
    "Nome" :"Barbara Ramos",
    "Ruolo" :"Graphic Designer",
    "Immagine":"img/barbara-ramos-graphic-designer.jpg"
    }

];

console.log(teamCards);


// Eseguo un ciclo in maniera tale da passare per ogni elemento dell'Array ed estrapolare gli oggetti


// Creo una variabile in maniera tale da creare le classi da inserire nel ciclo
let items = "";


for ( i = 0; i < teamCards.length; i++) {
  // - creo delle variabili per estrapolare gli oggetti dell'Array
  // estrapolo gli elementi di ogni oggetto attraverso il ciclo.
  let Namecard = teamCards[i].Nome;
  let Rolecard = teamCards[i].Ruolo;
  let Imagecard = teamCards[i].Immagine;
  console.log(Namecard, Rolecard,  Imagecard);
  // creo le classi da creare all'interno del ciclo
  // (  attraverso il backtrick template o attraverso 
  //il create Element) in maniera tale da creare le classi per ogni oggetto dell'array
  items += `
  <div class="team-card">
    <div class="card-image">
      <img
        src="${Imagecard}"
        alt="${Namecard}"
      </img>
    </div>
    <div class="card-text">
      <h3>${Namecard}</h3>
      <p>${Rolecard}</p>
    </div>
  </div>
  `

  console.log(items[i]);

  
};

// Seleziono il container in cui mettere le classi

const containerTeam = document.querySelector(".team-container");

// inserisci le classi create, nel container creato precedentemente.
containerTeam.innerHTML += items;


// BONUS: Utilizziamo poi gli input presenti nella pagina per 
//permettere all'utente di aggiungere nuovi membri del team.
// Consigli del giorno: Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice. console.log() è nostro amico.
// Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.

// Seleziono gli input presenti

