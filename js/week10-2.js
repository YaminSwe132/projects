var btnadd = document.getElementById('btnadd');
//method 1
btnadd.onclick = function(){
    var username = document.getElementById('username');
    var count=0;
    if(username.value.length >0){
        var list = document.getElementById("list");
        var li = document.createElement('li');
        li.innerHTML = username.value;
        //li.classList.add("liitem");
        
        //li.classList.add("li");
        /*console.log(li.querySelectorAll)
        var listitem1 = li.querySelectorAll('li:nth-child(odd)');
        
        listitem1.forEach(element => {
            element.classList.add('liodd');
        });
         var listitem2 = li.querySelectorAll('li:nth-child(even)');
        
        listitem2.forEach(element =>{
            element.classList.add('lieven');
        })*/



       /* if(count%2==0){
            li.classList.add('lieven');
        }    
        else{
            li.classList.add('liodd');
        }*/
        
        list.appendChild(li);
        username.value = "";
        //count++;
        //console.log(count);
    }
}

var btnremove = document.getElementById('btnremove')
btnremove.onclick = function(){
    var list = document.getElementById('list');
    var li = list.firstElementChild;
    if(li!=null){
        list.removeChild(li);
    }
    
    
}

var options = document.getElementById('options');
options.onchange = function(){
    console.log("change"+options.value);
    var body = document.getElementsByTagName('body');
    for(var i = 0;i<body.length;i++){
        if(options.value==1){
            body[i].style.backgroundColor ="darkgreen";
            body[i].style.color="wheat";
        }
        else if(options.value==2){
            body[i].style.backgroundColor ="orange";
            body[i].style.color="wheat";
        }
        else if(options.value==3){
            body[i].style.backgroundColor ="yellow";
            body[i].style.color="dark";
        }
        else{
            body[i].style.backgroundColor ="red";
            body[i].style.color="wheat";
        }
    }

}

//method 2

btnadd.addEventListener('click',function(){
    console.log("Hello event listener with callback function");
})

//method 3 
btnadd.addEventListener('click',process1);


function process1(){
    console.log("Testing for eventlistener with outside function")
}


//method 4

btnadd.onclick= process1();