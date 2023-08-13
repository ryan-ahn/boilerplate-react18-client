import baseStyled, {
  DefaultTheme,
  ThemedStyledInterface,
} from 'styled-components';
import { flexSet, boxSet, fontSet, colorSet, backgroundSet } from './mixin';

const myTheme: DefaultTheme = {
  flexSet,
  boxSet,
  fontSet,
  colorSet,
  backgroundSet,
};

export type Theme = typeof myTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;

export default myTheme;
