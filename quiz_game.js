question_turn="player1";
answer_turn="player2";
player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");
document.getElementById("player1_name").innerHTML= player1_name + ":" ;
document.getElementById("player2_name").innerHTML= player2_name + ":" ;
player1_score=0;
player2_score=0;
document.getElementById("p1_score").innerHTML=player1_score;
document.getElementById("p2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question turn - " + player1_name;
document.getElementById("player_answer").innerHTML="Answer turn - " + player2_name;
function send() {
    number1=parseInt(document.getElementById("number1").value);
    number2=parseInt(document.getElementById("number2").value);
    actual_answer=number1 * number2;
    console.log(actual_answer);
    question_number="<h4>" + number1 + "X" + number2 + "</h4>";
    input_box="<br>Answer : <input id='input_check_box' type='text'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_number + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").innerHTML="";
    document.getElementById("number2").innerHTML="";
}

function check() {
    get_answer=parseInt(document.getElementById("input_check_box").value);
    if (get_answer==actual_answer) {
        if (answer_turn=="player_1") {
            player1_score=player1_score + 1;
            document.getElementById("p1_score").innerHTML=player1_score;
        }
        else {
            player2_score=player2_score + 1;
            document.getElementById("p2_score").innerHTML=player2_score;
        }
    }

    if (question_turn=="player1") {
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question turn - " + player2_name;
        console.log("question turn is "+ player2_name);
        }
        else{
            question_turn="player1";
            document.getElementById("player_question").innerHTML="Question turn - " + player1_name;
        console.log("question turn is "+ player1_name);
        }

        if (answer_turn=="player1") {
            answer_turn="player2";
            document.getElementById("player_answer").innerHTML="Answer turn - " + player2_name;
            
            }
            else{
                answer_turn="player1";
                document.getElementById("player_answer").innerHTML="Answer turn - " + player1_name;
            }
}