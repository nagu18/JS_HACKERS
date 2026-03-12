// sub string finder which return the Position
let value1 = "i am nagu i like cybersecurity and i aim to ciso";
let position = value1.indexOf("cybersecurity");
console.log(position); // 17 we got the position it also supports arguments

// if the indexOf does not find the string it return -1
let val3 = "hello world";
let found = val3.indexOf("omi");
console.log(found); // it return -1 which mean it not found

// the indexOf supports two arguments, first it is the string to found
// second is the position to start the search
//it a long string let'search for the network at end only by give the position
let val2 = "hey do u know how to use nmap , nmap is one of the best network pentester common tool to check networks";
let position2 = val2.indexOf("network",64);
console.log(position2); //95 we got the end network position




