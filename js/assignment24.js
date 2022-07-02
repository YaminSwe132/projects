var btnUpload = document.getElementById('btnUpload');
var row = document.getElementById('row');
/*btnUpload.onclick = function(){
    var divcol = document.createElement('div');
    divcol.classList.add('col-md-3');

    var ptag = document.createElement('p');
    ptag.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, modi pariatur obcaecati laudantium exercitationem beatae enim commodi repellat veritatis adipisci perferendis, dignissimos ut voluptatibus, quibusdam dolore eveniet eius accusantium saepe.";
    divcol.appendChild(ptag);
    row.appendChild(divcol);


}*/

var row1=document.getElementById('row1');
btnUpload.onclick = function(){
    var row = document.createElement('row');
    row.classList.add('row');
    var div1 = document.createElement('div');
    div1.classList.add('col-md-3');
    var p = document.createElement('p');
    p.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, modi pariatur obcaecati laudantium exercitationem beatae enim commodi repellat veritatis adipisci perferendis, dignissimos ut voluptatibus, quibusdam dolore eveniet eius accusantium saepe.";
    div1.appendChild(p);

    var div2 = document.createElement('div');
    div2.classList.add('col-md-3');
    var p = document.createElement('p');
    p.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, modi pariatur obcaecati laudantium exercitationem beatae enim commodi repellat veritatis adipisci perferendis, dignissimos ut voluptatibus, quibusdam dolore eveniet eius accusantium saepe.";
    div2.appendChild(p);

    var div3 = document.createElement('div');
    div3.classList.add('col-md-3');
    var p = document.createElement('p');
    p.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, modi pariatur obcaecati laudantium exercitationem beatae enim commodi repellat veritatis adipisci perferendis, dignissimos ut voluptatibus, quibusdam dolore eveniet eius accusantium saepe.";
    div3.appendChild(p);

    var div4 = document.createElement('div');
    div4.classList.add('col-md-3');
    var p = document.createElement('p');
    p.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, modi pariatur obcaecati laudantium exercitationem beatae enim commodi repellat veritatis adipisci perferendis, dignissimos ut voluptatibus, quibusdam dolore eveniet eius accusantium saepe.";
    div4.appendChild(p);

    row.appendChild(div1);
    row.appendChild(div2);
    row.appendChild(div3);
    row.appendChild(div4);
    row1.appendChild(row);
}




var list1 = document.getElementById('list1');
var list2 = document.getElementById('list2');
var btnChange = document.getElementById('btnChange');
btnChange.onclick = function(){
    if(list1.lastElementChild!=null){
        console.log(list1.firstElementChild.textContent)
        var list2li  = document.createElement('li');
        console.log(list2li)
        list2li.innerText = list1.lastElementChild.textContent;

        
        list1.removeChild(list1.lastElementChild);
        
        list2.appendChild(list2li)
        //list2.firstElementChild.innerHTML = list1.firstElementChild.innerHTML;
        console.log(list2.firstElementChild);
        //list2.lastElementChild = list2.firstElementChild;
        // console.log(list2li.previousElementSibling);
        // if(list2li.previousElementSibling!=null){
        //     list2.firstElementChild = list2li.previousElementSibling;
        // }
    }
    
   }

