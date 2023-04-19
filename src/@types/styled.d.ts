import  "styled-components";
import { DefaultTheme } from "../style/theme/default";

type ThemeType = typeof DefaultTheme

declare module 'styled-components'{
  export interface DefaultTheme extends ThemeType{}
}