import { useModel } from '@umijs/max';
import { ThemeProvider } from 'antd-style';
import { ComponentTokenMap } from 'antd/es/theme/interface';
import React, { PropsWithChildren, useEffect, useState } from 'react';

type ContextType = {
  appearance: string;
  setAppearance: any;
  colorPrimary: string;
  setColorPrimary: any;
  borderRadius: number;
  setBorderRadius: any;
  menuToken: ComponentTokenMap['Menu'];
  setMenuToken: any;
};

export const globalContext = React.createContext<ContextType>(
  {} as ContextType,
);

export const Global: React.FC<PropsWithChildren> = ({ children }) => {
  const [appearance, setAppearance] = useState('light');
  const [colorPrimary, setColorPrimary] = useState('red');
  const [borderRadius, setBorderRadius] = useState(8);

  const [menuToken, setMenuToken] = useState<ComponentTokenMap['Menu']>();

  const { initialState, setInitialState } = useModel('@@initialState');

  useEffect(() => {
    if (appearance === 'light') {
      setInitialState({
        name: 'test',
        ...{
          token: {
            sider: {
              colorBgMenuItemActive: 'red',
            },
          },
        },
      });
    }
  }, [appearance]);

  return (
    <globalContext.Provider
      value={{
        appearance,
        setAppearance,
        colorPrimary,
        setColorPrimary,
        borderRadius,
        setBorderRadius,
        menuToken,
        setMenuToken,
      }}
    >
      <globalContext.Consumer>
        {({ appearance }) => {
          return (
            <ThemeProvider
              appearance={appearance}
              theme={{
                token: {
                  colorPrimary: colorPrimary,
                  borderRadius: borderRadius,
                },
                components: {
                  Menu: menuToken,
                },
              }}
            >
              {children}
            </ThemeProvider>
          );
        }}
      </globalContext.Consumer>
    </globalContext.Provider>
  );
};
