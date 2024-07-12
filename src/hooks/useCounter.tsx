import { useState } from "react"

interface Option {
    initialValue?: number
}

export const useCounter = ( {initialValue = 0}: Option) => {

    const [count, setCount] = useState<number>(initialValue)

    const increaseBy = (value: number) => {
        const newValue = count + value;
        if( newValue < 0 ) return;
        setCount(count + value)
    }

    return {
        //Propiedades
        count,

        //Metodos
        increaseBy
    }
}
