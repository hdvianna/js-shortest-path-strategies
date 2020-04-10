const INFINITY = require('../src/GraphBuilder').INFINITY;

/**
 * Shortest distance from a vertex to all other vertices
 *  - For each vertex:
 *      - Shortest distance from a chosen vertex
 *      - Previous vertex
 *  - Two lists:
 *      - Visiteds
 *      - Unvisiteds
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
        let visiteds = [];
        let unvisiteds = vertices;

        table[start].shortestDistance = 0;
        strategy(start, 0);

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

        function strategy(current, cost) {
            visiteds.push(current);
            unvisiteds = unvisiteds.filter((item) => {
                return item !== current;
            });

            let destinations = Object.keys(graph[current]).reduce((possibleDestinations, destination) => {
                if (graph[current][destination] < INFINITY && visiteds.indexOf(destination) === -1) {
                    possibleDestinations.push(destination);
                }
                return possibleDestinations;
            }, []);

            let minCost = INFINITY;
            let next;
            for(let destination of destinations) {
                let newCost = graph[current][destination] + cost;
                if (newCost < minCost) {
                    next = destination;
                    minCost = newCost;
                }
                if (newCost < table[destination].shortestDistance) {
                    table[destination].shortestDistance = newCost;
                    table[destination].previous = current;
                }
            }

            if (next) {
                strategy(next, minCost);
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