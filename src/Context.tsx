import React, { createContext, useReducer, ReactNode } from "react";

// Định nghĩa kiểu cho state
interface ThemeState {
  darkMode: boolean;
}

// Định nghĩa kiểu cho action
interface ThemeAction {
  type: "toggle";
}

// Định nghĩa kiểu cho context
interface ThemeContextType {
  state: ThemeState;
  dispatch: React.Dispatch<ThemeAction>;
}

// Giá trị mặc định của context
const initialState: ThemeState = { darkMode: false };

// Hàm reducer
const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

// Tạo context
export const themeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// Định nghĩa kiểu cho props của ThemeProvider
interface ThemeProviderProps {
  children: ReactNode;
}

// ThemeProvider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {children}
    </themeContext.Provider>
  );
};
