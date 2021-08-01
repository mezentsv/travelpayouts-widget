import { AppConfigurations } from 'models';
import { getPalette } from './getPalette';
import { getTypography } from './getTypography';

const getStylesFromConfig = (config: AppConfigurations) => {
  return { ...getPalette(config.palette), ...getTypography(config.typography) };
};

export default getStylesFromConfig;
