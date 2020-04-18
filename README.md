# js-shortest-path-strategies
Algorithms strategies for finding graph shortest paths

## Usage

```npm install js-shortest-path``` 


### GreedyStrategy

```
    //Creates a graph
    const graph = GraphBuilder()
        .edge("S", "A", 2)
        .edge("S", "B", 4)
        .edge("A", "B", 1)
        .edge("A", "C", 2)
        .edge("B", "C", 3)
        .build();
    const greedy = Strategy(graph);


```
