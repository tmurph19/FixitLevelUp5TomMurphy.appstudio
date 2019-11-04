custTable = ""
results = ""
custResults = ""

//populate drop down when form loads
deleteUpdateCustomers.onshow=function(){
  drpCustomers1.clear()
  let query = "SELECT name FROM customer"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm628228&pass=Beta#118&database=tpm62822&query=" + query)
    if (req1.status = 200) {
      results = JSON.parse(req1.responseText)
    } if (results == 0){
  } else {
    
      for (i = 0; i <= custTable.length - 1; i++){
        drpCustomers1.addItem(custTable[i])
      }
    }
  hmbMenu2.clear()
    hmbMenu.addItem("See Customers")
    hmbMenu.addItem("Edit Customers")
    hmbMenu.addItem("Delete Customers")
    hmbMenu.addItem("Add Customers")
}
drpCustomers1.onclick=function(s){
  if (typeof(s) == "object"){
    return  
  } 
  else {
    drpCustomers1.value = s
    // get data from database when program loads
    let queryCustomers = "SELECT name, street, city, state, zipcode FROM customer WHERE name = " + '"' + s + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm628228&pass=Beta#118&database=tpm62822&query=" + queryCustomers)
      if (req1.status == 200) {
            custResults = JSON.parse(req1.responseText)
            for (i = 0; i < custResults.length; i++)
            results = results + custResults[i] + "\n"
            txtCustomers1.value = results
    }
  }
}



btnSubmit.onclick=function(){
  if (rdoUpdateDelete.value == 0){
    let newName = txtNewName.value
    let oldName = txtCustomers1.value
    let query2 = "SELECT name, street, city, state, zipcode FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm628228&pass=Beta#118&database=tpm62822&query=" + query2)
  }
  if (req1.status == 200){
    if (req1.status == 500){
    let results = JSON.parse(req1.responseText)
    NSB.MsgBox("You have successfully changing the customer name!")
        } else
            NSB.MsgBox("There was a problem changing the customer name.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status)
    }
  if (rdoUpdateDelete.value == 1){
    let nameDelete = txtCustomers1.value
    let found = false
    for (i = 0; i < custTable.length - 1; i++){
      if(nameDelete == custTable[i][1])
      found = true
      }
      if (found == false)
      NSB.MsgBox("That name is not in the database.")
        } else if (found == true) {
            NSB.MsgBox("There was a problem deleting the customer name.")
      } let queryDelete = "DELETE FROM customer WHERE name =" + '"' + nameDelete + '"'
      req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm628228&pass=Beta#118&database=tpm62822&query=" + queryDelete)
  }
  if (req1.status == 200){
    if (req1.status == 500){
    let results = JSON.parse(req1.responseText)
    NSB.MsgBox("You have successfully deleted the customer named" + nameDelete)
        } else
            NSB.MsgBox("There was a problem deleting the customer named" + nameDelete + "from the database.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status)
    }
}


hmbMenu2.onclick=function(){
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
