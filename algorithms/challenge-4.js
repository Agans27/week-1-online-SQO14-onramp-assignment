function calculateGrade(marks) {
    let average_score = 0;
    let sum = 0;
    let count = 0;

    //finding the average score
    while (count < marks.length){
        sum += marks[count]
        count++;
    }

    average_score = sum/marks.length;

    let letter;
    // grading the average score
 if (average_score>=90){
    letter = 'A';
 }
 else if (average_score>=80){
    letter = 'B';
 }
 else if (average_score>=70){
    letter = 'C';
 }
 else if (average_score>=60){
    letter = 'D';
 }
 else if (average_score>=50){
    letter = 'E';
 }
 else {
    letter = 'F'
 }
   
 return letter;
}
  module.exports =calculateGrade
