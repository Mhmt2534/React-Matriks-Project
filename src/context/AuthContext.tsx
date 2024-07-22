import React, { createContext, ReactNode, useContext, useState } from "react";

interface AuthContextType {
  isLogin: boolean | undefined;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  userName: string | undefined;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");

  return (
    <AuthContext.Provider
      value={{ isLogin, setIsLogin, userName, setUserName }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, AuthContext };
