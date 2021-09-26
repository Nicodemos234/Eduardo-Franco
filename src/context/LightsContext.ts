import { createContext, useContext } from 'react';

export enum Lights {
  Dark = 'Dark',
  Light = 'Light',
}

export type LightsContextType = {
  light: Lights;
  setLight: (light: Lights) => void;
}

export const LightsContext = createContext<LightsContextType>({ light: Lights.Dark, setLight: light => console.warn('no light provider') });
export const useLights = () => useContext(LightsContext);