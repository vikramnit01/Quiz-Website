const questionBank=[
    {
        question:" www standas for?",
        a: "world wide web",
        b: "world world wide",
        c: "world wibe web",
        d: "world wibe web",
        ans: "ans1"
    },{
        question:" Which of the following languages is more suited to a structured program?",
        a: "PL/1",
        b: "FORTRAN",
        c: "BASIC",
        d: "PASCAL",
        ans: "ans4"
    },{
        question:" The brain of any computer system is",
        a: "ALU",
        b: "Memory",
        c: "CPU",
        d: "Control unit",
        ans: "ans3"
    },{
        question:" The binary system uses powers of",
        a: "2",
        b: "10",
        c: "8",
        d: "16",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer')
const showScore= document.getElementById('showScore')

let questionNuber=0;
let score=0;  //dont use const else it wont be increment

const loadQuestion = ()=>{
   const questionList = questionBank[questionNuber];
   console.log(questionList);
   question.innerHTML = "Q"+(questionNuber+1)+questionList.question;
   option1.innerHTML = questionList.a;
   option2.innerHTML = questionList.b;
   option3.innerHTML = questionList.c;
   option4.innerHTML = questionList.d;

}
loadQuestion();

const getCorrectAns = () => {
    let ans;
    answers.forEach((currentAns)=>{
        if(currentAns.checked){
            ans=currentAns.id;
        }
    })
    return ans;

};
submit.addEventListener('click',()=>{
    const checkAnswer = getCorrectAns();
    console.log(checkAnswer);
   if(checkAnswer==questionBank[questionNuber].ans){
       score++;
   }
   questionNuber++;
  if(questionNuber < questionBank.length){
    loadQuestion();
  } else{
     showScore.innerHTML=` <h3>You Scored ${score} out of ${questionBank.length} </h3>
     <button id="btn" onClick="location.reload()">Play Again</button>
     `;
     
     showScore.classList.remove('showArea');
    }
})



