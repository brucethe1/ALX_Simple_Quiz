function checkAnswer(){
 const correctAnswer='4';
  const userAnswer=document.querySelector('input[name="quiz"]:checked').value;
   if (userAnswer === correctAnswer){
     const feedback=document.querySelector('#feedback');
    feedback.textContent="Correct! Well done.";
  }else{
    feedback.textContent="That's incorrect. Try again!"
  }
};
document.getElementById('submit-answer').addEventListener('click',checkAnswer);
