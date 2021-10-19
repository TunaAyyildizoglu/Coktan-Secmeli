
//fonksiyonlarda kullanabilmek için gerekli tanımlamaları yapıyoruz
const trueAnswerDiv = document.getElementById("trueAnswer");
const falseAnswerDiv = document.getElementById("falseAnswer");
const answerButton = document.getElementById("answerButton");

// doğru cevabı 2 olarak kabul ediyoruz
const correctAnswer = 2;


function answer()
{
    selectedAnswer = document.querySelector("input[name=answerSelection]:checked"); // seçenek seçildi ise selectedAnswer'a seçenek ataması yaptık

    answerButton.style.visibility = "hidden"; //seçenek seçilip cevap ver'e tıklandıktan sonra cevap butonunu gizliyoruz 

    if(selectedAnswer)
    {
        if(correctAnswer == selectedAnswer.value)// cevabımız doğru mu diye kontrolünü yapıyoruz
        {
            trueAnswerDiv.innerHTML = "Doğru, Cevap " + correctAnswer;//eğer cevabımız doğru ise innerHTML ile gerekli gösterimi ekranda gösteriyoruz
            trueAnswerDiv.style.visibility = "visible";//cevap doğru olduğu için trueAnswer div'imiz görünür oluyor.
            return;
        }
    }
    // cevabımız yanlış ise ekranda gereken gösterim yapılıyor ve html kısmımıza gereken eklemeyi yapıyoruz
    falseAnswerDiv.innerHTML = "Maalesef cevabınız yanlış! Cevabınız :  " + correctAnswer + " " + "olmalıydı";
    falseAnswerDiv.style.visibility = "visible";// cevap yanlış olduğu için gereken uyarı div'imiz görünür oluyor
}
