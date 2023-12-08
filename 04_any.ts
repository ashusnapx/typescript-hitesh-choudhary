// any keyword is used when we don't know what would be inserted in a variable as of now, so to prevent from throwing error, "typescript" adds "any" keyword.

// bad approach
let hero;

function getHero() {
    return "Lord Puneet"; // this can be a string
    return 123;  // this can be a number too...
    return true; // this can be a boolean too...
}

hero = getHero();

console.log(hero);


// good approach
let hero2: string;

function getHero2() {
    return "Lord Puneet";
}

hero2 = getHero2();

console.log(hero2);