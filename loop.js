for (var i = 0; i < 3; i++) {
    console.log(i);
}
console.log('#########################');
var numbers = [10, 20, 30];
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
console.log('#########################');
var heights = [10.1, 20.1, 30.1];
for (var i = 0; i < heights.length; i++) {
    console.log(heights[i] + i);
}
console.log('#########################');
var vegetables = ["Potato", "Bringle", "Chilli"];
for (var i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
}
console.log('#########################');
var animals = ["Tiger", "Cow", "Dog", "Elephant", "Lion"];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    if (animal == 'Lion') {
        console.log(animal + " is violent");
    }
    else {
        console.log(animal);
    }
}
console.log('#########################');
var salaries = [100, 200, 300];
salaries.push(500);
for (var i = 0; i < salaries.length; i++) {
    console.log(salaries[i]);
}
