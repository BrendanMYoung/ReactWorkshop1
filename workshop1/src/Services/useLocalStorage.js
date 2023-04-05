import {useState} from 'react';

export function useLocalStorage(key, initialValue) {

    const [storedValue, setStoredValue] = useState(() => {
        try {
            let item = window.localStorage.getItem(key)
            if (item === null) {
                window.localStorage.setItem(key, JSON.stringify(initialValue))
                item = initialValue
            }
            return JSON.parse(item)
        } catch (error) {
            console.log(error)
            return initialValue
        }
    })
    const setValue = (value) => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.log(error)
        }
    }
    return [storedValue, setValue]
}
