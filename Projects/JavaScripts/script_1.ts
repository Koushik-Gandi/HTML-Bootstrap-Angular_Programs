/*var msg="hello";
console.log(msg);
function add(a,b){
    var c=a+b;
    console.log(c);
}
add(10,12);
function check(a){
    if(a>10){
        console.log("Greater than 10");
    }
    else{
        console.log("Less than 10");
    }
}
check(11);
check(5);
var a="hello";
var b="world";
function stringIs(str1,str2){
    if(str1>str2){
        console.log(str1+" is greater");
    }
    else if(str1<str2){
        console.log(str2+" is greater");
    }
    else{
        console.log("Strings are equal");
    }
}
stringIs(a,b);
function array(){
let names=["john","pavan","koushik","vivek"];
for(var i=0;i<names.length;i++){
    console.log(names[i]);
}
}
array();
function arr(){
let number=[2,5,7,9,4];
number.sort();
console.log(number);
}
arr();
var msg='hello'; 
function display(str1){ 
 
    console.log(msg);
}
var c=(x,y)=>x+y;
console.log(c(10,20));

var str1=(str)=>str;
console.log(str1("hello"));

var sorted=(arr)=>{
    arr.sort();
    return arr;
};
console.log(sorted([5,1,9,7,3]));

var sum=(arr)=>{
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
};
console.log(sum([5,1,9,7,3]));
var sum=()=>{
    var arr=[5,1,7,5,2];
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
console.log(sum());

function add(a,b=4){
    return a+b;
}
console.log(add(7));
console.log(add(7,7));
var lyrics = `Never gonna give you up
Never gonna let you down`;


function fun(...a){

    var sum=0;
    for(var i=0;i<a.length;i++){
        sum+=a[i];
    }
    console.log(sum);
}
fun();
fun(5,2);
fun(7,1,5);

//string interpolation
var lyrics = 'Never gonna give you up';
var html = 5+4+7+'<div>' + lyrics + '</div>\n';
console.log(html);
var lyrics1 = 'Never gonna give you up';
var str="hello";
var html1 = `547<div>${lyrics1}</div>${str}`;
console.log(html1);

//multiple strings
var lyrics1 = "\nNever gonna give you up \nNever gonna let you down\n";
var lyrics = `Never gonna give you up
Never gonna let you down`;
console.log(lyrics1);
console.log(lyrics);

var say = "a bird in hand > two in the bush";
var html = htmlEscape `<div> I would just ike to say : ${say}</div>`;

function htmlEscape(literals, ...placeholders) {
    let result = "";
    // interleave the literals with the placeholders
    for (let i = 0; i < placeholders.length; i++) {
    result += literals[i];
    result += placeholders[i]
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
    }
    // add the last literal
    result += literals[literals.length - 1];
    return result;
    }
console.log(html);
 
htmlEscape(2);
const cust={name:'koushik',bank:'SBI',bal:1000};
const {name: n,bank:b,bal:bal}=cust;
console.log('Name :'+n+'\t'+'Bank Name :'+b+'\t'+'Balance :'+bal);
*/
/*
class Customer{
    custname: string;
    bankName: string;
    availableBal: number;
    
    constructor(name1: string ,bankName1: string,availableBal1: number){
        this.custname=name1;
        this.bankName=bankName1;
        this.availableBal=availableBal1;
    }
    dispaly(){
        console.log("\nName :"+this.custname+'\n'+"Bank Name :"+this.bankName+'\n'+"Available Bal :"+this.availableBal+'\n');
    }
}
let cust=new Customer('koushik','SBI',1000);
cust.dispaly();
*/
class Greeter {
    greeting : string;
    constructor(message: string) {
    this.greeting = message;
    }
    greet() {
    return "Hello, " + this.greeting;
    }
    }
    let greeter = new Greeter("world");
  greeter.greet();