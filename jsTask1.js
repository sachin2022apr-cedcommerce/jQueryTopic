var product=[];
    
product[0]={Company:"Samsung",Model:"Galaxy",Memory:64,Price:15000,Check:false,Quantity:0,Rate:1};
    
product[1]={Company:"Nokia",Model:"S730",Memory:128,Price:22000,Check:false,Quantity:0,Rate:1};
    
product[2]={Company:"Xiaomi",Model:"Note",Memory:32,Price:12000,Check:false,Quantity:0,Rate:1};
    
product[3]={Company:"Motoroala",Model:"G10",Memory:32,Price:15000,Check:false,Quantity:0,Rate:1};
    
product[4]={Company:"Apple",Model:"S12",Memory:64,Price:25000,Check:false,Quantity:0,Rate:1};
    


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
   
  }

var amount=[];
amount[0]=0;
amount[1]=0;
amount[2]=0;
amount[3]=0;
amount[4]=0;
var quantity=[];
quantity[0]=0;
quantity[1]=0;
quantity[2]=0;
quantity[3]=0;
quantity[4]=0;
  function addQuantity(){

    var model = document.getElementById("sProduct").value;  
    
    var quan = document.getElementById("sQuantity").value;

   
  
    if(model== "Samsung Galaxy"){
      
      
     
      amount[0] = amount[0] + quan*product[0].Price;
      quantity[0] = quantity[0] + Number(quan);
            var row = table5.insertRow(0);
          var cell1 = row.insertCell(0);
              cell1.innerHTML = model;
          var cell2 = row.insertCell(1);
              cell2.innerHTML = quantity[0];
          var cell3 = row.insertCell(2);
              cell3.innerHTML = amount[0];
    }
	if(model== "Nokia S730"){
     
      
     
      amount[1] = amount[1] + quan*product[1].Price;
      quantity[1] = quantity[1] + Number(quan);
            var row = table5.insertRow(0);
          var cell1 = row.insertCell(0);
              cell1.innerHTML = model;
          var cell2 = row.insertCell(1);
              cell2.innerHTML = quantity[1];
          var cell3 = row.insertCell(2);
              cell3.innerHTML = amount[1];
    }
	if(model== "Xiaomi Note"){
     
      
     
      amount[2] = amount[2] + quan*product[2].Price;
      quantity[2] = quantity[2] + Number(quan);
            var row = table5.insertRow(0);
          var cell1 = row.insertCell(0);
              cell1.innerHTML = model;
          var cell2 = row.insertCell(1);
              cell2.innerHTML = quantity[2];
          var cell3 = row.insertCell(2);
              cell3.innerHTML = amount[2];
    }
	if(model== "Motoroala G10"){
      
      
     
      amount[3] = amount[3] + quan*product[3].Price;
      quantity[3] = quantity[3] + Number(quan);
            var row = table5.insertRow(0);
          var cell1 = row.insertCell(0);
              cell1.innerHTML = model;
          var cell2 = row.insertCell(1);
              cell2.innerHTML = quantity[3];
          var cell3 = row.insertCell(2);
              cell3.innerHTML = amount[3];
    }
	if(model== "Apple S12"){
      
      
     
      amount[4] = amount[4] + quan*product[4].Price;
      quantity[4] = quantity[4] + Number(quan);
            var row = table5.insertRow(0);
          var cell1 = row.insertCell(0);
              cell1.innerHTML = model;
          var cell2 = row.insertCell(1);
              cell2.innerHTML = quantity[4];
          var cell3 = row.insertCell(2);
              cell3.innerHTML = amount[4];
    }

         
  }
 

  function generateBill(){
    var sum = 0;
  	var Table = document.getElementById("table6");
    Table.innerHTML = "";
    
    for (let i = 0; i < amount.length; i++) {
        sum += amount[i];
    }
      var row = table6.insertRow(0);
		var cell1= row.insertCell(0);
              cell1.innerHTML = sum;          
		var cell2 = row.insertCell(0);
              cell2.innerHTML = "       ";
		var cell3 = row.insertCell(0);
              cell3.innerHTML = "Total";
  }
  
  function showProduct() {
 	var Table = document.getElementById("table7");
     Table.innerHTML = "";

    for(var i=0;i<product.length;){
        var row = table7.insertRow();
        
            var cell1 = row.insertCell(0);
            cell1.innerHTML = product[i].Company;
            var cell2 = row.insertCell(1);
            cell2.innerHTML = product[i].Model;
            var cell3 = row.insertCell(2);
            cell3.innerHTML = product[i].Memory;
            var cell4 = row.insertCell(3);
            cell4.innerHTML = product[i].Price;
		        var cell5 = row.insertCell(4);
			     

		        var p= document.createElement('input');
			      p.type = 'checkbox';
   				  p.id = 'check'+i;
            p.value= 'delete';
            
            cell5.appendChild(p);
            i++;
     
        
    }

    
  }


  function deleteProduct(){
    var Table = document.getElementById("table8");
    Table.innerHTML = "";
  const values = [];
    for(var i=0,j=0;i<product.length;i++){
     
        var chk=document.getElementById('check'+i);
        if(chk.checked==true){
          values[j]=product[i];
          j++;
        }
        
        
    }
    console.log("values",values);

    for(var i = 0; i < values.length; i++){
        for(var j = 0; j<product.length;j++){
          if(values[i].Company == product[j].Company){
            product.splice(j,1);
            
          }
          else
            continue;

        }

        console.log("product", product);
    }
    
    for(var i=0;i<product.length;){
      var row = table8.insertRow();
      
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


  function Add(){
    var Table = document.getElementById("table9");
    Table.innerHTML = "";
    var pro = document.getElementById("selectProduct").value;  
    var quan = Number(document.getElementById("selectQuantity").value);
    
    if(pro== "Samsung Galaxy"){
      product[0].Quantity += quan;
    }
	if(pro== "Nokia S730"){
      product[1].Quantity += quan;
    }
	if(pro== "Xiaomi Note"){
      product[2].Quantity += quan;
    }
	if(pro== "Motoroala G10"){
      product[3].Quantity += quan;
    }
	if(pro== "Apple S12"){
    product[4].Quantity += quan;
    }

  for(var i=0;i<product.length;){
      var row = table9.insertRow();
      
          var cell1 = row.insertCell(0);
          cell1.innerHTML = product[i].Company;
          var cell2 = row.insertCell(1);
          cell2.innerHTML = product[i].Model;
          var cell3 = row.insertCell(2);
          cell3.innerHTML = product[i].Memory;
          var cell4 = row.insertCell(3);
          cell4.innerHTML = product[i].Price;
          var cell5 = row.insertCell(4);
          cell5.innerHTML = product[i].Quantity;
          i++;
  }
}

function generate(){

  var sum=0;
      for(var i=0;i<product.length;i++){
          sum += product[i].Quantity*product[i].Price;
      }
      var row = table9.insertRow();
      var c2 = row.insertCell(0);
      c2.innerHTML = "Total";
          var c1 = row.insertCell(1);
          c1.innerHTML = sum;
          

}

function update(){
	 var Table = document.getElementById("table10");
    Table.innerHTML = "";
	var pro = document.getElementById("updateProduct").value;  
	var quan = Number(document.getElementById("updateQuantity").value);
	
	if(pro== "Samsung Galaxy"){
      product[0].Quantity = quan;
    }
	if(pro== "Nokia S730"){
      product[1].Quantity = quan;
    }
	if(pro== "Xiaomi Note"){
      product[2].Quantity = quan;
    }
	if(pro== "Motoroala G10"){
      product[3].Quantity = quan;
    }
	if(pro== "Apple S12"){
    product[4].Quantity = quan;
    }
	
	for(var i=0;i<product.length;){
      var row = table10.insertRow();
      
          var cell1 = row.insertCell(0);
          cell1.innerHTML = product[i].Company;
          var cell2 = row.insertCell(1);
          cell2.innerHTML = product[i].Model;
          var cell3 = row.insertCell(2);
          cell3.innerHTML = product[i].Memory;
          var cell4 = row.insertCell(3);
          cell4.innerHTML = product[i].Price;
          var cell5 = row.insertCell(4);
          cell5.innerHTML = product[i].Quantity;
          i++;
  }

}


function rate(){
	var Table = document.getElementById("table11");
    Table.innerHTML = "";
	var pro = document.getElementById("rateProduct").value;  
	var quan = Number(document.getElementById("productRating").value);
	
	if(pro== "Samsung Galaxy"){
      product[0].Rate = quan;
    }
	if(pro== "Nokia S730"){
      product[1].Rate = quan;
    }
	if(pro== "Xiaomi Note"){
      product[2].Rate = quan;
    }
	if(pro== "Motoroala G10"){
      product[3].Rate = quan;
    }
	if(pro== "Apple S12"){
    product[4].Rate = quan;
    }
	
	for(var i=0;i<product.length;){
      var row = table11.insertRow();
      
          var cell1 = row.insertCell(0);
          cell1.innerHTML = product[i].Company;
          var cell2 = row.insertCell(1);
          cell2.innerHTML = product[i].Model;
          var cell3 = row.insertCell(2);
          cell3.innerHTML = product[i].Memory;
          var cell4 = row.insertCell(3);
          cell4.innerHTML = product[i].Price;
          var cell5 = row.insertCell(4);
          cell5.innerHTML = product[i].Rate;
          i++;
  }

}

function searchPrice(){
	var Table = document.getElementById("table12");
    Table.innerHTML = "";
	var min = Number(document.getElementById("minPrice").value);  
	var max = Number(document.getElementById("maxPrice").value);
	
	for(var i=0;i<product.length;i++){
		if(product[i].Price>=min&&product[i].Price<=max){
        		var row = table12.insertRow();
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