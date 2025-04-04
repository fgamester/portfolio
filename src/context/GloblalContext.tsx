import { createContext, useState, ReactNode, useEffect, useCallback } from "react";
import { Data, ContextProps, formatData } from "../types";

const updateState = (newState: any, setState: (state: any) => void) => setState(() => newState);
const fetchUrl = import.meta.env.VITE_DATA_URL;

export const Context = createContext<ContextProps>({
    data: undefined,
    updateState,
    globalLoading: true
});

export const GlobalContext = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<Data | undefined>(undefined);
    const [globalLoading, setGlobalLoading] = useState<boolean>(true);

    const fetchData = useCallback(async () => {
        try {
            const resp = await fetch(fetchUrl);
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