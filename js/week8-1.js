console.log("External js file");
console.log("external js file....")


// alert("hello!")
// document.write("Output in document ");
// var message = confirm("Are you sure to exit??")
// console.log("message"+message);
// document.write("second");
// console.log(document.getElementById('box1'));
// document.getElementById('box1').innerHTML = "<h2>Box1</h2>";
// document.getElementById('box2').innerHTML = "<h2>Box2</h2>";
// document.getElementById('box2').innerHTML +="<p>Lorem </p>";
// document.getElementById('box2').innerHTML +="Lorem ipsum.......";

var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var list = document.getElementById('list');
var row = document.getElementById('row');
var row1= document.getElementById('row1');



var name = "Ying";
console.log(name);
let email = "ying@gmial.com";
var phone = "09767949726";

{
    
    console.log("Name is "+name);
    //console.log("Email is"+emial);
}

// document.getElementById('box1').innerHTML+="<h2>"+name+"</h2>";

// box1.innerHTML+="<h4>"+email+"</h4>";
// box1.innerHTML+="<h4>"+phone+"</h4>";


const pi = 3.1422;
console.log("pi="+pi);

var age = 20;
console.log(age+","+typeof(age));
var msg = true;
console.log(msg+","+typeof(msg));
var msg1= null;
console.log(msg1+","+typeof(msg1));
var dis = 1.2;
console.log(dis+","+typeof(dis));



var students = ['Yaya','Ying','Yamin'];
console.log(students[0]);
console.log(students[2]);
console.log(students[3]);

console.log(students.length);


box1.innerHTML= "<h2>"+students[0]+"</h2>";
box2.innerHTML="<h2>"+students[1]+"</h2>";
box3.innerHTML="<h2>"+students[2]+"</h2>";

for(var count=0; count<students.length; count++){
    console.log(students[count]);
    list.innerHTML+="<li>"+students[count]+"</li>";
    row.innerHTML+="<div class='col-4'>"+students[count]+"</div>";

}

var images = ['image/image1.png','image/image2.png','image/image3.png','image/image4.png'];
for (var index=0; index<images.length;index++){
row1.innerHTML+="<div class='col-3'><img src='"+images[index]+"'></div>";
}


//let within the scope cannot be called from outside of scope
//var within the scope can be called from outsie of scope