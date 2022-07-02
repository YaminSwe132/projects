
var div = document.getElementById('row2');
var calculateBtn = document.getElementById('claculate');
var resetBtn = document.getElementById('reset');

var startWeight = document.getElementById('startWeight');
var currentWeight = document.getElementById('currentWeight');

var weightLoss = document.getElementById('weightLoss');
var totalWeight = document.getElementById('totalWeight');

var tbody = document.getElementById('tbody');


calculateBtn.addEventListener('click',calculateWeightLoss);
resetBtn.addEventListener('click',resetTheData);
var count = 1;
function calculateWeightLoss(){
  
  div.classList.remove('hide');
  var calcWeight = [(startWeight.value-currentWeight.value)/startWeight.value]*100;
  weightLoss.innerHTML = Math.abs(Math.ceil(calcWeight))+" %";

  var calcTotalWeight = startWeight.value-currentWeight.value;
  if(calcTotalWeight>0){
    totalWeight.innerHTML = "Loss "+Math.abs(Math.ceil(calcTotalWeight))+"lbs";
  }else{
    totalWeight.innerHTML = "Gain  "+ Math.abs(Math.ceil(calcTotalWeight))+"lbs";
  }

  var tr = document.createElement('tr');
  var td1 = document.createElement('td');
  td1.innerHTML = count;
  var td2 = document.createElement('td');
  td2.innerHTML = startWeight.value+"lbs";
  var td3 = document.createElement('td');
  td3.innerHTML = Math.ceil(startWeight.value*0.454 )+"kgs";
  var td4 = document.createElement('td');
  td4.innerHTML = currentWeight.value+"lbs";
  var td5 = document.createElement('td');
  td5.innerHTML = Math.ceil(currentWeight.value*0.454) +"kgs" ;
  var td6 = document.createElement('td');
  td6.innerHTML = Math.abs(Math.ceil(calcWeight))+" %";
  var td7 = document.createElement('td');
  td7.innerHTML = Math.abs(Math.ceil(calcTotalWeight))+"lbs";

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);
  tr.appendChild(td7);
  console.log(tr);
  tbody.appendChild(tr);
  //tbody.innerHTML += tr;
  console.log(tbody.innerHTML);

  


  count++;


}
function resetTheData(){
  div.classList.add('hide');
  tbody.innerHTML = "";
  startWeight.value="110";
  currentWeight.value="100";
  count=1;
}