// String  string interpolation, where it is called Template Literals
const name = "nagu";
const val = `i am god ${name}`; //As we can how the backticks support interpolation
console.log(val);

// String Concatenation is simple using blackticks string interpolation
let name2 = "nagu bhai";
let v = 'super cool'
let line = `i am ${name2} and i am god and ${v}`; //better than + operator for concatenation
console.log(line);

//we use /n for new line (escape characters) we dont need to use /n for this
let str = `i am nagu,
i am good boy
i love cybersecurity`;
console.log(str);

//we can embed JavaScript expressions
let item1 = 100;
let item2 = 100;
let item3 = 100;
console.log(`my totol price is ${item1+item2+item3}`); // as we can we add js expression
