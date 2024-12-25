{
// problem 2

const removeDuplicates = (numberArray:number[]):number[]=>{
    const uniqueArray = numberArray.filter((val,index,self)=>self.indexOf(val)=== index);
    return uniqueArray; 
}


// const newArr = removeDuplicates([1, 2, 2, 3, 4, 4, 5,1,5,6]);
// console.log(newArr);















}