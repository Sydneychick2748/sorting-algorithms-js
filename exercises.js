// Question 1

function bubbleSort(arr) {
  const n = arr.length;

  // TODO: Implement the Bubble Sort algorithm

  // Outer loop iterates from the first element to the second-to-last element of the array
  for (let i = 0; i < n - 1; i++) {
    console.log(`Outer loop iteration ${i + 1}:`);
    // Inner loop iterates from the first element to the element before the last `i` elements of the array
    for (let j = 0; j < n - i - 1; j++) {
      console.log(`    Inner loop iteration ${j + 1}:`);
      // If the current element is greater than the next element, swap them
      if (arr[j] > arr[j + 1]) {
        console.log(`        Swapping ${arr[j]} and ${arr[j + 1]}`);
        // Store the value of the current element at index j in a temporary variable
        let temp = arr[j];

        // Replace the value of arr[j] with the value of the next element (arr[j + 1])
        arr[j] = arr[j + 1];

        // Replace the value of the next element (arr[j + 1]) with the value stored in the temporary variable
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// Exercise: Sort the array using the bubbleSort function
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted Array:", unsortedArray);

// TODO: Call the bubbleSort function to sort the array
const sortedArray = bubbleSort(unsortedArray);

console.log("Sorted Array:", sortedArray);

// Your task is to complete the implementation of the bubbleSort function. Use the Bubble Sort algorithm to sort the array in ascending order. Remember to swap elements when necessary and continue iterating through the array until it is fully sorted.

// Question 2:

function selectionSortWords(arr) {
  const n = arr.length;
  console.log("Array Length:", n); // Log the length of the array
  
  for (let i = 0; i < n - 1; i++) {
    console.log(`Outer loop iteration ${i + 1}:`); // Log the current iteration of the outer loop

    // Find the index of the minimum word in the unsorted part
     let minIndex = i;
    console.log("Initial minIndex:", minIndex); // Log the initial minIndex

    for (let j = i + 1; j < n; j++) {
      console.log(`    Inner loop iteration ${j - i}:`); // Log the current iteration of the inner loop

      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        console.log("Updated minIndex:", minIndex); // Log the updated minIndex
      }
    }

    // Swap the minimum word with the first unsorted word
    if (minIndex !== i) {
      console.log(`Swapping ${arr[i]} and ${arr[minIndex]}`); // Log the swapping operation

      // ***Store the value of the word at index i in a temporary variable
let temp = arr[i];

// ***Replace the value of the word at index i with the value of the minimum word found (at index minIndex)
arr[i] = arr[minIndex];

// ***Replace the value of the minimum word found (at index minIndex) with the value stored in the temporary variable (original word at index i)
arr[minIndex] = temp;

    }

    
  }

 
  return arr;
}

// Exercise: Sort the array using the selectionSortWords function
const unsortedWordsAlphabet = ["banana", "apple", "grape", "orange", "kiwi"];
console.log("Unsorted Words alphabet:", unsortedWordsAlphabet);

// Call the selectionSortWords function to sort the array
const sortedWordsAlphabet = selectionSortWords(unsortedWordsAlphabet);
console.log("Sorted Words alphabet:", sortedWordsAlphabet);

//Your task is to complete the implementation of the selectionSortWords function. Use the Selection Sort algorithm to sort the array of words in lexicographical order. Remember to find the index of the minimum word in the unsorted part and swap it with the first unsorted word.



//-------very hard for me i am not understanding this 
// Question 3
//loop threw the array starting at 1 to compare each item from the item before

// 
function insertionSortWords(arr) {
  const n = arr.length;

  // TODO: Implement the Insertion Sort algorithm
  for (let i =1; i<n ;i++){
    let current = arr[i]
  }
  return arr;
}

// Exercise: Sort the array using the insertionSortWords function
const unsortedNewWords = ["javascript", "python", "c++", "ruby", "go"];
 console.log("Unsorted Words:", unsortedNewWords);

// TODO: Call the insertionSortWords function to sort the array
const sortedNewWords = insertionSortWords(unsortedNewWords)
 console.log("Sorted Words:", sortedNewWords);
