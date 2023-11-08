const budget = 100
const product = 60

if(budget > product){
    console.log("U heeft genoeg geld!")
} else {
    console.log("Helaas, te weinig geld")
}

function vraag(){
    let Antwoord = prompt("Hoeveel kost het product dat je wilt kopen?");
    if (Antwoord > product){
        console.log("U heeft genoeg geld!")
    } else {
        console.log("Helaas, te weinig geld")
    }
}

