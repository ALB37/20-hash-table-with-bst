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

  _preDelete(node, value){
    if (!node){
      return;
    }
    if (node.data === value){
      return;
    }
    if (node.left){
      if (node.left.data === value){
        node.balance++;
        return;
      }
    }
    if (node.right){
      if (node.right.data === value){
        node.balance--;
        return;
      }
    }
    if (node.data > value){
      node.balance++;
      return this._preDelete(node.left, value);
    }
    node.balance--;
    return this._preDelete(node.right, value);
  }

  insert(value){
    if (!this.root) {
      this.root = new AVLNode(value);
      return;
    }
    if (this.find(value) !== -1){
      return -1;
    }
    this._insert(this.root, value);
    this._rootRotate();
  }

  _rootRotate(){
    if (this.root.balance < -1) {
      if (this.root.left.balance === -1) {
        this.root = this._rotateLL(this.root);
        this._setBalance(this.root);
        return;
      }
      if (this.root.left.balance === 1) {
        this.root = this._rotateLR(this.root);
        this._setBalance(this.root);
        return;
      }
    }
    if (this.root.balance > 1) {
      if (this.root.right.balance === -1) {
        this.root = this._rotateRL(this.root);
        this._setBalance(this.root);
        return;
      }
      if (this.root.right.balance === 1) {
        this.root = this._rotateRR(this.root);
        this._setBalance(this.root);
        return;
      }
    }
    this._rotate(this.root);
  }

  _insert(node, value){
    if(node.data > value){
      node.balance--;
      if (!node.left) {
        node.left = new AVLNode(value);
        return;
      }
      return this._insert(node.left, value);
    }
    node.balance++;
    if (!node.right) {
      node.right = new AVLNode(value);
      return;
    }
    return this._insert(node.right, value);
  }

  _treeHeight(node){
    let height = 0;
    if (node){
      (function traverse(subTree, counter){
        if (counter > height){
          height = counter;
        }
        if (subTree.left){
          traverse(subTree.left, counter + 1);
        }
        if (subTree.right){
          traverse(subTree.right, counter + 1);
        }
      })(node, 1);
    }
    return height;
  }

  _rotate(node){
    if (node.left){
      if (node.left.balance < -1){
        if (node.left.left.balance > 1 || node.left.left.balance < -1){
          this._rotate(node.left);
          node.left.balance++;
          return;
        }
        if (node.left.left.balance < 0){
          node.left = this._rotateLL(node.left);
          this._setBalance(node.left);
          return;
        }      
        node.left = this._rotateLR(node.left);
        this._setBalance(node.left);
        return;
      }
      if (node.left.balance > 1){
        if (node.left.right.balance > 1 || node.left.right.balance < -1) {
          this._rotate(node.left);
          node.left.balance--;
          return;
        }
        if (node.left.right.balance > 0){
          node.left = this._rotateRR(node.left);
          this._setBalance(node.right);
          return;
        }
        node.left = this._rotateRL(node.left);
        this._setBalance(node.right);
        return;
      }
    }
    if (node.right){
      if (node.right.balance < -1) {
        if (node.right.left.balance > 1 || node.right.left.balance < -1) {
          this._rotate(node.right);
          node.right.balance++;
          return;
        }
        if (node.right.left.balance < 0) {
          node.right = this._rotateLL(node.right);
          this._setBalance(node.left);
          return;
        }
        node.right = this._rotateLR(node.right);
        this._setBalance(node.left);
        return;
      }
      if (node.right.balance > 1) {
        if (node.right.right.balance > 1 || node.right.right.balance < -1) {
          this._rotate(node.right);
          node.right.balance--;
          return;
        }
        if (node.right.right.balance > 0) {
          node.right = this._rotateRR(node.right);
          this._setBalance(node.right);
          return;
        }
        node.right = this._rotateRL(node.right);
        this._setBalance(node.right);
        return;
      }
    }
  }

  _setBalance(node){
    if (!node){
      return;
    }

    if (node.left){
      this._setBalance(node.left);
    }

    node.balance = this._treeHeight(node.right) - this._treeHeight(node.left);

    if (node.right){
      this._setBalance(node.right);
    }
  }

  _rotateLL(node){
    let temp = node.left;
    node.left = temp.right;
    temp.right = node;
    return temp;
  }

  _rotateRR(node){
    let temp = node.right;
    node.right = temp.left;
    temp.left = node;
    return temp;
  }

  _rotateLR(node){
    node.left = this._rotateRR(node.left);
    return this._rotateLL(node);
  }

  _rotateRL(node){
    node.right = this._rotateLL(node.right);
    return this._rotateRR(node);
  }

  isBalanced() {
    if (Math.abs(this._treeHeight(this.root.left) - this._treeHeight(this.root.right)) <= 1) {
      return true;
    } else {
      return false;
    }
  }

  remove(value){
    let node = this.find(value);
    if (node === -1){
      return -1;
    }

    if (this.root.data > value){
      this.root.balance++;
    } else {
      this.root.balance--;
    }
    this._preDelete(this.root, value);

    if (node.left && node.right){
      node.data = this._findMinValue(node.right);
      if (node.data === node.right.data){
        if (!node.right.right){
          node.right = null;
          this._setBalance(node);
          this._rootRotate();
          return;
        }
        node.right = node.right.right;
        this._setBalance(node);
        this._rootRotate();
        return;
      }
      this._remove(node.right, node.data);
      this._setBalance(node);
      this._rootRotate();
      return; 
    }
    if ((node.left && !node.right) || (!node.left && node.right)){
      if (node === this.root){
        if (this.root.left){
          this.root = this.root.left;
          this._setBalance(this.root);
          this._rootRotate();
          return;
        }
        this.root = this.root.right;
        this._setBalance(this.root);
        this._rootRotate();
        return;
      }
      this._remove(this.root, value);
      this._setBalance(node);
      this._rootRotate();
      return;
    }
    if (node === this.root){
      this.root = null;
      return;
    }
    this._remove(this.root, value);
    this._setBalance(node);
    this._rootRotate();
    return;
  }

  _findMinValue(node){
    if (node.left){
      return this._findMinValue(node.left);
    }
    return node.data;
  }

  _remove(node, value){
    if (value > node.data) {
      if (node.right.data === value) {
        if (!node.right.left && node.right.right) {
          node.right = node.right.right;
          return;
        }
        if (node.right.left && !node.right.right) {
          node.right = node.right.left;
          return;
        }
        node.right = null;
        return;
      }
      return this._remove(node.right, value);
    }

    if (node.left.data === value) {
      if (!node.left.left && node.left.right) {
        node.left = node.left.right;
        return;
      }
      if (node.left.left && !node.left.right) {
        node.left = node.left.left;
        return;
      }
      node.left = null;
      return;
    }
    return this._remove(node.left, value);
  }

}

module.exports = AVL;