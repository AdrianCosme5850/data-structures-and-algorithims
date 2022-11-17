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

  breadthFirst(){
    let newArr = [];
    let adjacencies = this.adjacencies.entries();
    for(let adjacent of adjacencies){
      if (!newArr.includes(adjacent[0].value)){
        newArr[newArr.length] = adjacent[0].value;
      }
      for(let edges of adjacent[1]){
        if(!newArr.includes(edges.vertex.value)){
          newArr[newArr.length] = edges.vertex.value;
        }
      }
    }
    return newArr;
  }


}

let graph = new Graph();
let vertex1 = graph.addVertex('v1');
let vertex2 = graph.addVertex('v2');
let vertex3 = graph.addVertex('v3');
let vertex4 = graph.addVertex('v4');
graph.addEdge(vertex1, vertex3);
graph.addEdge(vertex1, vertex2);
graph.addEdge(vertex2, vertex3);
graph.addEdge(vertex2, vertex4);
graph.addEdge(vertex4, vertex3);

describe('Testing the breadth first traversal', () => {
  test('The traversal should return the nodes in the order they were visited', () => {
    expect(graph.breadthFirst()).toEqual(['v1', 'v3', 'v2', 'v4']);
  })
  test('Should accept an empty graph', () => {
    let newGraph = new Graph();
    expect(newGraph.breadthFirst()).toEqual([]);
  })
})