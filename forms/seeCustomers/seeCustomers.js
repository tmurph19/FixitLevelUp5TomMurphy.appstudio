custTable = ""
results = ""
custResults = ""

//populate drop down when form loads
seeCustomers.onshow=function(){
  drpCustomers.clear()
  let query = "SELECT name FROM customer"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjk48928&pass=BIA375CK&database=cjk48928&query=" + query)
    if (req1.status = 200) {
      custTable = JSON.parse(req1.responseText)
      for (i = 0; i <= custTable.length - 1; i++){
        drpCustomers.addItem(custTable[i])
    }
  }
  hmbMenu1.clear()
      hmbMenu.addItem("See Customers")
      hmbMenu.addItem("Edit Customers")
      hmbMenu.addItem("Delete Customers")
      hmbMenu.addItem("Add Customers")
}

drpCustomers.onclick=function(s){
  if (typeof(s) == "object"){
    return  
  } 
  else {
    drpCustomers.value = s
    // get data from database when program loads
    let queryCustomers = "SELECT name, street, city, state, zipcode FROM customer WHERE name = " + '"' + s + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjk48928&pass=BIA375CK&database=cjk48928&query=" + queryCustomers)
      if (req1.status == 200) {
            custResults = JSON.parse(req1.responseText)
            for (i = 0; i < custResults.length; i++)
            results = results + custResults[i] + "\n"
            txtCustomers.value = results
    }
  }
}
hmbMenu1.onclick=function(){
    if (typeof(s) == "object") {
       return
    }
    switch(s) {
      case "See Customers":
          ChangeForm(seeCustomers)
          break
       case "Edit Customers":
          ChangeForm(deleteUpdateCustomer)
          break
       case "Delete Customers":
          ChangeForm(deleteUpdateCustomer)
          break
      case "Add Customers":
          ChangeForm(addCustomer)
          break
     }
}