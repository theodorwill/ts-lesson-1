"use strict";
const getPassedExams = (examResults) => examResults.filter((examResult) => examResult.score > 50);
const examResults = [
    {
        studentId: 12,
        score: 75
    },
    {
        studentId: 15,
        score: 40
    },
    {
        studentId: 18,
        score: 90
    },
];
// const passedExams = getPassedExams(examResults);
console.log(getPassedExams(examResults));
