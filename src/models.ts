interface InfraConfigurations {
  element?: HTMLElement;
}

/**
 * A model representing all possible configurations
 * that can be done from embedded script. Those settings
 * are passed around in application via Context.
 */

export type Palette = Partial<{ [key in 'primary' | 'secondary' | 'text']: PaletteColor }> | undefined;
type PaletteColor = Partial<{ zero: string; one: string }>;

export type Typography = Partial<{ [key in 'title' | 'text']: TypographyConfig }> | undefined;
type TypographyConfig = Partial<{ font: string; size: Partial<{ [key in 'zero' | 'one']: string }> }>;

export interface AppConfigurations {
  debug: boolean;
  palette?: Palette;
  typography?: Typography;
}

export type Configurations = InfraConfigurations & AppConfigurations;
