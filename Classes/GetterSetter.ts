class Customer {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }

     getFirstName(): string {
        return this.firstName;
    }

     setFirstName(firstName: string): void {
        this.firstName = firstName;
    }
}

let customer = new Customer('Tapash', 'Mollick')
customer.setFirstName("Jia")
console.log(customer.getFirstName())
