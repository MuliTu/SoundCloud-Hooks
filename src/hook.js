import { useContext } from 'react'
import Context from './state/context'

export const useAppContext = () => {
    return useContext(Context)
};