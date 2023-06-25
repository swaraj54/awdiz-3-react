import { useState } from "react";

const number = 8765; // decleration + assign 

console.log(number)
number = 5678; // re-assign

console.log(number)


const [count , setCount] = useState(5678);

-> count = 6754, => 5678
-> setCount(5678)

