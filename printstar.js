function printPyramid(height) {
    for (let i = 1; i <= height; i++) {
      // Add spaces before the asterisks to center the pyramid
      let spaces = ' '.repeat(height - i);
  
      // Add asterisks for this row
      let asterisks = '*'.repeat(2 * i - 1);
  
      // Print the row
      console.log(spaces + asterisks);
    }
  }
  
  // Call the function with the desired height of the pyramid (e.g., 5)
  printPyramid(5);
  