import { extendQuery } from '../src/index';

describe('Extensive Test', () => {
  it('should return true if the two forms of the sentence are matching as a RegEx', () => {
    expect(
      new RegExp(extendQuery('عبدالجيد أحمد حمادة أبو ذكري')).test(
        'عبد الجيد احمد حماده ابوذكرى'
      )
    ).toBe(true);
  });
});
