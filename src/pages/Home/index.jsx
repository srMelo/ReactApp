import React,{ useState } from 'react';
import './styles.css'
import Card from '../../components/card' 



function Home(){
    const [alterName, setAlterName]= useState();
    const [estudante, setEstudante]= useState([])

    function addEstudante(){
        const novoEstudante={
            nome: alterName,
            time: new Date().toLocaleTimeString('pt-br',{
                hour:'2-digit',
                minute: '2-digit',
                second:'2-digit'
            })
        }
      setEstudante(prevState =>[ ...prevState ,novoEstudante])
    }

       
    return(
        <div className='container'>

            <h1>Lista de Presença</h1>
            <input
             type="text"  
             placeholder="Nome..."
             onChange={e =>setAlterName(e.target.value) }
             />

            <button onClick={addEstudante}>
                Adicionar
            </button>
            {
               estudante.map(estudante=><Card name={estudante.nome} time={estudante.time}/>) 
            }
        </div> 
    )
}

export default Home