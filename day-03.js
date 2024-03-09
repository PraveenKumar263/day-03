// This can be used in real time applications 
// e.g. To keep track of the website traffic
function getMaxOccurence(arr) {
    let hashMap = {};
    let maxCount = 1; // The min occurence of every element is 1
    let maxElement = arr[0];
    for(let i=1; i<arr.length; i++) {
        let ele = arr[i];
        // Occurence of element
        hashMap[ele] = hashMap[ele] ? hashMap[ele]++:1;
        // Check if the current element
        // has higher occurence than the maxOccurence
        if (hashMap[ele] > maxCount) {
            maxElement = ele;
            maxCount = hashMap[ele];
        }
    }
    return maxElement;
}