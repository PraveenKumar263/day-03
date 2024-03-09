// Anonymous function for odd numbers
var oddNums = function(arr) {
    arr.forEach(function(num) { 
        if (num%2!==0) { 
            console.log(num); 
        } 
    }); 
};
var array = [1,2,3,4,5,6,7];
console.log(oddNums(array));

// IIFE for odd numbers
var array = [1,2,3,4,5,6,7];
(function(arr) {
    arr.forEach(function(num) { 
        if (num%2!==0) { 
            console.log(num); 
        } 
    }); 
})(array);

// Anonymous function to Convert all the strings to title caps in a string array
var stringArr = ["hello", "world"];
var titleCaps = function (arr) {
    arr.forEach(function(word, idx) {
        new_word = [];
        for (let i=0; i < word.length; i++) {
            if (i === 0) {
                new_word.push(word[i].toUpperCase());
            }
            else {
                new_word.push(word[i].toLowerCase());
            }
        }
        arr[idx] = new_word.join('');
    });
    console.log(arr);
};
titleCaps(stringArr);

// IIFE function to Convert all the strings to title caps in a string array
var stringArr = ["hello", "world"];
(function (arr) {
    arr.forEach(function(word, idx) {
        new_word = [];
        for (let i=0; i < word.length; i++) {
            if (i === 0) {
                new_word.push(word[i].toUpperCase());
            }
            else {
                new_word.push(word[i].toLowerCase());
            }
        }
        arr[idx] = new_word.join('');
    });
    console.log(arr);
}) (stringArr);


// Anonymous function to Sum of all numbers in an array
var arrSum = function(nums) {
    let sum = 0;
    nums.forEach(function(num){
        sum += Number(num);
    });
    return sum;
}
var array = [1,2,3,4,5];
console.log(arrSum(array))

// IIFE function to Sum of all numbers in an array
var array = [1,2,3,4,5];
(function(nums) {
    let sum = 0;
    nums.forEach(function(num){
        sum += Number(num);
    });
    console.log(sum);
})(array);

// Anonymous function Return all the prime numbers in an array
// 1 and below is not a prime number
// for loop need to check if the number has a factor
// iterate to sqrt(nums) since
// factors of a number will always be less than or equal to its square root
var getPrimeNumbers = function(arr) {
    return arr.filter(function(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
};
var array = [1,2,3,4,5];
console.log(getPrimeNumbers(array))

// IIFE function Return all the prime numbers in an array
var array = [1,2,3,4,5];
(function(arr) {
    var result = arr.filter(function(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
    console.log(result);
})(array);

// Helper function to check if a str is palindrome
// Check if the 2 pointers l and r mathc, if not return false
var isPalindrome = function(str) {
    let l = 0;
    let r = str.length - 1;
    while (l < r) {
        if(str[l]!=str[r]) {
            return false
        }
        l++;
        r--;
    }
    return true;
}
// Anonymous function Return all the palindromes in an array
var getPalindrome = function(arr) {
    return arr.filter(item => {
        if (typeof item === 'string') {
            return isPalindrome(item);
        } else if (typeof item === 'number') {
            return isPalindrome(item.toString());
        } else {
            return false;
        }
    });
}
var array = [121,323,111,41,25];
var s = ['abc', 'aaa', 'def', 'aba'];
console.log(getPalindrome(array));
console.log(getPalindrome(s));

// IIFE function Return all the palindromes in an array
var array = [121,323,111,41,25];
(function(arr) {
    let result = arr.filter(item => {
        if (typeof item === 'string') {
            return isPalindrome(item);
        } else if (typeof item === 'number') {
            return isPalindrome(item.toString());
        } else {
            return false;
        }
    });
    console.log(result);
})(array);

// Return median of two sorted arrays of the same size.
// median is the middle number if odd, median of middle 2 num if even
var median = function(A,B) {
    // Since both arr same len
    let half = A.length;
    let total = half*2;
    let l=0;
    let r=A.length-1;
    let arrLen = half;
    while(true) {
        i = Math.floor((l+r)/2); // point to idx of mid A
        j = half-i-2; // point to idx of mid B

        Aleft = i>=0 ?  A[i]:Infinity;
        Aright = i+1<arrLen ? A[i+1]:Number.NEGATIVE_INFINITY;
        Bleft = j>=0 ? B[j]:Infinity;
        Bright = j+1<arrLen ? B[j+1]:Number.NEGATIVE_INFINITY;
        
        // Check if the arr are partitioned correctly
        if(Aleft<=Bright && Bleft <= Aright) {
            // Even num
            if (total%2==0) {
                return (Math.max(Aleft,Bleft) + Math.min(Aright,Bright)) / 2;
            }
            // Odd num
            else {
                return Math.min(Aright,Bright);
            }
        }
        // Check if left mid value of A > B mid+1
        // if yes then we need to increase the mid increase of B
        // inversely decrease the mid index of A
        // Bascially B left parition is increased
        else if(Aleft>Bright) {
            r = i-1;
        }
        else {
            l = i+1;
        }
    }
};
var arr1=[1,2,3];
var arr2=[3,4,5];
console.log(median(arr1,arr2));

// IIFE of median of sorted 2 array'
var arr1=[1,2,3];
var arr2=[3,4,5];
(function(A,B) {
    // Since both arr same len
    let half = A.length;
    let total = half*2;
    let l=0;
    let r=A.length-1;
    let arrLen = half;
    var result = 0;
    while(true) {
        i = Math.floor((l+r)/2); // point to idx of mid A
        j = half-i-2; // point to idx of mid B

        Aleft = i>=0 ?  A[i]:Infinity;
        Aright = i+1<arrLen ? A[i+1]:Number.NEGATIVE_INFINITY;
        Bleft = j>=0 ? B[j]:Infinity;
        Bright = j+1<arrLen ? B[j+1]:Number.NEGATIVE_INFINITY;
        
        // Check if the arr are partitioned correctly
        if(Aleft<=Bright && Bleft <= Aright) {
            // Even num
            if (total%2==0) {
                result = (Math.max(Aleft,Bleft) + Math.min(Aright,Bright)) / 2;
                break;
            }
            // Odd num
            else {
               result = Math.min(Aright,Bright);
               break;
            }
        }
        // Check if left mid value of A > B mid+1
        // if yes then we need to increase the mid increase of B
        // inversely decrease the mid index of A
        // Bascially B left parition is increased
        else if(Aleft>Bright) {
            r = i-1;
        }
        else {
            l = i+1;
        }
    }
    console.log(result);
})(arr1,arr2);

// Remove duplicates from an array anonymous
var removeDuplicates= function(arr) {
    var freqMap = {};
    var result = [];
    arr.forEach(function(item, index){
        // if item already exist in freqMap, we need to remove it from result arr
        // since we don't want to return duplicates
        if (item in freqMap) {
            let removeIdx = result.indexOf(item);
            if (removeIdx>-1) {result.splice(removeIdx, 1);}
        }
        else {
            freqMap[item] = 1;
            result.push(item);
        }
    });
   return result;
}
var arr = [1,2,2,3,4,4,4,5];
console.log(removeDuplicates(arr));

// Remove duplicates from an array IIFE
var arr = [1,2,2,3,4,4,4,5];
(function(arr) {
    var freqMap = {};
    var result = [];
    arr.forEach(function(item, index){
        if (item in freqMap) {
            let removeIdx = result.indexOf(item);
            if (removeIdx>-1) {result.splice(removeIdx, 1);}
        }
        else {
            freqMap[item] = 1;
            result.push(item);
        }
    });
    console.log(result);
})(arr);

// Helper function to reverse arr
function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// Rotate an array by k times, anonymous
var rotateArray = function(arr, k) {
    if (k==0) return arr;

    let n = arr.length;
    k = k % n; // in case k is larger than the array length
    reverse(arr, 0, n-1); // To reverse arr
    reverse(arr, 0, k-1); // To reverse the first k elements
    reverse(arr, k, n-1); // To reverse remaining elements

    return arr;
}
var array = [1,2,3,4,5];
var k = 2;
console.log(rotateArray(array, k));

// Rotate an array by k times, IIFE
var array = [1,2,3,4,5];
var k = 2;
(function(arr, k) {
    if (k==0) return arr;

    let n = arr.length;
    k = k % n; // in case k is larger than the array length
    reverse(arr, 0, n-1); // To reverse arr
    reverse(arr, 0, k-1); // To reverse the first k elements
    reverse(arr, k, n-1); // To reverse remaining elements

    console.log(arr);
})(array, k);

// Do the below programs in arrow functions.
// Print odd numbers in an array
var arr = [1,2,3,4,5];
var oddNums = (arr) =>{
    arr.forEach(function(num) { 
        if (num%2!==0) { 
            console.log(num); 
        } 
    }); 
};
oddNums(arr);

// arrow function
// Convert all the strings to title caps in a string array
var stringArr = ["hello", "world"];
var titleCaps = (arr) => {
    arr.forEach((word, idx) => {
        new_word = [];
        for (let i=0; i < word.length; i++) {
            if (i === 0) {
                new_word.push(word[i].toUpperCase());
            }
            else {
                new_word.push(word[i].toLowerCase());
            }
        }
        arr[idx] = new_word.join('');
    });
    console.log(arr);
};
titleCaps(stringArr);

// arrow function
// Sum of all numbers in an array
var arrSum = (nums) => {
    let sum = 0;
    nums.forEach((num) => {
        sum += Number(num);
    });
    return sum;
}
var arr = [1,2,3,4,5];
console.log(arrSum(arr));

// Return all the prime numbers in an array
// arrow function Return all the prime numbers in an array
var getPrimeNumbers = (arr) => {
    return arr.filter((num) => {
        if (num <= 1) return false;
        if (num === 2) return true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
};
var array = [1,2,3,4,5];
console.log(getPrimeNumbers(array))

// arrow function
// Return all the palindromes in an array
// Helper function to check if a str is palindrome
// Check if the 2 pointers l and r mathc, if not return false
var isPalindrome = function(str) {
    let l = 0;
    let r = str.length - 1;
    while (l < r) {
        if(str[l]!=str[r]) {
            return false
        }
        l++;
        r--;
    }
    return true;
}

// Return all the palindromes in an array
var getPalindrome = (arr) =>{
    return arr.filter(item => {
        if (typeof item === 'string') {
            return isPalindrome(item);
        } else if (typeof item === 'number') {
            return isPalindrome(item.toString());
        } else {
            return false;
        }
    });
}
var array = [121,323,111,41,25];
var s = ['abc', 'aaa', 'def', 'aba'];
console.log(getPalindrome(array));
console.log(getPalindrome(s));