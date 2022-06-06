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

let hex = '#FF0000';
let RGB = 'RGB(255,0,0)';


const convertColor = (color) => {

    outputString = '';
    color = color.trim();

    const hexToRGB = (colorString) => {
        return parseInt(colorString.trim(),16);
    }

    const RGBToHex = (colorString) => {
        if (colorString.trim() == 0) {
            return '00';
        }
        return parseInt(colorString.trim()).toString(16);
    }


    if (color.indexOf('#') != -1){
        let r = hexToRGB(color[1]+color[2]);
        let g = hexToRGB(color[3]+color[4]);
        let b = hexToRGB(color[5]+color[6]);

        return `RGB(${r},${g},${b})`;

    }else if(color.indexOf('RGB') != -1){
        color = color.replaceAll('RGB','').replaceAll('(','').replaceAll(')','').split(',');
        let r = RGBToHex(color[0])
        let g =  RGBToHex(color[1])
        let b = RGBToHex(color[2])
            
        return `#${r}${g}${b}`.toUpperCase();
    }else{
        return `Invalid color format. Please use Hex(#xxxxxx) or RGB (RGB(r,g,b)) format.`;
    }


}

