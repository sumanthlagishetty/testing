let myGrade = function(curMarks, totMarks){
    let percent = (curMarks/totMarks) * 100

    if(percent >= 90){
        myGrade = 'A'
    }else if(percent >= 80){
        myGrade = 'B'

    }else if(percent >= 70){
        myGrade = 'C'
    }else if(percent >= 50){
        myGrade = 'D'
    }else{
        myGrade = 'Fail'
    }
    return `your grade is ${myGrade} and percentage is ${percent}`

}
console.log(myGrade(68,100));
