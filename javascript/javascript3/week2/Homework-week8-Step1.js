function getDivideArray(No) {

    return {
        DivideThree(divideNO) {

            if (No % divideNO === 0) {

                return true;
            }
            else {
                return false;
            }

        }
    }


}
const arrayClose = getDivideArray(20)
console.log(arrayClose.DivideThree(5))
console.log(arrayClose.DivideThree(6))


/*Part2 */
function createArray(start, end) {
    let newarray = new Array(end - start).fill().map((d, i) => i + start + 1);
    console.log(newarray);
    return function divideArray(x) {

    }
}
createArray(10, 20)
  /* const y = 10;
   let divisbleBy10 = [];
   for(let i=0;i<arr.length;i++){
       if(arr[i]%y===0){
           divisbleBy10.push(arr[i]);
       }
   }
   console.log("Numbers divisible by 10: ",divisbleBy10);
   console.log("Amount of numbers divisible by 10: ",divisbleBy10.length);

   const z = 21;
   let divisbleBy21 = [];
   for(let i=0;i<arr.length;i++){
       if(arr[i]%z===0){
           divisbleBy21.push(arr[i]);
       }
   }
   console.log("Numbers divisible by 21: ",divisbleBy21);
   console.log("Amount of numbers divisible by 21: ",divisbleBy21.length);*/
