const marvelHeroes=["thor","ironman","spidenman"]
const dcHeroes=["superman","flash","batman"]

//marvelHeroes.push(dcHeroes)
//console.log(marvelHeroes); //[ 'thor', 'ironman', 'spidenman', [ 'superman', 'flash', 'batman' ] ]
//console.log(marvelHeroes.push(dcHeroes)); // op = 4 (it will pront the length not the array)


// concat change in new array not existing
console.log(marvelHeroes.concat(dcHeroes)); //[ 'thor', 'ironman', 'spidenman', 'superman', 'flash', 'batman' ]
console.log(marvelHeroes); // it wont change
const allHero=marvelHeroes.concat(dcHeroes)
console.log(allHero);

// spread 
const all_new_hero=[...marvelHeroes,...dcHeroes] // no limitatio u can add any array to merge
console.log(all_new_hero);

//flat
const real_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_arr=real_arr.flat(Infinity)
console.log(real_another_arr); // all array are spread out

//from
console.log(Array.isArray("Ritesh"));//false
console.log(Array.from("Ritesh"));//[ 'R', 'i', 't', 'e', 's', 'h' ]

console.log(Array.from({name:"Ritesh"}));// [] so for this u have to look whether u need to convert for key or value ??
console.log(Array.of("Ritesh",23)); //[ 'Ritesh', 23 ]
