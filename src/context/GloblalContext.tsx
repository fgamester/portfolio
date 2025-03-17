import { createContext, useState, ReactNode, useEffect, useCallback } from "react";
import { Data, ContextProps, formatData } from "../types";

export const Context = createContext<ContextProps>({
    data: undefined,
    updateState: undefined
});

export const GlobalContext = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<Data | undefined>(undefined);
    const updateState = useCallback((newState: any, setState: (state: any) => void) => setState(() => newState), []);

    const fetchData = useCallback(async () => {
        const dataUrl = import.meta.env.VITE_DATA_URL;
        const dataExampleUrl = import.meta.env.VITE_DATA_EXAMPLE_URL;
        let newData: Data | undefined;
        try {
            const resp = await fetch(dataExampleUrl);
            newData = await resp.json();
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
        <Context.Provider value={{ data, updateState }}>
            {children}
        </Context.Provider>
    );
}