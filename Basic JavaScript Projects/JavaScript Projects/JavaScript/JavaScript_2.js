function validateForm() {
    let x = document.forms["Email"]["_replyTo"].value;
    let y = document.forms["Email"]["_message"].value;
    
    if (x == "" ) {
      alert("Please enter an email address");
      return false;
    }else if (y == "") {
        alert("Please write a brief message");
      return false;
    }
  }