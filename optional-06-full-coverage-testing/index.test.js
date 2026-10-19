import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('should return the sum of two positive numbers correctly', () => {
  const result = sum(2, 3);
  assert.strictEqual(result, 5);
});

test('should return 0 when the first argument is not a number', () => {
  const result = sum('a', 3);
  assert.strictEqual(result, 0);
});

test('should return 0 when the second argument is not a number', () => {
  const result = sum(2, 'b');
  assert.strictEqual(result, 0);
});

test('should return 0 when both arguments are not numbers', () => {
  const result = sum('a', 'b');
  assert.strictEqual(result, 0);
});

test('should return 0 when the first argument is negative', () => {
  const result = sum(-1, 3);
  assert.strictEqual(result, 0);
});

test('should return 0 when the second argument is negative', () => {
  const result = sum(2, -3);
  assert.strictEqual(result, 0);
});

test('should return 0 when both arguments are negative', () => {
  const result = sum(-1, -3);
  assert.strictEqual(result, 0);
});

test('should return the sum when both arguments are zero', () => {
  const result = sum(0, 0);
  assert.strictEqual(result, 0);
});
