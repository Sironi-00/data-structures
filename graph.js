class Vertex {
    // node
    constructor (data) {
        this.data = data;
        this.edges = [];
    }
    addEdge(vertex, weight) {
        const newEdge = new Edge(this, vertex, weight)
        this.edges.push(newEdge);
    }
    print() {
        console.log(`# ${this.data} :=> ${this.edges.map(e=>`${e.end.data} (${e.weight || "0"})`)}`);
    }

}

class Edge {
    // link between
    constructor (v1, v2, weight = null) {
        this.start = v1;
        this.end = v2;
        this.weight = weight;
    }
}

class Graph {
    // vertexes + Edges
    constructor(isWeighted = false) {
        this.vertices = [];
        this.isWeighted = isWeighted;
    }
    addVertex(data) {
        const newVertex = new Vertex(data);
        this.vertices.push(newVertex)
        return newVertex;
    }
    removeVertex(vertex) {
        this.vertices = this.vertices.filter(v => v !== vertex);
    }

    addEdge(v1, v2, weight = null) {
        v1.addEdge(v2, weight);
    }
    removeEdge(v1, v2) {
        v1.removeEdge(v2);
    }
    print() {
        this.vertices.forEach(v => {
            v.print();
        });
    }

}

const net = new Graph();
const laptop = net.addVertex("Laptop");
const mobile = net.addVertex("Mobile");
const router = net.addVertex("Router");
const internet = net.addVertex("Internet");
const serve = net.addVertex("Server");

// net.print();

net.addEdge(laptop, router, 1);
net.addEdge(laptop, internet, 0.5);

net.addEdge(mobile, router);
net.addEdge(mobile, internet);

net.addEdge(router, internet);
net.addEdge(internet, router);
net.addEdge(serve, internet);

net.print();

