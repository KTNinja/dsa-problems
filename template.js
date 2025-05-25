/*

// AtCoder Boilerplate for Node.js 18.16.1
process.stdin.resume();
process.stdin.setEncoding('utf8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Utility functions for parsing input
function readInt() {
    return parseInt(readLine());
}

function readInts() {
    return readLine().split(' ').map(Number);
}

function readIntMatrix(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push(readInts());
    }
    return matrix;
}

function readStrings() {
    return readLine().split(' ');
}

function readString() {
    return readLine();
}

// Main function to handle the problem
function main() {
    // Example: Reading different types of inputs
    
    // Example 1: Single integer
    // const n = readInt();
    
    // Example 2: Multiple integers on a single line
    // const [n, m] = readInts();
    
    // Example 3: Array of integers
    // const arr = readInts();
    
    // Example 4: 2D matrix
    // const n = readInt();
    // const matrix = readIntMatrix(n);
    
    // Example 5: String
    // const s = readString();
    
    // Call your solution function with the appropriate parameters
    // const result = solve(n, m, arr, matrix, s);
    const result = solve();
    console.log(result);
}

/**
 * Your solution function - implement your logic here
 * @param {number} n - The first parameter (example: length of array)
 * @param {number[]} arr - The second parameter (example: array of integers)
 * @returns {string|number} - The result to be printed
 */

/*
function solve() {
    // Your solution logic goes here
    
}

*/





//////////////////////////////// TEMPLATE ///////////////////////////////////////

{
	"AtCoder Boilerplate": {
	  "prefix": "atc",
	  "body": [
		"// AtCoder Boilerplate for Node.js 18.16.1",
		"process.stdin.resume();",
		"process.stdin.setEncoding('utf8');",
		"",
		"let inputString = '';",
		"let currentLine = 0;",
		"",
		"process.stdin.on('data', (inputStdin) => {",
		"    inputString += inputStdin;",
		"});",
		"",
		"process.stdin.on('end', () => {",
		"    inputString = inputString.trim().split('\\n');",
		"    main();",
		"});",
		"",
		"function readLine() {",
		"    return inputString[currentLine++];",
		"}",
		"",
		"// Utility functions for parsing input",
		"function readInt() {",
		"    return parseInt(readLine());",
		"}",
		"",
		"function readInts() {",
		"    return readLine().split(' ').map(Number);",
		"}",
		"",
		"function readIntMatrix(n) {",
		"    let matrix = [];",
		"    for (let i = 0; i < n; i++) {",
		"        matrix.push(readInts());",
		"    }",
		"    return matrix;",
		"}",
		"",
		"function readStrings() {",
		"    return readLine().split(' ');",
		"}",
		"",
		"function readString() {",
		"    return readLine();",
		"}",
		"",
		"// Main function to handle the problem",
		"function main() {",
		"    // Example: Reading different types of inputs",
		"    ",
		"    // Example 1: Single integer",
		"    // const n = readInt();",
		"    ",
		"    // Example 2: Multiple integers on a single line",
		"    // const [n, m] = readInts();",
		"    ",
		"    // Example 3: Array of integers",
		"    // const arr = readInts();",
		"    ",
		"    // Example 4: 2D matrix",
		"    // const n = readInt();",
		"    // const matrix = readIntMatrix(n);",
		"    ",
		"    // Example 5: String",
		"    // const s = readString();",
		"    ",
		"    // Call your solution function with the appropriate parameters",
		"    // const result = solve(n, m, arr, matrix, s);",
		"    const result = solve();",
		"    console.log(result);",
		"}",
		"",
		"/**",
		" * Your solution function - implement your logic here",
		" * @param {number} n - The first parameter (example: length of array)",
		" * @param {number[]} arr - The second parameter (example: array of integers)",
		" * @returns {string|number} - The result to be printed",
		" */",
		"function solve() {",
		"    // Your solution logic goes here",
		"    ",
		"}"
	  ],
	  "description": "Boilerplate code for AtCoder contests using Node.js"
	}
  }
  


