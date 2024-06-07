import { describe, expect, it } from '@jest/globals';
import { convertStyles, stringfyStyleObject } from './convertStyles';

describe('Converting individual style', () => {
  it('converts backgroundColor', () => {
    const stringfyied = stringfyStyleObject({ backgroundColor: 'red' });
    expect(stringfyied).toBe('background-color:red;');
  });

  it('converts flexDirection', () => {
    const stringfyied = stringfyStyleObject({ flexDirection: 'row' });
    expect(stringfyied).toBe('flex-direction:row;');
  });

  it('converts height', () => {
    const stringfyied = stringfyStyleObject({ height: 500 });
    expect(stringfyied).toBe('height:500;');
  });
});

describe('Converting object styles', () => {
  it('Converts a single style object', () => {
    const styleObj = {
      backgroundColor: 'red',
      flexDirection: 'row',
      height: 500,
    } as const;

    const expectedResult = 'background-color:red;flex-direction:row;height:500;';
    const result = convertStyles(styleObj);
    expect(result).toBe(expectedResult);
  });
});