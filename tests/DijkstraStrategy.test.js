const GraphBuilder = require('../src/GraphBuilder');
const Strategy = require('../src/DijkstraStrategy');

test('Paths of graph #1 from S to C', () => {
    const graph = GraphBuilder()
        .edge("S", "A", 2)
        .edge("S", "B", 4)
        .edge("A", "B", 1)
        .edge("A", "C", 2)
        .edge("B", "C", 3)
        .build();
    const dijkstra = Strategy(graph);

    const shortestPath = dijkstra.shortest("S", "C");
    const expectedShortestPath = {path: ['S', 'A', 'C'], cost: 4};
    expect(shortestPath.cost).toBe(expectedShortestPath.cost);
    expect(shortestPath.path()).toEqual(expect.arrayContaining(expectedShortestPath.path));
});

test('Paths of graph #2 from A to C', () => {
    const graph = GraphBuilder()
        .edge("A", "B", 6)
        .edge("A", "D", 1)
        .edge("B", "C", 5)
        .edge("B", "D", 2)
        .edge("B", "E", 2)
        .edge("D", "B", 2)
        .edge("D", "E", 1)
        .edge("E", "C", 5)
        .build();
    const dijkstra = Strategy(graph);

    const shortestPath = dijkstra.shortest("A", "C");
    const expectedShortestPath = {path: ['A', 'D', 'E', 'C'], cost: 7};
    expect(shortestPath.cost).toBe(expectedShortestPath.cost);
    expect(shortestPath.path()).toEqual(expect.arrayContaining(expectedShortestPath.path));
});

test('Disconnected path', () => {
    const graph = {
        '1': {'1': 0, '2': 1, '3': 1, '4': 9007199254740991},
        '2': {'1': 9007199254740991,'2': 0,'3': 9007199254740991,'4': 9007199254740991},
        '3': {'1': 9007199254740991,'2': 9007199254740991,'3': 0,'4': 9007199254740991},
        '4': {'1': 9007199254740991,'2': 9007199254740991,'3': 9007199254740991,'4': 0}
    };
    const dijkstra = Strategy(graph);
    let result = dijkstra.shortest(1, 2);
    expect(result.cost).toBe(1);

    result = dijkstra.shortest(1, 3);
    expect(result.cost).toBe(1);

    result = dijkstra.shortest(1, 4);
    expect(result.cost).toBe(Strategy.INFINITY);

});