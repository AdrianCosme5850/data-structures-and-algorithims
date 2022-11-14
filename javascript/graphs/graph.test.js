'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 1) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencies = new Map(); // this is a built in HashTable
  }

  /**
   * Adds a new Vertex to the Graph Adjacency list
   * @param {any} value
   */
  addVertex(value) {
    let vertex = new Vertex(value);
    this.adjacencies.set(vertex, []);
    return vertex;
  }

  /**
   * Adds a new edge between vertices
   * @param {Vertex} startVertex
   * @param {Vertex} edgeVertex
   */
  addEdge(startVertex, endVertex) {
    if (this.adjacencies.has(startVertex) && this.adjacencies.has(endVertex)) {
      let edges = this.adjacencies.get(startVertex); // []
      edges.push(new Edge(endVertex));
    } else {
      throw new Error('Invalid input Vertex');
    }
  }

  /**
   * Returns a list of all neighboring Vertices of the input Vertex
   * @param {Vertex} Vertex
   */
  getNeighbors(Vertex) {
    let adjacencies = this.adjacencies.get(Vertex);
    let newArr = [];
    for(let adjacent of adjacencies){
      newArr[newArr.length] = adjacent.vertex.value;
    }
    return newArr;
  }

  /**
   * Return all Nodes that are listed in the adjacency list
   */
  getNodes() {
    let newArr = [];
    let adjacencies = this.adjacencies.entries();
    for(let adjacent of adjacencies){
      newArr[newArr.length] = adjacent[0];
    }
    return newArr;
  }

  /**
   * Returns the total number of nodes in the graph.
   */
  size() {
    return this.adjacencies.size;
  }
}
let graph = new Graph();
let vertexA = graph.addVertex('a');
graph.addVertex('b');
let vertexC = graph.addVertex('c');
graph.addEdge(vertexA, vertexC);


describe('Testing the methods in the graphs class', () => {
  test('Our get neighbors function should return an array of the edges on a vertex', () => {
    expect(graph.getNeighbors(vertexA)).toEqual(['c']);
  });
  test('The get nodes function should return an array of all the vertexes', () => {
    let nodes = graph.getNodes();
    expect(nodes.length).toEqual(3);
  });
  test('the size method should return the correct size for the number of vertexes in our graph', () => {
    expect(graph.size()).toEqual(3);
  });
});
