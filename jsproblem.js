//Sequence Practice Problems
//UC1- Get random Single digit 
let result=Math.floor(Math.random() * 10);
console.log(result);
console.log("--------------------------------------------"); 

//UC2- Use Random to get Dice Number between 1 to 6
let dice=Math.floor(Math.random() * 6)+1;
console.log(dice); 
console.log("--------------------------------------------"); 

//UC3- Add two Random Dice Number and Print the Result
let dice1=Math.floor(Math.random() * 6)+1;
console.log(dice1);
let dice2=Math.floor(Math.random() * 6)+1;
console.log(dice2);
let add=dice1 + dice2;
console.log("Sum of two random dice: " + add); 
console.log("--------------------------------------------"); 

//UC4-– Write a program that reads 5 Random 2 Digit values ,then find their sum and the average
let num1=Math.floor(Math.random() * 90)+10;
let num2=Math.floor(Math.random() * 90)+10;
let num3=Math.floor(Math.random() * 90)+10;
let num4=Math.floor(Math.random() * 90)+10;
let num5=Math.floor(Math.random() * 90)+10;
let sum1=num1 + num2 + num3 + num4 + num5;
console.log("First number value ==> "+num1);
console.log("Second number value ==> "+num2);
console.log("First number value ==> "+num3);
console.log("Second number value ==> "+num4);
console.log("First number value ==> "+num5);
let average=sum1/5;
console.log("Sum : " + sum1); 
console.log("Average: " + average);  
console.log("--------------------------------------------"); 

//UC5- Unit Conversion 
//a. 1ft = 12 in then 42 in = ? ft 
let inches=42;
let ft=inches/12;
console.log("Conversion inches into ft : " + ft); 
//b. Rectangular Plot of 60 feet x 40 feet in meters
let feet1=60; 
let feet2=40;
let meters1=60 /3.281; 
let meters2=40 /3.281;
let product=meters1 * meters2; 
console.log("Conversion feet into meter: " + product); 
//c. Calculate area of 25 such plots in acres
let area=25;
let result1=area / 43560;
console.log("Result : " + result1);
console.log("--------------------------------------------");

//--Selection Practice Problems with if & else  
//1.Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value
let number1=Math.floor(Math.random() * 900)+100;
console.log("first number: "+number1);
let number2=Math.floor(Math.random() * 900)+100;
console.log("Second number: "+number2);
let number3=Math.floor(Math.random() * 900)+100;
console.log("third number: "+number3);
let number4=Math.floor(Math.random() * 900)+100;
console.log("four number: "+number4);
let number5=Math.floor(Math.random() * 900)+100;
console.log("five number: "+number5);

if(number1> number2 && number1>number3 && number1> number4 && number1> number5 )
{
    console.log("Greater number ==> "+number1);
}
else if(number2> number1 && number2> number3 && number2> number4 && number2> number5 )
{
    console.log("Greater number ==> "+number2);
}
else if(number2> number1 && number2> number3 && number2> number4 && number2> number5  )
{
    console.log("Greater number ==> "+number2);
}
else if(number3> number1 && number3> number2 && number3> number4 && number3> number5 )
{
    console.log("Greater number ==> "+number3);
}
else if(number4> number1 && number4> number2 && number4> number3 && number4> number5 )
{
    console.log("Greater number ==> "+number4);
}
else
{
    console.log("Greater number ==> "+number5);
} 

//2.Write a program that takes day and month and prints true if day of month is between March 20 and June 20, false otherwise.
let month=5;
let date=20;
if(((month <= 6 && date <= 20) && ((month >= 3 && date <= 20) && (date<31))))
{
   console.log("True");
}
else
{
   console.log("False");
} 
console.log("--------------------------------------------"); 

//3.Write a program that takes a year as input and outputs the Year is a Leap Year or not a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless divisible by 400.
let year=1987;
if(year % 400 == 0)
{
   console.log(year+" is a Leap year");
}
else if(year % 4 == 0)
{
   console.log(year+" is a Leap year");
}
else if(year % 100 == 0)
{
   console.log(year+" is Not a Leap year");
}
else
{
   console.log(year+" is Not a Leap year");
} 
console.log("--------------------------------------------"); 

//4. Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly
let head = 0; 
let tail = 0;
let count = 0;
let numflip=5;
while (count < numflip)
{
   let result=Math.floor(Math.random() * 2);
   console.log(result);
   if (result < 1)
   {
       head++;
       console.log("head");
   }
   else
   {
       tail++;
       console.log("tails");
   }
   count++;
}
console.log("Total Number of Heads: " + head);
console.log("Total Number of Tails: " + tail); 
console.log("--------------------------------------------"); 

//Selection Practice Problems with if else if and else
 //1.Read a single digit number and write the number in word 
 let num=Math.floor(Math.random() * 10);
 if(num==0)
 {
    console.log("zero");
 }
 else if(num==1)
 {
    console.log("One");
 }
 else if(num==2)
 {
    console.log("Two");
 }
 else if(num==3)
 {
    console.log("Three");
 }
 else if(num==4)
 {
    console.log("Four");
 }
 else if(num==5)
 {
    console.log("five");
 }
 else if(num==6)
 {
    console.log("six");
 }
 else if(num==7)
 {
    console.log("seven");
 }
 else if(num==8)
 {
    console.log("eight");
 }
 else if(num==9)
 {
    console.log("nine");
 }  
 console.log("--------------------------------------------"); 

 //2.Read a Number and Display the week day (Sunday, Monday,…)
 let dayNumber=Math.floor(Math.random() * 7)+1;

 if(dayNumber==1)
 {
    console.log("Sunday");
 }
 else if(dayNumber==2)
 {
    console.log("Monday");
 }
 else if(dayNumber==3)
 {
    console.log("Tuesday");
 }
 else if(dayNumber==4)
 {
    console.log("Wednesday");
 }
 else if(dayNumber==5)
 {
    console.log("Thrusday");
 }
 else if(dayNumber==6)
 {
    console.log("Friday");
 }
 else if(dayNumber==7)
 {
    console.log("Saturday");
 }
 else
 {
    console.log("Please enter number between 1 to 7 because number of week day are 7");
 } 
 console.log("--------------------------------------------"); 

 //3.Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum
 //1. a + b * c        
 let a=10;
 let b=20;
 let c=15;
 let output= a + b * c ;
 console.log("Result1 are : " + output); 

 //2. a % b + c 
 let a1=10;
 let b1=20;
 let c1=15;
 let output1= ((a1 % b1) + c1 );
 console.log("Result2 are : " + output1); 

 //3. c + a / b 
 let a2=10;
 let b2=20;
 let c2=15;
 let output2= (c2 + (a2 / b2));
 console.log("Result3 are : " + output2); 

 //4. a * b + c
 let x=10;
 let y=20;
 let z=15;
 let output3= ((x * y) + z);
 console.log("Result4 are : " + output3); 
 console.log("--------------------------------------------"); 

 //Selection Practice Problems with case statements
//1. Read a single digit number and write the number in word using Case
let number = Math.floor(Math.random()*10);
switch(number)
{
    case 0:
            console.log("Generate random number : "+ number);
            console.log("Word ==> Zero");
            break;
    case 1:
            console.log("Generate random number : "+ number);
            console.log("Word ==> One");
            break;
    case 2:
            console.log("Generate random number : "+ number);
            console.log("Word ==> Two");
            break;
    case 3:
            console.log("Generate random number : "+ number);
            console.log("Word ==> Three");
            break;
    case 4:
            console.log("Generate random number : "+ number);
            console.log("Word ==> Four");
            break;
    case 5:
           console.log("Generate random number : "+ number);
            console.log("Word ==> Five");
            break;
    case 6:
            console.log("Generate random number : "+ number);
            console.log("Word ==> Six");
            break;
    case 7:
            console.log("Generate random number : "+ number);
            console.log("Word ==> Seven");
            break;
    case 8:
            console.log("Generate random number : "+ number);
            console.log("Word ==> Eight");
            break;
    case 9:
            console.log("Generate random number : "+ number);
            console.log("Word ==> Nine");
            break;
} 
console.log("--------------------------------------------"); 

//2. Read a Number and Display the week day (Sunday, Monday,…)

let dayNum = Math.floor(Math.random()*7)+ 1;
switch(dayNum)
{
    case 1:
            console.log("Generate random number : "+ dayNum);
            console.log("Day ==> Sunday");
            break;
    case 2:
            console.log("Generate random number : "+ dayNum);
            console.log("Day ==> Monday");
            break;
    case 3:
            console.log("Generate random number : "+ dayNum);
            console.log("Day ==> Tuesday");
            break;
    case 4:
            console.log("Generate random number : "+ dayNum);
            console.log("Day ==> Wednesday");
            break;
    case 5:
            console.log("Generate random number : "+ dayNum);
            console.log("Day ==> Thrusday");
            break;
    case 6:
           console.log("Generate random number : "+ dayNum);
            console.log("Day ==> Friday");
            break;
    case 7:
            console.log("Generate random number : "+ dayNum);
            console.log("Day ==> Saturday");
            break;
} 
console.log("--------------------------------------------"); 

//3.Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

let no = Math.floor(Math.random()*1050);
if(no >=0 && no <=9)
{
   option=1;
}
else if(no >=10 && no <=99)
{
   option=2;
}
else if(no >=100 && no <=999)
{
   option=3;
}
else
{
   option=4;
}
switch(option)
{
    case 1:
            console.log("Generate random number : "+ no);
            console.log("Unit");
            break;
    case 2:
            console.log("Generate random number : "+ no);
            console.log("Ten");
            break;
    case 3:
            console.log("Generate random number : "+ no);
            console.log("Hundred");
            break;
    case 4:
            console.log("Generate random number : "+ no);
            console.log("Thousand");
            break;
} 

console.log("--------------------------------------------"); 

//Repetition Practice Problems with for loop
//1. Prints a table of the powers of 2

let value=Math.floor(Math.random()*10);
let i;
for (i=0;i<=value;i++)
   {
    let power=Math.pow(2,i);
    console.log("power of 2^"+ i +" is " +power);
   }
console.log("--------------------------------------------"); 

//2. Write a program to prints the nth harmonic number
let harmonicNumber=Math.floor(Math.random()*10)+1;
let res = 0;
let value1= 0;
let j;
console.log("\nHarmonic number series are:\n----------------------------------- ");
for (j=1; j<=harmonicNumber; j++)
  {
      value1=1/j;
      //result1 = result1 + value1;
      result1 = res + 1/j;
      console.log("1/"+ j +"  => "+value1);
  }
 console.log("\nSum of all "+ harmonicNumber +" Harmonic Numbers: " + res); 
 console.log("--------------------------------------------"); 

 //3. Write a program that takes a input and determines if the number is a prime
let primeNum = Math.floor(Math.random()*10)+2;
let countValue=0;
for (let m = 1; m <=primeNum; m++)
{
   if (primeNum % m == 0)
   {
    countValue++;
   }
}
if(countValue == 2)
{ 
   console.log(primeNum + " is prime number");
}
else 
{ 
   console.log(primeNum + " is not prime number");
}
console.log("--------------------------------------------"); 

//4.Write a program to compute Factors of a number N using prime factorization method.
let primeFactorNum=18;
console.log("Prime factor are:-\n--------------------");
for (let k = 2; k <= primeFactorNum; k++)
{
    while (primeFactorNum % k == 0)
    {
        primeFactorNum = primeFactorNum / k;
        console.log(k);
    }
}
if (primeFactorNum > 2)
 {
    console.log( primeFactorNum);
 }
 console.log("--------------------------------------------"); 

 //5.Write a program that computes a factorial of a number taken as input. Such as 5 Factorial – 5! = 1 * 2 * 3 * 4 * 5
 let factNumber=5;
let fact=1;
for(i=1;i<=factNumber;i++)
{
    fact=fact*i;
}
console.log("\nFactorial of "+ factNumber+" is ==>  " + fact) 
console.log("--------------------------------------------"); 

//Repetition Practice Problems with while loop
//1.Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n till 256 is reached..
let powervalue=Math.floor(Math.random()*10);
let n=0;
while (n<=powervalue)
   {
    let powerValue=Math.pow(2,n);
    console.log("power of 2^"+ n +" is " +powerValue);
    n++
   } 
console.log("--------------------------------------------");    

//Functions Practice Problems
//1.Help user find degF or degC based on their Conversion Selection. Use Case Statement and ensure that the inputs are within the Freezing Point (  0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
   //a. degF = (degC * 9/5) + 32
   //b. degC = (degF – 32) * 5/9

   function findDegF(degC)
   {
      degF = (degC * 9/5) + 32;
      return degF;
   }
   let x1=findDegF(100)
   console.log("Result in degF: " + x1+"F");

   function findDegC(degF)
   {
      degC=(degF - 32) * 5/9;
      return degC;
   }
   let y1=findDegC(212)
   console.log("Result in degF: " + y1+"C"); 
console.log("--------------------------------------------");    

/* Array Practice Problems
1. Write a program in the following steps
a. Generates 10 Random 3 Digit number. 
b. Store this random numbers into a array. 
c. Then find the 2nd largest and the 2nd smallest element without sorting the array */

let values=10;
let arrayNum=new Array();
let second=new Array();
let first=new Array();
//Generates 10 Random 3 Digit number.
for(let i=0; i<values; i++)
{
    arrayNum[i]=Math.floor(Math.random()*900)+100;
}
console.log("Ten three digit random values are:\n-------------------------------------\n" + arrayNum);
//without sort value find second largest 
for (let i = 0; i < arrayNum.length; ++i) 
{
    if (first < arrayNum[i]) 
    {
        second = first;
        first = arrayNum[i];
    } 
    else if (arrayNum[i] > second && arrayNum[i] != first) 
    {
        second = arrayNum[i];
    }
}
if (second == first)
{
   console.log("There is no second largest element\n");
}
else
{
   console.log("\nThe Second largest element in the array is: "+ second);
}
//without sort find second smallest value 
for (let i = 0; i < arrayNum.length; ++i)
 {
    if (first > arrayNum[i])
     {
        second = first;
        first = arrayNum[i];
     } 
    else if (arrayNum[i] < second && arrayNum[i] != first) 
    {
        second = arrayNum[i];
    }
}
if (second == first)
   {
      console.log("There is no second smallest element\n");
   }
else
{
   console.log("The Second largest element in the array is: "+ second);
}
console.log("-------------------------------------------------------");  

//2.Extend the above program to sort the array and then find the 2nd largest and the 2nd smallest element
let values1=10;
let array=new Array();
for(let i=0; i<values1; i++)
{
   array[i]=Math.floor(Math.random()*900)+100;
}
console.log("\n\nTen three digit random values before sort are:\n-------------------------------------\n" + array);
//sort value in ascending order
array.sort();
console.log("Ten three digit random values after sort are:\n---------------------------------------\n" + array);
console.log("second largest value: " + array[8]);
console.log("second smallest value: " + array[1]);
console.log("-------------------------------------------------------");

//3. Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, etc 

let Num = new Array()
for(let  i  = 0 ; i <= 100 ; i ++)
{
    if (i%11 == 0 && i !=0) 
    {
      Num.push(i)
    }
}
console.log("The reapeated numbers are:-\n------------------------------\n"+Num)
console.log("-------------------------------------------------------");  

//Map Practice Problems
/* 1.Write a program in the following steps
a. Roll a die and find the number between 1 to 6
b. Repeat the Die roll and find the result each time
c. Store the result in a dictionary
d. Repeat till any one of the number has reached 10 times
e. Find the number that reached maximum times and the one that was for minimum times */
let diceMap = new Map()
diceMap.set(1,0)
diceMap.set(2,0)
diceMap.set(3,0)
diceMap.set(4,0)
diceMap.set(5,0)
diceMap.set(6,0)
let limitNotReached = 1
while (limitNotReached == 1 ) 
{
    let rollDice = Math.floor(Math.random()*5)+1
    let diceNum=diceMap.set(rollDice,diceMap.get(rollDice)+1)
    for(let key of diceMap.keys())
    {
        if (diceMap.get(key)  == 10) 
        {
            limitNotReached = 0
            console.log("The maximum repeated number: " +key);
        }
    } 
}

let min = 10
for (let key of diceMap.keys())
{
    if (diceMap.get(key) < min)
    {
        min = diceMap.get(key)
        var min_key = key
    }
}
console.log("The minimum repeated number: "+min_key); 
console.log("-------------------------------------------------------");  

/* 2. Write a Program to generate a birth month of 50 individuals 
between the year 92 & 93. Find all the individuals having birthdays 
in the same month. Store it to finally print. */

let sameBirthMonth = new Map()
for(month = 1 ; month<=12 ; month++ )
{
    sameBirthMonth.set(month,0)
}

let counts  = 0
while(counts<=50)
{
    let birthMonth = (Math.floor(Math.random()*100) % 12 )+1 
    let year = "199"+Math.floor(Math.random()*10) 
    if (year == "1992" || year == "1993") 
    {
        sameBirthMonth.set(birthMonth,sameBirthMonth.get(birthMonth)+1)    
        counts++
    }
}
console.log("Number of people having birthday in same month");
console.log("month : counts");
for(key of sameBirthMonth.keys())
{
    console.log(key+" : "+sameBirthMonth.get(key))
}