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

let level;

let ancestor;

function dfs(node, par, ht, adjacencylist){
    let stack = [{node: node, par: par, ht: ht}];

    while(stack.length > 0){
        let {node, par, ht} = stack.pop();

        ancestor[node][0] = par;

        level[node] = ht;
        

        for(let i=adjacencylist[node].length - 1; i>=0; i--){
            if(adjacencylist[node][i] !== par){
                stack.push({node: adjacencylist[node][i], par: node, ht: ht+1});
            }
        }
    }
}

function setAncestor(ancestor, nodeCount){
    for(let i=1; i<=20; i++){
        for(let j=2; j<=nodeCount; j++){
            ancestor[j][i] = ancestor[ancestor[j][i-1]][i-1];
        }
    }
}

// a, b, level array, ancestor array
function lca(a, b, level, ancestor){
    // level[a] < level[b]
    if(level[a] > level[b]) [a, b] = [b, a];

    let diff = level[b] - level[a];

    let cnt = 0;

    while(diff){
        if(diff&1){
            b = ancestor[b][cnt];
        }
        cnt++;
        diff = diff>>1;
    }

    for(let i=20; i>=0; i--){
        if(ancestor[a][i] !== ancestor[b][i]){
            a = ancestor[a][i];
            b = ancestor[b][i];
        }
    }

    return ancestor[a][0];

}



// Main function to handle the problem
function main() {

    const [nodeCount, q] = readInts();

    let adjacencylist = new Array(nodeCount+1);

    for(let i=0; i<nodeCount+1; i++){
        adjacencylist[i] = new Array();
    }

    for(let i=0; i<nodeCount-1; i++){
        let [a, b] = readInts();
        adjacencylist[a].push(b);
        adjacencylist[b].push(a);
    }

    level = new Array(nodeCount+1);

    ancestor = new Array(nodeCount+1).fill(-1).map(() => new Array(21).fill(0));

    dfs(1, 0, 1, adjacencylist);

    setAncestor(ancestor, nodeCount);



    let output = [];

    for(let i=0; i<q; i++){
        let arr = readInts();
        output.push(solve(arr));
    }

    console.log(output.join('\n'));

}

/**
 * Your solution function - implement your logic here
 * @param {number} n - The first parameter (example: length of array)
 * @param {number[]} arr - The second parameter (example: array of integers)
 * @returns {string|number} - The result to be printed
 */
function solve(arr) {
    // Your solution logic goes here
    let k = arr[0];
    //arr[1] to arr[k] are the vertices
     let maxLevelElement = arr[1];

     for(let i=2; i<=k; i++){
        if(level[arr[i]] > level[maxLevelElement]) maxLevelElement=arr[i];
     }

     for(let i=1; i<=k; i++){
        if(level[arr[i]] - level[lca(arr[i], maxLevelElement, level, ancestor)] > 1) return "NO";
     }
     return "YES";
    
    
}