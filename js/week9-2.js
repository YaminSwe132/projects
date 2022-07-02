var employee={
    name: "David",
    age: 30,
    position: "pm",
    department: "SE",
    started_year: 2008,


    check: function(){
        return 2022-this.started_year;
    }
}
console.log(employee.age);

var box1 = document.getElementById('box1');
box1.innerHTML+="<p>"+employee.name+"</p>";
box1.innerHTML+="<p>"+employee.age+"</p>";
box1.innerHTML+="<p>"+employee.position+"</p>";
box1.innerHTML+="<p>"+employee.department+"</p>";
box1.innerHTML+="<p>"+employee.check()+"</p>";


//forin (looping for object)
for (const key in employee) {
    console.log(employee[key]);
}

//foreach(looping for array)
var items = ["ying","yaya","yamin"];
items.forEach(function(item) {
    console.log(item);
});

console.log("for of")

//forof (looping for array)
for (const x of items) {
    console.log(x);
}


var student = [
    student1={
        name:"Ying",
        major:"Cs",
        year:"fourth",
        email:"ying@gmail.com"
    },
    student2={
        name:"Yaya",
        major:"Cs",
        year:"fourth",
        email:"yaya@gmail.com"
    },
    student3={
        name:"Yamin",
        major:"Cs",
        year:"fourth",
        email:"yamin@gmail.com"
    },
    student4={
        name:"Chris",
        major:"Cs",
        year:"fourth",
        email:"chris@gmail.com"
    },
    student5={
        name:"Thiha",
        major:"Cs",
        year:"fourth",
        email:"thiha@gmail.com"
    },
    
]
var data = document.getElementById ("tbody");
for(var i=0;i<student.length;i++){
    var result="";
    if(i%2==0){
        result+="<tr class='bg-success text-white'>";
    }else{
        result+="<tr>";
    }
    
    for (var key in student[i]) {
        console.log(student[i][key]);
        result+="<td>"+student[i][key]+"</td>";
    }
    result+="</tr>";
    data.innerHTML+=result;
}
/*var result="";
var col=0;
student.forEach(students => {
    if(col%2==0){
        result+="<tr class='bg-success text-white'>";
    }else{
        result+="<tr>";
    }
    //console.log(students);
   for (const key in students) {
    result+="<td>"+students[key]+"</td>";
    console.log(students[key]);
   }
    result+="</tr>";
    data.innerHTML+=result;
    col++;
});*/





//while loop

var index =0;
while(index<items.length){

    if(index%2==0){
        console.log(items[index]);
    }else{
        console.log("Odd Room");
    }
    index++;
}

//dowhile loop
var count =0;
do{
    console.log(student[count]);
    count++;
}while(count<student.length);


//condition
//if or switch case
