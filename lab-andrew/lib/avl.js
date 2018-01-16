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
    if (!this.root) {
      this.root = new AVLNode(value);
      return;
    }
    if (this.find(value) !== -1){
      return -1;
    }
    this._insert(this.root, value);
    this._rotate(this.root);
  }

  // insert(value){
  //   if (!this.root){
  //     this.root = new AVLNode(value);
  //     return;
  //   }
  //   if (this.find(value) !== -1){
  //     return -1;
  //   }
  //   if (value < this.root.data && this._treeHeight(this.root.left) - this._treeHeight(this.root.right) > 0){
  //     // if this.root.balance -2 do this stuff
  //     console.log('rotating');
  //     if (value < this.root.left.data){
  //       console.log('LL');
  //       this.root = this._rotateLL(this.root);
  //     } 
  //     else {
  //       console.log('LR');
  //       this._insert(this.root, value);
  //       // this.root = this._rotateLR(this.root);
  //       return;
  //     }
  //   } else if (value > this.root.data && this._treeHeight(this.root.right) - this._treeHeight(this.root.left) > 0){
  //     //if this.root.balance +2 do this stuff
  //     console.log('rotating');
  //     if (value > this.root.right.data) {
  //       console.log('RR');
  //       this.root = this._rotateRR(this.root);
  //     } 
  //     else {
  //       console.log('RL');
  //       this._insert(this.root, value);
  //       // this.root = this._rotateRL(this.root);
  //       return;
  //     }
  //   }
  //   this._insert(this.root, value);
  // }
  
  _insert(node, value){
    if(node.data > value){
      if (!node.left) {
        node.left = new AVLNode(value);
        return;
      }
      return this._insert(node.left, value);
    }
    if (!node.right) {
      node.right = new AVLNode(value);
      return;
    }
    return this._insert(node.right, value);
  }

  // _insert(node, value){
  //   if (node.data > value){
  //     if (this._treeHeight(node.left) - this._treeHeight(node.right) > 0){
  //       console.log('rotating');
  //       if (value < node.left.data) {
  //         console.log('LL');
  //         node = this._rotateLL(node);
  //       } else {
  //         console.log('LR');
  //         if (!node.left) {
  //           node.left = new AVLNode(value);
  //           // node = this._rotateLR(node);
  //           return;
  //         } else {
  //           this._insert(node.left, value);
  //           node = this._rotateLR(node);
  //           return;
  //         }
  //         // node = this._rotateLR(node);
  //       }
  //     }
  //     if (!node.left){
  //       node.left = new AVLNode(value);
  //       return;
  //     }
  //     console.log(node);
  //     return this._insert(node.left, value);
  //   }
  //   if (this._treeHeight(node.right) - this._treeHeight(node.left) > 0) {
  //     console.log('rotating');
  //     if (value > node.right.data) {
  //       console.log('RR');
  //       node = this._rotateRR(node);
  //     } else {
  //       console.log('RL');
  //       if (!node.right) {
  //         node.right = new AVLNode(value);
  //         return;
  //       } else {
  //         this._insert(node.right, value);
  //         node = this._rotateRL(node);
  //         return;
  //       }
  //     }
  //   }
  //   if (!node.right){
  //     node.right = new AVLNode(value);
  //     return;
  //   }
  //   return this._insert(node.right, value);
    
  // }
  
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

}

module.exports = AVL;