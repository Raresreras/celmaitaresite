var a1;
var a2;
var a3;
var a4;
var a5;

var b1;
var b2;
var b3;
var b4;
var b5;

var c1;
var c2;
var c3;
var c4;
var c5;

let counter;
let balance_value = 5000;

let balance = document.getElementById("pbalance");

function rand(max) {
    return Math.floor(Math.random() * max);
}

document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32      
    ) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;

        balance_value -= 1000

        a1 = rand(6);
        a2 = rand(6);
        a3 = rand(6);
        a4 = rand(6);
        a5 = rand(6);

        document.getElementById("img_a1").src = "images/" + String(a1) +".jpg"; 
        document.getElementById("img_a2").src = "images/" + String(a2) +".jpg"; 
        document.getElementById("img_a3").src = "images/" + String(a3) +".jpg"; 
        document.getElementById("img_a4").src = "images/" + String(a4) +".jpg"; 
        document.getElementById("img_a5").src = "images/" + String(a5) +".jpg"; 

        b1 = rand(6);
        b2 = rand(6);
        b3 = rand(6);
        b4 = rand(6);
        b5 = rand(6);

        document.getElementById("img_b1").src = "images/" + String(b1) +".jpg";
        document.getElementById("img_b2").src = "images/" + String(b2) +".jpg";
        document.getElementById("img_b3").src = "images/" + String(b3) +".jpg";
        document.getElementById("img_b4").src = "images/" + String(b4) +".jpg"; 
        document.getElementById("img_b5").src = "images/" + String(b5) +".jpg"; 

        c1 = rand(6);
        c2 = rand(6);
        c3 = rand(6);
        c4 = rand(6);
        c5 = rand(6);

        document.getElementById("img_c1").src = "images/" + String(c1) +".jpg"; 
        document.getElementById("img_c2").src = "images/" + String(c2) +".jpg"; 
        document.getElementById("img_c3").src = "images/" + String(c3) +".jpg"; 
        document.getElementById("img_c4").src = "images/" + String(c4) +".jpg"; 
        document.getElementById("img_c5").src = "images/" + String(c5) +".jpg"; 
    
        let list = [a1,a2,a3,a4,a5,b1,b2,b3,b4,b5,c1,c2,c3,c4,c5];
        let counter0 = 0;
        let counter1 = 0;
        let counter2 = 0;
        let counter3 = 0;
        let counter4 = 0;
        let counter5 = 0;   

        for (let i = 0; i < 15; i++){
             counter = list[i];
             switch(counter){
                case 0:
                    counter0 ++;
                    break;
                case 1:
                    counter1 ++;
                    break;
                case 2:
                    counter2 ++;
                    break;
                case 3:
                    counter3 ++;
                    break;
                case 4:
                    counter4 ++;
                    break;
                case 5:
                    counter5 ++;
                    break;
             }
        }

        document.getElementById("pstatus").innerHTML = " ";

        if (counter4 > 4){
            document.getElementById("pstatus").innerHTML += "Ai castigat un cazan <br>";
            balance_value += 8000;
        }

        if (counter0 > 3){
            document.getElementById("pstatus").innerHTML += "Ai promovat in liga 3 <br>";
            balance_value += 500;
        }

        if (counter1 > 4){
            document.getElementById("pstatus").innerHTML += "Ai devenit faraon <br>";
            balance_value += 2000;
        }

        if (counter2 > 2){
            document.getElementById("pstatus").innerHTML += "Ai salvat recolta de porumb <br>";
            balance_value += 50;
        }

        if (counter3 > 5){
            document.getElementById("pstatus").innerHTML += "Ai urmat obiceiul stramosesc din Vanatori <br>";
            balance_value += 7500;
        }

        if (counter5 > 6){
            document.getElementById("pstatus").innerHTML += "Ai devenit tirist <br>";
            balance_value += 15000;
        }

        document.getElementById("pbalance").innerHTML = "Balance: " + String(balance_value) + " lei";
    }
}