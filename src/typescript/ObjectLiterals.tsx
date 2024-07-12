interface Person{
    fullname: string,
    age: number,
    address: {
        country: string,
        houseNo: number
    }
    isAlive?: boolean
}

export const ObjectLiterals = () => {
    
    const person: Person = {
        fullname: 'Jose Verdezoto',
        age: 24,
        address: {
            country: 'Ecuador',
            houseNo: 38
        }
    }
  
    return (
    <>
        <h3>Objeto Literal</h3>
        <pre>
        { JSON.stringify(person, null, 2)}
        </pre>
    </>
  )
}
