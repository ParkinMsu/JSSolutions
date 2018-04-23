class Node{
	constructor (number){
		this.number = number;
		this.edges = [];
	}

	addEdge(otherNode){
		this.edges.push(otherNode);
		otherNode.edges.push((this,1));
	}
}

class NodeW{
	constructor (number){
		this.number = number;
		this.edges = [];
	}

	addEdge(otherNode){
		this.edges.push(otherNode);
		otherNode.edges.push(this);
	}
}
class Graph{
	constructor (verticesArr){
		this.vertices = []

		for (let i = 0; i < verticesArr.length; i++){
			let pair = verticesArr[i];
			let currNodeNumber = pair[0];
			let nextNodeNumber = pair[1];
			let findNode = function(nodeNumber, vertices){
				for (let i = 0; i < vertices.length; i++){
					if (vertices[i].number === nodeNumber){
						return vertices[i];
					}
				}		
				return null;
			}
			let currNode = findNode(currNodeNumber, this.vertices);
			let nextNode = findNode(nextNodeNumber, this.vertices);

			if (currNode === null){
				currNode = new Node(currNodeNumber);
				this.vertices.push(currNode);
			}
			if (nextNode === null){
				nextNode = new Node(nextNodeNumber);
				this.vertices.push(nextNode);
			}
			currNode.addEdge(nextNode);
		}
	}

	

	DFS(){
		let labeledNames = []
		if (this.vertices.length === 0){
			return;
		}
		let currNode = this.vertices[0];
		let putLabel = function(currNode, labeledNames){
			labeledNames.push(currNode.number);
			for (let i = 0; i < currNode.edges.length; i++){
				let nextNode = currNode.edges[i];
				if (labeledNames.indexOf(nextNode.number) === -1){
					putLabel(nextNode, labeledNames);
				}
			}
			console.log(currNode.number);
			return;
		}
		putLabel(currNode, labeledNames);
	}

	HFS(){
		let labeledNames = []
		if (this.vertices.length === 0){
			return;
		}
		let currNode = this.vertices[0];
		let putLabel = function(currNode, labeledNames){
			labeledNames.push(currNode.number);
			console.log(currNode.number);
			for (let i = 0; i < currNode.edges.length; i++){
				let nextNode = currNode.edges[i];
				if (labeledNames.indexOf(nextNode.number) === -1){
					putLabel(nextNode, labeledNames);
				}
			}
			return;
		}
		putLabel(currNode, labeledNames);
	}
}

let graph = new Graph([[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]);
console.log(graph);
console.log('DFS');
graph.DFS();
console.log('HFS');
graph.HFS();