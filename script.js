function stringChop(str, size) {
  // If the string is null or the chunk size is not positive, return an empty array
  if (!str || size <= 0) {
    return [];
  }

  // Initialize an empty array to store the chunks
  let result = [];

  // Loop through the string in steps of 'size'
  for (let i = 0; i < str.length; i += size) {
    // Extract a substring from the current index 'i' of length 'size'
    result.push(str.substring(i, i + size));
  }

  return result;
}

// Test the function with user input
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."));
alert(stringChop(str, size));
