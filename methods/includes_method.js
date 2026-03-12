//Include Method is used to check User input of a Specific world
let val1 ="hey guys how are u"
let result = val1.includes("u") // it check for u letter
console.log(result) // true


// this method is case-sensitive
let vl = "i like cybersecurity want to be a Pro hacker of all time"
let result1 = "pro" // in the variable  we can se than p is cap P
console.log(vl.includes(result1)) //false

// this method argument that say's where we can specify position
let vl3 = "OMI IS GOOD BOY"
let result2 = vl3.includes("GOOD" , 6) // it start after 6 character and search for out word
console.log(result2) // true



