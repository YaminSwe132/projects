
var addBtn = document.getElementById('addbtn');
var new_task = document.getElementById('new-task');
var imcoplete_task = document.getElementById('incomplete-tasks');
var complete_task = document.getElementById('completed-tasks');
addBtn.onclick = addItem;

function addItem(){
    
    var taskValue = new_task.value;
    if(taskValue.length>0){
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        checkbox.onchange = change;
        var li =document.createElement('li');
        //li.innerHTML = taskValue;

        var label = document.createElement('label');
        label.innerHTML = taskValue;
        
        var textbox = document.createElement('input');
        textbox.type="text";
       
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(textbox);

         var editBtn = document.createElement('button');
         var deleteBtn = document.createElement('button');
         editBtn.innerText ="Edit";
         deleteBtn.innerText ="Delete";

         editBtn.classList.add('edit');
         deleteBtn.classList.add('delete');

         editBtn.onclick = editTask;
         deleteBtn.onclick = deletTask;


         li.appendChild(editBtn);
         li.appendChild(deleteBtn);

         

       
        imcoplete_task.appendChild(li);
        new_task.value ="";
    }
    

    function editTask(){
        console.log("edit");

        var li = this.parentNode;
        var textbox = li.querySelector("input[type = text]");

        var label = li.getElementsByTagName('label');
        if(!li.classList.contains('editMode')){
            li.classList.add('editMode');
            textbox.value = label[0].innerText;
        }else{
            li.classList.remove('editMode');
            label[0].innerText =textbox.value;
        }

    }
    function deletTask(){
        console.log("delte");

        var ul = this.parentNode.parentNode;
        var li = this.parentNode;
        ul.removeChild(li);
    }

    function change(){
       

        if(this.checked){
            console.log("Checked");
            var ul = this.parentNode.parentNode;
            console.log(ul)
            var li = this.parentNode;
            ul.removeChild(li);
    
            complete_task.appendChild(li);
        }else{
            console.log("Unchecked");
            var ul = this.parentNode.parentNode;
            console.log(ul)
            var li = this.parentNode;
            ul.removeChild(li);
    
            imcoplete_task.appendChild(li);
        }
    }

}


//binding function =>editTask,deleteTask,change