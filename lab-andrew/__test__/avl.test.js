'use strict';

const AVL = require('../lib/avl');

let random = () => Math.floor(Math.random() * 100);

describe('tests for avl.js', () => {
  let testTree = new AVL();

  describe('testing insert function', () => {

    test('insert function should return expected values when used properly', () => {
      testTree.insert(10);
      testTree.insert(15);
      testTree.insert(5);
      expect(testTree.root.data).toEqual(10);
      expect(testTree.root.left.data).toEqual(5);
      expect(testTree.root.right.data).toEqual(15);
    });

    test('insert function should correctly handle invalid input', () => {
      expect(testTree.insert(15)).toEqual(-1);
    });
  });

  describe('testing find function', () => {

    test('find should find the correct number of an existing node', () => {
      expect(testTree.find(10)).toEqual(testTree.root);
      expect(testTree.find(15)).toEqual(testTree.root.right);
      expect(testTree.find(5)).toEqual(testTree.root.left);
    });

    test('find should return -1 if number does not exist in tree', () => {
      expect(testTree.find(11)).toEqual(-1);
      expect(testTree.find(2)).toEqual(-1);
    });
  });

  describe('testing remove function', () => {
    const deleteTest = new AVL();
    deleteTest.insert(10);
    deleteTest.insert(15);
    deleteTest.insert(5);
    deleteTest.insert(3);
    deleteTest.insert(13);

    test('remove functions correctly', () => {
      deleteTest.remove(13);
      expect(deleteTest.find(13)).toEqual(-1);
      deleteTest.remove(15);
      expect(deleteTest.find(15)).toEqual(-1);
    });

    test('remove retains balance of tree', () => {
      expect(deleteTest.isBalanced()).toEqual(true);
    });

    test('remove should be able to remove a leaf', () => {
      deleteTest.remove(3);
      expect(deleteTest.find(3)).toEqual(-1);
      expect(deleteTest.isBalanced()).toEqual(true);

    });

    test('remove should be able to remove a node with two children', () => {
      deleteTest.insert(8);
      deleteTest.insert(2);
      deleteTest.remove(5);
      expect(deleteTest.find(5)).toEqual(-1);
      expect(deleteTest.isBalanced()).toEqual(true);

    });

    test('remove should maintain balance after node removal', () => {
      deleteTest.insert(15);
      deleteTest.insert(14);
      deleteTest.insert(17);
      deleteTest.insert(16);
      deleteTest.remove(15);
      deleteTest.remove(14);
      deleteTest.remove(16);
      deleteTest.remove(17);
      expect(deleteTest.isBalanced()).toEqual(true);
    });

    test('remove should be able to remove test, with 2, 1 and 0 children', () => {
      deleteTest.remove(10);
      deleteTest.remove(8);
      deleteTest.remove(2);
      expect(deleteTest.root).toBeNull();
      deleteTest.insert(11);
      expect(deleteTest.root.data).toEqual(11);
    });

    test('remove should account for removing nodes in all scenarios', () => {
      deleteTest.insert(6);
      deleteTest.insert(4);
      deleteTest.insert(5);
      deleteTest.remove(6);
      deleteTest.remove(4);
      deleteTest.remove(5);
      deleteTest.remove(11);
      expect(deleteTest.root).toBeNull();
      deleteTest.insert(5);
      deleteTest.insert(10);
      deleteTest.remove(5);
      expect(deleteTest.isBalanced()).toEqual(true);
    });

    test('remove should not be destructive', () => {
      const testTree2 = new AVL();
      testTree2.insert(10);
      testTree2.insert(8);
      testTree2.insert(12);
      testTree2.insert(19);
      testTree2.remove(10);
      expect(testTree2.isBalanced()).toEqual(true);
    });

    test('remove should always retain balance', () => {
      const testTree3 = new AVL();
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.insert(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      expect(testTree3.isBalanced()).toEqual(true);
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      expect(testTree3.isBalanced()).toEqual(true);
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      expect(testTree3.isBalanced()).toEqual(true);
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      expect(testTree3.isBalanced()).toEqual(true);
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      expect(testTree3.isBalanced()).toEqual(true);
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      expect(testTree3.isBalanced()).toEqual(true);
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      expect(testTree3.isBalanced()).toEqual(true);
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      expect(testTree3.isBalanced()).toEqual(true);
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      testTree3.remove(random());
      expect(testTree3.isBalanced()).toEqual(true);
    });
  });

  describe('testing _treeHeight private method', () => {
    test('testing that it works properly', () => {
      expect(testTree._treeHeight(testTree.root)).toEqual(2);
    });
  });

  describe('testing isBalanced funtion', () => {
    test('isBalanced should return false if a tree is unbalanced', () => {
      const unbalancedTree = new AVL();
      unbalancedTree.root = { data: 1, left: null, right: { data: 2, left: null, right: { data: 3, left: null, right: null, balance: 0 }, balance: 0 }, balance: 0};
      expect(unbalancedTree.isBalanced()).toEqual(false);
    });
  });

  describe('testing that AVL tree maintains balance', () => {
    test('testing that AVL tree maintains balance when right loaded', () => {
      const balancedTree = new AVL();
      balancedTree.insert(10);
      balancedTree.insert(20);
      balancedTree.insert(30);
      balancedTree.insert(40);
      balancedTree.insert(50);
      balancedTree.insert(60);
      balancedTree.insert(70);
      expect(balancedTree.isBalanced()).toEqual(true);
    });
    test('testing that AVL tree maintains balanced when left loaded', () => {
      const balancedTree = new AVL();
      balancedTree.insert(30);
      balancedTree.insert(20);
      balancedTree.insert(10);
      balancedTree.insert(9);
      balancedTree.insert(8);
      balancedTree.insert(7);
      balancedTree.insert(6);
      balancedTree.insert(5);
      balancedTree.insert(4);
      balancedTree.insert(3);
      balancedTree.insert(2);
      balancedTree.insert(1);
      expect(balancedTree.isBalanced()).toEqual(true);
    });
    test('testing that AVL tree maintains balanced when middle loaded', () => {
      const balancedTree = new AVL();
      balancedTree.insert(90);
      balancedTree.insert(10);
      balancedTree.insert(80);
      balancedTree.insert(20);
      balancedTree.insert(70);
      balancedTree.insert(30);
      balancedTree.insert(60);
      balancedTree.insert(40);
      expect(balancedTree.isBalanced()).toEqual(true);
    });

    test('testing that AVL tree maintains balanced in various configurations', () => {
      const balancedTree = new AVL();
      balancedTree.insert(80);
      balancedTree.insert(90);
      balancedTree.insert(100);
      balancedTree.insert(75);
      balancedTree.insert(65);
      balancedTree.insert(55);
      expect(balancedTree.isBalanced()).toEqual(true);
    });

    test.only('testing that AVL tree maintains balanced in various configurations 1', () => {
      const balancedTree = new AVL();
      balancedTree.insert(120);
      balancedTree.insert(90);
      balancedTree.insert(100);
      balancedTree.insert(110);
      balancedTree.insert(105);
      balancedTree.insert(103);
      balancedTree.insert(101);
      expect(balancedTree.isBalanced()).toEqual(true);
    });

    test('testing that AVL tree maintains balanced in various configurations 2', () => {
      const balancedTree = new AVL();
      balancedTree.insert(50);
      balancedTree.insert(30);
      balancedTree.insert(40);
      balancedTree.insert(20);
      balancedTree.insert(25);
      balancedTree.insert(10);
      balancedTree.insert(5);
      expect(balancedTree.isBalanced()).toEqual(true);
    });

    test('testing that AVL tree maintains balanced in various configurations 3', () => {
      const balancedTree = new AVL();
      balancedTree.insert(50);
      balancedTree.insert(10);
      balancedTree.insert(5);
      balancedTree.insert(20);
      balancedTree.insert(25);
      balancedTree.insert(30);
      balancedTree.insert(40);
      expect(balancedTree.isBalanced()).toEqual(true);
    });

    test('testing that AVL tree maintains balanced in various configurations 4', () => {
      const balancedTree = new AVL();
      balancedTree.insert(50);
      balancedTree.insert(10);
      balancedTree.insert(5);
      balancedTree.insert(20);
      balancedTree.insert(30);
      balancedTree.insert(40);
      expect(balancedTree.isBalanced()).toEqual(true);
    });


    test('testing that AVL tree maintains balanced in various configurations 5', () => {
      const balancedTree = new AVL();
      balancedTree.insert(50);
      balancedTree.insert(30);
      balancedTree.insert(40);
      balancedTree.insert(20);
      balancedTree.insert(10);
      balancedTree.insert(5);
      expect(balancedTree.isBalanced()).toEqual(true);
    });

    test('testing that AVL tree maintains balanced in various configurations 6', () => {
      const balancedTree = new AVL();
      balancedTree.insert(50);
      balancedTree.insert(30);
      balancedTree.insert(40);
      balancedTree.insert(20);
      balancedTree.insert(25);
      balancedTree.insert(24);
      expect(balancedTree.isBalanced()).toEqual(true);
    });
    test('testing that AVL tree maintains balanced in various configurations 7', () => {
      const balancedTree = new AVL();
      balancedTree.insert(50);
      balancedTree.insert(30);
      balancedTree.insert(40);
      balancedTree.insert(20);
      balancedTree.insert(23);
      balancedTree.insert(24);
      expect(balancedTree.isBalanced()).toEqual(true);
    });
    test('testing that AVL tree maintains balanced in various configurations 8', () => {
      const balancedTree = new AVL();
      balancedTree.insert(50);
      balancedTree.insert(30);
      balancedTree.insert(40);
      balancedTree.insert(20);
      balancedTree.insert(22);
      balancedTree.insert(23);
      expect(balancedTree.isBalanced()).toEqual(true);
    });
    test('testing that AVL tree maintains balanced in various configurations 9', () => {
      const balancedTree = new AVL();
      balancedTree.insert(50);
      balancedTree.insert(30);
      balancedTree.insert(40);
      balancedTree.insert(20);
      balancedTree.insert(33);
      balancedTree.insert(35);
      expect(balancedTree.isBalanced()).toEqual(true);
    });
    test('testing that AVL tree maintains balanced in various configurations 10', () => {
      const balancedTree = new AVL();
      balancedTree.insert(60);
      balancedTree.insert(30);
      balancedTree.insert(40);
      balancedTree.insert(20);
      balancedTree.insert(50);
      balancedTree.insert(45);
      expect(balancedTree.isBalanced()).toEqual(true);
    });
    test('testing that AVL tree maintains balanced in various configurations 11', () => {
      const balancedTree = new AVL();
      balancedTree.insert(60);
      balancedTree.insert(30);
      balancedTree.insert(40);
      balancedTree.insert(20);
      balancedTree.insert(39);
      balancedTree.insert(35);
      expect(balancedTree.isBalanced()).toEqual(true);
    });

    test('testing that AVL tree maintains balanced when loaded with random values', () => {
      const balancedTree = new AVL();
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      expect(balancedTree.isBalanced()).toEqual(true);
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      expect(balancedTree.isBalanced()).toEqual(true);
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      expect(balancedTree.isBalanced()).toEqual(true);
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      expect(balancedTree.isBalanced()).toEqual(true);
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      expect(balancedTree.isBalanced()).toEqual(true);
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      expect(balancedTree.isBalanced()).toEqual(true);
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      expect(balancedTree.isBalanced()).toEqual(true);
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      expect(balancedTree.isBalanced()).toEqual(true);
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      expect(balancedTree.isBalanced()).toEqual(true);
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      expect(balancedTree.isBalanced()).toEqual(true);
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      expect(balancedTree.isBalanced()).toEqual(true);
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      expect(balancedTree.isBalanced()).toEqual(true);
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      expect(balancedTree.isBalanced()).toEqual(true);
    });
  });
});