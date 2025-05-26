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

    let [n, q] = readInts();
    const arr = readInts();

    let parent = new Array(n+1).fill(-1).map(() => new Array(21).fill(0));

    for(let i=2; i<=n; i++){
        parent[i][0] = arr[i-2];
    }

    for(let j=1; j<=20; j++){
        for(let i=2; i<=n; i++){
            let temp = parent[i][j-1]
            parent[i][j] = parent[temp][j-1];
        }
    }

    let output = new Array();

    while(q--){
        let [x, k] = readInts();

        let cnt = 0;
        let elem = x;

        while(k){
            if(k&1){
                elem = parent[elem][cnt];
                if(elem === 0) break;
            }
            k = k>>1;
            cnt++;
        }

        if(elem === 0) output.push(-1);
        else output.push(elem);

    }

    console.log(output.join('\n'));

}