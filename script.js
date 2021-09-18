const quizDB = [
{
   question: "Q1: What is the captial of India ?",
   a: "Mumbai",
   b: "Dehradun",
   c: "Delhi",
   d: "Punjab",
   ans: "ans3"

},
{
    question: "Q2: What is the captial of Sikkim ?",
    a: "Gangtok",
    b: "Dehradun",
    c: "Mumbai",
    d: "Delhi",
    ans: "ans1"
 
 },
 {
    question: "Q3: What is the captial of Uttar Pradesh ?",
    a: "Mumbai",
    b: "Lucknow",
    c: "Delhi",
    d: "pune",
    ans: "ans2"
 
 },
 {
    question: "Q4: What is the captial of  Goa ?",
    a: "Banaras",
    b: "Dehradun",
    c: "Delhi",
    d: "Panji",
    ans: "ans4"
 
 },
 {
    question: "Q5: What is the captial of Uttarakhand ?",
    a: "Manipur",
    b: "Nepal",
    c: "Dehradun",
    d: "punjab",
    ans: "ans3"
 
 },
 {
    question: "Q6: What is the captial of Madhya Pradesh ?",
    a: "Bhopal",
    b: "Dehradun",
    c: "Delhi",
    d: "punjab",
    ans: "ans1"
 
 },
 {
    question: "Q7: What is the captial of Rajasthan ?",
    a: "Manipur",
    b: "Nepal",
    c: "Jaipur",
    d: "Delhi",
    ans: "ans3"
 
 },
 {
    question: "Q8: What is the captial of Mizoram  ?",
    a: "Manipur",
    b: "Telangana",
    c: "Delhi",
    d: "Aizawl",
    ans: "ans4"
 
 }
];
 
 const question = document.querySelector('.question');
 const option1 = document.querySelector('#option1');
 const option2 = document.querySelector('#option2');
 const option3 = document.querySelector('#option3');
 const option4 = document.querySelector('#option4');
 const submit = document.querySelector('#submit');
 const answers = document.querySelectorAll('.answer');
 const showScore = document.querySelector('#showScore');
 let questionCount = 0;
 let score = 0;
 const loadQuestion = () => {
     const questionList = quizDB[questionCount];
     question.innerText= questionList.question;

     option1.innerText= questionList.a;
     option2.innerText= questionList.b;
     option3.innerText= questionList.c;
     option4.innerText= questionList.d;

 }

 loadQuestion();
 const getCheckAnswer = () => {

    let answer;

    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }

    });
    return answer;
 };

 const deselectAll = () => {
   answers.forEach((curAnsElem) => curAnsElem.checked = false);

 }
 submit.addEventListener('click', () => {
     const checkedAnswer = getCheckAnswer();
     console.log(checkedAnswer);
 
     
     if(checkedAnswer=== quizDB[questionCount].ans){
         score++;
     };
     questionCount++;
     deselectAll();
     if(questionCount < quizDB.length){
         loadQuestion();
     }else{
        showScore.innerHTML =  `
           
       <h2> YOUR SCORE ${score}/${quizDB.length} </h2>
        <button class="btn" oncilck="location.reload()"> PLAY AGAIN 	&#128512;</button>
         `;
         showScore.classList.remove('scoreArea');
     }
    
 });
 
 
 
 
 
 
 
 
 





























