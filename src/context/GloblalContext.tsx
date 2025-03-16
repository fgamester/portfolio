import { createContext, useState, ReactNode, useEffect, useCallback } from "react";
import jsondata from '../../test_data/data_example.json';
import { Data, ContextProps, formatData } from "../types";

export const Context = createContext<ContextProps>({
    data: undefined,
    updateState: undefined
});

export const GlobalContext = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<Data | undefined>(undefined);
    const updateState = useCallback((newState: any, setState: (state: any) => void) => setState(() => newState), []);


    useEffect(() => {
        updateState(formatData(jsondata),setData);
    }, [])

    return (
        <Context.Provider value={{ data, updateState }}>
            {children}
        </Context.Provider>
    )
}