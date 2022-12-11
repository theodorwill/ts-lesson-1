const getPassedExams = (examResults: ExamResult[]): object => examResults.filter((examResult: ExamResult) => examResult.score > 50);

interface ExamResult{
    studentId: number;
    score: number;
}

const examResults: ExamResult[] = [
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
]

// const passedExams = getPassedExams(examResults);



console.log(getPassedExams(examResults)) 