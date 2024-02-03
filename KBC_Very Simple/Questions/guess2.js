
var currentQuestion = 0;
var questions = [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "London", "Paris", "Madrid"],
        correctAnswer: "c"
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: "a"
      },
      {
        question: "What gas do plants primarily absorb from the atmosphere for photosynthesis?",
        options: [" Oxygen", " Nitrogen", "Carbon Dioxide", " Hydrogen"],
        correctAnswer: "c"
      },
      {
        question: "Who wrote the play Romeo and Juliet?",
        options: ["Charles Dickens", "William Shakespeare", " Jane Austen", "Mark Twain"],
        correctAnswer: "b"
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: "a"
      },
      {
        question: "What is the chemical symbol for gold?",
        options: ["Ag", "Au", "Gu", "Gi"],
        correctAnswer: "b"
      },
      {
        question: "Which famous scientist developed the theory of relativity?",
        options: ["Isaac Newton", " Galileo Galilei", "Albert Einstein", " Nikola Tesla"],
        correctAnswer: "c"
      },
      {
        question: "What is the largest mammal on Earth?",
        options: ["African Elephant", "Blue Whale", " Giraffe", " Hippopotamus"],
        correctAnswer: "b"
      },
      {
        question: "Which of the following is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "b"
      },
      {
        question: "What is the chemical symbol for water?",
        options: ["wa", "Wo", "H20", "Hy"],
        correctAnswer: "c"
      },
      {
        question: "Which famous scientist formulated the laws of motion and universal gravitation?",
        options: ["Albert Einstein", " Isaac Newton", "Marie Curie", "Stephen Hawking"],
        correctAnswer: "b"
      },
      
    ];


function loadQuestion(index) {
  var questionContainer = document.getElementById('question-container');
      var questionElement = document.getElementById('question');
      var optionAElement = document.getElementById('optionA');
      var optionBElement = document.getElementById('optionB');
      var optionCElement = document.getElementById('optionC');
      var optionDElement = document.getElementById('optionD');
      
      questionElement.textContent = questions[index].question;
      optionAElement.textContent = questions[index].options[0];
      optionBElement.textContent = questions[index].options[1];
      optionCElement.textContent = questions[index].options[2];
      optionDElement.textContent = questions[index].options[3];
}


function playCorrectAudio() {
    var audio = document.getElementById("correctAudio");
    audio.play();
}
function playWrongAudio() {
    var audio = document.getElementById("IncorrectAudio");
    audio.play();
}


function selectAnswer(option) {
      selectedOption = option;
    }
var score = "0";
function checkAnswer() {
 
    if (selectedOption == questions[currentQuestion].correctAnswer) 
    {
      playCorrectAudio();
      score++;
      console.log(score);
      alert("Correct!");
      if(score == "0" )
{
  PrizeText = " Total Prize = 0";
}
else if( score == "1")
{
  PrizeText = " Total Prize = 100";
}
else if( score == "2")
{
  PrizeText = " Total Prize = 2000";
}
else if( score == "3")
{
  PrizeText = " Total Prize = 3000";
}
else if( score == "4")
{
  PrizeText = " Total Prize = 5000";
}
else if( score == "5")
{
  PrizeText = " Total Prize = 10,000";
}
else if( score == "6")
{
  PrizeText = " Total Prize = 20,000";
}
else if( score == "7")
{
  PrizeText = " Total Prize = 40,000";
}
else if( score == "8")
{
  PrizeText = " Total Prize = 80,000";
}
else if( score == "9")
{
  PrizeText = " Total Prize = 1,60,000";
}
else if( score == "10")
{
  PrizeText = " Total Prize = 3,20,000";
}
else if( score == "11")
{
  PrizeText = " Total Prize = 6,40,000";
}
else if( score == "12")
{
  PrizeText = " Total Prize = 12,50,000";
}
else if(score == "13" )
{
  PrizeText = " Total Prize = 25,00,000" ;
}
else if(score  == "14")
{
  PrizeText = " Total Prize = 50,00,000";
}
else
{
  PrizeText = "None";
}
Prize.textContent = PrizeText;
    } 
    else 
    {
      playWrongAudio();
      alert("Incorrect. Game over.");
      window.location.href = 'End.html';
      document.getElementById('question-container').innerHTML = "<p>Game over</p>";
      return;
    }
  
}

function nextQuestion()
 {
  selectedOption = null;
  currentQuestion++;
  if (currentQuestion < questions.length)
   {
    loadQuestion(currentQuestion);
  } 
  else 
  {
    document.getElementById('question-container').innerHTML = alert("Quiz completed!");
     window.location.href = 'End.html';
  }
}
loadQuestion(currentQuestion);
var Prize = document.getElementById("Prize");
var PrizeText;

// Load the first question

