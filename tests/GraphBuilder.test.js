const GraphBuilder = require('../src/GraphBuilder');

test('Graph #1 build', () => {
    const graph = GraphBuilder()
        .edge("S", "A", 2)
        .edge("S", "B", 4)
        .edge("A", "B", 1)
        .edge("A", "C", 2)
        .edge("B", "C", 3)
        .build();
    expect(graph).toMatchObject({
            "S": {
                "S": 0, "A": 2, "B": 4, "C": GraphBuilder.INFINITY
            },
            "A": {
                "S": GraphBuilder.INFINITY, "A": 0, "B": 1, "C": 2
            },
            "B": {
                "S": GraphBuilder.INFINITY, "A": GraphBuilder.INFINITY, "B": 0, "C": 3
            },
            "C": {
                "S": GraphBuilder.INFINITY, "A": GraphBuilder.INFINITY, "B": GraphBuilder.INFINITY, "C": 0
            }
        }
    );

});