let arr = [-2, 3, 4, 7, 8, 9, 11, 13];

 

 

let targetEl = 13;

 

function binarySearch(arr, target) {

  let left = 0;

  let right = arr.length - 1;

  while (left <= right) {

   let mid = Math.floor((left + right) / 2);

    if (arr[mid] == target) {

      return mid;

    } else if (target < arr[mid]) {

      right = mid - 1;

    } else {

      left = mid + 1;

    }

   

  } // end of while loop

return -1;

}

 

function resultEl(arr, resultTarget) {

     for (let i = 0; i < arr.length; i++) {

              return arr[resultTarget];

    }

} // end of main func

 

 

const resultTarget = binarySearch(arr, targetEl);

console.log('Given Index: ', resultTarget);

console.log('Given Element: ', resultEl(arr, resultTarget));
