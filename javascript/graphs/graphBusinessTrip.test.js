'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
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
  addEdge(startVertex, endVertex, weight) {
    if (this.adjacencies.has(startVertex) && this.adjacencies.has(endVertex)) {
      let edges = this.adjacencies.get(startVertex); // []
      edges.push(new Edge(endVertex, weight));
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

  totalWeights(array){
    let temp = null;
    let total = null;
    let empty = false;
    for(let i = 0; i < array.length; i++){
      temp = this.adjacencies.get(array[i]);
      temp.forEach((edge, idx) => {
        if(edge.vertex === array[i+1]){
          total = total + edge.weight;
        } else if (idx === temp.length -1){
          total = null;
          empty = true;
        }
      });
      if(empty === true){
        break;
      }
    }
    return total;
  }
}


let graph = new Graph();
let vertex1 = graph.addVertex('v1');
let vertex2 = graph.addVertex('v2');
let vertex3 = graph.addVertex('v3');
let vertex4 = graph.addVertex('v4');
graph.addEdge(vertex1, vertex3, 1);
graph.addEdge(vertex1, vertex2, 2);
graph.addEdge(vertex2, vertex3, 3);
graph.addEdge(vertex2, vertex4, 4);
graph.addEdge(vertex4, vertex3, 5);


describe('testing the function that will add the weights between vertexes', () => {
  test('The method should be able to add the weights sequentially', () => {
    expect(graph.totalWeights([vertex1, vertex2, vertex3])).toEqual(5);
  });
  test('The method should return null if there is no edge between the two nodes', () => {
    expect(graph.totalWeights([vertex1, vertex4])).toEqual(null);
  });
});
