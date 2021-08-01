type BreakPointKeys = 'xl' | 'l' | 'm' | 's' | 'xs';
type Breakpoints = {
  [key in BreakPointKeys]?: number;
};

export const INPUTS_BP: Breakpoints = {
  xs: 286,
  s: 440,
  m: 768
};

export const getLayoutTag = (width: number | undefined, breakpoints: Breakpoints) => {
  if (width) {
    if (breakpoints.xs && width <= breakpoints.xs) {
      return 'tpw-layout-xs';
    }
    if (breakpoints.s && width <= breakpoints.s) {
      return 'tpw-layout-s';
    }
    if (breakpoints.m && width <= breakpoints.m) {
      return 'tpw-layout-m';
    }
    if (breakpoints.l && width <= breakpoints.l) {
      return 'tpw-layout-l';
    }
    if (breakpoints.xl && width <= breakpoints.xl) {
      return 'tpw-layout-xl';
    }
  }
  return '';
};
