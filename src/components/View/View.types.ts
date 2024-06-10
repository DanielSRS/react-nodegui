export interface ViewStyle {
  readonly backgroundColor?: string;
  readonly flexDirection?: 'row' | 'comlumn';
  readonly opacity?: number;
  readonly borderWidth?: number | string;
  readonly borderRadius?: number;
  readonly borderColor?: string;
  readonly borderStyle?: 'solid' | 'dotted';
  readonly borderBottomWidth?: number;
  readonly borderBottomColor?: string;
  readonly borderBottomEndRadius?: number;
  readonly borderBottomLeftRadius?: number;
  readonly borderBottomRightRadius?: number;
  readonly borderBottomStartRadius?: number;
  readonly borderStartEndRadius?: number;
  readonly borderStartStartRadius?: number;
  readonly borderEndEndRadius?: number;
  readonly borderEndStartRadius?: number;
  readonly borderEndColor?: string;
  readonly borderLeftColor?: string;
  readonly borderLeftWidth?: number;
  readonly borderRightColor?: string;
  readonly borderRightWidth?: number;
  readonly borderStartColor?: string;
  readonly borderTopColor?: string;
  readonly borderTopEndRadius?: number;
  readonly borderTopLeftRadius?: number;
  readonly borderTopRightRadius?: number;
  readonly borderTopStartRadius?: number;
  readonly borderTopWidth?: number;
}

export interface LayoutStyles {
  readonly height?: string | number;
  readonly width?: string | number;
  readonly gap?: number;
  readonly padding?: string | number;
  readonly right?: number;
}

export type _ViewStyleProp = ViewStyle & LayoutStyles;
export type ViewStyleProp = _ViewStyleProp | _ViewStyleProp[];