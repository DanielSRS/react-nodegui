// See https://stackoverflow.com/questions/50773163/convert-react-inline-styles-to-css-rules
import type { _ViewStyleProp } from "../components/View/View.types";


type StyleObject = _ViewStyleProp;
type StyleValue = StyleObject | StyleObject[];

/**
 * Convert styles objects to qt style strings
 */
export const convertStyles = (style: StyleValue) => {
  const isArrayOfStyles = Array.isArray(style);
  if (isArrayOfStyles) {
    return style.map(stringfyStyleObject).join('');
  }
  return stringfyStyleObject(style);
}

export const stringfyStyleObject = (style: StyleObject) => {
  style = {...defaultStyles, ...style} as Mutable<StyleObject>;
  style = fixBorders(style);
  const keys = Object.entries(style);
  const stringStyles = keys.reduce((prev, current) => {
    let key = current[0]
      .replace(/([a-z])([A-Z])/, '$1-\$2')
      .replace(/([a-z])([A-Z])/, '$1-\$2')
      .replace(/([a-z])([A-Z])/, '$1-\$2')
      .toLocaleLowerCase();
    if (current[0] === 'borderBottomStartRadius') {
      key = 'border-bottom-left-radius';
    }
    if (current[0] === 'borderBottomEndRadius') {
      key = 'border-bottom-right-radius';
    }
    if (current[0] === 'borderStartEndRadius') {
      key = 'border-top-right-radius';
    }
    if (current[0] === 'borderStartStartRadius') {
      key = 'border-top-left-radius';
    }
    if (current[0] === 'borderEndEndRadius') {
      key = 'border-top-right-radius';
    }
    if (current[0] === 'borderEndStartRadius') {
      key = 'border-bottom-left-radius';
    }
    if (current[0] === 'borderEndColor') {
      key = 'border-bottom-color';
    }
    if (current[0] === 'borderStartColor') {
      key = 'border-top-color';
    }
    if (current[0] === 'borderTopEndRadius') {
      key = 'border-top-right-radius';
    }
    if (current[0] === 'borderTopStartRadius') {
      key = 'border-top-left-radius';
    }
    const value = typeof current[1] === 'string' && !(current[0] in notEscaped) ? `'${current[1]}'` : current[1];
    return prev + `${key}:${value};`;
  }, '');
  return stringStyles;
}

export const fixBorders = (style: Mutable<StyleObject>) => {
  /* if (!('borderStyle' in style)) {
    style.borderStyle = 'solid';
  }

  if (!('borderColor' in style)) {
    style.borderColor = 'black';
  } */
  
  if ('borderWidth' in style) {
    style.borderWidth = (style.borderWidth + 'px') as unknown as number;
    // return style;
  }

  if ('borderBottomWidth' in style) {
    style.borderBottomWidth = (style.borderBottomWidth + 'px') as unknown as number;
  }

  if ('borderBottomEndRadius' in style) {
    style.borderBottomEndRadius = (style.borderBottomEndRadius + 'px') as unknown as number;
  }

  if ('borderBottomStartRadius' in style) {
    style.borderBottomStartRadius = (style.borderBottomStartRadius + 'px') as unknown as number;
  }

  if ('borderStartEndRadius' in style) {
    style.borderStartEndRadius = (style.borderStartEndRadius + 'px') as unknown as number;
  }

  if ('borderStartStartRadius' in style) {
    style.borderStartStartRadius = (style.borderStartStartRadius + 'px') as unknown as number;
  }

  if ('borderEndEndRadius' in style) {
    style.borderEndEndRadius = (style.borderEndEndRadius + 'px') as unknown as number;
  }

  if ('borderEndStartRadius' in style) {
    style.borderEndStartRadius = (style.borderEndStartRadius + 'px') as unknown as number;
  }

  if ('borderTopEndRadius' in style) {
    style.borderTopEndRadius = (style.borderTopEndRadius + 'px') as unknown as number;
  }

  if ('borderTopStartRadius' in style) {
    style.borderTopStartRadius = (style.borderTopStartRadius + 'px') as unknown as number;
  }

  // convert colors from hex rgba to argb
  if ('backgroundColor' in style) {
    const color = style.backgroundColor;
    if (color && color.startsWith('#') && color.length === 9) {
      const transparency = color.substring(7, 9);
      const colorValue = color.substring(1, 7);
      style.backgroundColor = `#${transparency}${colorValue}`;
    }
  }

  return style;
}

const defaultStyles = {
  borderStyle: 'solid',
  borderColor: 'black',
}

type Mutable<Immutable> = {
  -readonly [K in keyof Immutable]: Immutable[K] 
}

const notEscaped = {
  borderStyle: true,
}