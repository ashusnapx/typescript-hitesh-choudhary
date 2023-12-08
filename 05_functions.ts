function addTwo(num: number): number {
    return num + 2;
}

const val1 = addTwo(5);

function getUpper(val: string) {
    return val.toUpperCase();
}

const val2 = getUpper("Ashutosh");

/* signup function and also i'll show you, how to handle default values */
function signUp(name: string, email: string, isPaid: boolean = false) { }

signUp("Ashutosh", "ashu@a.com");

const hero1 = ["lord puneet", "dank rishu", "arpit bala"];
const hero2 = [1, 2, 3];

hero1.map((hero3): string => {
    return `hero is ${hero3}`
})

hero2.map((hero4): string => {
    return `hero is ${hero4}`
})

/* console and handle errors */
function consoleError(errMessage:string):void {
    console.log(errMessage);
}
function handleError(errMessage:string):never {
    throw new Error(errMessage);
}