import { PlusCircle } from 'phosphor-react';

import style from './Formulario.module.css';


export function Formulario({onTexto, onButton, limparFormularo, contTexto }){


    const bockButton = contTexto > 0 ? false: true;
    

    return (
        <div className={style.containerForm}>
            <form onSubmit={onButton} >
                <input 
                    type="text" 
                    placeholder='Descrição da tarefa...' 
                    className={style.formulario}
                    value={limparFormularo}

                    onChange={onTexto}
                    
                />
                <button type='submit'  disabled={bockButton}>
                    <strong>Criar</strong>
                    <PlusCircle  size={15.97}/>
                </button>

            </form>
           
        </div>
    )
}