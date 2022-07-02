var students = [
    ["image/image1.png","yamin","yamin@gmail.com","US"],
    ["image/image2.png","theint","theint@gmail.com","Jp"],
    ["image/image3.png","phwe ","phwe@gmail.com","Jp"]
]
var row1 = document.getElementById('row1');
var row2 = document.getElementById('row2');
for(var row=0; row<students.length;row++){
    var colbox = "<div class='col-4'>";

    for(var col=0; col<students[row].length;col++){
        console.log(students[row][col]);
        colbox+="<p>"+students[row][col]+"</p>";
    }

    colbox += "</div>";
    row1.innerHTML+=colbox;
}

for(var row=0;row<students.length;row++){
    var card = "<div class ='card col'>";

    /*for(var col=0; col<students[row].length;col++){
        console.log("This is card header");
        if(col==0){
            
            card+="<div class = 'card-header'><img src='"+students[row][col]+"' class ='card-img-top'> </div>";
        }else{
            card+="<div class = 'card-body'><p class ='text-center'>"+students[row][col]+"</p></div>";
        }
    }*/


    card+="<img src='"+students[row][0]+"' class ='card-img-top'> ";
    card+="<h2 class ='card-title text-center'>"+students[row][1]+"</h2>";
    card+="<p class='card-text text-center'>"+students[row][2]+"</p>";
    card+="<p class ='card-text text-center'>"+students[row][3]+"</p>";
    card+="</div>";
    row2.innerHTML+=card;

}


var unit_price=380;
var qty=36;
//var totalcost = unit_price*qty;
var tax= 0.02;
//var taxamount = totalcost*tax;
var discount=500;
//var actualcost = totalcost+taxamount;
var actualcost = (unit_price*qty)*tax+(unit_price*qty)-discount;
//actualcost-=discount;
console.log(actualcost);
var num1 = 1000;
var count=5;
console.log(num1*++count);
console.log("count is "+count);
console.log(num1*count++);
console.log("count is"+count);
console.log(num1*--count);
console.log("count is"+count);
console.log(num1*count--);
console.log("count is "+count);

var remainder = 14%3;
console.log("remainder is"+remainder);

//assignment operator
var total = 1500;
console.log(total+=528);

console.log(5+"item");
var fah = 100;
var celsius = (fah-32)*5/9;
console.log("100 Fah is equal to "+celsius);
