import topicColors from "../../helpers/topicColors";

export function suffleQuestions(questions, quantity){
    const categories = Object.keys(topicColors)
    const questionsToReturn = []
    
    categories.forEach(category =>{
        const questionsByCategory =questions.filter(question => question.topic === category)
        const randonNumber = Math.abs((Math.random()*(questionsByCategory.length) -2).toFixed())
    
        questionsToReturn.push(questionsByCategory[(randonNumber +0).toFixed()]);
    })


    return questionsToReturn

}