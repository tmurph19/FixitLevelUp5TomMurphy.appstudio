let results = []

addCustomer.onshow=function(){
  let query = "SELECT name FROM customer"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm628228&pass=Beta#118&database=tpm62822&query=" + query)
  if (req1.status = 200) {
      results = JSON.parse(req1.responseText)
     if (results == 0){
      } else {
    
      for (i = 0; i <= results.length - 1; i++){
        lstCompany.addItem(results[i][0])
      } else {
        }
    hmbMenu.clear()
      hmbMenu.addItem("See Customers")
      hmbMenu.addItem("Edit Customers")
      hmbMenu.addItem("Delete Customers")
      hmbMenu.addItem("Add Customers")
    }
}

btnSubmit1.onclick=function(){
  let name = inptName.value
  let street = inptStreet.value
  let city = inptCity.value
  let state = inptState.value
  let zipcode = inptZipCode.value
  
  let queryAdd = "INSERT INTO customer (name, street, city, state, zipcode) VALUES ('"+name+"', '"+street+"', '"+city+"', '"+state+"', '"+zipcode+"')"
  req11 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm628228&pass=Beta#118&database=tpm62822&query=" + query)
  
  if (req11.status == 200){
    if (req11.status == 500){
    let results = JSON.parse(req1.responseText)
    NSB.MsgBox("You have successfully added the customer!")
      } 
    }
    let query = "SELECT name FROM customer"
    req11 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm628228&pass=Beta#118&database=tpm62822&query=" + query)
    if (req11.status == 200){
    lstCompany.clear()
    
    results1 = JSON.parse(req11.responseText)
    if (results1 == 0){
  } else {
    for (i = 0; i <= results1.length - 1; i++){
        lstCompany.addItem(results1[i][0])
      } else {
        }
}


hmbMenu.onclick=function(){
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
