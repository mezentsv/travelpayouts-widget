import { Palette } from 'models';

enum ColorVars {
  Prime0 = '--color-primary-0',
  Prime1 = '--color-primary-1',
  Sec0 = '--color-secondary-0',
  Sec1 = '--color-secondary-1',
  Text0 = '--color-text',
  Text1 = '--color-text-secondary'
}

type ReturnPaletteType = Partial<Record<ColorVars, string>>;

const mapColors = (base: keyof Palette, derivatives: Partial<{ [key in 'zero' | 'one']: string }>) => {
  return Object.entries(derivatives).reduce((acc, [name, color]) => {
    switch (base) {
      case 'primary': {
        const colorVar = name === 'zero' ? ColorVars.Prime0 : ColorVars.Prime1;
        return { ...acc, [colorVar]: color };
      }
      case 'secondary': {
        const colorVar = name === 'zero' ? ColorVars.Sec0 : ColorVars.Sec1;
        return { ...acc, [colorVar]: color };
      }
      case 'text': {
        const colorVar = name === 'zero' ? ColorVars.Text0 : ColorVars.Text1;
        return { ...acc, [colorVar]: color };
      }
      default:
        return acc;
    }
  }, {});
};

export const getPalette = (palette: Palette): ReturnPaletteType | void => {
  if (palette) {
    const colorVars: ReturnPaletteType = Object.entries(palette).reduce(
      (acc, [base, derivatives]) => ({ ...acc, ...mapColors(base as keyof Palette, derivatives) }),
      {}
    );

    return colorVars;
  }
};
