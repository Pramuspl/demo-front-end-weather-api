// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      accentPrimary: string;
      accentSecondary: string;
      primaryGradientStart: string;
      primaryGradientEnd: string;
      primary: string;
      lightBackground: string;
      lightBackgroundAccent: string;
      darkBackground: string;
      primaryText: string;
      secondaryText: string;
    };
    mobile: string;
  }
}
