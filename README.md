# js-shortest-path-strategies
Algorithms strategies for finding graph shortest paths

## Usage

```npm install js-shortest-path``` 


### GreedyStrategy

```javascript
const {GraphBuilder, GreedStrategy} = require('js-shortest-path');

//Creates a graph
const graph = GraphBuilder()
    .edge("S", "A", 2)
    .edge("S", "B", 4)
    .edge("A", "B", 1)
    .edge("A", "C", 2)
    .edge("B", "C", 3)
    .build();

const greedy = GreedStrategy(graph);

//Prints all paths from S to C
console.log(greedy.paths('S','C'));

//Prints the shortest path from S to C
console.log(greedy.shortest('S','C'));

```

### DijkstraStrategy

```javascript
const {GraphBuilder, DijkstraStrategy} = require('js-shortest-path');

//Creates a graph
const graph = GraphBuilder()
    .edge("S", "A", 2)
    .edge("S", "B", 4)
    .edge("A", "B", 1)
    .edge("A", "C", 2)
    .edge("B", "C", 3)
    .build();

const dijkstra = DijkstraStrategy(graph);

//Prints the shortest path from S to C
console.log(dijkstra.shortest('S','C'));

```
