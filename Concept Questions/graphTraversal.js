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

    const [n, m] = readInts();
    let adjacencylist = new Array(n+1);
    let visited = new Array(n+1).fill(0);

    for(let i=0; i<=n; i++){
        adjacencylist[i] = new Array();
    }

    for(i=0; i<m; i++){
        let [x, y] = readInts();
        adjacencylist[x].push(y);
        adjacencylist[y].push(x);
    }

    let no_of_components = 0;

    let cycle = 0;

    for(let i=1; i<=n; i++){
        if(!visited[i]){
            no_of_components++;
            // dfsGraph(i, visited, adjacencylist);
            if(detectCycle(i, 0, visited, adjacencylist)){
                console.log("yes");
                cycle = 1;
                break;
            }
        }
    }
    if(!cycle) console.log("No");

    console.log(no_of_components);
          
}


function dfsGraph(node, visited, adjacencylist){
    console.log(node, "\n");
    visited[node] = 1;
    adjacencylist[node].forEach(ele => {
        if(!visited[ele]){
            dfsGraph(ele, visited, adjacencylist);
        }
    })
}

function detectCycle(node, par, visited, adjacencylist){
    visited[node] = 1;
    for(let i=0; i<adjacencylist[node].length; i++){
        let ele = adjacencylist[node][i];
        if(visited[ele] && ele!==par) return true;
        if(!visited[ele]){
            if(detectCycle(ele, node, visited, adjacencylist)) return true;
        }
    }
    return false;
}