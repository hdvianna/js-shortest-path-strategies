function GraphBuilder() {

    let graph = {};
    let vertices = [];

    return {
        edge(from, to, cost) {
            createEdgeIfNotExists(from, to);
            createEdgeIfNotExists(to, from);
            graph[from][to] = cost;
            return this;
        },
        build() {
            appendInfinityToGraph();
            return graph;
        }
    }

    function createEdgeIfNotExists(from, to) {
        if(!(from in graph)) {
            graph[from] = {};
            graph[from][from] = 0;
            graph[from][to] = GraphBuilder.INFINITY;
            vertices.push(from);
        }
    }

    function appendInfinityToGraph() {
        vertices.forEach(function (vertice) {
            let node = graph[vertice];
            vertices.forEach(function (vertice) {
                if (! (vertice in node)) {
                    node[vertice] = GraphBuilder.INFINITY;
                }
            });
        });
    }
}
GraphBuilder.INFINITY = Number.MAX_SAFE_INTEGER;

module.exports = GraphBuilder;