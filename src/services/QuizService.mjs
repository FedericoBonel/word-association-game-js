const getQuizes = () => {
    // TODO: This should be fetched from an api
    return [
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
};

export { getQuizes };
