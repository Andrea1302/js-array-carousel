// Richiamo le classi e assegno una variabile 

const immaginePrincipale = document.querySelector(".items");
console.log(immaginePrincipale);
const immagineDaScegliere = document.querySelector(".wich_item")
const prossimo = document.querySelector(".next");
const prima = document.querySelector(".back")


// Array immagini 
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];


// Array titoli 
const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];


// Array text 
const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];



// variabili vuote 
let item = "";
let whichItem = "";


// Creo stringa da aggiungere successivamente all html 

for ( let i = 0 ; i < items.length ; i++) {
    item += `<img class="immagine" src="${items[i]}" alt="">`;
    whichItem += `<img class="immagine_select" src="${items[i]}" alt="">`
}   

immaginePrincipale.innerHTML = item;
document.getElementsByClassName("immagine")[0].classList.add("active"); 
immagineDaScegliere.innerHTML = whichItem;
document.getElementsByClassName("immagine_select")[0].classList.add("active");





// Assegno variabile 0 per richiamare l indice dell array in seguito 
            // Nel caso voglio quello successivo sarà activeposition + 1 
            //  Nel caso voglio quello precedente sarà active position - 1 
let activeposition = 0 ;


// Al click vai avanti 

prossimo.addEventListener("click",
    function(){

        if ( activeposition < items.length - 1 ){
            activeposition = activeposition + 1;
            console.log(activeposition); 
        } else {
            activeposition = 0;
        }
        
       

        document.querySelector(".immagine.active").classList.remove("active");  
        document.getElementsByClassName("immagine")[activeposition].classList.add("active"); 

        document.querySelector(".immagine_select.active").classList.remove("active"); 
        document.getElementsByClassName("immagine_select")[activeposition].classList.add("active");
    }

)



// Al click vai indietro 

prima.addEventListener("click",
    function (){

        if ( activeposition === 0){
            activeposition = items.length -1 ;
        } else {
            activeposition = activeposition -1 ; 
        }

        
        
        document.querySelector(".immagine.active").classList.remove("active");  
        document.getElementsByClassName("immagine")[activeposition].classList.add("active"); 

        document.querySelector(".immagine_select.active").classList.remove("active"); 
        document.getElementsByClassName("immagine_select")[activeposition].classList.add("active");

    }

)
console.log(activeposition);