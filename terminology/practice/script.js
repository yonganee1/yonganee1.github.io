const questions = [
    {
        question: "ЗАДАНИЕ: выберите логическое выражение эквивалентное данному: ",
        expression: "A",
        rule: "Закон поглощения",
        options: [
            "A+1",
            "A↔B",
            "(¬A)*A",
            "A*(A+B)"
        ],
        correct_answer: "D",
        comment: "НЕВЕРНО! Попробуйте вспомнить закон поглощения."
    },
    {
        question: "ЗАДАНИЕ: выберите логическое выражение эквивалентное данному: ",
        expression: "0",
        rule: "Закон непротиворечия (вторая форма)",
        options: [
            "(¬A)+A",
            "¬(¬A)",
            "(¬A)*A",
            "A+0"
        ],
        correct_answer: "C",
        comment: "НЕВЕРНО! Попробуйте вспомнить закон непротиворечия."
    },
    {
        question: "ЗАДАНИЕ: выберите логическое выражение эквивалентное данному: ",
        expression: "A→B",
        rule: "Правило замены импликации",
        options: [
            "(¬A)+(¬B)",
            "(A→B)*(A→B)",
            "¬(A*B)",
            "(¬A)+B"
        ],
        correct_answer: "D",
        comment: "НЕВЕРНО! Попробуйте вспомнить правило замены импликации."
    },
    {
        question: "ЗАДАНИЕ: выберите логическое выражение эквивалентное данному: ",
        expression: "A↔B",
        rule: "Правило замены эквивалентности",
        options: [
            "(A+B)*((¬A)*(¬B))",
            "(A→B)*(A→B)",
            "(¬A)+(¬B)",
            "(A*B)→(A→B)"
        ],
        correct_answer: "B",
        comment: "НЕВЕРНО! Попробуйте вспомнить правило замены эквивалентности."
    },
    {
        question: "ЗАДАНИЕ: выберите логическое выражение эквивалентное данному: ",
        expression: "1",
        rule: "Свойства констант",
        options: [
            "A+1",
            "¬(¬A)",
            "(¬A)*A",
            "A→(¬A)"
        ],
        correct_answer: "A",
        comment: "НЕВЕРНО! Попробуйте вспомнить свойства констант."
    },
    {
        question: "ЗАДАНИЕ: выберите логическое выражение эквивалентное данному: ",
        expression: "B+A",
        rule: "Свойства констант",
        options: [
            "A+B",
            "A|B",
            "(¬B)→(¬A)",
            "A*(A+B)"
        ],
        correct_answer: "A",
        comment: "НЕВЕРНО! Попробуйте вспомнить свойства констант."
    },
    {
        question: "ЗАДАНИЕ: выберите логическое выражение эквивалентное данному: ",
        expression: "A→B",
        rule: "Правило замены импликации",
        options: [
            "(¬B)+A",
            "(¬B)→(¬A)",
            "¬(B→A)",
            "(A+B)→(A*B)"
        ],
        correct_answer: "B",
        comment: "НЕВЕРНО! Попробуйте вспомнить правило замены импликации."
    },
    {
        question: "ЗАДАНИЕ: выберите логическое выражение эквивалентное данному: ",
        expression: "(¬A)+(¬B)",
        rule: "Правило замены импликации",
        options: [
            "A|B",
            "(¬A)+(A*B)",
            "A*(A+B)",
            "B*A"
        ],
        correct_answer: "2",
        comment: "НЕВЕРНО! Попробуйте вспомнить правило замены импликации."
    },

];


// выбор случайного вопроса
const selectedQuestion = questions[Math.floor(Math.random() * questions.length)];

// отобразить вопрос и варианты ответа
document.getElementById("question").textContent = selectedQuestion.question + selectedQuestion.expression;
const optionsContainer = document.getElementById("quiz-form");
selectedQuestion.options.forEach((option, index) => {
    const image = new Image();
    image.src = 'photo_2024-04-01_14-02-17.jpg';
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = String.fromCharCode(49 + index); // варианты A, B, C, D
    input.id = `option-${index}`;
    const label = document.createElement("label");
    label.htmlFor = `option-${index}`;
    label.textContent = option;
    optionsContainer.appendChild(input);
    optionsContainer.appendChild(label);
    optionsContainer.appendChild(document.createElement("br"));
    optionsContainer.appendChild(image)
});

// функция для проверки ответа
function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const feedbackElement = document.getElementById("feedback");

    if (!selectedAnswer) {
        feedbackElement.innerText = "Пожалуйста, выберите ответ.";
        feedbackElement.style.color = "red";
        return;
    }

    if (selectedAnswer.value === selectedQuestion.correct_answer) {
        feedbackElement.innerText = `ВЕРНО! ${selectedQuestion.rule}: ${selectedQuestion.expression} = ${selectedQuestion.options[parseInt(selectedAnswer.value, 36)]}`;
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.innerText = `${selectedQuestion.comment}`;
        feedbackElement.style.color = "red";
    }
}
