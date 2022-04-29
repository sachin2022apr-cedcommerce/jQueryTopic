function productList() {
    /*let id = document.getElementById("PId").value;  
    let name = document.getElementById("PName").value; 
    let price = document.getElementById("PPrice").value; 
    */
    var product=[];
    product[0]={Company:"Samsung",Model:"Galaxy",Memory:"64",Price:"15000"};
    product[1]={Company:"Nokia",Model:"S730",Memory:"128",Price:"22000"};
    product[2]={Company:"Xiaomi",Model:"Note",Memory:"32",Price:"12000"};
    product[3]={Company:"Motoroala",Model:"G10",Memory:"32",Price:"15000"};
    product[4]={Company:"Apple",Model:"S12",Memory:"64",Price:"25000"};
    /*var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = id;
    cell2.innerHTML = n;
    cell3.innerHTML = price;
   */
    for(var i=0;i<=product.length;){
        var row = myTable.insertRow();
        
            var cell1 = row.insertCell(0);
            cell1.innerHTML = product[i].Company;
            var cell2 = row.insertCell(1);
            cell2.innerHTML = product[i].Model;
            var cell3 = row.insertCell(2);
            cell3.innerHTML = product[i].Memory;
            var cell4 = row.insertCell(3);
            cell4.innerHTML = product[i].Price;
            i++;
        
    }
}

