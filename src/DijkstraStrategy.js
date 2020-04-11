const INFINITY = require('../src/GraphBuilder').INFINITY;

/**
 * Shortest distance from a vertex to all other vertices
 *  - For each vertex:
 *      - Shortest distance from a chosen vertex
 *      - Previous vertex
 *  - Two lists:
 *      - Visited
 *      - Unvisited
 */
function DijkstraStrategy(graph) {

    return {
        paths(start, end) {
            throw new Error("I'm not supposed to do this!");
        },
        shortest(start, end) {
            return computePath(start, end);
        }
    };

    function computePath(start, end) {

        let vertices = Object.keys(graph);
        let table = createTable(vertices);
        let visited = [];
        let unvisited = vertices;

        strategy();
        return {
            'path': backtrackPath(end),
            'cost': table[end].shortestDistance
        };

        function createTable(vertices) {
            return vertices.reduce((previous, vertex) => {
                previous[vertex] = {
                    shortestDistance: INFINITY,
                    previous: ""
                };
                return previous;
            }, {})
        }

        function strategy() {
            table[start].shortestDistance = 0;
            while (unvisited.length > 0) {
                /*Visit the unvisited node with the shortest distance*/
                let current = unvisited.reduce((last, item) => {
                    if(!last || table[item].shortestDistance < table[last].shortestDistance) {
                        return item;
                    } else {
                        return last;
                    }
                }, "");
                /*Update distances of edges*/
                let edges = Object.keys(graph[current]).filter((edge) => {
                    return edge != current && graph[current][edge] < INFINITY;
                });
                let currentDistance = table[current].shortestDistance;
                for(let edge of edges) {
                    let newDistance = currentDistance + graph[current][edge];
                    if (newDistance < table[edge].shortestDistance) {
                        table[edge].shortestDistance = newDistance;
                        table[edge].previous = current;
                    }
                }
                /*Mark the node as visited*/
                visited.push(current);
                /*Remove the node from unvisited*/
                unvisited = unvisited.filter((item) => {
                    return item !== current;
                });
            }
        }

        function backtrackPath(current) {
            if(current === start) {
                return [current];
            } else {
                let path = backtrackPath(table[current].previous);
                path.push(current);
                return path;
            }
        }

    }
}

DijkstraStrategy.INFINITY = Number.MAX_SAFE_INTEGER;

module.exports = DijkstraStrategy;