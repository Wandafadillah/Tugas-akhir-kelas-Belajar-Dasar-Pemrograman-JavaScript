import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('should return the sum of two positive numbers correctly', () => {
  const result = sum(2, 3);
  assert.strictEqual(result, 5);
});

test('should return the sum of a positive and a negative number correctly', () => {
  const result = sum(5, -3);
  assert.strictEqual(result, 2);
});

test('should return the sum of two negative numbers correctly', () => {
  const result = sum(-4, -6);
  assert.strictEqual(result, -10);
});

test('should return the same value when one of the numbers is zero', () => {
  const result = sum(0, 7);
  assert.strictEqual(result, 7);
});
