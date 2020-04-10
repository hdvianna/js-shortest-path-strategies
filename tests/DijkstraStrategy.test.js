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
    expect(shortestPath).toMatchObject(expectedShortestPath);
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
    expect(shortestPath).toMatchObject(expectedShortestPath);
});