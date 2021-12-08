for (let i = 0; i < 3; i++) {
    console.log(i)
} 
console.log('#########################')
let numbers: number[] = [10,20,30]

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

console.log('#########################')
let heights: number[] = [10.1,20.1,30.1]

for (let i = 0; i < heights.length; i++) {
    console.log(heights[i] + i)
}

console.log('#########################')
let vegetables: string[] = ["Potato", "Bringle", "Chilli"]

for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i])
}

console.log('#########################')
let animals: string[] = ["Tiger","Cow","Dog","Elephant","Lion"]
for (let animal of animals) {
    if (animal == 'Lion') {
        console.log(animal + " is violent")
    }
    else {
        console.log(animal)
    }
}

console.log('#########################')
let salaries: number[] = [100,200,300]
salaries.push(500)
for (let i = 0; i < salaries.length; i++) {
    console.log(salaries[i])
}