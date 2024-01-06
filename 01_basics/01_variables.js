const accoundId=14453
let accountEmail="ritesh@gmail.com"
var password="1234"
accountCity="Berhampur"
let accountState;

/*
    1-Cons is immutable so u cannot change once variable value assigned. console.log(accoundId); will give compilation error 
    2-let is mutable so we can change it further
    3-Prefer not to use var bcoz issue in block scope and functional scope
    4-u can declare variable with out let,const,var but u have to initilize.
    (for string it will work without any issues but for number u have to declare else it will give error)
    5-accountState; -> this give error as accountState is not defined so need to declare with let
    6-accountCity->no need to use let as it is declared.
 */

accountEmail="sdchsb@gmail.com"
password="sdfvf"
accountCity="sdcvv"
console.table([accoundId,accountEmail,password,accountCity,accountState])
