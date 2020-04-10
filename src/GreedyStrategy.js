const INFINITY = require('../src/GraphBuilder').INFINITY;

function GreedyStrategy(graph) {
    
    return {
        paths(start, end) {
            return computePaths(start, end);
        },
        shortest(start, end) {
            return computePaths(start, end).reduce((carry, value) => {
                if (!carry || value.cost < carry.cost) {
                    return value;
                } else {
                    return carry;
                }
            }, null);
        }
    };

    function computePaths(start, end) {

        let paths = {};

        strategy("", start, 0);

        return Object.keys(paths).map((path) => {
            return {
                path: path.split(",").slice(1),
                cost: paths[path]
            }
        });

        function strategy(stringPath, current, cost) {
            let path = stringPath.split(",");
            path.push(current);
            let newStringPath = path.join(",");
            if (current === end) {
                paths[newStringPath] = cost;
            } else {
                const vertice = graph[current];
                for (let edge in vertice) {
                    let visited = newStringPath.split(",").slice(1).indexOf(edge) > -1;
                    if (!visited && vertice[edge] < INFINITY && edge != current) {
                        strategy(newStringPath, edge, (cost + vertice[edge]));
                    }
                }
            }
        }
    }
}

GreedyStrategy.INFINITY = Number.MAX_SAFE_INTEGER;

module.exports = GreedyStrategy;