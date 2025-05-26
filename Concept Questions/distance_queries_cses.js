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
    const [n, q] = readInts();

    let adjacencylist = new Array(n+1);

    let height = new Array(n+1).fill(-1);

    let ancestor = new Array(n+1).fill(-1).map(() => new Array(21).fill(0));

    for(let i=0; i<=n; i++){
        adjacencylist[i] = new Array();
    }

    for(let i=0; i<n-1; i++){
        let [a, b] = readInts();
        adjacencylist[a].push(b);
        adjacencylist[b].push(a);
    }

    

    let stack = [{node: 1, parent: 0, ht: 1}];


    while(stack.length > 0){
        let {node, parent, ht} = stack.pop();

        ancestor[node][0] = parent;

        height[node] = ht;

        for(let i=adjacencylist[node].length - 1; i>=0; i--){
            if(adjacencylist[node][i] !== parent) stack.push({node: adjacencylist[node][i], parent: node, ht: ht+1});
        }
    }

    


    for(let i=1; i<=20; i++){
        for(let j=2; j<=n; j++){
            ancestor[j][i] = ancestor[ancestor[j][i-1]][i-1];
        }
    }

    let output = new Array();

    for(let i=0; i<q; i++){
        let [a, b] = readInts();
        //find the distance between these two nodes
        let distance = height[a] + height[b] - 2*(height[lca(a,b,height,ancestor)]);
        output.push(distance);
    }

    console.log(output.join('\n'));
}



function lca(a, b, height, ancestor){
    //a is above and b is below

    if(height[a]>height[b]){
        [a, b] = [b, a];
    }

    let diff = height[b] - height[a];

    let cnt = 0;

    while(diff){
        if(diff&1){
            b = ancestor[b][cnt];
        }
        cnt++;
        diff = diff>>1;
    }

    if(a === b) return a;

    for(let i=20; i>=0; i--){
        if(ancestor[a][i] !== ancestor[b][i]){
            a = ancestor[a][i];
            b = ancestor[b][i];
        }
    }

    return ancestor[a][0];
}


