class Employee2 {
  firstName: string
    lastName: string

    constructor (firstName: string, lastName: string) {
       this.firstName = firstName;
       this.lastName = lastName
    }
}

let employee2 = new Employee2('Jia', 'Mollick')

console.log(employee2.firstName + " " + employee2.lastName)