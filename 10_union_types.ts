let amount: number | string = 100; // "|" this sign means union

amount = "100 rs";


/* in case of arrays */

const data0: number[] = [1, 2, 3];
const data1: string[] = ["1", "2", "3"];
const data2: string[] | number[] = ["1", 2, 3];
const data3: string[] | number[] = [1, 2, 3];
const data4: string[] | number[] = ["1", "2", "3"];
const data5: (string | number)[] = ["1", 2, 3];

/* in case of options */
let development: "web" | "mobile" | "machine learning"
development = "web";