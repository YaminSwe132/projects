var marks =[
    76,89,45,68,99
]
//&&
//||
//!=

//50< gradeD
//50 && 60 grade C
//60 75 grade B
//75 100 grade A
for (const mark of marks) {
    console.log(mark);
    if(mark<=50)
    console.log("Grade D");
    else if(mark>50 && mark<=60)
    console.log("Grade C");
    else if(mark>60 && mark<=75)
    console.log("Grade B");
    else if(mark>75 && mark<=100)
    console.log("Grade A");

}
//0 full time
//1 wages
// switch (value){
//     case 0:   ;
//     case (condition)
// }
var items = [0,1,0,0,1,3,1]
for (const value of items) {
    console.log(value);
    switch(value){
        case 0: console.log("Full Time Emp");break;
        case 1: console.log("Wages");break;
        default: console.log("default");
    }
}

console.log("Products")

// 1 kyat => 16pal (15pal)(14pal)
//1 pal=> 8 yay


//gem() price per yay (14pal) 120yay
//gold price per yay (16pal) 128 yay
//18k price per yay (15g)  15  
// pt prce per yay (18g)    18
var products = ['gem','gold','18k','pt','aa'];
for (const value of products) {
    console.log(value)
    switch(value){
        case 'gem': console.log("price per yway is "+ Math.ceil(100000/120)); break;
        case 'gold': console.log("price per yway is "+ Math.ceil(100000/128)); break;
        case '18k': console.log("price per gram is "+ Math.ceil(100000/15)); break;
        case 'pt': console.log("price per gram is "+ Math.ceil(100000/18)); break;
        default: console.log("default");
    }
}

//1 pk =>12 pack
//1 pack => 10 lb 
//1pk =>120 lb

//1 pk=> 380000
//120 lb=> price
//3pk 2pack 1 lb



                   // 3 2  1
function calcPrice(pk, pack, lb){
    var total;
    var price;
    total = pk*120+ pack*10 + lb;// lb 
    price = (38000/120)*total;
    return price;
}
console.log(calcPrice(3,2,1));




var date=new Date();
console.log(date.getMonth());
var today = new Date();
console.log(today.getUTCFullYear());






var birthday = new Date('6/10/2000');//month/date/year
console.log(birthday);


var diff = today - birthday;
console.log(diff)

var age = new Date(diff);
console.log(age.getUTCFullYear()-1970)



//var boxes=document.getElementsByClassName('box');
var boxes = document.getElementsByClassName('box');
for (const box of boxes) {
    
        box.style.backgroundColor= 'red';
        //box.style.backgroundColor = "darkgreen";
        box.style.color = "black";
        box.letterSpacing = "3";
        //box.style.fontSize='50px';
    
}

// var boxes = document.getElementsByClassName('box1');
// for (const box of boxes) {
//     box.style.backgroundColor = "red";
//     box.style.color = "white";
//     box.letterSpacing = "3";
// }
//getElementsByTagName()

var ptag = document.getElementsByTagName('p');
for (const p of ptag) {
    p.style.color="green";
}
 var litag = document.getElementsByTagName('li');
 for (const li of litag) {
    console.log(li.textContent);
    if(li.textContent.indexOf('melon')!=-1){
        //li.style.backgroundColor= "purple";
        li.style.color ="darkgreen";
    }
 }



var date2 =new Date();
console.log(date2.getUTCMonth());


var month =2; 
console.log(month.getMonth())