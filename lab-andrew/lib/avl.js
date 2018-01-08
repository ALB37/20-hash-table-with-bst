'use strict';

class AVLNode{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
    this.balance = 0;
  }
}

class AVL{
  constructor(){
    this.root = null;
  }

  find(value){
    return this._find(this.root, value);
  }

  _find(node, value){
    if (!node){
      return -1;
    }
    if (node.data === value){
      return node;
    }
    if (node.data > value){
      return this._find(node.left, value);
    }
    return this._find(node.right, value);
  }

  insert(value){
    if (!this.root){
      this.root = new AVLNode(value);
      return;
    }
    if (this.find(value) !== -1){
      return -1;
    }
    this._insert(this.root, value);
    // balance tree now here
  }

  _insert(node, value){
    if (node.data > value){
      this.balance--;
      if (!node.left){
        node.left = new AVLNode(value);
        return;
      }
      return this._insert(node.left, value);
    }
    this.balance++;
    if (!node.right){
      node.right = new AVLNode(value);
      return;
    }
    return this._insert(node.right, value);

  }
}

module.exports = AVL;