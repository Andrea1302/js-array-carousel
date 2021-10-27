const immaginePrincipale = document.querySelector(".items");
console.log(immaginePrincipale);
const immagineDaScegliere = document.querySelector(".wich_item")
const prossimo = document.querySelector(".next");
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

// // Immagini di default 
// immaginePrincipale.innerHTML += `<img src="img/01.jpg" alt=""> `;
// immagineDaScegliere.innerHTML += `<img src="img/01.jpg" alt="">`;

let item = "";
let whichItem = "";

for ( let i = 0 ; i < items.length ; i++) {
    item += `<img class="immagine" src="${items[i]}" alt="">`;
    whichItem += `<img class="immagine_select" src="${items[i]}" alt="">`
}   

immaginePrincipale.innerHTML = item;
document.getElementsByClassName("immagine")[0].classList.add("active"); 
immagineDaScegliere.innerHTML = whichItem;
document.getElementsByClassName("immagine_select")[0].classList.add("active");


let activeposition = 0 ;

document.querySelector(".next").addEventListener("click",
    function(){
      activeposition = activeposition + 1;
      console.log(activeposition);  

      document.querySelector(".immagine.active").classList.remove("active");  
      document.getElementsByClassName("immagine")[activeposition].classList.add("active"); 

      document.querySelector(".immagine_select.active").classList.remove("active"); 
      document.getElementsByClassName("immagine_select")[activeposition].classList.add("active");
    }

)