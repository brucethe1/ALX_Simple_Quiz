function checkAnswer (){
    const solution='4';
    const userAnswer= document.querySelector('input[name="quiz"]:checked').value;
  
    if(userAnswer== solution){
        const feedback=document.querySelector('#feedback');
        feedback.textContent="Correct! Well done.";

    }else{
        document.getElementById('feedback').textContent="That's incorrect. Try again!"
    }

}
document.getElementById('submit-answer').addEventListener('click',checkAnswer);