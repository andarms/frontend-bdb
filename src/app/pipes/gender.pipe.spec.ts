import { BdbGenderPipe } from './gender.pipe';

describe('GenderPipe', () => {
  it('create an instance', () => {
    const pipe = new BdbGenderPipe();
    expect(pipe).toBeTruthy();
  });

  it('saholud display Male', () => {
    const pipe = new BdbGenderPipe();
    const value = pipe.transform('M');
    expect(value).toBe('Male');
  });

  it('saholud display Female', () => {
    const pipe = new BdbGenderPipe();
    const value = pipe.transform('F');
    expect(value).toBe('Female');
  });

  it('saholud display original value', () => {
    const pipe = new BdbGenderPipe();
    const value = pipe.transform('other');
    expect(value).toBe('other');
  });
});
