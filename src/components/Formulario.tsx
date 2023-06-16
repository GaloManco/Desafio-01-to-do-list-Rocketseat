import { PlusCircle } from 'phosphor-react';

import style from './Formulario.module.css';


export function Formulario(){
    return (
        <div className={style.containerForm}>
            <input 
                type="text" 
                placeholder='Descrição da tarefa...' 
                className={style.formulario}
            />
            <button type='submit'>
                <strong>Criar</strong>
                <PlusCircle  size={15.97}/>
            </button>
           
        </div>
    )
}