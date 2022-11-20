'use strict';

class Graph {
  constructor(){
    this.adjacencies = new Map();
    this.traverse = [];
  }
  addVertex(value) {
    let vertex = new Vertex(value);
    this.adjacencies.set(vertex, []);
    return vertex;
  }
  addEdge(startVertex, endVertex) {
    if (this.adjacencies.has(startVertex) && this.adjacencies.has(endVertex)) {
      let edges = this.adjacencies.get(startVertex); // []
      edges.push(new Edge(endVertex));
    } else {
      throw new Error('Invalid input Vertex');
    }
  }
  preOrderTraverse(vertex){
    this.preOrderRecursive(vertex);
    let newArr = [...this.traverse];
    this.traverse = [];
    return newArr;
  }
  preOrderRecursive(vertex){
    this.traverse[this.traverse.length] = vertex.value;
    let edges = this.adjacencies.get(vertex);
    for(let adjacency of edges){
      if(!this.traverse.includes(adjacency.vertex.value)){
        this.preOrderRecursive(adjacency.vertex);
      }
    }
  }
}

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

let graph = new Graph();

let A = graph.addVertex('A');
let B = graph.addVertex('B');
let C = graph.addVertex('C');
let D = graph.addVertex('D');
let E = graph.addVertex('E');
let F = graph.addVertex('F');
let G = graph.addVertex('G');
let H = graph.addVertex('H');

graph.addEdge(A, B);
graph.addEdge(B, C);
graph.addEdge(C, G);
graph.addEdge(A, D);
graph.addEdge(D, B);
graph.addEdge(D, E);
graph.addEdge(D, H);
graph.addEdge(D, F);
graph.addEdge(H, F);

describe('Testing the pre order traverse method in the graph class', () => {
  test('Should return an array with the values in pre order', () => {
    expect(graph.preOrderTraverse(A)).toEqual(['A', 'B', 'C', 'G', 'D', 'E', 'H', 'F' ]);
  });
  test('Should work with a vertex with no edges',() => {
    let Z = graph.addVertex('Z');
    expect(graph.preOrderTraverse(Z)).toEqual(['Z']);
  });
  test('The traverse array in the graph should be empty after a traverse', () => {
    expect(graph.traverse).toEqual([]);
  });
});
