// src/styled.d.ts
import "styled-components";

import { ThemeType } from "./styled/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ThemeType["colors"];
    fonts: ThemeType["fonts"];
  }
}
