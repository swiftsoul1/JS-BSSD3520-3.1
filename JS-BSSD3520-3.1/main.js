'use strict';
let questions = [];
let answers = [];
let choices = [[]];
let CHOICE_CLASS = ""
let survey = "";


const createListeners = () =>{
        let surveyButtons = document.getElementsByClassName("survey");
        for(let k = 0; k<surveyButtons.length;k++)
            surveyButtons[k].addEventListener("click", () => {
                switch(surveyButtons[k].id){
                    case "Hacker-survey":
                        survey = "hack"
                        questions = ["Which is the best pet name?", "Which is the best street name?", "Which is the best programming language?"];
                        choices = [["Taz", "Boris", "Tom"], ["Westerfeld", "Edith", "Central"], ["JavaScript", "Java", "LUA"]];
                        answers = [];
                        CHOICE_CLASS = "survey";
                        clearChoices();
                        createSurvey();
                        break;
                    case "User-survey":
                        survey = "user"
                        questions = ["How would you describe your mood?", "Which is the best fruit?", "What is your gender?"];
                        choices = [["Good", "Bad", "Indifferent"], ["Bananna", "Apple", "Orange"], ["Boy", "Girl"]];
                        answers = [];
                        CHOICE_CLASS = "survey";
                        clearChoices();
                        createSurvey();
                        break;  
                    case "Larper-survey":
                        survey = "larp"
                        questions = ["Which would you rather fight?", "Which would you most likely have aroumd your house?", "Which would you most likely have around your house?", "Pick a fluid."];
                        choices = [["Demon", "Dragon", "Goblin"], ["Hammer", "Stout", "Anvil"], ["Blood", "Ale", "Bile"]];
                        answers = [];
                        CHOICE_CLASS = "survey";
                        clearChoices();
                        createSurvey();
                        break; 
                }    
        });
}
const createSurvey = () =>{
    for(var i = 0; i < questions.length;i++){
        let para = document.createElement("p");
            para.textContent = questions[i];
            para.className = "btn"+i;
        CHOICE_CLASS = i;
        document.getElementById("content").append(para);
        for(var j = 0; j < choices[i].length; j++){
            let btn = document.createElement("button");
                btn.innerHTML = choices[i][j];
                btn.className = "btn"+i;
                btn.addEventListener('click', buttonClicked);
            document.getElementById("content").append(btn);
        }
    }
    let btn = document.createElement("button");
        btn.innerHTML = "--Finish--";
        btn.className = "finish";
        btn.addEventListener('click', FinishSurvey);
        document.getElementById("content").append(btn);
}

const FinishSurvey = () =>{
    CHOICE_CLASS = 'finish';
    clearChoices();
    let para = document.createElement("div");
        para.className = "finish";
    switch(survey){
        case "hack":
            para.textContent = "Oh, you must be infamous " + answers[2] + " hacker " + answers[0] + ' ' + answers[1];
            break;
        case "user":
            para.textContent = "your username should be :" + answers[0] + answers[1] d + answers[2];
            break;
        case "larp":
            para.textContent = "Oh, you must be " + answers[0] + answers[1] + ' Slayer of ' + answers[2];
            break;
        
    }
    document.getElementById("content").append(para);
    let btn = document.createElement("button");
        btn.innerHTML = "Home";
        btn.className = "finish";
        btn.addEventListener('click', createHome);
        document.getElementById("content").append(btn);
    
}

const createHome = () => {
    clearChoices();
    
    let options = ["Hacker", "User", "Larper"];
    let btn = document.createElement("button");
    for(int i = 0; i> options; i++){
            btn.innerHTML = "Start "options[i]+ "Survey";
            btn.className = "survey";
            btn.id = options[i]+'-survey';
            document.getElementById("content").append(btn);
    }    
    btn = document.createElement("button");
        btn.innerHTML = "Start User Survey";
        btn.className = "survey";
        btn.id = 'user-survey';
        document.getElementById("content").append(btn);
    btn = document.createElement("button");
        btn.innerHTML = "Start Larper Survey";
        btn.className = "survey";
        btn.id = 'larp-survey';
        document.getElementById("content").append(btn);
    createListeners();
    
}

const buttonClicked = () =>{
    CHOICE_CLASS = event.path[0].className;
    answers.push(event.path[0].textContent);
    clearChoices();
}

const clearChoices = () =>{
    let buttons = document.getElementsByClassName(CHOICE_CLASS);
    while(buttons.length > 0){
        buttons[0].remove();
    }
}



document.addEventListener("DOMContentLoaded", createHome);