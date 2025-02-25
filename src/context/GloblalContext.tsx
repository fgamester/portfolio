import { createContext, useState, ReactNode, useEffect } from "react";
import jsondata from '../../test_data/data_example.json';
import { Data, ContextProps } from "../types";

export const Context = createContext<ContextProps>({ data: undefined });

export const GlobalContext = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<Data | undefined>(undefined);

    useEffect(() => {
        setData(jsondata)
    }, [])

    return (
        <Context.Provider value={{ data }}>
            {children}
        </Context.Provider>
    )
}