// See https://stackoverflow.com/questions/50773163/convert-react-inline-styles-to-css-rules

type StyleObject = Record<string, (string | number | undefined)>;
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
  const keys = Object.entries(style);
  const stringStyles = keys.reduce((prev, current) => {
    const key = current[0].replace(/([a-z])([A-Z])/, '$1-\$2').toLocaleLowerCase();
    return prev + `${key}:${current[1]};`;
  }, '');
  return stringStyles;
}
