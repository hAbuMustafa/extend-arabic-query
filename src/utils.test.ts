import { test, expect } from 'vitest';
import { compare } from './utils';

test('comparing arabic strings', () => {
  expect(compare('محمد', 'محمد')).toBe(true);
  expect(compare('عبدالله', 'عبد الله')).toBe(true);
  expect(compare('احمد', 'أحمد')).toBe(true);
  expect(compare('زكي', 'ذكى')).toBe(true);
  expect(compare('أبو مصطفى', 'ابومصطفي')).toBe(true);
});
