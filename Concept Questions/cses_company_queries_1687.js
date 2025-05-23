"use strict";

function Main(input) {
    // Split input into lines and set up a pointer
    const lines = input.trim().split('\n');
    let ptr = 0;

    // Input helpers
    const readLine = () => lines[ptr++] || "";
    const readInt = () => parseInt(readLine(), 10);
    const readInts = () => readLine().split(/\s+/).map(Number);
    const readString = () => readLine().trim();
    const readStrings = () => readLine().split(/\s+/);
    const readBigInts = () => readLine().split(/\s+/).map(BigInt);

    // Example usage (replace with your logic):

    // Read n and q (two integers on one line)
    let [n, q] = readInts();

    // Read an array of n-1 integers (next line)
    const arr = readInts();

    // setAdjList(adjacency_list, arr);

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

    // dfs(1, 0, parent, adjacency_list);

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

        if(elem === 0) console.log(-1);
        else console.log(elem);

    }  
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));