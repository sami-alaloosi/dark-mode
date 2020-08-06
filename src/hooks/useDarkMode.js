import React from "react"
import {useLocalStorage} from "./useLocalStorage"


export const useDarkMode = (key) => {

    const [darkvalue, setDarkValue]= useLocalStorage(key)


    return [darkvalue, setDarkValue]
}