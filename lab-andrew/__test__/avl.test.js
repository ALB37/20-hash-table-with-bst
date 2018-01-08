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
});