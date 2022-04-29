var product=[];
    product[0]={Company:"Samsung",Model:"Galaxy",Memory:"64",Price:"15000"};
    product[1]={Company:"Nokia",Model:"S730",Memory:"128",Price:"22000"};
    product[2]={Company:"Xiaomi",Model:"Note",Memory:"32",Price:"12000"};
    product[3]={Company:"Motoroala",Model:"G10",Memory:"32",Price:"15000"};
    product[4]={Company:"Apple",Model:"S12",Memory:"64",Price:"25000"};

function productList() {
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
function filterProduct(){
    var Table = document.getElementById("table2");
    Table.innerHTML = "";

    var f = document.getElementById("filter").value;  
    
    var s = document.getElementById("search").value;
    var product=[];
    product[0]={Company:"Samsung",Model:"Galaxy",Memory:"64",Price:"15000"};
    product[1]={Company:"Nokia",Model:"S730",Memory:"128",Price:"22000"};
    product[2]={Company:"Xiaomi",Model:"Note",Memory:"32",Price:"12000"};
    product[3]={Company:"Motoroala",Model:"G10",Memory:"32",Price:"15000"};
    product[4]={Company:"Apple",Model:"S12",Memory:"64",Price:"25000"};

    for(var i=0;i<=product.length;i++){
            if(f=="Company"){
                if(product[i].Company==s){
                    var row = table2.insertRow();
                    var cell1 = row.insertCell(0);
                    cell1.innerHTML = product[i].Company;
                    var cell2 = row.insertCell(1);
                    cell2.innerHTML = product[i].Model;
                    var cell3 = row.insertCell(2);
                    cell3.innerHTML = product[i].Memory;
                    var cell4 = row.insertCell(3);
                    cell4.innerHTML = product[i].Price;
                    
                }
            }
            if(f=="Model"){
                if(product[i].Model==s){
                    var row = table2.insertRow();
                    var cell1 = row.insertCell(0);
                    cell1.innerHTML = product[i].Company;
                    var cell2 = row.insertCell(1);
                    cell2.innerHTML = product[i].Model;
                    var cell3 = row.insertCell(2);
                    cell3.innerHTML = product[i].Memory;
                    var cell4 = row.insertCell(3);
                    cell4.innerHTML = product[i].Price;
                    
                }
            }
            if(f=="Memory"){
                if(product[i].Memory==s){
                    var row = table2.insertRow();
                    var cell1 = row.insertCell(0);
                    cell1.innerHTML = product[i].Company;
                    var cell2 = row.insertCell(1);
                    cell2.innerHTML = product[i].Model;
                    var cell3 = row.insertCell(2);
                    cell3.innerHTML = product[i].Memory;
                    var cell4 = row.insertCell(3);
                    cell4.innerHTML = product[i].Price;
                    
                }
            }
            if(f=="Price"){
                if(product[i].Price==s){
                    var row = table2.insertRow();
                    var cell1 = row.insertCell(0);
                    cell1.innerHTML = product[i].Company;
                    var cell2 = row.insertCell(1);
                    cell2.innerHTML = product[i].Model;
                    var cell3 = row.insertCell(2);
                    cell3.innerHTML = product[i].Memory;
                    var cell4 = row.insertCell(3);
                    cell4.innerHTML = product[i].Price;
                    
                }
            }
            
        
    }
}