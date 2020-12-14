import React, { createContext, useContext } from 'react'
import { rootStoreType, StoreContextProps } from '../types/types'
import { MainPageStore, UserPageStore } from './index'
import { RepositoriesStore } from './RepositoriesStore'

const rootStore: rootStoreType = {
    mainPage: new MainPageStore(),
    userPage: UserPageStore(),
    repositories: new RepositoriesStore()
}

const storeContext = createContext<rootStoreType | null>(null)

export const StoreContext: React.FC<StoreContextProps> = ({children}) => {
    return (
        <storeContext.Provider value={rootStore}>
            {children}
        </storeContext.Provider>
    )
}

export const useStore = () => {
    const store = useContext(storeContext)
    if (store === null) {
        throw new Error('You call useContext, but component has not context. Try use context.Provider component')
    }
    return store
}
