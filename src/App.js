import React, { useEffect, useState } from 'react'


const CardNumber = (props) => (
    <div className="card shadow" style={{ width: '40px', height: '60px'}}>
        <div className="card-body d-flex justify-content-center align-items-center">
            {props.num}
        </div>
    </div>
)


function App() {

    const [counter, setCounter] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        console.log('Componente Cargado')
       
        let id = myCounter();

        return () => {
            console.log('Componente Eliminado')
            clearInterval(id);
        }

    }, [])

    const myCounter = () => {
        let id = setInterval(() => {
            if(counter === 10){
                setCounter(0);
            }else{
                setCounter(counter => counter+1);
            }
        }, 1000);
        setIntervalId(id);
        return id;
    }


    return (
        <>
        <div className="d-flex w-25 justify-content-around mx-auto">
            <CardNumber num={Math.floor(counter / 1000) % 10} />
            <CardNumber num={Math.floor(counter / 100) % 10} />
            <CardNumber num={Math.floor(counter / 10) % 10} />
            <CardNumber num={Math.floor(counter / 1) % 10} />
        </div>
        <button className="btn btn-primary" onClick={() => {
            clearInterval(intervalId);
        }}>
            Pausar
        </button>

        <button className="btn btn-warning" onClick={() => {
            myCounter();
        }}>
            Iniciar
        </button>
        <button className="btn btn-danger" onClick={() => {
            setCounter(0);
            clearInterval(intervalId);
            myCounter();
        }}>
            Reiniciar
        </button>
        </>
    )
}

export default App