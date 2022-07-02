var boxes = document.getElementsByClassName('box');
// for(var index =0; index<boxes.length; index++){
//     if(index%2==0){
//         boxes[index].classList.add('even');
//     }else{
//         boxes[index].classList.add('odd');
//     }
// }

var litag = document.getElementsByTagName('li');
for(var i = 0; i<litag.length; i++){
    if(i%2==0){
        litag[i].classList.add('lieven');
    }else{
        litag[i].classList.add('liodd');
    }
}
/*var boxeven = document.querySelectorAll('.box:nth-child(even)');
console.log(boxeven);
boxeven.forEach(e => {
    e.classList.add('even');
});
//boxeven.classList.add('even');
var boxodd = document.querySelectorAll('.box:nth-child(odd)');
//boxodd.classList.add('odd');
boxeven.forEach(element => {
    element.classList.add('odd');
});


var listitem = document.querySelectorAll('li:nth-child(n+1)');
console.log(listitem);*/



var ul = document.querySelector('.list1');
var li = ul.children;
console.log(li);

var firstli = ul.firstElementChild;
console.log(firstli)

var lastli = ul.lastChild;
console.log(lastli)

console.log("Next of first li")
console.log(firstli.nextElementSibling);

console.log("prev of last li")
console.log(lastli.previousElementSibling)

var row = document.querySelector('.row');
var lastelement = row.lastElementChild;
lastelement.classList.add('lastdiv');

var firstelement = row.firstElementChild;
console.log(firstelement)
firstelement.classList.add('firstdiv');


console.log(row.childNodes)



var div = document.createElement('div');
div.classList.add('col-md-2');
div.classList.add('mx-2');
div.classList.add('odd');

var h2 = document.createElement('h2');
h2.innerHTML = "Heading 2";

var h3 = document.createElement('h3');
h3.innerHTML = "Sub title";

var title = document.createElement('h2');
title.innerHTML = "title";
 


div.appendChild(h2);
div.appendChild(h3);
div.insertBefore(title,h3);
row.appendChild(div);

