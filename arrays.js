/** echo function php like syntax**/
var string = '';
function echo(string) {
    console.log(string)
}
var grades = [100, 200, 300];
/**for (var i = 0; i < grades.length; i++) {
    echo(grades[i]);
}
 echo('array length: ' + grades.length);
 grades.forEach(function (grade) {
    echo(grade);
});
 **/

var totalGrade = 0;
grades.forEach(function (grade) {
    totalGrade += grade;
});
echo('Current Total Grade Is: ' + totalGrade);

//Average

var average = totalGrade / grades.length;

echo('Average Is: ' + average);