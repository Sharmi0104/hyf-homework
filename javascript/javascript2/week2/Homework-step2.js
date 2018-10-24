
//Step 1.1-Callback
let DividedByThree=document.getElementById("divThree");
let DividedByFive=document.getElementById("divFive");
function numberRange (start, end,divideThree,divideFive) {
    let newarray= new Array(end - start).fill().map((d, i) => i + start);
    let strdivideThree;
    const threeArray=[];
    const fiveArray=[];
     
     for (i=0;i<newarray.length;i++)
     {
        if(newarray[i] % divideThree == 0){
            threeArray.push(newarray[i]);
           
           
         }
          if(newarray[i] % divideFive == 0)
         {
            
            fiveArray.push(newarray[i]);
         }
        
    // strdivideThree=newarray.filter(x=>x %divideThree===0)
     }
     console.log(threeArray.filter(function(a){return a%3===0;}))
     console.log(newarray.filter(function(a){return a%5===0;}))
     DividedByThree.innerHTML= "<p> Divided by Three : " + threeArray.filter(function(a){return a%3===0;})+ "</p>";
     DividedByFive.innerHTML="<p> Divided by Five : " + fiveArray.filter(function(a){return a%5===0;})+ "</p>";
   }
   
   numberRange(5,11,3,5)

//Step 1.9
 
   let x = 9; 
function f1(val) { 
    val = val+1; 
    return val;
}
f1(x);

console.log(x +" :"+ "This is Call by value.The value doesnt change inside the function.");


let y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y)
console.log("This is Call by reference.The values gets change inside the function." );
