/** echo function php like syntax**/
var string = '';
function echo(string) {
    console.log(string)
}
var grades = [100, 50];
for (var i = 0; i < grades.length; i++) {
    echo(grades[i]);
}
echo('array length: '+grades.length);
grades.forEach(function (grade){
    echo(grade);
});

