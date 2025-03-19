import { createContext, useState, ReactNode, useEffect, useCallback } from "react";
import { Data, ContextProps, formatData } from "../types";

export const Context = createContext<ContextProps>({
    data: undefined,
    updateState: undefined,
    globalLoading: true
});

export const GlobalContext = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<Data | undefined>(undefined);
    const [globalLoading, setGlobalLoading] = useState<boolean>(true);
    const updateState = useCallback((newState: any, setState: (state: any) => void) => setState(() => newState), []);

    const fetchData = useCallback(async () => {
        const fetchUrl = {
            data: import.meta.env.VITE_DATA_URL,
            example: import.meta.env.VITE_DATA_EXAMPLE_URL
        };
        try {
            const resp = await fetch(fetchUrl.example);
            const newData = await resp.json();
            updateState(formatData(newData), setData);
        } catch (error) {
            console.error(error);
            updateState(undefined, setData);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Context.Provider value={{ data, updateState, globalLoading }}>
            {children}
        </Context.Provider>
    );
}