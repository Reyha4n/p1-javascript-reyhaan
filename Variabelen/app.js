const budget = 100

if(budget > 60){
    console.log("U heeft genoeg geld!")
} else {
    console.log("Helaas, te weinig geldt")
}

function myFunction() {
    let product = prompt("Hoeveel kost het product dat je wilt kopen?", "100", "60");
    if (product > 60) {
      console.log("U heeft genoeg geld")
    } else {
        console.log("U heeft niet genoeg geld")
    }
  }