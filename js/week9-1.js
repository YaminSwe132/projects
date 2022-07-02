var rooms =[
    ['deluxe',65000,15],
    ['single',30000,7],
    ['luxury',80000,8]
]

var room = document.getElementById('rooms');
room.innerHTML = calculateSubtotal(rooms);//function call



//function defintion
function calculateSubtotal(item){
    var total=0;
    var result= '';
    for(var row=0; row<item.length; row++){
        result+="<tr>";
        result+="<td>"+(row+1)+"</td>";
        for(var col=0; col<item[row].length;col++){
            result+="<td>"+item[row][col]+"</td>"
        }

        total+= item[row][1]*item[row][2];
        result+="<td>"+item[row][1]*item[row][2]+"</td>";

        result+="</tr>";
    }

    result+= "<tr><td colspan= '4'>Total</td><td>"+total+"</tr>";
    console.log(total)
    return result;
}

function celciustoFah(celicus){
    var fah = (celicus*9/5)+32;
    document.getElementById('temperature').innerHTML= fah;
}

function availableRooms(total_rooms,booked_rooms){
    return total_rooms - booked_rooms;
    
}

//availableRooms(100,7);
document.getElementById('available').innerHTML = availableRooms(100,7);


function exchangeMoney(usd){
    var money = usd*1850;
    return money;
}
document.getElementById('money').innerHTML = exchangeMoney(2000);


console.log(exchangeMoney(2000));
function exchangeMoneytoDollars(kyat){
    var dollars = kyat/1850;
    return dollars;
}
document.getElementById('dollars').innerHTML = exchangeMoneytoDollars(100000000);
var numbers = [1,9,7];
// function findMax(numbers){
//     var found ;
//     var find;
//     var max;
//     //for(var i=0; i<numbers.length;i++){
//         var i=0;
//         while(i<numbers.length)
//         //find= numbers[i];
//         found = numbers[i+1];
//         max = numbers[i];
//         if(max>found){
//             max= found;
//         }
//         i++;

        
//     //}
//     return max;
// }

// console.log(findMax(numbers));