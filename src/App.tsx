
import { v4 as uuidv4 } from 'uuid';
import { Header } from './components/Header';
import { Conteudo} from './components/Conteudo';
import { useState } from 'react';

import style from './App.module.css';
import './global.css';

function App() {



  const [listAtividade, setListAtividade] = useState([])
  // const [newList, setNewList] = useState([])
  const [textodoForm, setTextoDoform] = useState('')
  
  const contTexto = textodoForm.length
  
  function onTexto(event ){
    setTextoDoform(event.target.value)
    
  }
  function onButton(event){
    event.preventDefault();
    const texto = {id:uuidv4(), texto:textodoForm, completa:false}
    setListAtividade([texto, ...listAtividade]);
    setTextoDoform('')
  }

  function deletarElemento(id:number){
    const deletar = listAtividade.filter(item => item.id != id)
    setListAtividade(deletar)
  }
  const [onChecked, setOnchecked] = useState(false)
  
  function onComplete(idItem){

    const novaLista = listAtividade.map(item =>{
      if (item.id == idItem){
        return {...item, completa:true}
      }
      return item;
    });
    setListAtividade(novaLista)
    setOnchecked(!onChecked)
    console.log(idItem)
  }
    
  
  
  

  


    

  

  

 

  
  return (
    <>
      
       
        <div className={style.container}>
            <Header />
            <Conteudo 
              onTexto={onTexto} 
              onButton={onButton}
              listElementos={listAtividade}
              limparForm={textodoForm}
              contTexto={contTexto}
              deletarElemento={deletarElemento}
              tarefaCompleta={onComplete}
              onChecked={onChecked}
              
            />
            

            
        </div>
       

    
    </>
  ) 
}
export default App





