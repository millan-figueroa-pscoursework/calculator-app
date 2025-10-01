interface Customer {
    id: number | string;
    name: string;
    email: string;
    loyaltyMember?: boolean;
}

function createCustomer(customer: Customer): string {
    return `Customer created with id: ${customer.id},
    name: ${customer.name},
    loyalty: ${customer.loyaltyMember ? 'Yes' : 'No'}
    `
}

const newCustomer: Customer = {
    id: 123,
    name: 'Abe',
    email: 'abe@gmail.com',
    loyaltyMember: false
}

const createdCustomer = createCustomer(newCustomer);
console.log(createdCustomer);