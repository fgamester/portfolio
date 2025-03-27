import { createContext, useState, ReactNode, useEffect, useCallback } from "react";
import { Data, ContextProps, formatData } from "../types";

const updateState = (newState: any, setState: (state: any) => void) => setState(() => newState);

export const Context = createContext<ContextProps>({
    data: undefined,
    updateState,
    globalLoading: true
});

const fetchUrl = {
    data: import.meta.env.VITE_DATA_URL,
    example: import.meta.env.VITE_DATA_EXAMPLE_URL
};

export const GlobalContext = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<Data | undefined>(undefined);
    const [globalLoading, setGlobalLoading] = useState<boolean>(true);

    const fetchData = useCallback(async () => {
        try {
            const resp = await fetch(fetchUrl.example);
            const newData = await resp.json();
            updateState(formatData(newData), setData);
        } catch (error) {
            console.error(error);
            updateState(undefined, setData);
        }
        updateState(false, setGlobalLoading);
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