export const BasicFunctions = () => {

    const sumNumbers = (a: number, b: number) => {
        return a + b;
    }

    return (
        <>
            <h3>Funciones</h3>
            <span>El resultado de sumar: {sumNumbers(2, 10)}</span>
        </>
    )
}
