var items = [
    ["item1","3000","3"],
    ["item2","2000","3"],
    ["item3","5000","3"],
    ["item4","3000","3"],
    ["item5","4000","3"],
]

var invoice = document.getElementById('invoice');
var total =0;

for(var row=0; row<items.length;row++){
    
    data = "<tr>";
    data+="<td>"+(row+1)+"</td>";
    for(var col=0;col<items[row].length;col++){
       
        console.log(items[row][col]);
        data+="<td>"+items[row][col]+"</td>";
        
    }
    
    var subtoal = items[row][1]*items[row][2];
    data+="<td>"+subtoal+"</td>";
    data+="</tr>";
    total+=subtoal;
    
    
    
    
    invoice.innerHTML+=data;
}
console.log("total is"+total);

invoice.innerHTML+="<tr><td></td><td colspan= '3'>Total</td><td>"+total+"</td></tr>";



