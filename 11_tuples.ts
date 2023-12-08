/* in this, i can store in any way... */
const studentRollNumber: (string | number)[] = ["0201IT201020", 20];
studentRollNumber.push(...[39, "0201IT201039"]);

/* but what if, we want a sequence, a pattern to be followed */
const rollNumber: [string, number] = [20, "0201IT201020"]; // wrong
const rollNumberWithTuple: [string, number] = ["0201IT201020", 20]; // correct