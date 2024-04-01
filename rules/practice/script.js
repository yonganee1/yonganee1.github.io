const questions = [
    
    
    
    
    // свойства констант
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
        correct_answer: "1",
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
        correct_answer: "1",
        comment: "НЕВЕРНО! Попробуйте вспомнить свойства констант."
    },
    {
        question: "ЗАДАНИЕ: выберите логическое выражение эквивалентное данному: ",
        expression: "A",
        rule: "Свойства констант",
        options: [
            "A+0",
            "A+1",
            "(¬A)+A",
            "(¬A)*A"
        ],
        correct_answer: "1",
        comment: "НЕВЕРНО! Попробуйте вспомнить свойства констант."
    },
    {
        question: "ЗАДАНИЕ: выберите логическое выражение эквивалентное данному: ",
        expression: "0",
        rule: "Свойства констант",
        options: [
            "¬(¬A)",
            "A*0",
            "A+0",
            "(¬A)+A"
        ],
        correct_answer: "2",
        comment: "НЕВЕРНО! Попробуйте вспомнить свойства констант."
    },
    {
        question: "ЗАДАНИЕ: выберите логическое выражение эквивалентное данному: ",
        expression: "0",
        rule: "Свойства констант",
        options: [
            "¬(¬A)",
            "A*0",
            "A+0",
            "(¬A)+A"
        ],
        correct_answer: "2",
        comment: "НЕВЕРНО! Попробуйте вспомнить свойства констант."
    },
    {
        question: "ЗАДАНИЕ: выберите логическое выражение эквивалентное данному: ",
        expression: "A",
        rule: "Свойства констант",
        options: [
            "¬(¬A)+1",
            "A*1",
            "(¬A)+A",
            "A+1"
        ],
        correct_answer: "2",
        comment: "НЕВЕРНО! Попробуйте вспомнить свойства констант."
    },

    // правило замены импликации

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
        correct_answer: "2",
        comment: "НЕВЕРНО! Попробуйте вспомнить правило замены импликации."
    },
    {
        question: "ЗАДАНИЕ: выберите логическое выражение эквивалентное данному: ",
        expression: "A→B",
        rule: "Правило замены импликации",
        options: [
            "(¬A)+(¬B)",
            "(¬A)*(¬B)",
            "(¬A)+B",
            "(¬A)→(¬B)"
        ],
        correct_answer: "3",
        comment: "НЕВЕРНО! Попробуйте вспомнить правило замены импликации."
    },
    {
        question: "ЗАДАНИЕ: выберите логическое выражение эквивалентное данному: ",
        expression: "(¬B)→(¬A)",
        rule: "Правило замены импликации",
        options: [
            "A→B",
            "(¬A)*(¬B)",
            "A↔B",
            "(¬A)→(¬B)"
        ],
        correct_answer: "1",
        comment: "НЕВЕРНО! Попробуйте вспомнить правило замены импликации."
    },


    // закон де Моргана
    
    {
        question: "ЗАДАНИЕ: выберите логическое выражение эквивалентное данному: ",
        expression: "¬(A*B)",
        rule: "Закон де Моргана",
        options: [
            "A+(A*B)",
            "(¬B)→(¬A)",
            "(¬A)+(¬B)",
            "¬(A+B)"
        ],
        correct_answer: "3",
        comment: "НЕВЕРНО! Попробуйте вспомнить закон де Моргана."
    },
    {
        question: "ЗАДАНИЕ: выберите логическое выражение эквивалентное данному: ",
        expression: "(¬A)+(¬B)",
        rule: "Следствие из закона де Моргана и правила замены штриха Шеффера",
        options: [
            "(¬A)*(¬B)",
            "A|B",
            "(¬B)→(¬A)",
            "¬(A+B)"
        ],
        correct_answer: "2",
        comment: "НЕВЕРНО! Попробуйте вспомнить закон де Моргана и правило замены штриха Шеффера."
    },
    {
        question: "ЗАДАНИЕ: выберите логическое выражение эквивалентное данному: ",
        expression: "(¬A)*(¬B)",
        rule: "Закон де Моргана",
        options: [
            "¬(A+B)",
            "¬(A*B)",
            "¬(A*B)→(¬A)",
            "(A→B)*(B→A)"
        ],
        correct_answer: "1",
        comment: "НЕВЕРНО! Попробуйте вспомнить закон де Моргана."
    },
    {
        question: "ЗАДАНИЕ: выберите логическое выражение эквивалентное данному: ",
        expression: "¬(A+B)",
        rule: "Закон де Моргана",
        options: [
            "(¬A)+(¬B)",
            "¬((¬A)*B)",
            "(¬A)*(¬B)",
            "(A→B)*(B→A)"
        ],
        correct_answer: "3",
        comment: "НЕВЕРНО! Попробуйте вспомнить закон де Моргана."
    },

    // закон поглощения
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
        correct_answer: "4",
        comment: "НЕВЕРНО! Попробуйте вспомнить закон поглощения."
    },
    {
        question: "ЗАДАНИЕ: выберите логическое выражение эквивалентное данному: ",
        expression: "A",
        rule: "Закон поглощения",
        options: [
            "(¬A)*(¬B)",
            "A+(A*B)",
            "(¬A)*A",
            "A+(¬B)"
        ],
        correct_answer: "2",
        comment: "НЕВЕРНО! Попробуйте вспомнить закон поглощения."
    },
    //Закон дистрибутивности
    {
        question: "ЗАДАНИЕ: выберите логическое выражение эквивалентное данному: ",
        expression: "A+(B*C)",
        rule: "Закон дистрибутивности",
        options: [
            "(A+B)*(A+C)",
            "(A+B)+C",
            "(A*B)+(A*C)",
            "(A→B)*(A→C)"
        ],
        correct_answer: "1",
        comment: "НЕВЕРНО! Попробуйте вспомнить закон дистрибутивности."
    },
    {
        question: "ЗАДАНИЕ: выберите логическое выражение эквивалентное данному: ",
        expression: "A*(B+C)",
        rule: "Закон дистрибутивности",
        options: [
            "(A*B)+(A*C)",
            "(A*B)*C",
            "(A+B)*(A+C)",
            "(A→B)+(A→C)"
        ],
        correct_answer: "1",
        comment: "НЕВЕРНО! Попробуйте вспомнить закон дистрибутивности."
    },
    //   Вторая форма закона непротиворечия
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
        correct_answer: "3",
        comment: "НЕВЕРНО! Попробуйте вспомнить закон непротиворечия."
    },
    {
        question: "ЗАДАНИЕ: выберите логическое выражение эквивалентное данному: ",
        expression: "(¬A)*A",
        rule: "Закон непротиворечия (вторая форма)",
        options: [
            "A",
            "1",
            "0",
            "¬A"
        ],
        correct_answer: "3",
        comment: "НЕВЕРНО! Попробуйте вспомнить закон непротиворечия."
    },
    // Правило замены эквивалентности
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
        correct_answer: "2",
        comment: "НЕВЕРНО! Попробуйте вспомнить правило замены эквивалентности."
    },
    {
        question: "ЗАДАНИЕ: выберите логическое выражение эквивалентное данному: ",
        expression: "A↔B",
        rule: "Правило замены эквивалентности",
        options: [
            "(A*(¬B))+((¬A)*B)",
            "(A→B)*(B→A)",
            "(A*B)+((¬A)*(¬B))",
            "((¬A)+B)*(A+(¬B))"
        ],
        correct_answer: "3",
        comment: "НЕВЕРНО! Попробуйте вспомнить правило замены эквивалентности."
    },
    {
        question: "ЗАДАНИЕ: выберите логическое выражение эквивалентное данному: ",
        expression: "A↔B",
        rule: "Правило замены эквивалентности",
        options: [
            "((¬A)→(¬B))*(A+B)",
            "(A+B)*((¬A)*(¬B))",
            "(A*B)+((¬A)*(¬B))",
            "(A+(¬B))*((¬A)+B)"
        ],
        correct_answer: "4",
        comment: "НЕВЕРНО! Попробуйте вспомнить правило замены эквивалентности."
    },
    // свойства импликации
    {
        question: "ЗАДАНИЕ: выберите логическое выражение эквивалентное данному: ",
        expression: "A→(B*C)",
        rule: "Cвойства импликации",
        options: [
            "(A*B)+(A*C)",
            "(A→B)*(A→C)",
            "(A*B)*C",
            "A"
        ],
        correct_answer: "2",
        comment: "НЕВЕРНО! Попробуйте вспомнить правило свойства импликации."
    },
    {
        question: "ЗАДАНИЕ: выберите логическое выражение эквивалентное данному: ",
        expression: "A→(B+C)",
        rule: "Cвойства импликации",
        options: [
            "(A*B)+(A*C)",
            "(A+(¬B))*((¬A)+C)",
            "(A→B)+(A→C)",
            "¬(A*B)+C"
        ],
        correct_answer: "3",
        comment: "НЕВЕРНО! Попробуйте вспомнить правило свойства импликации."
    },

    // упрощение логических выражений
    
    {
        question: "ЗАДАНИЕ: упростите данное логическое выражение: ",
        expression: "(A*B)+(A*(¬B))",
        rule: "",
        options: [
            "1",
            "A*B",
            "A",
            "0"
        ],
        correct_answer: "3",
        comment: "НЕВЕРНО! Попробуйте вспомнить закон дистрибутивности."
    },
    {
        question: "ЗАДАНИЕ: упростите данное логическое выражение: ",
        expression: "¬(A+B)+(¬(A+(¬B)))",
        rule: "",
        options: [
            "А",
            "A+B",
            "B",
            "¬A"
        ],
        correct_answer: "3",
        comment: "НЕВЕРНО! Попробуйте вспомнить закон де Моргана."
    },
    {
        question: "ЗАДАНИЕ: упростите данное логическое выражение: ",
        expression: "(¬A)*B+(¬(A+B))+A",
        rule: "",
        options: [
            "1",
            "A+B",
            "¬(A+B)",
            "B"
        ],
        correct_answer: "1",
        comment: "НЕВЕРНО! Проверьте свое решение."
    },
    {
        question: "ЗАДАНИЕ: упростите данное логическое выражение: ",
        expression: "(¬A)*B+(¬(A+B))+A",
        rule: "",
        options: [
            "1",
            "A+B",
            "¬(A+B)",
            "B"
        ],
        correct_answer: "1",
        comment: "НЕВЕРНО! Проверьте свое решение."
    },
    {
        question: "ЗАДАНИЕ: упростите данное логическое выражение: ",
        expression: "¬((¬A)*(¬B)+(¬(A)*B)))",
        rule: "",
        options: [
            "А",
            "B",
            "1",
            "A*(¬B)"
        ],
        correct_answer: "1",
        comment: "НЕВЕРНО! Проверьте свое решение."
    },
    {
        question: "ЗАДАНИЕ: упростите данное логическое выражение: ",
        expression: "¬((¬A)*(¬B)+(¬(A)*B)))",
        rule: "",
        options: [
            "А",
            "B",
            "1",
            "A*(¬B)"
        ],
        correct_answer: "1",
        comment: "НЕВЕРНО! Проверьте свое решение."
    },
];


// выбор случайного вопроса
const selectedQuestion = questions[Math.floor(Math.random() * questions.length)];

// отобразить вопрос и варианты ответа
document.getElementById("question").textContent = selectedQuestion.question +selectedQuestion.expression;
const optionsContainer = document.getElementById("quiz-form");
selectedQuestion.options.forEach((option, index) => {
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
        feedbackElement.innerText = `ВЕРНО! ${selectedQuestion.rule}: ${selectedQuestion.expression} = ${selectedQuestion.options[parseInt(selectedAnswer.value)-1]}`;
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.innerText = `${selectedQuestion.comment}`;
        feedbackElement.style.color = "red";
    }
}
