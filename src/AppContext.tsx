import { h, createContext, ComponentChildren } from 'preact';
import { useContext } from 'preact/hooks';
import { AppConfigurations } from './models';

export const ConfigContext = createContext<AppConfigurations>({} as AppConfigurations);

interface Props {
  children: ComponentChildren;
  config: AppConfigurations;
}
export const AppContext = ({ children, config }: Props) => {
  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
};

export const useAppContext = () => useContext(ConfigContext);
