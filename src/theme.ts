import { DefaultTheme } from "styled-components";

const opacityToHex = (opacity: number): string =>
  Math.floor((opacity * 100 * 255) / 100).toString(16);

const theme: DefaultTheme = {
  borderRadius: "10px",
  desktopWidth: "500px",
  colors: {
    primary: (opacity = 1) => "#80edfc" + opacityToHex(opacity),
    secondary: (opacity = 1) => "#eff7f6" + opacityToHex(opacity),
    accentPrimary: (opacity = 1) => "#a31621" + opacityToHex(opacity),
    accentSecondary: (opacity = 1) => "#4FB477" + opacityToHex(opacity),
    textPrimary: (opacity = 1) => "#313638" + opacityToHex(opacity),
  },
  mobile: "576px",
};
export { theme };
