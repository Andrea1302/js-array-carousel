const immaginePrincipale = document.querySelector(".items");
console.log(immaginePrincipale);
const immagineDaScegliere = document.getElementById("wich_item")

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
    item += `<img src="${items[i]}" alt="">`;
    whichItem += `<img src="${items[i]}" alt="">`
}   

immaginePrincipale.innerHTML = item;
immagineDaScegliere.innerHTML = whichItem;