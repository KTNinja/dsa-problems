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


function main() {

    let nodeCount = readInt();

    let adjacencylist = new Array(nodeCount+1);

    for(let i=0; i<=nodeCount; i++){
        adjacencylist[i] = new Array();
    }

    for(let i=0; i<nodeCount-1; i++){
        let [a, b] = readInts();
        adjacencylist[a].push(b);
        adjacencylist[b].push(a);
    }

    bfs(1, 0, adjacencylist);
    
}

class Queue {
    constructor(){
        this.head = 0;
        this.tail = 0;
        this.items = {};
    }

    push(element){
        this.items[this.tail] = element;
        this.tail++;
    }

    front(){
        return this.items[this.head];
    }

    pop(){
        let ele = this.items[this.head];
        delete(this.items[this.head]);
        this.head++;
        return ele;
    }
    
    isEmpty(){
        return this.items[this.head] === this.items[this.tail];
    }
}


function bfs(node, par, adjacencylist){
    let queue = new Queue();

    queue.push([node, par]);

    while(!queue.isEmpty()){
        let [node, par] = queue.pop();

        console.log(node, "\n");

        adjacencylist[node].forEach(ele => {
            if(ele !== par) queue.push([ele, node]);
        })
    }
}


