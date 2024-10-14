import {createContext, Dispatch, ReactNode, SetStateAction, useMemo, useState} from "react";

export type TqueryContext = {
    total: number,
    total_pages: number,
    results:[]
}
export interface IAppContext {
    query: TqueryContext,
    setQuery: Dispatch<SetStateAction<TqueryContext>>
}

export const AppContext = createContext<Partial<IAppContext>>({})

type TAppProviderProps = {
    children: ReactNode
}

export default function AppProvider({children} : TAppProviderProps) {
    const [query, setQuery] = useState<TqueryContext>({total: 0, total_pages: 0, results: []})
    const value = useMemo(() => ({query, setQuery}),[query, setQuery])
    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
