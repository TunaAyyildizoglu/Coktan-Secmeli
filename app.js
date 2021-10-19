const trueAnswerDiv = document.getElementById("trueAnswer");
const falseAnswerDiv = document.getElementById("falseAnswer");
const answerButton = document.getElementById("answerButton");

const correctAnswer = 2;


function answer()
{
    selectedAnswer = document.querySelector("input[name=answerSelection]:checked");

    answerButton.style.visibility = "hidden";

    if(selectedAnswer)
    {
        if(correctAnswer == selectedAnswer.value)
        {
            trueAnswerDiv.innerHTML = "Doğru, Cevap " + correctAnswer;
            trueAnswerDiv.style.visibility = "visible";
            return;
        }
    }

    falseAnswerDiv.innerHTML = "Maalesef cevabınız yanlış! Cevabınız :  " + correctAnswer + " " + "olmalıydı";
    falseAnswerDiv.style.visibility = "visible";
}
