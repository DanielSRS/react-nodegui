import { describe, expect, it } from '@jest/globals';
import { convertStyles, fixBorders, stringfyStyleObject } from './convertStyles';

const defaultStyles = "border-style:solid;border-color:'black';";
it('appends default styles', () => {
  expect(stringfyStyleObject({})).toBe(defaultStyles);
});

describe('Converting individual style', () => {
  it('converts backgroundColor', () => {
    const stringfyied = stringfyStyleObject({ backgroundColor: '#FF000080' });
    expect(stringfyied).toBe(defaultStyles +"background-color:'#80FF0000';");
  });

  it('converts flexDirection', () => {
    const stringfyied = stringfyStyleObject({ flexDirection: 'row' });
    expect(stringfyied).toBe(defaultStyles + "flex-direction:'row';");
  });

  it('converts height', () => {
    const stringfyied = stringfyStyleObject({ height: 500 });
    expect(stringfyied).toBe(defaultStyles + 'height:500;');
  });

  it('converts borderBottomWidth', () => {
    const stringfyied = stringfyStyleObject({ borderBottomWidth: 1 });
    expect(stringfyied).toBe(defaultStyles + `border-bottom-width:'1px';`);
  });

  it('converts borderBottomWidth', () => {
    const stringfyied = stringfyStyleObject({ borderWidth: 1, borderBottomColor: 'red' });
    expect(stringfyied).toBe(defaultStyles + `border-width:'1px';border-bottom-color:'red';`);
  });

  it('converts borderBottomEndRadius', () => {
    const stringfyied = stringfyStyleObject({ borderBottomEndRadius: 1 });
    expect(stringfyied).toBe(defaultStyles + `border-bottom-right-radius:'1px';`);
  });

  it('converts borderBottomStartRadius', () => {
    const stringfyied = stringfyStyleObject({ borderBottomStartRadius: 1 });
    expect(stringfyied).toBe(defaultStyles + `border-bottom-left-radius:'1px';`);
  });

  it('converts borderStartEndRadius', () => {
    const stringfyied = stringfyStyleObject({ borderStartEndRadius: 1 });
    expect(stringfyied).toBe(defaultStyles + `border-top-right-radius:'1px';`);
  });

  it('converts borderStartStartRadius', () => {
    const stringfyied = stringfyStyleObject({ borderStartStartRadius: 1 });
    expect(stringfyied).toBe(defaultStyles + `border-top-left-radius:'1px';`);
  });

  it('converts borderEndEndRadius', () => {
    const stringfyied = stringfyStyleObject({ borderEndEndRadius: 1 });
    expect(stringfyied).toBe(defaultStyles + `border-top-right-radius:'1px';`);
  });

  it('converts borderEndStartRadius', () => {
    const stringfyied = stringfyStyleObject({ borderEndStartRadius: 1 });
    expect(stringfyied).toBe(defaultStyles + `border-bottom-left-radius:'1px';`);
  });

  it('converts borderEndColor', () => {
    const stringfyied = stringfyStyleObject({ borderEndColor: 'red' });
    expect(stringfyied).toBe(defaultStyles + `border-bottom-color:'red';`);
  });

  it('converts borderStartColor', () => {
    const stringfyied = stringfyStyleObject({ borderStartColor: 'red' });
    expect(stringfyied).toBe(defaultStyles + `border-top-color:'red';`);
  });

  it('converts borderTopEndRadius', () => {
    const stringfyied = stringfyStyleObject({ borderTopEndRadius: 10 });
    expect(stringfyied).toBe(defaultStyles + `border-top-right-radius:'10px';`);
  });

  it('converts borderTopStartRadius', () => {
    const stringfyied = stringfyStyleObject({ borderTopStartRadius: 10 });
    expect(stringfyied).toBe(defaultStyles + `border-top-left-radius:'10px';`);
  });

});

describe('Converting object styles', () => {
  it('Converts a single style object', () => {
    const styleObj = {
      backgroundColor: 'red',
      flexDirection: 'row',
      height: 500,
    } as const;

    const expectedResult = defaultStyles + "background-color:'red';flex-direction:'row';height:500;";
    const result = convertStyles(styleObj);
    expect(result).toBe(expectedResult);
  });
});

describe('fixing border styles', () => {
  it('Add px to borderWidth', () => {
    const st = { borderWidth: 1 };
    const res = fixBorders(st);
    expect(res).toStrictEqual({ borderWidth: '1px' })
  });

  it('adds missing properties in convertStyles', () => {
    const st = { borderWidth: 1 };
    const res = convertStyles(st);
    expect(res).toStrictEqual(defaultStyles + "border-width:'1px';");
  });
})