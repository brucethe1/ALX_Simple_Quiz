function checkAnswer(){
 const solution='4';
  const answer =document.querySelector('input[name="quiz"]:checked').value;
  if(answer == solution){
     const feedback=document.querySelector('#feedback');
    feedback.textContent='correct well done!';
  }else{
    feedback.textContent="That's incorrect. Try again!"
  }
};
document.getElementById('submit-answer').addEventListener('click',checkAnswer);
