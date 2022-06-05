//Q1
const arrayQuestion = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

//Q1 Bonus
const arrQuestion2 = ["1", 2, "4", "591", 392, "391", 2, 5, "10", 2, "1", "1", 1, 20, 20];


const answerBonus = (arr) => {
    let numberArr = arr.filter(value => typeof(value) === 'number').sort((a,b) => a-b);
    let stringArr = arr.filter(value => typeof(value) === 'string').sort((a,b) => a-b);
    let finalNumberArr = [];
    let finalStringArr = [];

    //Group similar values
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



//Q2
let arrayQ2 = [1,2,3,5,8,20];

//
const answerQ2 = (arr,sum) => {
    let outputArr = [];
    let finalArr = [];
    outputArr = arr.filter(value => value === sum).sort((a,b) => a-b);

    if (outputArr.length > 0){
        return outputArr[0];
    }
    else{
        outputArr = arr.filter(value => value < sum).sort((a,b) => a-b);
    }

    for (item of outputArr){
        finalArr = outputArr.filter(value => value + item === sum);
        if (finalArr.length > 0){
            return [item,finalArr[0]];
        }
    }

    return `No two values in [${arr}] can be summed to equal ${sum}.`;
}


//Q3 - Convert hex to RGB or RGB to Hex

let hex = 'FF0000';


const convertColor = (color) => {
    let decType = false;
    outputString = '';

    const decTypeFunc = (colorString) => {
        if (colorString.indexOf(',') != -1){
            return true;
        }else{
            return false;
        }
    
    }

    const hexToRGB = (hexColor,conversionFlag) => {
        let finalString = [];
        let number = '';
        if (conversionFlag){
            let splitArr = [];
            splitArr = hexColor.replaceAll('(','').replaceAll(')','').split(',');
            for (item of splitArr){
                number = (parseInt(item)).toString(16);
                finalString = finalString.concat(number);
            }
            return `(${finalString.join('')})`
        }else{
            for (let startIndex = 0;startIndex < hexColor.length; startIndex=startIndex+2){
                number = parseInt(hexColor[startIndex]+hexColor[startIndex+1],16);
                finalString = finalString.concat(number);
            }
            return `(${finalString.join(',')})`
        }  
        
    }

    decType = decTypeFunc(color);
    outputString = hexToRGB(color,decType);
    return outputString;
}

