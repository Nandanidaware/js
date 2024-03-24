// 1. Take two numbers a,b and print the sum, difference, product, quotient and modulus of a & b.
const a = 50
const b = 20
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);


// 2. Take two numbers and only print the integer part when a is divided by b.
const al = 70;
const bl = 70;
let k = parseInt(al/bl);
console.log(k);

 // 3. Take two numbers a,b and print the exponential power of the first number raised by the second.
 const as = 4
 const bs = 2;
 console.log(as**bs);

 
 // 4. Take two numbers a,b and only print the decimal part of the result obtained when a is divided by b.
const am = 40
const bm = 35
if(am!=bm==0)
{
    console.log(am/bm);
}

// 5. Take marks in 5 subjects A,B,C,D,E and print out the average of marks from five subject marks.
const ad = 40
const bd = 55
const cg = 60
const db = 74
const ed = 35
let ko=(ad+bd+cg+db+ed)/5;
console.log(ko);


// 6. Take the cost price a and selling price b of a product, and print the profit obtained on the product.
const s = 37
const m = 45
if(s>m)
{
    let loss=s-m;
    console.log(loss);
}
else if(m<s)
{
    let profit=m-s;
    console.log(profit);
}
else if(m==s)
{
    console.log("NO PROGIT NO LOSS");
}

// 7. Take a number and print out the last digit of the number.
const p = 60;
console.log(p%10);


// 8. Take a 2 digit number and return the first and last digits.
const ah = 55;
console.log(ah%10);
console.log(ah%100);

// 9. Write a JavaScript program to find the largest of three numbers.
const ab = 55;
const ba = 58;
const cd= 3;
let m0,m1;
if(ab>ba)
{
    m0=ab;
    if(m0>cd)
    {
        m1=m0;
        console.log(m1);
    }
    else{
        m1=cd;
        console.log(m1);
    }
}
else{
    m0=ba;
    if(m0>cd)
    {
        m1=m0;
        console.log(m0);
    }
    else{
        m1=cd
        console.log(m1);
    }
}

// 10. Write a JavaScript program to check whether a number is even or odd.
const aj = 40;
if(aj%2==0)
{
    console.log("This is Even Number");
}
else 
{
    console.log("This is Odd Number")
}

// 11. Write a JavaScript program to check whether a given number is prime or not.
const num = 30;
let i=1;
let count=0;
while(i<=a)
{
    if(a%i===0)
    {
        count++;
    }
    i=i+1;
}
if(count==2)
{
    console.log("This is a Prime Number");
}
else {
    console.log("This is not a Prime Number");
}


// 12. Write a JavaScript program to convert temperature from celsius to fahrenheit and vice versa.
// convert temperature from celsius to fahrenheit
let ct=30;
let ft=(ct*9/5)+32;
console.log(ft);

// Convert Fahrenheit to Celsius
ft = 86;
ct = (ft-32)*5/9;
console.log(ct);