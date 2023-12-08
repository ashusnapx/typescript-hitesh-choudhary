"use strict";
/* Harder way */
// class User {
//     public name: string
//     private email: string
//     readonly age: number
//     constructor(name: string, email: string, age: number) {
//         this.name = name;
//         this.email = email;
//         this.age = age;
//     }
// }
/* Easier Way */
class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.city = "Jabalpur";
    }
}
const student1 = new User("Lord Puneet", "lord@puneet.com", 69);
student1.name = "Puneet Superstar";
// student1.age = 56;
