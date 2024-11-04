import {
    createContext,
    Dispatch,
    FC,
    PropsWithChildren,
    SetStateAction,
    useState,
  } from "react";
  
  type ContextProps = {
    isOpenUsersDrawer: boolean;
    setOpenUsersDrawer: Dispatch<SetStateAction<boolean>>;
  };
  
  export const DrawersContext = createContext<ContextProps>({
    isOpenUsersDrawer: false,
    setOpenUsersDrawer: () => {},
  });
  
  export const DrawersContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isOpenUsersDrawer, setOpenUsersDrawer] = useState(false);
  
    return (
      <DrawersContext.Provider
        value={{
          isOpenUsersDrawer,
          setOpenUsersDrawer,
        }}
      >
        {children}
      </DrawersContext.Provider>
    );
  };
  