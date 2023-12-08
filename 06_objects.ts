const User = {
    name: "Ashutosh Kumar",
    email: "mausi@mausa.com",
    age: 69,
    isActive: true
}

function createUser({ name, email, age, isActive }: { name: string, email: string, age: number, isActive: boolean }) {
}

createUser(User); 
