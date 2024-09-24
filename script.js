function stringChop(str, size) {
  // If the input string is null or empty, return an empty array
  if (!str) return [];

  // Initialize an array to store the chunks
  const chunks = [];
  
  // Loop through the string, slicing it into chunks of the given size
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }
  
  return chunks;
}

// Test the function
const str = prompt("Enter String:");
const size = parseInt(prompt("Enter Chunk Size:")); // Convert size to a number
alert(JSON.stringify(stringChop(str, size))); // Use JSON.stringify to format array output
