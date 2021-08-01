import { Typography } from 'models';

enum TypographyVars {
  TitleFont = '--font-title',
  TitleSize0 = '--title-size-0',
  TitleSize1 = '--title-size-1',
  TextFont = '--font',
  TextSize0 = '--text-size-0',
  TextSize1 = '--text-size-1'
}
type ReturnTypographyType = Partial<Record<TypographyVars, string>>;
type TypographySizes = Partial<{ [key in 'zero' | 'one']: string }>;

const mapTypographyVars = (base: keyof Typography, derivatives: Partial<{ font: string; size: TypographySizes }>) => {
  return Object.entries(derivatives).reduce((acc, [name, val]) => {
    switch (base) {
      case 'text': {
        if (name === 'font') {
          return { ...acc, [TypographyVars.TextFont]: val };
        }
        const sizes = val as TypographySizes;
        const res = { ...acc };
        'zero' in sizes && Object.assign(res, { [TypographyVars.TextSize0]: sizes.zero });
        'one' in sizes && Object.assign(res, { [TypographyVars.TextSize1]: sizes.one });
        return { ...acc, ...res };
      }
      case 'title': {
        if (name === 'font') {
          return { ...acc, [TypographyVars.TitleFont]: val };
        }
        const sizes = val as TypographySizes;
        const res = { ...acc };
        'zero' in sizes && Object.assign(res, { [TypographyVars.TitleSize0]: sizes.zero });
        'one' in sizes && Object.assign(res, { [TypographyVars.TitleSize1]: sizes.one });
        return { ...acc, ...res };
      }
      default:
        return acc;
    }
  }, {});
};

export const getTypography = (typography: Typography): ReturnTypographyType | void => {
  if (typography) {
    const colorVars: ReturnTypographyType = Object.entries(typography).reduce(
      (acc, [base, derivatives]) => ({ ...acc, ...mapTypographyVars(base as keyof Typography, derivatives) }),
      {}
    );

    return colorVars;
  }
};
