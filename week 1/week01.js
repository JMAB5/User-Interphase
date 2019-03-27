// JavaScript source code
alert("hellow week 1");

function rolldice() {
    let mynumber = parseInt( document.getElementById("mynumber").value);
    let name = document.getElementById("name1").value;
    let guess1 = document.getElementById("guess1").value;

    let myguesses = {};
    myguesses[name1] = guess1;

    myguesses['John'] =33;
    myguesses['James'] = 5;

    //console.log(myguesses)

    for (var key in myguesses) {
        if (myguesses.hasOwnProperty(key))
            console.log("key: " + key + " guess:" + myguesses[key]);
    }

    console.log("your number is : " + mynumber);
    document.getElementById("results").innerHTML = "Results Coming Soon";

    for (i = 1; i < 101; i++)
    {
        let rand = Math.random() * 100;
        rand = Math.floor(rand);

        if (rand === mynumber) {
            //its a match!

            document.getElementById("results").innerHTML += "<span class = 'success'> You win:" + rand + "</span><br>";
        } else {
            document.getElementById("results").innerHTML += rand + "<br>";
        }
        var person = prompt("Please enter your name");
    }
    //allow 5 people to enter their names and guesses 
    //check each for wins with a loop
    //(new) Display the winners names and numbers at the top of the page
}
