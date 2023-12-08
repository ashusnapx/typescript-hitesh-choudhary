type User = {
    readonly _id: string // readonly doesn't allows for modification
    name: string
    email: string
    isActive: boolean
    creditCardDetails?: number // ? allows for optional thing
}

let user1: User = {
    _id: "hola",
    name: "Ashutosh",
    email: "lord@puneet.com",
    isActive: true
}