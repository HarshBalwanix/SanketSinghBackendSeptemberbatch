export function LinearSearch(arr,x)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===x)
        {
            return i;
        }
    }
    return NaN;
}

function binarySearch(arr,x)
{
    //same imp
}
// module.exports={
//     linear: LinearSearch,
//     binary: binarySearch
// }
export default function fun()
{
    console.log("fun");
}
export {
   
    binarySearch
}