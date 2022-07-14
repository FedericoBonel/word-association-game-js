const scoreContainer = document.querySelector("#score-display");
const questionsContainer = document.querySelector("#question-container");

const questions = [
    {
        quizWords: ["value", "estimate", "evaluate"],
        options: ["jury", "assess"],
        answerIndex: 1,
    },
    {
        quizWords: ["close", "near", "next"],
        options: ["trace", "adjacent"],
        answerIndex: 1,
    },
    {
        quizWords: ["foreign", "national", "ethnic"],
        options: ["mad", "exotic"],
        answerIndex: 1,
    },
    {
        quizWords: ["assume", "insight", "weather"],
        options: ["forecast", "sustainable"],
        answerIndex: 0,
    },
    {
        quizWords: ["fast", "quick", "prompt"],
        options: ["charity", "rapid"],
        answerIndex: 1,
    },
];

const populateQuestions = (questions, questionsContainer) => {
    questions.forEach((question) => {
        const questionCard = document.createElement("div");
        questionCard.className = "question-card";

        const logo = document.createElement("h1");
        logo.textContent = "✒";
        questionCard.append(logo);

        populateQuizWords(question.quizWords, questionCard);

        populateOptions(question.options, questionCard, question.answerIndex);

        questionsContainer.append(questionCard);
    });
};

const populateQuizWords = (quizWords, questionCard) => {
    quizWords.forEach((word) => {
        const wordElement = document.createElement("p");
        wordElement.textContent = word;

        questionCard.append(wordElement);
    });
};

const populateOptions = (options, questionCard, answerIndex) => {
    const optionsContainer = document.createElement("div");
    optionsContainer.className = "options-container";

    options.forEach((option, optionIndex) => {
        const optionButton = document.createElement("button");
        optionButton.id = `answer${optionIndex}`;
        optionButton.className = "option-btn";
        optionButton.textContent = option;

        optionButton.addEventListener("click", () =>
            verifyOutcome(
                optionButton,
                optionIndex,
                answerIndex,
                options,
                optionsContainer
            )
        );

        optionsContainer.append(optionButton);
    });

    questionCard.append(optionsContainer);
};

const verifyOutcome = (
    optionButton,
    optionIndex,
    answerIndex,
    options,
    optionsContainer
) => {
    optionButton.disabled = true;

    if (checkOption(optionIndex, answerIndex)) {
        optionButton.classList.add("right-answer");
    } else {
        optionButton.classList.add("wrong-answer");
    }

    options.forEach((ans, ansIndex) => {
        if (ansIndex !== optionIndex) {
            optionsContainer.querySelector(
                `#answer${ansIndex}`
            ).disabled = true;
        }
    });
};

const checkOption = (optionIndex, answerIndex) => {
    let correct = true;

    if (optionIndex === answerIndex) {
        score++;
    } else {
        score--;
        correct = false;
    }
    
    scoreContainer.textContent = score;

    return correct;
};

let score = 0;
scoreContainer.textContent = score;
populateQuestions(questions, questionsContainer);
