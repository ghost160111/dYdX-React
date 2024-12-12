import { Context, createContext } from "react";

export const HeaderRefContext: Context<HeaderRefProps> = createContext<HeaderRefProps>(null);
export const FancyboxContext: Context<FancyboxProps> = createContext<FancyboxProps>(null);
export const MainRefContext: Context<MainRefProps> = createContext<MainRefProps>(null);
