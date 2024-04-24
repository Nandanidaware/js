// Sum of array

function sumOfArray(arr) {
    let s=0;
    for(let i=0;i<arr.length;i++)
    {
        s+=arr[i];
    }
    console.log(`sum is ${s}`);
}
sumOfArray([1,2,3]);


//Average

// function average(arr) {
//   let b=0;
//   let c=arr.length;
//   for(let i=0;i<c;i++)
//   {
//     b+=arr[i];
//   }
//   let p=b/c;
//   console.log(`average is ${p}`);
// }

// average([1,2,3])

// max

// function maximum(arr) {
//   let m=arr[0];
//   for(let i=1;i<arr.length;i++)
//   {
//     if(arr[i]>m)
//     {
//       m=arr[i];
//     }
      
//   }
//   console.log(`max is ${m}`);
// }
// maximum([2,6,50])

//min

// function minimum(arr) {
//   let m=arr[0];
//   for(let i=1;i<=arr.length;i++)
//   {
//       if(arr[i]<m)
//       {
//         m=arr[i];
//       }
      
//   }
//     console.log(`min is ${m}`);

// }
// minimum([2,50,6])


//find the number

// function finds(arr,num) {
//   let c=0;
//   for (let i=0;i<arr.length;i++) 
//   {
//     if (arr[i] == num) 
//     {
//       c++;
//       console.log(`index is ${i}`);
//     }
//   }
//   if (c!==arr.length) 
//   {
//     return -1;
//   }
// }

// console.log(finds([1, 2, 3, 4], 7));

// sorting Ascending

// function sorting(arr) {
//   let s=arr.length;
//   for(let i=0;i<s;i++)
//   {
//     for(let j=0;j<s-i-1;j++)
//     {
//       if(arr[j]>arr[j+1])
//       {
//         let t=arr[j];
//         arr[j]=arr[j+1];
//         arr[j+1]=t;
//       }
//     }
//   }
//   for(let i=0;i<s;i++)
//   {
//     console.log(arr[i]);
//   }
// }

// sorting([2,4,1,6,0]);


// even
// function even(arr) {
//   let c=arr.length;
//   for(let i=0;i<c;i++)
//   {
//     if(arr[i]%2==0)
//     {
//       console.log(arr[i]);
//     }
//   }
// }

// even([1,2,3,4,5,6,7,8]);
