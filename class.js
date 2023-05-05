//1 Create a Car class or function constructor that has the following properties:
// a. make (string): The make of the car, e.g., "Toyota".
// b. model (string): The model of the car, e.g., "Camry".
// c. year (number): The year the car was manufactured, e.g., 2020.
// d. isAvailable (boolean): Indicates if the car is currently available for rent.

// The Car class or function constructor should also have a method called
// toggleAvailability that changes the isAvailable property to its opposite value (true to
// false, false to true)


class Car{
    constructor(make,model,year,isAvailable){
        this.make=make;
        this.model=model;
        this.year=year;
        this.isAvailable=isAvailable;
    }
}
function toggleAvailability(car){
    if (car.isAvailable==true){
        return car.isAvailable=false
    }
    else {
        return car.isAvailable=true
    }
}
console.log("q1",toggleAvailability(new Car("Toyota","Camry",2020,true)));


//2) Create a Rental class or function constructor that has the following properties:
// car (Car object): The car that has been rented.
// renterName (string): The name of the person who rented the car.
// rentalStartDate (Date object): The start date of the rental period.
// rentalEndDate (Date object): The end date of the rental period.
// The Rental class or function constructor should also have a method called
// calculateRentalDuration that returns the rental duration in days.

class Rental {
    constructor(Car, renterName, rentalStartDate, rentalEndDate) {
      this.Car = Car;
      this.renterName = renterName;
      this.rentalStartDate = rentalStartDate;
      this.rentalEndDate = rentalEndDate;
    }
  
    calculateRentalDuration() {
      const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
      const start = this.rentalStartDate.getTime();
      const end = this.rentalEndDate.getTime();
      const duration = Math.round(Math.abs((end - start) / oneDay));
      return duration;
    }
  }
  console.log("q2",new Rental("Toyota","Natalie",[4,5,2021],[7,7,2021]));

//Create an instance of the Car class or function constructor for a car in the
// inventory. Then, create an instance of the Rental class or function constructor for
// a rental involving the car you created. Finally, calculate the rental duration using
// the calculateRentalDuration method.



//You are building a simple quiz app that contains multiple-choice questions. Your task is
// to create two JavaScript classes: Question and Quiz. The Question class will represent
// individual questions, and the Quiz class will manage a collection of questions and the
// user's progress.
// 1. Create a Question class with the following properties:
// ● text(string): The text of the question.
// ● options(array): An array containing the multiple-choice options.
// ● correctAnswer(string): The correct answer to the question.
// The Question class should also have a method called checkAnswer that takes a
// user's answer as a parameter and returns true if the answer is correct and false
// otherwise.


class Question {
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }
  
    checkAnswer(userAnswer) {
      return userAnswer === this.answer;
    }
  }
let question=new Question("What is your class?",["A","B","C"],"B");
console.log("q3",question.checkAnswer("C"));


// Create a Quiz class with the following properties:
// questions(array):An array of Question objects.
// ● currentQuestionIndex(number): The index of the current question in the
// questions array.
// ● score(number): The user’s current score.
// The Quiz class should have the following methods:
// ● addQuestion: Takes a Question object as a parameter and adds it to the
// questions array.
// ● nextQuestion: Advances to the next question in the quiz by incrementing the
// currentQuestionIndex.
// ● submitAnswer: Takes a user's answer as a parameter, checks if the answer is
// correct using the checkAnswer method of the Question class, and updates the
// score if the answer is correct.

class Quiz{
    constructor(questions, currentQuestionIndex, score, addQuestion, nextQuestion) {
        this.questions=questions;
        this.currentQuestionIndex=currentQuestionIndex;
        this.score=score;
        this.addQuestion=addQuestion;
        this.nextQuestion=nextQuestion;
    }
    addQuestion(){
        return this.questions.push(question)
    }
    nextQuestion(){
        return this.currentQuestionIndex++
    }
    submitAnswer(answer){
        let currentQuestion = this.questions[this.currentQuestionIndex];
        if (currentQuestion.this.questions(answer)){
            return this.score++
        }
    }
}

const myQuiz = new Quiz();
myQuiz.addQuestion("What is the size of an apple?");
myQuiz.addQuestion("What is the tallest mountain in the Kenya?");
myQuiz.nextQuestion();
myQuiz.submitAnswer("25g");
myQuiz.nextQuestion();
myQuiz.submitAnswer("Mount Kenya");

console.log("q4",myQuiz.score);












