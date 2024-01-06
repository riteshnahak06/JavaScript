const userName=new String("Rite-sh")
console.log(userName[0]);
console.log(userName.charAt(0));
console.log(userName.toUpperCase());
console.log(userName.indexOf("e"));
const newName=userName.substring(0,4) // exclude last index so till 3
console.log(newName);
const anotherName=userName.slice(-6,4) // 6 is length so last is reverse
//in substring even if u give -ve it will take index from zero
console.log(anotherName);

const newFeat="     RItesh      "
console.log(newFeat);
console.log(newFeat.trim()); // remove starting and end spacing

const url="https://ritesh.com/ritesh%20nahak"// if u give spac it will search as %20
console.log(url.replace("%20",'-'));
console.log(url.includes("ritesh"));

const newSplit=new String("Rite-sh")
console.log(newSplit.split("-")); // array based on -