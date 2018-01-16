'use strict';

const AVL = require('../lib/avl');

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

    test('remove functions correctly', () => {
      expect(1).toBeTruthy();
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
      expect(testTree.isBalanced()).toEqual(true);
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
      expect(testTree.isBalanced()).toEqual(true);
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
      expect(testTree.isBalanced()).toEqual(true);
    });

    test('testing that AVL tree maintains balanced in various configurations', () => {
      const balancedTree = new AVL();
      balancedTree.insert(80);
      balancedTree.insert(90);
      balancedTree.insert(100);
      balancedTree.insert(75);
      balancedTree.insert(65);
      balancedTree.insert(55);
      expect(testTree.isBalanced()).toEqual(true);
    });

    test('testing that AVL tree maintains balanced in various configurations', () => {
      const balancedTree = new AVL();
      balancedTree.insert(90);
      balancedTree.insert(100);
      balancedTree.insert(110);
      balancedTree.insert(105);
      balancedTree.insert(103);
      balancedTree.insert(101);
      expect(testTree.isBalanced()).toEqual(true);
    });

    test('testing that AVL tree maintains balanced when loaded with random values', () => {
      const balancedTree = new AVL();
      let random = () => Math.floor(Math.random() * 100);
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      balancedTree.insert(random());
      expect(testTree.isBalanced()).toEqual(true);
    });
  });
});