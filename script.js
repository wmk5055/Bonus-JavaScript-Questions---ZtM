//Q1
const arrayQuestion = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

//Q1 Bonus
const arrQuestion2 = ["1", 2, "4", "591", 392, "391", 2, 5, "10", 2, "1", "1", 1, 20, 20];


const answerBonus = (arr) => {
    let numberArr = arr.filter(value => typeof(value) === 'number')
    let stringArr = arr.filter(value => typeof(value) === 'string')
    let finalNumberArr = [];
    let finalStringArr = [];

    const organizeArr = (inputArr) => {
        let finalArr = [];
        if (inputArr.length === 0){
            return "";
        }
        for (items of inputArr){
            finalArr =  finalArr.concat([inputArr.filter(value => value === items )]);
            inputArr = inputArr.filter(value => value != items);
        }
        return finalArr;
    }

    //organize Arrays
    finalNumberArr = organizeArr(numberArr);
    finalStringArr = organizeArr(stringArr);

    //Clean array
    finalNumberArr = finalNumberArr.concat(finalStringArr).filter(value => value.length > 0);
    return finalNumberArr

}



console.log(arrayQuestion)