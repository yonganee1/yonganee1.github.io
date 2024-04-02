const questions = [
    {
        question: "Выберите обозначение, которое НЕ соответствует инверсии: ",
        expression: "",
        rule: "inversion",
        options: [
            "¬A",
            "Ā",
            "not A",
            "-A"
        ],
        correct_answer: "4",
        comment: "НЕВЕРНО! Попробуйте повторить теорию.",
        right : "ВЕРНО! Инверсию можно обозначить как ¬A, Ā, not A."
    },
    {
        question: "Выберите обозначение, которое НЕ соответствует конъюнкции: ",
        expression: "",
        rule: "conjunction",
        options: [
            "A ∨ B",
            "A * B ",
            "A & B",
            "A and B"
        ],
        correct_answer: "1",
        comment: "НЕВЕРНО! Попробуйте повторить теорию.",
        right : "ВЕРНО! Конъюнкцию можно обозначить как A ⴷ B, A & B, A * B, A and B."
    },
    {
        question: "Выберите обозначение, которое НЕ соответствует дизъюнкции: ",
        expression: "",
        rule: "disjunction",
        options: [
            "A + B",
            "A ∨ B",
            "A / B",
            "A or B"
        ],
        correct_answer: "3",
        comment: "НЕВЕРНО! Попробуйте повторить теорию.",
        right : "ВЕРНО! Дизъюнкцию можно обозначить как A ∨ B, A || B, A + B, A or B."
    },
    {
        question: "Какое из этих названий НЕ относится к исключающему ИЛИ: ",
        expression: "",
        rule: "xor",
        options: [
            "смесительня дизъюнкция",
            "сложение по модулю два",
            "логическое вычитание",
            "инвертирование по маске"
        ],
        correct_answer: "1",
        comment: "НЕВЕРНО! Попробуйте повторить теорию.",
        right : "ВЕРНО! Исключающее ИЛИ, разделительная (строгая) дизъюнкция, сложение по модулю два, логическое вычитание, инвертирование по маске обозначают одну и ту же логическую операцию."
    },
    {
        question: "Выберите обозначение, которое НЕ соответствует исключающему ИЛИ: ",
        expression: "",
        rule: "xor",
        options: [
            "A ≠ B",
            "A xor B",
            "A ~ B",
            "A ⊕ B"
        ],
        correct_answer: "3",
        comment: "НЕВЕРНО! Попробуйте повторить теорию.",
        right : "ВЕРНО! Исключающее ИЛИ можно обозначать как A ⊕ B, A ^ B, A ≠ B, A xor B."
    },
    {
        question: "Выберите обозначение, которое соответствует импликации: ",
        expression: "",
        rule: "implication",
        options: [
            "A ~ B",
            "A <= B",
            "A > B",
            "A - B"
        ],
        correct_answer: "2",
        comment: "НЕВЕРНО! Попробуйте повторить теорию.",
        right : "ВЕРНО! Импликацию можно обозначать как A → B, A <= B."
    },
    {
        question: "Выберите обозначение, которое НЕ соответствует эквиваленции: ",
        expression: "",
        rule: "equality",
        options: [
            "A == B",
            "A ≡ B",
            "A ↔ B",
            "A >< B"
        ],
        correct_answer: "4",
        comment: "НЕВЕРНО! Попробуйте повторить теорию.",
        right : "ВЕРНО! Эквиваленцию можно обозначать как A == B, A ≡ B, A ↔ B."
    },
    {
        question: "С помощью каких операций программно реализуется штрих Шеффера: ",
        expression: "",
        rule: "sheffer",
        options: [
            "конъюнкция и инверсия",
            "конъюнкция и импликация",
            "инверсия и импликация",
            "эквиваленция и инверсия"
        ],
        correct_answer: "1",
        comment: "НЕВЕРНО! Попробуйте повторить теорию.",
        right : "ВЕРНО! Штрих Шеффера реализуют как A | B = ¬(A * B)."
    },
    {
        question: "С помощью каких операций программно реализуется cтрелка Пирса: ",
        expression: "",
        rule: "nor",
        options: [
            "дизъюнкция и инверсия",
            "строгая дизъюнкция и эквиваленция",
            "инверсия и логическое вычитание",
            "эквиваленция и сложение по модулю два"
        ],
        correct_answer: "1",
        comment: "НЕВЕРНО! Попробуйте повторить теорию.",
        right : "ВЕРНО! Стрелку Пирса реализуют как A ↓ B = ¬(A + B)."
    },
    {
        question: "При каком наборе значений переменных выражение будет истинным: A*B ",
        expression: "",
        rule: "conjunction",
        options: [
            "A=0, B=0",
            "A=0, B=1",
            "A=1, B=0",
            "A=1, B=1"
        ],
        correct_answer: "4",
        comment: "НЕВЕРНО! Попробуйте повторить теорию.",
        right : "ВЕРНО! Результат конъюнкции двух утверждений истинен только тогда, когда оба утверждения истинны."
    },
    {
        question: "При каком значении переменной выражение будет ложным: ¬A ",
        expression: "",
        rule: "inversion",
        options: [
            "A=0",
            "A=1",
        ],
        correct_answer: "2",
        comment: "НЕВЕРНО! Попробуйте повторить теорию.",
        right : "ВЕРНО! Если A истинно, то результат инверсии будет ложным."
    },
    {
        question: "При каком значении переменной выражение будет истинным: ¬A ",
        expression: "",
        rule: "inversion",
        options: [
            "A=0",
            "A=1",
        ],
        correct_answer: "1",
        comment: "НЕВЕРНО! Попробуйте повторить теорию.",
        right : "ВЕРНО! Если A ложно, то результат инверсии будет истинным."
    },
    {
        question: "Когда значение логического выражения будет ложным: A⊕B ",
        expression: "",
        rule: "xor",
        options: [
            "A≡B = 1",
            "A≡B = 0"
        ],
        correct_answer: "1",
        comment: "НЕВЕРНО! Попробуйте повторить теорию.",
        right : "ВЕРНО! Результат исключающего ИЛИ ложный тогда и только тогда, когда значения переменных одинаковы."
    },
    {
        question: "При каком значении переменной A выражение НЕ может быть истинным: A*B ",
        expression: "",
        rule: "conjunction",
        options: [
            "A = 1",
            "A = 0",
            "всегда истинно",
            "всегда ложно"
        ],
        correct_answer: "2",
        comment: "НЕВЕРНО! Попробуйте повторить теорию.",
        right : "ВЕРНО! Если значение хотя бы одной из переменных ложно, то результат конъюнкции тоже ложный."
    },
    {
        question: "Если B = 1, при каком значении переменной A выражение НЕ может быть истинным: A+B",
        expression: "",
        rule: "disjunction",
        options: [
            "A = 1",
            "A = 0",
            "всегда истинно",
            "всегда ложно"
        ],
        correct_answer: "3",
        comment: "НЕВЕРНО! Попробуйте повторить теорию.",
        right : "ВЕРНО! Если значение хотя бы одной из переменных истинно, то результат дизъюнкции тоже истинный."
    },
    {
        question: "Если B = 0, при каком значении переменной A выражение НЕ может быть истинным: A+B",
        expression: "",
        rule: "disjunction",
        options: [
            "A = 1",
            "A = 0",
            "всегда истинно",
            "всегда ложно"
        ],
        correct_answer: "2",
        comment: "НЕВЕРНО! Попробуйте повторить теорию.",
        right : "ВЕРНО! Если значения обоих переменных ложны, то результат дизъюнкции тоже ложный."
    },
];





// выбор случайного вопроса
const selectedQuestion = questions[Math.floor(Math.random() * questions.length)];

function getTheory(){
    window.open(`../theory/${selectedQuestion.rule}.html`)
}

// отобразить вопрос и варианты ответа
document.getElementById("question").textContent = selectedQuestion.question + selectedQuestion.expression;
const optionsContainer = document.getElementById("quiz-form");
selectedQuestion.options.forEach((option, index) => {
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = String.fromCharCode(49 + index); 
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
        feedbackElement.innerText = selectedQuestion.right;
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.innerText = selectedQuestion.comment;
        feedbackElement.style.color = "red";
    }
}
