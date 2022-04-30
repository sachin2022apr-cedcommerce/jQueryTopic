var product=[];
    
product[0]={Company:"Samsung",Model:"Galaxy",Memory:64,Price:1500};
    
product[1]={Company:"Nokia",Model:"S730",Memory:128,Price:220};
    
product[2]={Company:"Xiaomi",Model:"Note",Memory:32,Price:12000};
    
product[3]={Company:"Motoroala",Model:"G10",Memory:32,Price:1500};
    
product[4]={Company:"Apple",Model:"S12",Memory:64,Price:25000};
    


  function productList() {
    for(var i=0;i<=product.length;){
        var row = table1.insertRow();
        
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

    function newFunction() {
        cell1.innerHTML = product[i].Company;
    }
  }


  function filterProduct(){
    var Table = document.getElementById("table2");
    Table.innerHTML = "";

    var f = document.getElementById("filter").value;  
    
    var s = document.getElementById("search").value;

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

  function sortProduct(){
    var Table = document.getElementById("table3");
    Table.innerHTML = "";

    var sort = document.getElementById("sort").value;  
    
    var option = document.getElementById("option").value;

    
    for(var i=0;i<=product.length;i++){
            if(sort=="Ascending"){

                if(option=="Company"){
                    function compare( a, b ) {
                        if ( a.Company < b.Company ){
                          return -1;
                        }
                        if ( a.Company > b.Company ){
                          return 1;
                        }
                        return 0;
                      }
                      product.sort( compare );
                    var row = table3.insertRow();
                    var cell1 = row.insertCell(0);
                    cell1.innerHTML = product[i].Company;
                    var cell2 = row.insertCell(1);
                    cell2.innerHTML = product[i].Model;
                    var cell3 = row.insertCell(2);
                    cell3.innerHTML = product[i].Memory;
                    var cell4 = row.insertCell(3);
                    cell4.innerHTML = product[i].Price;
                }
                
                
                if(option=="Model"){
                    function compare( a, b ) {
                        if ( a.Model < b.Model ){
                          return -1;
                        }
                        if ( a.Model > b.Model ){
                          return 1;
                        }
                        return 0;
                      }
                      product.sort( compare );
                    var row = table3.insertRow();
                    var cell1 = row.insertCell(0);
                    cell1.innerHTML = product[i].Company;
                    var cell2 = row.insertCell(1);
                    cell2.innerHTML = product[i].Model;
                    var cell3 = row.insertCell(2);
                    cell3.innerHTML = product[i].Memory;
                    var cell4 = row.insertCell(3);
                    cell4.innerHTML = product[i].Price;
                }


                if(option=="Memory"){
                    function compare( a, b ) {
                        if ( a.Memory < b.Memory ){
                          return -1;
                        }
                        if ( a.Memory > b.Memory ){
                          return 1;
                        }
                        return 0;
                      }
                      product.sort( compare );
                    var row = table3.insertRow();
                    var cell1 = row.insertCell(0);
                    cell1.innerHTML = product[i].Company;
                    var cell2 = row.insertCell(1);
                    cell2.innerHTML = product[i].Model;
                    var cell3 = row.insertCell(2);
                    cell3.innerHTML = product[i].Memory;
                    var cell4 = row.insertCell(3);
                    cell4.innerHTML = product[i].Price;
                    
                }


                if(option=="Price"){
                    function compare( a, b ) {
                        if ( a.Price < b.Price ){
                          return -1;
                        }
                        if ( a.Price > b.Price ){
                          return 1;
                        }
                        return 0;
                      }
                      product.sort( compare );
                    var row = table3.insertRow();
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
            if(sort=="Descending"){
                if(option=="Company"){
                    function compare( a, b ) {
                        if ( a.Company > b.Company ){
                          return -1;
                        }
                        if ( a.Company < b.Company ){
                          return 1;
                        }
                        return 0;
                      }
                      product.sort( compare );
                    var row = table3.insertRow();
                    var cell1 = row.insertCell(0);
                    cell1.innerHTML = product[i].Company;
                    var cell2 = row.insertCell(1);
                    cell2.innerHTML = product[i].Model;
                    var cell3 = row.insertCell(2);
                    cell3.innerHTML = product[i].Memory;
                    var cell4 = row.insertCell(3);
                    cell4.innerHTML = product[i].Price;
                }
                
                
                if(option=="Model"){
                    function compare( a, b ) {
                        if ( a.Model > b.Model ){
                          return -1;
                        }
                        if ( a.Model < b.Model ){
                          return 1;
                        }
                        return 0;
                      }
                      product.sort( compare );
                    var row = table3.insertRow();
                    var cell1 = row.insertCell(0);
                    cell1.innerHTML = product[i].Company;
                    var cell2 = row.insertCell(1);
                    cell2.innerHTML = product[i].Model;
                    var cell3 = row.insertCell(2);
                    cell3.innerHTML = product[i].Memory;
                    var cell4 = row.insertCell(3);
                    cell4.innerHTML = product[i].Price;
                }


                if(option=="Memory"){
                  function compare( a, b ) {
                    if ( a.Memory < b.Memory ){
                      return 1;
                    }
                    if ( a.Memory > b.Memory ){
                      return -1;
                    }
                    return 0;
                  }
                      product.sort( compare );
                    var row = table3.insertRow();
                    var cell1 = row.insertCell(0);
                    cell1.innerHTML = product[i].Company;
                    var cell2 = row.insertCell(1);
                    cell2.innerHTML = product[i].Model;
                    var cell3 = row.insertCell(2);
                    cell3.innerHTML = product[i].Memory;
                    var cell4 = row.insertCell(3);
                    cell4.innerHTML = product[i].Price;
                    
                }


                if(option=="Price"){
                    function compare( a, b ) {
                        if ( a.Price > b.Price ){
                          return -1;
                        }
                        if ( a.Price < b.Price ){
                          return 1;
                        }
                        return 0;
                      }
                      product.sort( compare );
                    var row = table3.insertRow();
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


  function addProduct(){
    var Table = document.getElementById("table4");
    Table.innerHTML = "";

    var com = document.getElementById("Company").value;  
  
    var mod = document.getElementById("Model").value;

    var mem = document.getElementById("Memory").value;  
  
    var pri = document.getElementById("Price").value;

   
    /*
    k=product.length;
    product[k].Company=com;
    product[k].Model=mod;
    product[k].Memory=mem;
    product[k].Price=pri;*/
    if(!(com=='' && mod=='' && mem=='' && pri==''))
    {
    product.push({Company:com,Model:mod,Memory:mem,Price:pri});
    }
    
    for(var i=0;i<=product.length;){
      var row = table4.insertRow();
      
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
   

    /*
    var f = document.getElementById("filter").value;  
  
    var s = document.getElementById("search").value;

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
          
      
      }*/
  }