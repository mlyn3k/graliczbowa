let number = Math.floor(Math.random() * 11);

function play() {
    let userNumber = document.getElementById("userNumber").value;
    let message;

    if (userNumber > number) {
        message = "Twój numer jest za duży"

    } else if (userNumber < number){
        message = "Twój numer jest za mały"

    } else {
        message = "Gratulacje, o tej liczbie myślałem"
    }
    document.getElementById("message").innerHTML = message;
}