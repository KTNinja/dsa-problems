
let nodeCount = 8;
//let the nodes are 1, 2, 3, 4, .... , nodeCount
let adjacencylist = new Array(nodeCount+1);

for(let i=0; i<=nodeCount; i++){
    adjacencylist[i] = new Array();
}

// let there be array of sides, where each element consists of [node1, node2] which are connected 
let sides = new Array(nodeCount-1); // This will absically be given in the question, so we will get the sides array

sides = [[1,5],[1,6],[1,4],[6,7],[4,3],[4,8],[3,2]];

sides.forEach(side => {
    let x = side[0];
    let y = side[1];

    adjacencylist[x].push(y);
    adjacencylist[y].push(x);
})



function dfsRecursive(node, par){

    console.log(node, "\n");
    adjacencylist[node].forEach(ele => {
        if(ele !== par){
            dfsRecursive(ele, node);
        }
    })
}

function dfsIterative(node, par){

    let stack = [{node: node, par: par}];

    while(stack.length > 0){
        let {node, par} = stack.pop();

        console.log(node, "\n")

        for(let i=adjacencylist[node].length - 1; i>=0; i--){
            if(adjacencylist[node][i] !== par) stack.push({node: adjacencylist[node][i], par: node});
        }
    }
}

console.log("RECURSIVE\n")
dfsRecursive(1,0);
console.log("\n", adjacencylist);
console.log("\n Iterative \n")
dfsIterative(1,0);
